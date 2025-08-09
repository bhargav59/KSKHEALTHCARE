import React, { useEffect } from 'react';
import { initGA, setupScrollTracking, setupTimeOnPageTracking, trackSessionStart, trackPageLoadTime } from '../utils/analytics';

const GoogleAnalyticsProvider = ({ children, measurementId = 'G-D2TM67YPS5' }) => {
    useEffect(() => {
        // Initialize Google Analytics
        initGA(measurementId);

        // Track session start
        trackSessionStart();

        // Set up automatic tracking
        const scrollCleanup = setupScrollTracking();
        const timeCleanup = setupTimeOnPageTracking();

        // Track page load performance
        if (window.performance && window.performance.timing) {
            const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
            if (loadTime > 0) {
                trackPageLoadTime(loadTime, window.location.pathname);
            }
        }

        // Error tracking
        const errorHandler = (event) => {
            if (window.gtag) {
                window.gtag('event', 'javascript_error', {
                    event_category: 'Error',
                    event_label: event.error?.message || 'Unknown error',
                    error_message: event.error?.message,
                    error_stack: event.error?.stack?.substring(0, 200),
                    page_path: window.location.pathname
                });
            }
        };

        window.addEventListener('error', errorHandler);
        window.addEventListener('unhandledrejection', (event) => {
            errorHandler({ error: { message: event.reason } });
        });

        // Cleanup function
        return () => {
            scrollCleanup();
            timeCleanup();
            window.removeEventListener('error', errorHandler);
        };
    }, [measurementId]);

    return <>{children}</>;
};

export default GoogleAnalyticsProvider;
