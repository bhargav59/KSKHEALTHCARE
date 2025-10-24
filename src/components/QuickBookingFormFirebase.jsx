import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Phone, MessageCircle, Send, Mail } from 'lucide-react';
import { useFormTracking } from '../hooks/useAnalytics';
import { trackBookingStarted, trackBookingCompleted, getAppointmentValue } from '../utils/analytics';
import { createAppointment } from '../services/firestore';
import { useAuth } from '../contexts/AuthContext';

const QuickBookingFormFirebase = ({ className = "", source = "unknown" }) => {
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        appointmentDate: '',
        appointmentTime: '',
        notes: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    // Form tracking
    const {
        trackFormStarted,
        trackFieldInteraction,
        setTotalFields
    } = useFormTracking('quick_booking_form_firebase');

    // Set total number of fields for completion tracking
    useEffect(() => {
        setTotalFields(6); // name, email, phone, service, date, time
    }, [setTotalFields]);

    //  Pre-fill form if user is logged in
    useEffect(() => {
        if (currentUser) {
            setFormData(prev => ({
                ...prev,
                email: currentUser.email || '',
                name: currentUser.displayName || ''
            }));
        }
    }, [currentUser]);

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
        '09:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '02:00 PM',
        '03:00 PM',
        '04:00 PM',
        '05:00 PM',
        '06:00 PM'
    ];

    // Get minimum date (today)
    const getMinDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Track booking started
            trackBookingStarted(formData.service || 'General Consultation', source);

            // Create appointment in Firestore
            const appointmentData = {
                ...formData,
                userId: currentUser?.uid || 'guest',
                userEmail: currentUser?.email || formData.email,
                source: source,
                status: 'pending'
            };

            const result = await createAppointment(appointmentData);

            if (result.success) {
                // Track successful booking completion
                const appointmentValue = getAppointmentValue(formData.service || 'General Consultation');
                trackBookingCompleted(
                    formData.service || 'General Consultation',
                    'Auto-assigned',
                    appointmentValue,
                    source
                );

                // Redirect to confirmation page
                navigate('/booking-confirmation', {
                    state: {
                        bookingData: { ...formData, id: result.id },
                        source: source,
                        value: appointmentValue
                    }
                });
            } else {
                setError(result.error || 'Failed to book appointment. Please try again.');
            }
        } catch (err) {
            console.error('Booking error:', err);
            setError('An error occurred while booking. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
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

    const isFormValid = formData.name && formData.phone && formData.email && formData.service && formData.appointmentDate && formData.appointmentTime;

    return (
        <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Book Your Appointment</h3>
                <p className="text-gray-600 text-sm">Schedule your consultation now</p>
            </div>

            {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-800">{error}</p>
                </div>
            )}

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

                {/* Email Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        <Mail className="inline h-4 w-4 mr-1" />
                        Email Address *
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        placeholder="your.email@example.com"
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
                        onFocus={() => handleFocus('phone')}
                        placeholder="+91 98765 43210"
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
                        onFocus={() => handleFocus('service')}
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

                {/* Date Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        Appointment Date *
                    </label>
                    <input
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        onFocus={() => handleFocus('appointmentDate')}
                        min={getMinDate()}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                    />
                </div>

                {/* Time Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        <Clock className="inline h-4 w-4 mr-1" />
                        Appointment Time *
                    </label>
                    <select
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        onFocus={() => handleFocus('appointmentTime')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                    >
                        <option value="">Select time</option>
                        {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Notes */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Notes (Optional)
                    </label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Any specific concerns or requirements..."
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                        isFormValid && !isSubmitting
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

export default QuickBookingFormFirebase;
