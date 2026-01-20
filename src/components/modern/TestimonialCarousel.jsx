import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialCarousel = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const navNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const navPrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="relative w-full max-w-4xl mx-auto px-4">
            <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
                <button
                    onClick={navPrev}
                    className="p-2 rounded-full bg-white shadow-lg text-gray-600 hover:text-green-600 hover:scale-110 transition-all"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
            </div>

            <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
                <button
                    onClick={navNext}
                    className="p-2 rounded-full bg-white shadow-lg text-gray-600 hover:text-green-600 hover:scale-110 transition-all"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>

            <div className="overflow-hidden py-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative border border-green-50"
                    >
                        <Quote className="absolute top-6 left-6 h-12 w-12 text-green-100 fill-current -z-0" />

                        <div className="relative z-10 text-center">
                            <div className="flex justify-center mb-6">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            <p className="text-xl md:text-2xl text-gray-700 italic mb-8 font-medium leading-relaxed">
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div>
                                <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                                <p className="text-green-600 text-sm font-medium">{testimonials[currentIndex].condition || testimonials[currentIndex].service || testimonials[currentIndex].category}</p>
                                <p className="text-gray-400 text-xs mt-1">{testimonials[currentIndex].location}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center space-x-2 mt-4">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-green-600 w-6' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
