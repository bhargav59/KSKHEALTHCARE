import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MessageCircle, Phone } from 'lucide-react';
import heroBanner from '../../assets/new-hero-banner.jpg'; // We'll keep using the existing asset for now

const HeroSection = ({ scrollToSection }) => {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-white/50 z-0"></div>

            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-50 to-transparent clip-path-slant opacity-60"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-green-100 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-semibold text-green-700 uppercase tracking-widest">Accepting New Patients</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                        Holistic Healing <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-800">
                            Redefined.
                        </span>
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                        Experience the synergy of ancient wisdom and modern science.
                        From customized acupuncture to advanced neuro-rehab, we treat the root cause, not just the symptoms.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/919900546089?text=Hello%20KSK%20Healthcare%2C%20I%20would%20like%20to%20book%20a%20consultation."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
                        >
                            <MessageCircle className="h-5 w-5" />
                            <span>Book via WhatsApp</span>
                        </a>

                        <button
                            onClick={() => scrollToSection('services')}
                            className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-semibold border border-gray-200 transition-all hover:border-green-300"
                        >
                            <span>Explore Services</span>
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Social Proof Mini */}
                    <div className="mt-12 flex items-center space-x-6">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="font-bold text-gray-900">4.9/5</span>
                            </div>
                            <p className="text-xs text-gray-500">from 350+ happy patients</p>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                        <img
                            src={heroBanner}
                            alt="KSK Healthcare Clinic"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                        {/* Floating Card 1 */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-xs"
                        >
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="p-2 bg-green-100 rounded-lg">
                                    <Phone className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Emergency Support</p>
                                    <p className="font-bold text-sm">+91 88843 33439</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative blob behind */}
                    <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-200/20 blur-3xl rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
