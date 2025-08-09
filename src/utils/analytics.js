// Google Analytics and Conversion Tracking Setup
// This file contains all tracking functions and event definitions

// Initialize Google Analytics 4
export const initGA = (measurementId) => {
  // Load Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', measurementId, {
    // Enhanced e-commerce tracking
    send_page_view: true,
    // Custom parameters for healthcare tracking
    custom_map: {
      'custom_parameter_1': 'treatment_type',
      'custom_parameter_2': 'practitioner_name',
      'custom_parameter_3': 'appointment_source'
    }
  });

  // Set up enhanced conversion tracking
  gtag('config', measurementId, {
    enhanced_conversions: true
  });

  console.log('Google Analytics initialized with ID:', measurementId);
};

// Generic event tracking function
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'General',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
    
    // Debug logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('GA Event Tracked:', eventName, parameters);
    }
  }
};

// Page view tracking
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

// Conversion Events for Healthcare Business

// 1. BOOKING CONVERSIONS
export const trackBookingStarted = (treatmentType, source) => {
  trackEvent('booking_started', {
    category: 'Conversion',
    label: treatmentType,
    treatment_type: treatmentType,
    source: source,
    currency: 'INR'
  });
};

export const trackBookingCompleted = (treatmentType, practitioner, appointmentValue, source) => {
  trackEvent('booking_completed', {
    category: 'Conversion',
    label: treatmentType,
    value: appointmentValue,
    currency: 'INR',
    treatment_type: treatmentType,
    practitioner_name: practitioner,
    appointment_source: source
  });
  
  // Enhanced e-commerce purchase event
  window.gtag('event', 'purchase', {
    transaction_id: `booking_${Date.now()}`,
    value: appointmentValue,
    currency: 'INR',
    items: [{
      item_id: treatmentType.toLowerCase().replace(/\s+/g, '_'),
      item_name: treatmentType,
      category: 'Healthcare Service',
      practitioner: practitioner,
      price: appointmentValue,
      quantity: 1
    }]
  });
};

// 2. CONTACT FORM SUBMISSIONS
export const trackContactFormSubmission = (formType, inquiryType) => {
  trackEvent('contact_form_submission', {
    category: 'Lead_Generation',
    label: formType,
    form_type: formType,
    inquiry_type: inquiryType
  });
};

export const trackQuickBookingSubmission = (treatmentType) => {
  trackEvent('quick_booking_submission', {
    category: 'Lead_Generation',
    label: treatmentType,
    treatment_type: treatmentType,
    form_type: 'Quick Booking'
  });
};

// 3. PHONE CALL TRACKING
export const trackPhoneCallClick = (source, treatmentContext = '') => {
  trackEvent('phone_call_initiated', {
    category: 'Engagement',
    label: source,
    source: source,
    treatment_context: treatmentContext,
    contact_method: 'phone'
  });
};

export const trackWhatsAppClick = (source, treatmentContext = '') => {
  trackEvent('whatsapp_initiated', {
    category: 'Engagement',
    label: source,
    source: source,
    treatment_context: treatmentContext,
    contact_method: 'whatsapp'
  });
};

// 4. CTA BUTTON TRACKING
export const trackCTAClick = (buttonText, buttonLocation, targetAction) => {
  trackEvent('cta_button_clicked', {
    category: 'Engagement',
    label: buttonText,
    button_text: buttonText,
    button_location: buttonLocation,
    target_action: targetAction
  });
};

export const trackHeroBookingClick = () => {
  trackCTAClick('Book Consultation', 'Hero Section', 'booking_form');
};

export const trackStickyBookingClick = () => {
  trackCTAClick('Book Now', 'Sticky Button', 'booking_form');
};

export const trackTreatmentBookingClick = (treatmentName) => {
  trackCTAClick('Book This Treatment', `Treatment: ${treatmentName}`, 'booking_form');
};

// 5. ENGAGEMENT TRACKING
export const trackVideoPlay = (videoTitle, videoSource) => {
  trackEvent('video_play', {
    category: 'Engagement',
    label: videoTitle,
    video_title: videoTitle,
    video_source: videoSource
  });
};

export const trackTestimonialView = (testimonialId, viewDuration) => {
  trackEvent('testimonial_viewed', {
    category: 'Engagement',
    label: testimonialId,
    testimonial_id: testimonialId,
    view_duration: viewDuration
  });
};

export const trackScrollDepth = (percentage, pagePath) => {
  trackEvent('scroll_depth', {
    category: 'Engagement',
    label: `${percentage}%`,
    value: percentage,
    page_path: pagePath
  });
};

// 6. TREATMENT INTEREST TRACKING
export const trackTreatmentInterest = (treatmentName, actionType) => {
  trackEvent('treatment_interest', {
    category: 'Treatment_Engagement',
    label: treatmentName,
    treatment_name: treatmentName,
    action_type: actionType // 'view', 'learn_more', 'book_now'
  });
};

export const trackDoctorProfile = (doctorName, actionType) => {
  trackEvent('doctor_profile_interaction', {
    category: 'Practitioner_Engagement',
    label: doctorName,
    doctor_name: doctorName,
    action_type: actionType
  });
};

// 7. SEARCH AND NAVIGATION
export const trackSiteSearch = (searchTerm, resultsCount) => {
  trackEvent('site_search', {
    category: 'Search',
    label: searchTerm,
    search_term: searchTerm,
    results_count: resultsCount
  });
};

export const trackNavigationClick = (linkText, destination) => {
  trackEvent('navigation_click', {
    category: 'Navigation',
    label: linkText,
    link_text: linkText,
    destination: destination
  });
};

// 8. FORM ABANDONMENT TRACKING
export const trackFormStart = (formName) => {
  trackEvent('form_started', {
    category: 'Form_Interaction',
    label: formName,
    form_name: formName
  });
};

export const trackFormFieldInteraction = (formName, fieldName) => {
  trackEvent('form_field_interaction', {
    category: 'Form_Interaction',
    label: `${formName} - ${fieldName}`,
    form_name: formName,
    field_name: fieldName
  });
};

export const trackFormAbandonment = (formName, completionPercentage) => {
  trackEvent('form_abandoned', {
    category: 'Form_Interaction',
    label: formName,
    form_name: formName,
    completion_percentage: completionPercentage
  });
};

// 9. SYMPTOM CHECKER TRACKING
export const trackSymptomCheckerStart = () => {
  trackEvent('symptom_checker_started', {
    category: 'Tool_Usage',
    label: 'Symptom Checker',
    tool_name: 'symptom_checker'
  });
};

export const trackSymptomCheckerCompletion = (recommendedTreatment, symptoms) => {
  trackEvent('symptom_checker_completed', {
    category: 'Tool_Usage',
    label: recommendedTreatment,
    recommended_treatment: recommendedTreatment,
    symptoms_selected: symptoms.join(',')
  });
};

// 10. CUSTOM CONVERSIONS FOR A/B TESTING
export const trackABTestConversion = (testName, variant, conversionType) => {
  trackEvent('ab_test_conversion', {
    category: 'AB_Testing',
    label: `${testName} - ${variant}`,
    test_name: testName,
    variant: variant,
    conversion_type: conversionType
  });
};

// 11. ERROR TRACKING
export const trackError = (errorType, errorMessage, pagePath) => {
  trackEvent('javascript_error', {
    category: 'Error',
    label: errorType,
    error_type: errorType,
    error_message: errorMessage.substring(0, 100), // Limit length
    page_path: pagePath
  });
};

// 12. PERFORMANCE TRACKING
export const trackPageLoadTime = (loadTime, pagePath) => {
  trackEvent('page_load_time', {
    category: 'Performance',
    label: pagePath,
    value: Math.round(loadTime),
    page_path: pagePath,
    load_time_ms: Math.round(loadTime)
  });
};

// Scroll depth tracking utility
export const setupScrollTracking = () => {
  let scrollDepthTracked = {
    25: false,
    50: false,
    75: false,
    90: false
  };

  const trackScrollPercentage = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    Object.keys(scrollDepthTracked).forEach(depth => {
      if (scrollPercent >= parseInt(depth) && !scrollDepthTracked[depth]) {
        scrollDepthTracked[depth] = true;
        trackScrollDepth(parseInt(depth), window.location.pathname);
      }
    });
  };

  window.addEventListener('scroll', trackScrollPercentage, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', trackScrollPercentage);
  };
};

// Session tracking
export const trackSessionStart = () => {
  trackEvent('session_start', {
    category: 'Session',
    label: 'New Session',
    page_path: window.location.pathname,
    referrer: document.referrer || 'direct'
  });
};

// Utility to track time on page
export const setupTimeOnPageTracking = () => {
  const startTime = Date.now();
  
  const trackTimeOnPage = () => {
    const timeOnPage = Date.now() - startTime;
    trackEvent('time_on_page', {
      category: 'Engagement',
      label: window.location.pathname,
      value: Math.round(timeOnPage / 1000), // in seconds
      time_seconds: Math.round(timeOnPage / 1000)
    });
  };

  // Track when user leaves page
  window.addEventListener('beforeunload', trackTimeOnPage);
  
  return () => {
    window.removeEventListener('beforeunload', trackTimeOnPage);
  };
};

// Healthcare-specific utility functions
export const getAppointmentValue = (treatmentType) => {
  // Estimated consultation values for conversion tracking
  const treatmentValues = {
    'Acupuncture': 1500,
    'Ayurveda': 2000,
    'Speech Therapy': 1800,
    'Panchakarma': 5000,
    'Cupping Therapy': 1200,
    'Marma Therapy': 1300,
    'Reflexology': 1000,
    'Consultation': 800
  };
  
  return treatmentValues[treatmentType] || 1000;
};

export default {
  initGA,
  trackEvent,
  trackPageView,
  trackBookingStarted,
  trackBookingCompleted,
  trackContactFormSubmission,
  trackPhoneCallClick,
  trackCTAClick,
  trackVideoPlay,
  trackTreatmentInterest,
  setupScrollTracking,
  setupTimeOnPageTracking,
  trackError,
  getAppointmentValue
};
