import { useEffect, useRef, useCallback } from 'react';
import { 
  trackCTAClick, 
  trackPhoneCallClick, 
  trackBookingStarted,
  trackTreatmentInterest,
  trackFormStart,
  trackFormFieldInteraction,
  trackFormAbandonment,
  trackNavigationClick
} from '../utils/analytics';

// Hook for tracking CTA button clicks
export const useCTATracking = () => {
  const trackCTA = useCallback((buttonText, location, targetAction) => {
    trackCTAClick(buttonText, location, targetAction);
  }, []);

  return { trackCTA };
};

// Hook for tracking phone number clicks
export const usePhoneTracking = () => {
  const trackPhone = useCallback((source, treatmentContext = '') => {
    trackPhoneCallClick(source, treatmentContext);
  }, []);

  return { trackPhone };
};

// Hook for form tracking with abandonment detection
export const useFormTracking = (formName) => {
  const formStartedRef = useRef(false);
  const fieldsInteractedRef = useRef(new Set());
  const totalFieldsRef = useRef(0);

  const trackFormStarted = useCallback(() => {
    if (!formStartedRef.current) {
      trackFormStart(formName);
      formStartedRef.current = true;
    }
  }, [formName]);

  const trackFieldInteraction = useCallback((fieldName) => {
    fieldsInteractedRef.current.add(fieldName);
    trackFormFieldInteraction(formName, fieldName);
  }, [formName]);

  const trackAbandonment = useCallback(() => {
    if (formStartedRef.current && fieldsInteractedRef.current.size > 0) {
      const completionPercentage = (fieldsInteractedRef.current.size / totalFieldsRef.current) * 100;
      if (completionPercentage < 100) {
        trackFormAbandonment(formName, Math.round(completionPercentage));
      }
    }
  }, [formName]);

  const setTotalFields = useCallback((count) => {
    totalFieldsRef.current = count;
  }, []);

  // Track abandonment on component unmount
  useEffect(() => {
    return () => {
      trackAbandonment();
    };
  }, [trackAbandonment]);

  return {
    trackFormStarted,
    trackFieldInteraction,
    trackAbandonment,
    setTotalFields
  };
};

// Hook for tracking element visibility
export const useVisibilityTracking = (elementRef, onVisible, threshold = 0.5) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, onVisible, threshold]);
};

// Hook for tracking treatment interest
export const useTreatmentTracking = () => {
  const trackInterest = useCallback((treatmentName, actionType) => {
    trackTreatmentInterest(treatmentName, actionType);
  }, []);

  const trackBookingIntent = useCallback((treatmentName) => {
    trackBookingStarted(treatmentName, 'treatment_page');
  }, []);

  return { trackInterest, trackBookingIntent };
};

// Hook for tracking video interactions
export const useVideoTracking = () => {
  const trackVideoEvent = useCallback((eventType, videoTitle, additionalData = {}) => {
    if (window.gtag) {
      window.gtag('event', `video_${eventType}`, {
        event_category: 'Video',
        event_label: videoTitle,
        video_title: videoTitle,
        ...additionalData
      });
    }
  }, []);

  const trackPlay = useCallback((videoTitle, source) => {
    trackVideoEvent('play', videoTitle, { video_source: source });
  }, [trackVideoEvent]);

  const trackPause = useCallback((videoTitle, currentTime) => {
    trackVideoEvent('pause', videoTitle, { video_current_time: currentTime });
  }, [trackVideoEvent]);

  const trackComplete = useCallback((videoTitle, duration) => {
    trackVideoEvent('complete', videoTitle, { video_duration: duration });
  }, [trackVideoEvent]);

  return { trackPlay, trackPause, trackComplete };
};

// Hook for tracking navigation
export const useNavigationTracking = () => {
  const trackNavigation = useCallback((linkText, destination) => {
    trackNavigationClick(linkText, destination);
  }, []);

  return { trackNavigation };
};

// Hook for A/B testing tracking
export const useABTestTracking = () => {
  const trackConversion = useCallback((testName, variant, conversionType) => {
    if (window.gtag) {
      window.gtag('event', 'ab_test_conversion', {
        event_category: 'AB_Testing',
        event_label: `${testName} - ${variant}`,
        test_name: testName,
        variant: variant,
        conversion_type: conversionType
      });
    }
  }, []);

  const trackExposure = useCallback((testName, variant) => {
    if (window.gtag) {
      window.gtag('event', 'ab_test_exposure', {
        event_category: 'AB_Testing',
        event_label: `${testName} - ${variant}`,
        test_name: testName,
        variant: variant
      });
    }
  }, []);

  return { trackConversion, trackExposure };
};

// Hook for performance tracking
export const usePerformanceTracking = () => {
  const trackCustomTiming = useCallback((category, variable, value, label) => {
    if (window.gtag) {
      window.gtag('event', 'timing_complete', {
        event_category: category,
        event_label: label,
        value: value,
        custom_parameter_1: variable
      });
    }
  }, []);

  const trackLoadTime = useCallback((startTime, endTime, label) => {
    const loadTime = endTime - startTime;
    trackCustomTiming('Performance', 'load_time', loadTime, label);
  }, [trackCustomTiming]);

  return { trackCustomTiming, trackLoadTime };
};
