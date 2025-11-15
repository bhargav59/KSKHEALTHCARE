import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, X } from 'lucide-react';

const MapEmbed = ({
    title = 'KSK Healthcare - Doddanekundi, Bengaluru',
    className = 'rounded-xl',
    height = '400',
    showSidePane = true
}) => {
    const [showClinicInfo, setShowClinicInfo] = useState(false);

    const clinicInfo = {
        name: 'KSK Healthcare',
        fullName: 'KSK Healthcare - Cure and Care with a Difference',
        address: '6B, Kote NCMR Building, Karthik Nagar Service Road, Outer Ring Rd, Doddanekundi, Bengaluru, Karnataka 560037',
        phone: '+91 88843 33439',
        email: 'kskhealthcare.in@gmail.com',
        hours: 'Monday - Sunday: 9:00 AM - 7:00 PM',
        lat: 12.9698,
        lng: 77.7500,
        googleMapsUrl: 'https://www.google.com/maps/place/6B+Kote+NCMR+Building,+Karthik+Nagar+Service+Road,+Doddanekundi,+Bengaluru,+Karnataka+560037'
    };

    return (
        <div className={`relative w-full ${className} overflow-hidden`} style={{ minHeight: height + 'px' }}>
            {/* Clickable Map Link - Opens Google Maps with correct location */}
            <a 
                href={clinicInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative group overflow-hidden"
                style={{ minHeight: height + 'px' }}
                title="Click to open Google Maps with KSK Healthcare location"
            >
                {/* Map Background with gradient */}
                <div 
                    className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center group-hover:from-green-100 group-hover:to-blue-100 transition-all duration-300"
                    style={{ minHeight: height + 'px' }}
                >
                    {/* Map Icon */}
                    <div className="text-center">
                        <MapPin className="h-24 w-24 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                            {clinicInfo.name}
                        </h3>
                        <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors mb-2">
                            Doddanekundi, Bengaluru
                        </p>
                        <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                            Click to view on Google Maps
                        </p>
                    </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </a>

            {/* Clinic Info Button - Bottom Right Corner */}
            {showSidePane && (
                <button
                    onClick={() => setShowClinicInfo(!showClinicInfo)}
                    className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10 border-2 border-green-600 hover:bg-green-50"
                    aria-label="Show clinic information"
                    title="Click to show clinic details"
                >
                    <MapPin className="h-6 w-6 text-green-600" />
                </button>
            )}

            {/* Clinic Info Side Pane - Slides in from right */}
            {showSidePane && showClinicInfo && (
                <div className="absolute top-0 right-0 w-full sm:w-96 h-full bg-white shadow-xl rounded-l-xl p-6 overflow-y-auto z-20 animate-in slide-in-from-right-4 duration-300">
                    <button
                        onClick={() => setShowClinicInfo(false)}
                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Close clinic information"
                    >
                        <X className="h-5 w-5 text-gray-600" />
                    </button>

                    <div className="pt-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{clinicInfo.name}</h3>
                        <p className="text-sm text-green-600 font-semibold mb-4">{clinicInfo.fullName}</p>

                        <div className="space-y-4">
                            {/* Address */}
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                                    <p className="text-sm text-gray-600">{clinicInfo.address}</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                                    <a
                                        href={`tel:${clinicInfo.phone}`}
                                        className="text-sm text-green-600 hover:text-green-700 font-medium"
                                    >
                                        {clinicInfo.phone}
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-green-600 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                                    <a
                                        href={`mailto:${clinicInfo.email}`}
                                        className="text-sm text-green-600 hover:text-green-700 font-medium break-all"
                                    >
                                        {clinicInfo.email}
                                    </a>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start space-x-3">
                                <Clock className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Clinic Hours</h4>
                                    <p className="text-sm text-gray-600">{clinicInfo.hours}</p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="pt-4 space-y-3 border-t">
                                <a
                                    href={`tel:${clinicInfo.phone}`}
                                    className="block w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                                >
                                    Call Now
                                </a>
                                <a
                                    href={`https://wa.me/919900546089?text=Hello%20KSK%20Healthcare%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                                >
                                    Message on WhatsApp
                                </a>
                                <a
                                    href={clinicInfo.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile-friendly info overlay */}
            {showSidePane && !showClinicInfo && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:hidden">
                    <p className="text-white text-sm font-medium">Click the pin icon to view clinic details</p>
                </div>
            )}
        </div>
    );
};

export default MapEmbed;
