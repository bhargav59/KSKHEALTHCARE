import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const MobileStickyButtons = () => {
  const phoneNumber = "+918884333439";
  const whatsappNumber = "919900546089";

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const message = "Hello KSK Healthcare, I would like to book an appointment.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t md:hidden">
      <div className="flex">
        {/* Call Button */}
        <button
          onClick={handlePhoneCall}
          className="flex-1 bg-blue-600 text-white py-4 px-4 flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
          aria-label="Call KSK Healthcare"
        >
          <Phone className="h-5 w-5" />
          <span className="font-semibold">Call Now</span>
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="flex-1 bg-green-600 text-white py-4 px-4 flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors"
          aria-label="WhatsApp KSK Healthcare"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-semibold">Book Appointment</span>
        </button>
      </div>
    </div>
  );
};

export default MobileStickyButtons;
