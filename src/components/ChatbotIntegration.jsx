import React, { useEffect } from 'react';

const InteraktWidget = ({
    appId = "your-interakt-app-id",
    buttonColor = "#2563eb",
    position = "bottom-right"
}) => {
    useEffect(() => {
        // Interakt widget script
        window.interaktSettings = {
            app_id: appId,
            button_color: buttonColor,
            position: position,
            greeting_message: "Hello! Welcome to KSK Healthcare. How can I help you today?",
            custom_launcher: false,
            auto_show_launcher: true,
            hide_default_launcher: false
        };

        // Load Interakt script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://widget.interakt.ai/widget/init.js';

        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);

        // Cleanup function
        return () => {
            // Remove script and widget elements when component unmounts
            const existingScript = document.querySelector('script[src="https://widget.interakt.ai/widget/init.js"]');
            if (existingScript) {
                existingScript.remove();
            }

            // Remove widget container
            const widgetContainer = document.getElementById('interakt-widget-container');
            if (widgetContainer) {
                widgetContainer.remove();
            }
        };
    }, [appId, buttonColor, position]);

    // Custom trigger function for booking appointments
    const triggerBookingFlow = () => {
        if (window.Interakt) {
            window.Interakt.startConversation({
                message: "I would like to book an appointment at KSK Healthcare",
                user_data: {
                    source: "website_booking_button"
                }
            });
        }
    };

    // Expose trigger function globally for other components to use
    useEffect(() => {
        window.triggerInteraktBooking = triggerBookingFlow;
    }, []);

    return null; // This component doesn't render anything visible
};

const GallaboxWidget = ({
    widgetId = "your-gallabox-widget-id",
    color = "#2563eb"
}) => {
    useEffect(() => {
        // Gallabox widget configuration
        window.gallaboxSettings = {
            widget_id: widgetId,
            widget_color: color,
            greeting_message: "Welcome to KSK Healthcare! 🌿 Book your holistic healing appointment now.",
            position: "bottom-left",
            auto_show: true,
            collect_visitor_data: true
        };

        // Load Gallabox script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = `https://widget.gallabox.com/widget/${widgetId}.js`;

        document.head.appendChild(script);

        // Custom event handlers
        script.onload = () => {
            if (window.GallaboxWidget) {
                // Set up custom events
                window.GallaboxWidget.onOpen = () => {
                    console.log('Gallabox widget opened');
                };

                window.GallaboxWidget.onClose = () => {
                    console.log('Gallabox widget closed');
                };
            }
        };

        return () => {
            // Cleanup
            const existingScript = document.querySelector(`script[src="https://widget.gallabox.com/widget/${widgetId}.js"]`);
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, [widgetId, color]);

    return null;
};

const QuickReplyWidget = ({
    phoneNumber = "919900546089",
    position = "bottom-right",
    color = "#25D366"
}) => {
    useEffect(() => {
        // QuickReply widget configuration
        window.quickReplySettings = {
            phone: phoneNumber,
            position: position,
            color: color,
            greeting: "Hello! Welcome to KSK Healthcare. How can we help you today?",
            auto_open: false,
            header_title: "KSK Healthcare",
            header_subtitle: "Cure and Care with a Difference"
        };

        // Load QuickReply script (hypothetical - replace with actual QuickReply script)
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://widget.quickreply.ai/widget.js';

        document.head.appendChild(script);

        return () => {
            const existingScript = document.querySelector('script[src="https://widget.quickreply.ai/widget.js"]');
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, [phoneNumber, position, color]);

    return null;
};

// Generic chatbot integration component
const ChatbotIntegration = ({
    platform = "custom", // "interakt", "gallabox", "quickreply", "custom"
    config = {}
}) => {
    const renderWidget = () => {
        switch (platform) {
            case 'interakt':
                return <InteraktWidget {...config} />;
            case 'gallabox':
                return <GallaboxWidget {...config} />;
            case 'quickreply':
                return <QuickReplyWidget {...config} />;
            case 'custom':
            default:
                // Return our custom ChatBot component
                return null; // Will be handled by the main App component
        }
    };

    return renderWidget();
};

export { InteraktWidget, GallaboxWidget, QuickReplyWidget, ChatbotIntegration };
export default ChatbotIntegration;
