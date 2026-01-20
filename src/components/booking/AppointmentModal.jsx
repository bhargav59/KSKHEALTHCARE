import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MessageCircle, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const appointmentSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    phone: z.string().min(10, 'Valid phone number is required'),
    service: z.string().min(1, 'Please select a service'),
    message: z.string().optional(),
});

const AppointmentModal = ({ isOpen, onClose, preselectedService = '' }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(appointmentSchema),
        defaultValues: {
            service: preselectedService
        }
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        // Simulate API call or tracking here
        await new Promise(resolve => setTimeout(resolve, 800));

        // Construct WhatsApp message
        const waMessage = `Hello KSK Healthcare, I would like to book a consultation.\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Service:* ${data.service}\n*Message:* ${data.message || 'N/A'}`;
        const whatsappUrl = `https://wa.me/919900546089?text=${encodeURIComponent(waMessage)}`;

        window.open(whatsappUrl, '_blank');
        setIsSubmitting(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden pointer-events-auto">
                            <div className="bg-green-600 p-6 flex justify-between items-start text-white">
                                <div>
                                    <h2 className="text-2xl font-bold">Book Appointment</h2>
                                    <p className="text-green-100 text-sm mt-1">We'll get back to you shortly.</p>
                                </div>
                                <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        {...register('name')}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        {...register('phone')}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                                    <select
                                        {...register('service')}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="Acupuncture">Acupuncture Therapy</option>
                                        <option value="Ayurveda">Ayurveda & Panchakarma</option>
                                        <option value="Speech Therapy">Speech & Hearing</option>
                                        <option value="Physiotherapy">Neuro Rehab / Physiotherapy</option>
                                        <option value="Nutrition">Nutrition & Wellness</option>
                                        <option value="Other">Other Inquiry</option>
                                    </select>
                                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                                    <textarea
                                        {...register('message')}
                                        rows={3}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Briefly describe your issue..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        <>
                                            <MessageCircle className="h-5 w-5" />
                                            <span>Continue to WhatsApp</span>
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-center text-gray-400 mt-4">
                                    Your data is safe. We use WhatsApp for quick coordination.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AppointmentModal;
