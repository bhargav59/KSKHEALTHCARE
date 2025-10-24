import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { usePhoneTracking } from '../hooks/useAnalytics';

const FloatingContactButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { trackPhone } = usePhoneTracking();

  const phoneNumber = "+918884333439";
  const whatsappNumber = "919900546089";

  useEffect(() => {
    // Show buttons after scrolling 200px
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneClick = () => {
    trackPhone('floating_button', '');
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello KSK Healthcare, I would like to book an appointment.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="hidden md:block fixed right-6 bottom-6 z-50">
        <div className="flex flex-col space-y-4">
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="group bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Chat on WhatsApp
            </span>
          </button>

          {/* Phone Button */}
          <button
            onClick={handlePhoneClick}
            className="group bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Call KSK Healthcare"
            title="Call Now"
          >
            <Phone className="h-6 w-6" />
            <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Call: {phoneNumber}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Floating Button */}
      <div className="md:hidden fixed right-4 bottom-20 z-50">
        {isExpanded && (
          <div className="absolute bottom-16 right-0 flex flex-col space-y-3 mb-2 animate-fadeIn">
            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </button>

            {/* Phone Button */}
            <button
              onClick={handlePhoneClick}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
              aria-label="Call KSK Healthcare"
            >
              <Phone className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Main Toggle Button */}
        <button
          onClick={toggleExpanded}
          className={`${
            isExpanded ? 'bg-red-500 hover:bg-red-600' : 'bg-green-600 hover:bg-green-700'
          } text-white rounded-full p-4 shadow-lg transition-all duration-300 transform ${
            isExpanded ? 'rotate-90' : ''
          }`}
          aria-label={isExpanded ? 'Close contact menu' : 'Open contact menu'}
        >
          {isExpanded ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>

        {/* Pulse Animation */}
        {!isExpanded && (
          <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-75"></span>
        )}
      </div>

      {/* Click-to-Call Banner (appears on first scroll) */}
      {isVisible && !isExpanded && (
        <div className="hidden sm:block md:hidden fixed bottom-20 left-0 right-0 z-40 px-4 animate-slideUp">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg shadow-xl flex items-center justify-between max-w-md mx-auto">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 animate-pulse" />
              <div>
                <p className="text-sm font-semibold">Need Immediate Help?</p>
                <p className="text-xs opacity-90">Call us now for quick consultation</p>
              </div>
            </div>
            <button
              onClick={handlePhoneClick}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContactButtons;
