import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
        >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                {/* Floating Icon */}
                <div className={`absolute -bottom-6 right-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center`}>
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.color} opacity-90 flex items-center justify-center`}>
                        <service.icon className="h-5 w-5 text-white" />
                    </div>
                </div>
            </div>

            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${service.color}`} />

            <div className="p-6 pt-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {service.name}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                    {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                    {(service.benefits || []).slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-center text-xs text-gray-500 font-medium">
                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`} />
                            {benefit}
                        </li>
                    ))}
                </ul>

                <Link
                    to={service.blogPath}
                    className="inline-flex items-center text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors mt-auto"
                >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
