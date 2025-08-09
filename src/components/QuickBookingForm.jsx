import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Phone, MessageCircle, Send } from 'lucide-react';
import { useFormTracking } from '../hooks/useAnalytics';
import { trackBookingStarted, trackBookingCompleted, getAppointmentValue } from '../utils/analytics';

const QuickBookingForm = ({ className = "", source = "unknown" }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        preferredTime: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form tracking
    const {
        trackFormStarted,
        trackFieldInteraction,
        setTotalFields
    } = useFormTracking('quick_booking_form');

    // Set total number of fields for completion tracking
    useEffect(() => {
        setTotalFields(4); // name, phone, service, preferredTime
    }, [setTotalFields]);

    const services = [
        'Acupuncture Therapies',
        'Acupressure & Reflexology',
        'Ayurvedic & Panchakarma',
        'Neuro Rehabilitation',
        'Hearing Care Services',
        'Nutrition & Wellness',
        'General Consultation'
    ];

    const timeSlots = [
        '9:00 AM - 11:00 AM',
        '11:00 AM - 1:00 PM',
        '2:00 PM - 4:00 PM',
        '4:00 PM - 6:00 PM',
        '6:00 PM - 7:00 PM'
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Track booking started
        trackBookingStarted(formData.service || 'General Consultation', source);

        // Simulate form submission delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Here you would typically send the data to your backend
        console.log('Booking data:', formData);

        // Track successful booking completion
        const appointmentValue = getAppointmentValue(formData.service || 'General Consultation');
        trackBookingCompleted(
            formData.service || 'General Consultation',
            'Auto-assigned', // Practitioner will be assigned
            appointmentValue,
            source
        );

        // Redirect to confirmation page with tracking data
        navigate('/booking-confirmation', {
            state: {
                bookingData: formData,
                source: source,
                value: appointmentValue
            }
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Track field interaction
        trackFieldInteraction(name);

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFocus = (fieldName) => {
        // Track form start on first field interaction
        trackFormStarted();
        trackFieldInteraction(fieldName);
    };

    const isFormValid = formData.name && formData.phone && formData.service;

    return (
        <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Book Your Appointment</h3>
                <p className="text-gray-600 text-sm">Get a quick consultation slot</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        <User className="inline h-4 w-4 mr-1" />
                        Full Name *
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        placeholder="Enter your full name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                    />
                </div>

                {/* Phone Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        <Phone className="inline h-4 w-4 mr-1" />
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                    />
                </div>

                {/* Service Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        <MessageCircle className="inline h-4 w-4 mr-1" />
                        Service Required *
                    </label>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                    >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                            <option key={service} value={service}>
                                {service}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Preferred Time */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        <Clock className="inline h-4 w-4 mr-1" />
                        Preferred Time
                    </label>
                    <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                        <option value="">Any time</option>
                        {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${isFormValid && !isSubmitting
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    {isSubmitting ? (
                        <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            <span>Booking...</span>
                        </>
                    ) : (
                        <>
                            <Send className="h-4 w-4" />
                            <span>Book Appointment</span>
                        </>
                    )}
                </button>
            </form>

            {/* Alternative Contact Methods */}
            <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center mb-3">Or contact us directly:</p>
                <div className="flex space-x-2">
                    <a
                        href="tel:+918884333439"
                        className="flex-1 bg-blue-50 text-blue-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors flex items-center justify-center space-x-1"
                    >
                        <Phone className="h-3 w-3" />
                        <span>Call</span>
                    </a>
                    <a
                        href="https://wa.me/919900546089?text=Hello%20KSK%20Healthcare%2C%20I%20would%20like%20to%20book%20an%20appointment."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-50 text-green-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors flex items-center justify-center space-x-1"
                    >
                        <MessageCircle className="h-3 w-3" />
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default QuickBookingForm;
