import React from 'react';
import MapEmbed from '../components/MapEmbed';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    Phone, Mail, MapPin, Clock, Star, ArrowLeft, CheckCircle, Award,
    Activity, Shield, Target, Zap, MessageCircle, Calendar, Hand
} from 'lucide-react';

const AcupressureServicesPage = () => {
    // Business contact info
    const businessInfo = {
        phone: '+91 88843 33439',
        email: 'kskhealthcare.in@gmail.com',
        address: '6B, Kote NCMR Building, Karthik Nagar Service Road, Outer Ring Rd, Doddanekundi, Bengaluru, Karnataka 560037'
    };

    // WhatsApp component
    const WhatsAppButton = ({ message, children, className = "", showIcon = false }) => {
        const whatsappUrl = `https://wa.me/919900546089?text=${encodeURIComponent(message)}`;
        return (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={className}>
                {showIcon && <MessageCircle className="h-5 w-5" />}
                {children}
            </a>
        );
    };

    const acupressureServices = [
        {
            id: 1,
            name: 'Traditional Acupressure Therapy',
            description: 'Non-invasive pressure point massage that activates body\'s natural healing response. Uses finger pressure on specific meridian points to restore energy flow and reduce tension.',
            conditions: [
                'Chronic muscle tension and stiffness',
                'Headaches and migraines',
                'Back pain and joint pain',
                'Stress and anxiety relief',
                'Sleep disorders and insomnia',
                'Digestive problems',
                'Menstrual cramps and hormonal imbalance',
                'High blood pressure regulation'
            ],
            icon: Hand,
            duration: '45-60 minutes'
        },
        {
            id: 2,
            name: 'Foot Reflexology',
            description: 'Specialized foot massage targeting reflex points that correspond to organs and systems throughout the body. Promotes healing and wellness through precise pressure application.',
            conditions: [
                'Whole body detoxification',
                'Improved circulation and lymphatic drainage',
                'Stress reduction and deep relaxation',
                'Better sleep quality',
                'Digestive system improvement',
                'Immune system strengthening',
                'Hormonal balance',
                'Pain relief in corresponding body parts'
            ],
            icon: Target,
            duration: '45 minutes'
        },
        {
            id: 3,
            name: 'Hand Reflexology',
            description: 'Convenient hand massage technique that can be performed anywhere. Targets reflex points on hands to stimulate corresponding organs and reduce stress quickly.',
            conditions: [
                'Quick stress relief during work',
                'Immediate headache relief',
                'Hand and wrist pain (carpal tunnel)',
                'Anxiety and tension reduction',
                'Improved focus and mental clarity',
                'Workplace wellness therapy',
                'Computer-related strain relief'
            ],
            icon: Activity,
            duration: '30 minutes'
        },
        {
            id: 4,
            name: 'Sujok Therapy',
            description: 'Korean hand acupressure system using correspondence points on hands and fingers. Effective for self-treatment and quick relief from various ailments.',
            conditions: [
                'Acute and chronic pain management',
                'Digestive disorders',
                'Respiratory problems',
                'Emotional stress and mental tension',
                'Circulation improvement',
                'Immune system boost',
                'Energy level enhancement'
            ],
            icon: Zap,
            duration: '30-45 minutes'
        },
        {
            id: 5,
            name: 'Marma Therapy',
            description: 'Ancient Ayurvedic pressure point therapy targeting vital energy points (marma points) to balance doshas and promote healing naturally.',
            conditions: [
                'Chronic fatigue and low energy',
                'Joint stiffness and arthritis',
                'Nervous system disorders',
                'Emotional imbalance and mood disorders',
                'Poor circulation',
                'Respiratory issues',
                'Digestive problems',
                'Overall vitality enhancement'
            ],
            icon: Shield,
            duration: '60 minutes'
        }
    ];

    const testimonial = {
        name: 'Priya Sharma',
        location: 'Doddanekundi, Bengaluru',
        text: 'Working in Bengaluru\'s demanding IT environment left me with chronic shoulder pain and stress. The reflexology sessions at KSK Healthcare in Doddanekundi have been life-changing. The therapeutic touch and expert pressure point work have not only relieved my physical pain but also helped me manage work stress much better.',
        rating: 5,
        condition: 'Chronic Shoulder Pain & Work Stress'
    };

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Acupressure & Reflexology Services in Doddanekundi, Bengaluru | KSK Healthcare</title>
                <meta name="description" content="Expert acupressure & reflexology therapy in Doddanekundi, Bengaluru. Traditional pressure point massage, foot reflexology, Sujok therapy & Marma therapy for stress relief & pain management." />
                <meta name="keywords" content="acupressure Doddanekundi, reflexology Bengaluru, pressure point massage, Sujok therapy, Marma therapy, stress relief, KSK Healthcare" />
                <meta name="geo.region" content="IN-KA" />
                <meta name="geo.placename" content="Doddanekundi, Bengaluru" />
            </Helmet>

            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center space-x-2 text-green-600 hover:text-green-700">
                            <ArrowLeft className="h-5 w-5" />
                            <span>Back to Home</span>
                        </Link>
                        <div className="flex items-center space-x-4 text-sm">
                            <a href={`tel:${businessInfo.phone}`} className="flex items-center space-x-1 text-gray-600 hover:text-green-600">
                                <Phone className="h-4 w-4" />
                                <span>{businessInfo.phone}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Healing <span className="text-blue-600">Acupressure & Reflexology</span><br />
                            Therapy in Doddanekundi, Bengaluru
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                            Experience the ancient art of pressure point healing at KSK Healthcare in Doddanekundi.
                            Our skilled therapists provide non-invasive, drug-free treatments that activate your body's
                            natural healing mechanisms, offering relief from stress, pain, and various health conditions
                            common among Bengaluru's working professionals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <WhatsAppButton
                                message="Hello KSK Healthcare, I would like to book an acupressure/reflexology session in Doddanekundi."
                                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2"
                                showIcon={true}
                            >
                                Book Pressure Point Therapy
                            </WhatsAppButton>
                            <a href={`tel:${businessInfo.phone}`} className="bg-white border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center space-x-2">
                                <Phone className="h-5 w-5" />
                                <span>Call Now</span>
                            </a>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4 text-blue-600" />
                            <span>Certified Reflexology Specialists</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>4.8/5 Rating from Doddanekundi Clients</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>Non-invasive Drug-free Healing</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Comprehensive <span className="text-blue-600">Pressure Point Therapies</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our range of acupressure and reflexology treatments are specially designed to address
                            the health challenges faced by busy professionals in Doddanekundi and surrounding Bengaluru areas.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {acupressureServices.map((service, index) => (
                            <div key={service.id} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="lg:w-1/2">
                                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="bg-blue-100 rounded-full p-3">
                                                <service.icon className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-semibold text-gray-900">{service.name}</h3>
                                                <p className="text-sm text-blue-600 font-medium">Duration: {service.duration}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                                        <WhatsAppButton
                                            message={`Hello KSK Healthcare, I would like to book a ${service.name} session in Doddanekundi.`}
                                            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                                            showIcon={true}
                                        >
                                            Book {service.name}
                                        </WhatsAppButton>
                                    </div>
                                </div>

                                <div className="lg:w-1/2">
                                    <div className="bg-white rounded-xl p-8 shadow-lg border">
                                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">Effectively Treats:</h4>
                                        <div className="grid grid-cols-1 gap-3">
                                            {service.conditions.map((condition, idx) => (
                                                <div key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600">{condition}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Doddanekundi Professionals Choose <span className="text-blue-600">Our Pressure Point Therapies</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Hand className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Non-Invasive Healing</h3>
                            <p className="text-gray-600 text-sm">Gentle pressure point therapy without needles, drugs, or side effects.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Clock className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Relief</h3>
                            <p className="text-gray-600 text-sm">Immediate stress relief and pain reduction in just one session.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Target className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Targeted Treatment</h3>
                            <p className="text-gray-600 text-sm">Precise pressure point targeting for specific health conditions.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Shield className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Holistic Wellness</h3>
                            <p className="text-gray-600 text-sm">Addresses physical, mental, and emotional well-being together.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Success Stories from <span className="text-blue-600">Doddanekundi Clients</span>
                        </h2>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-8 text-center">
                        <div className="flex justify-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <blockquote className="text-xl text-gray-700 mb-6 italic">
                            "{testimonial.text}"
                        </blockquote>
                        <div className="text-center">
                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                            <p className="text-gray-600">{testimonial.location}</p>
                            <p className="text-blue-600 font-medium">{testimonial.condition}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Experience Healing Touch at Our <span className="text-blue-600">Doddanekundi Center</span>
                            </h2>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Address</h3>
                                        <p className="text-gray-600">{businessInfo.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Phone className="h-6 w-6 text-blue-600" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Phone</h3>
                                        <p className="text-gray-600">{businessInfo.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Clock className="h-6 w-6 text-blue-600" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Therapy Hours</h3>
                                        <p className="text-gray-600">Monday - Sunday: 9:00 AM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <WhatsAppButton
                                    message="Hello KSK Healthcare, I would like to book an acupressure/reflexology session at your Doddanekundi clinic."
                                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                                    showIcon={true}
                                >
                                    Book Therapy Session
                                </WhatsAppButton>

                                <a
                                    href={`tel:${businessInfo.phone}`}
                                    className="w-full bg-white border border-blue-600 text-blue-600 py-4 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>Call for Immediate Consultation</span>
                                </a>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="bg-gray-100 rounded-xl overflow-hidden aspect-[3/2]">
                            <MapEmbed title="KSK Healthcare - Acupressure & Reflexology Services in Doddanekundi, Bengaluru" height={400} className="rounded-xl" />
                            <div className="p-4 bg-white">
                                <h4 className="font-semibold text-gray-900 mb-2">KSK Healthcare - Doddanekundi</h4>
                                <p className="text-sm text-gray-600 mb-2">
                                    Expert Acupressure & Reflexology Therapy Center in Bengaluru
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/LfKjkmm7VcutWpE27"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
                                >
                                    <MapPin className="h-4 w-4" />
                                    <span>Get Directions</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conditions Treated & Eligibility */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Who Benefits from <span className="text-blue-600">Acupressure & Reflexology</span>?
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Drug-free pressure point therapy suitable for all ages, from stressed professionals to children.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                <Target className="h-5 w-5 text-blue-600" />
                                <span>Conditions We Address</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-2">Stress & Mental Health</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Work-related stress & burnout</li>
                                        <li>• Anxiety & panic attacks</li>
                                        <li>• Depression & mood disorders</li>
                                        <li>• Insomnia & sleep disturbances</li>
                                        <li>• ADHD & concentration issues</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-2">Physical Discomfort</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Muscle tension & stiffness</li>
                                        <li>• Headaches & migraines</li>
                                        <li>• Back & neck pain</li>
                                        <li>• Poor circulation</li>
                                        <li>• Fatigue & low energy</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-2">Digestive Issues</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Constipation & bloating</li>
                                        <li>• Acid reflux & heartburn</li>
                                        <li>• Irritable bowel syndrome</li>
                                        <li>• Loss of appetite</li>
                                        <li>• Nausea & motion sickness</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-2">Lifestyle Conditions</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Computer-related strain</li>
                                        <li>• Travel fatigue & jet lag</li>
                                        <li>• Smoking cessation support</li>
                                        <li>• Weight management support</li>
                                        <li>• Seasonal allergies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                <CheckCircle className="h-5 w-5 text-blue-600" />
                                <span>Perfect For</span>
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <h4 className="font-medium text-blue-800 mb-2">✅ Ideal Candidates</h4>
                                    <ul className="space-y-1 text-sm text-blue-700">
                                        <li>• All ages (infants to elderly)</li>
                                        <li>• Needle-phobic individuals</li>
                                        <li>• Pregnant women (safe pressure points)</li>
                                        <li>• Busy professionals seeking quick relief</li>
                                        <li>• People wanting natural stress management</li>
                                        <li>• Those preferring clothed therapy sessions</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-green-50 rounded-lg">
                                    <h4 className="font-medium text-green-800 mb-2">🎯 Special Benefits For</h4>
                                    <ul className="space-y-1 text-sm text-green-700">
                                        <li>• IT professionals with tech neck</li>
                                        <li>• Students facing exam stress</li>
                                        <li>• Senior citizens with mobility issues</li>
                                        <li>• Athletes needing recovery support</li>
                                        <li>• New mothers dealing with postpartum stress</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-yellow-50 rounded-lg">
                                    <h4 className="font-medium text-yellow-800 mb-2">⚠️ Gentle Modifications</h4>
                                    <ul className="space-y-1 text-sm text-yellow-700">
                                        <li>• Light pressure for sensitive individuals</li>
                                        <li>• Diabetes patients (gentle foot reflexology)</li>
                                        <li>• Heart conditions (modified techniques)</li>
                                        <li>• Recent injuries (avoiding affected areas)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatment Comparison */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why Choose <span className="text-blue-600">Pressure Point Therapy</span>?
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Compare the benefits of acupressure with other stress relief methods.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Comparison Factor</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Acupressure</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Massage Therapy</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Stress Medications</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Yoga/Meditation</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Immediate Relief</td>
                                        <td className="px-6 py-4 text-center text-sm text-blue-600">Excellent</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Good</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Fast</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Gradual</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">No Side Effects</td>
                                        <td className="px-6 py-4 text-center text-sm text-blue-600">100% Safe</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Very Safe</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">High Risk</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Safe</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Time Required</td>
                                        <td className="px-6 py-4 text-center text-sm text-blue-600">30-60 min</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">60-90 min</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">5 min</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">30-60 min daily</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Cost Effectiveness</td>
                                        <td className="px-6 py-4 text-center text-sm text-blue-600">Excellent</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Moderate</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">Expensive</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Low Cost</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Requires Training</td>
                                        <td className="px-6 py-4 text-center text-sm text-blue-600">Professional Only</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Professional</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">None</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Self-Practice</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">✨ Unique Advantages of Acupressure</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• No needles, completely non-invasive</li>
                                <li>• Clothed therapy sessions for comfort</li>
                                <li>• Suitable for needle-phobic individuals</li>
                                <li>• Can be done anywhere, anytime</li>
                            </ul>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Combines multiple healing modalities</li>
                                <li>• Balances physical and emotional health</li>
                                <li>• Teaches self-care techniques</li>
                                <li>• Builds body awareness and mindfulness</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Frequently Asked <span className="text-blue-600">Questions</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Everything you need to know about acupressure and reflexology therapy.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔍 Treatment Process</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-1">Q: What should I expect during my first session?</h4>
                                    <p className="text-sm text-gray-600">A: Your session begins with a health consultation (15 minutes) to understand your stress levels and health concerns. The therapy itself is done fully clothed, with gentle but firm pressure applied to specific points on your body, hands, and feet.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-1">Q: Is acupressure painful?</h4>
                                    <p className="text-sm text-gray-600">A: Acupressure should feel relaxing with some pressure sensations. You may feel tenderness at blocked energy points, but this indicates the therapy is working. The pressure is always adjusted to your comfort level.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-1">Q: What's the difference between acupressure and reflexology?</h4>
                                    <p className="text-sm text-gray-600">A: Acupressure works on meridian points throughout the body, while reflexology focuses specifically on reflex zones in feet, hands, and ears that correspond to different organs. We often combine both for comprehensive treatment.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">📈 Results & Effectiveness</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-1">Q: How quickly will I feel better?</h4>
                                    <p className="text-sm text-gray-600">A: Many people feel immediate relaxation and stress relief during the first session. For chronic stress, anxiety, or pain, significant improvement typically occurs after 3-4 sessions, with optimal results after 6-8 sessions.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-1">Q: What conditions respond best to acupressure?</h4>
                                    <p className="text-sm text-gray-600">A: Excellent results for stress (90% improvement), headaches (85%), digestive issues (80%), sleep problems (75%), and chronic pain (70%). Emotional stress and anxiety show particularly rapid improvement.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-1">Q: Can I learn self-acupressure techniques?</h4>
                                    <p className="text-sm text-gray-600">A: Absolutely! We teach simple self-care techniques for daily stress management, headache relief, and energy boosting. These techniques empower you to maintain wellness between professional sessions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">⚠️ Safety & Precautions</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-1">Q: Are there any side effects?</h4>
                                    <p className="text-sm text-gray-600">A: Acupressure is extremely safe. Some people may feel temporary tiredness as toxins are released, or slight soreness at pressure points. These are normal healing responses that pass within 24 hours.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-1">Q: Is it safe during pregnancy?</h4>
                                    <p className="text-sm text-gray-600">A: Yes, with modifications. We avoid certain pressure points and use gentler techniques. Acupressure can help with pregnancy discomforts like nausea, back pain, and stress. Always inform us if you're pregnant.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-1">Q: Can children receive acupressure?</h4>
                                    <p className="text-sm text-gray-600">A: Yes! Children respond excellently to gentle acupressure. It's particularly helpful for hyperactivity, sleep issues, digestive problems, and stress from studies. We use very light pressure and make it fun for them.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">📅 Treatment Planning</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-1">Q: How many sessions do I need?</h4>
                                    <p className="text-sm text-gray-600">A: Treatment plans are customized:</p>
                                    <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-600">
                                        <li>• Stress relief: 4-6 sessions</li>
                                        <li>• Chronic pain: 6-10 sessions</li>
                                        <li>• Anxiety/depression: 8-12 sessions</li>
                                        <li>• Maintenance wellness: Monthly sessions</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-1">Q: How often should I come?</h4>
                                    <p className="text-sm text-gray-600">A: For acute stress: 2-3 times per week initially. For chronic conditions: 1-2 times per week. For maintenance: Bi-weekly or monthly. We adjust frequency based on your response and lifestyle.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-600 mb-1">Q: What should I do after treatment?</h4>
                                    <p className="text-sm text-gray-600">A: Drink plenty of water to help flush toxins, avoid heavy meals for 2 hours, and try to rest or do light activities. The relaxed feeling may last several hours or days - this is completely normal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Experience Natural Stress Relief?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Join the many satisfied professionals from Doddanekundi and across Bengaluru who have
                        found effective stress relief and pain management through our healing pressure point therapies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <WhatsAppButton
                            message="Hello KSK Healthcare, I'm ready to start my pressure point therapy in Doddanekundi. Please help me book a session."
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                            showIcon={true}
                        >
                            Start Your Wellness Journey
                        </WhatsAppButton>
                        <a
                            href={`tel:${businessInfo.phone}`}
                            className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center space-x-2"
                        >
                            <Phone className="h-5 w-5" />
                            <span>Call Now</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AcupressureServicesPage;
