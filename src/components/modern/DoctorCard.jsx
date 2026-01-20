import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Calendar, Users, CheckCircle, MessageCircle } from 'lucide-react';
import DoctorAvatar from '../DoctorAvatar';

const DoctorCard = ({ doctor, onBook }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group"
        >
            <div className="p-6">
                <div className="flex items-start space-x-4">
                    <div className="relative">
                        <div className="group-hover:scale-105 transition-transform duration-300">
                            <DoctorAvatar doctor={doctor} />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full border border-white">
                            {doctor.experience}
                        </div>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                            {doctor.name}
                        </h3>
                        <p className="text-sm font-semibold text-green-600 mb-1">{doctor.title}</p>
                        <p className="text-xs text-gray-500 mb-2">{doctor.qualification}</p>

                        <div className="flex items-center space-x-1 mb-3">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium text-gray-700">{doctor.rating}</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-50">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Specializations</h4>
                            <ul className="space-y-1">
                                {doctor.specializations.slice(0, 3).map((spec, i) => (
                                    <li key={i} className="flex items-center space-x-2 text-xs text-gray-600">
                                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                                        <span className="truncate">{spec}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Achievements</h4>
                            <ul className="space-y-1">
                                {doctor.achievements.slice(0, 2).map((ach, i) => (
                                    <li key={i} className="flex items-center space-x-2 text-xs text-gray-600">
                                        <Award className="h-3 w-3 text-yellow-500 flex-shrink-0" />
                                        <span className="truncate">{ach}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <button
                        onClick={() => onBook(doctor)}
                        className="w-full bg-gray-50 hover:bg-green-600 text-gray-700 hover:text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg hover:shadow-green-500/30"
                    >
                        <MessageCircle className="h-4 w-4" />
                        <span>Book Consultation</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default DoctorCard;
