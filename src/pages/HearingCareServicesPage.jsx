import React from 'react';
import MapEmbed from '../components/MapEmbed';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    Phone, Mail, MapPin, Clock, Star, ArrowLeft, CheckCircle, Award,
    Activity, Shield, Target, Zap, MessageCircle, Calendar, Volume2,
    Ear, Headphones, VolumeX, Settings, Heart, Users
} from 'lucide-react';

const HearingCareServicesPage = () => {
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

    const hearingCareServices = [
        {
            id: 1,
            name: 'Comprehensive Hearing Assessment',
            description: 'Complete audiological evaluation using advanced equipment to determine the type, degree, and configuration of hearing loss for accurate diagnosis.',
            services: [
                'Pure tone audiometry (air and bone conduction)',
                'Speech audiometry and word recognition testing',
                'Tympanometry and acoustic reflex testing',
                'Otoacoustic emissions (OAE) screening',
                'Auditory brainstem response (ABR) testing',
                'Central auditory processing evaluation'
            ],
            ageGroup: 'All ages',
            icon: Ear,
            duration: '60-90 minutes',
            category: 'Diagnostic Testing'
        },
        {
            id: 2,
            name: 'Hearing Aid Consultation & Fitting',
            description: 'Professional hearing aid selection, fitting, and programming customized to individual hearing loss and lifestyle needs of Bengaluru residents.',
            services: [
                'Hearing aid selection and recommendation',
                'Custom ear mold impressions',
                'Precise hearing aid programming and fitting',
                'Real ear measurements for optimal performance',
                'Hearing aid orientation and training',
                'Follow-up adjustments and fine-tuning'
            ],
            ageGroup: 'All ages',
            icon: Headphones,
            duration: '90-120 minutes',
            category: 'Hearing Aid Services'
        },
        {
            id: 3,
            name: 'Tinnitus Management & Therapy',
            description: 'Comprehensive tinnitus evaluation and management program combining sound therapy, counseling, and lifestyle modifications.',
            services: [
                'Detailed tinnitus assessment and questionnaires',
                'Tinnitus matching and masking evaluation',
                'Sound therapy and masking device fitting',
                'Tinnitus retraining therapy (TRT)',
                'Counseling and stress management techniques',
                'Lifestyle modification guidance'
            ],
            ageGroup: 'Adults & elderly',
            icon: VolumeX,
            duration: '60 minutes',
            category: 'Tinnitus Management'
        },
        {
            id: 4,
            name: 'Auditory Processing Disorder (APD) Evaluation',
            description: 'Specialized assessment and therapy for children and adults with central auditory processing difficulties affecting speech understanding.',
            services: [
                'Comprehensive APD test battery',
                'Dichotic listening assessments',
                'Temporal processing evaluations',
                'Auditory discrimination testing',
                'FM system evaluation and fitting',
                'Auditory training programs'
            ],
            ageGroup: '5+ years',
            icon: Settings,
            duration: '2-3 hours',
            category: 'Processing Disorders'
        },
        {
            id: 5,
            name: 'Pediatric Hearing Services',
            description: 'Specialized hearing care for infants, children, and adolescents including early intervention and developmental support.',
            services: [
                'Newborn hearing screening',
                'Behavioral audiometry for children',
                'Play audiometry and visual reinforcement',
                'Pediatric hearing aid fitting and management',
                'Educational support and advocacy',
                'Family counseling and training'
            ],
            ageGroup: '0-18 years',
            icon: Heart,
            duration: '45-90 minutes',
            category: 'Pediatric Care'
        },
        {
            id: 6,
            name: 'Cochlear Implant Support & Rehabilitation',
            description: 'Pre and post-cochlear implant evaluation, mapping, and auditory rehabilitation for maximum benefit from the device.',
            services: [
                'Cochlear implant candidacy evaluation',
                'Pre-surgical counseling and preparation',
                'Initial device activation and mapping',
                'Progressive programming adjustments',
                'Auditory rehabilitation training',
                'Ongoing support and troubleshooting'
            ],
            ageGroup: 'All ages',
            icon: Zap,
            duration: '60-120 minutes',
            category: 'Implant Services'
        }
    ];

    const testimonial = {
        name: 'Lakshmi Venkatesh',
        location: 'Doddanekundi, Bengaluru',
        text: 'I had been struggling with gradual hearing loss for years, which was affecting my work as a software engineer in Bengaluru. The team at KSK Healthcare in Doddanekundi provided such thorough testing and found the perfect hearing aids for my lifestyle. The difference is incredible - I can participate in meetings confidently again and enjoy conversations with my family. The ongoing support and adjustments have been exceptional.',
        rating: 5,
        condition: 'Progressive Hearing Loss'
    };

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Hearing Care & Auditory Rehabilitation in Doddanekundi, Bengaluru | KSK Healthcare</title>
                <meta name="description" content="Expert hearing care in Doddanekundi. Hearing tests, aids fitting, tinnitus treatment & cochlear support. Certified audiologists. Government-approved!" />
                <meta name="keywords" content="hearing care Doddanekundi, audiologist Bengaluru, hearing aids, tinnitus treatment, hearing test, cochlear implant, KSK Healthcare" />
                <meta name="geo.region" content="IN-KA" />
                <meta name="geo.placename" content="Doddanekundi, Bengaluru" />
            </Helmet>

            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center space-x-2 text-orange-600 hover:text-orange-700">
                            <ArrowLeft className="h-5 w-5" />
                            <span>Back to Home</span>
                        </Link>
                        <div className="flex items-center space-x-4 text-sm">
                            <a href={`tel:${businessInfo.phone}`} className="flex items-center space-x-1 text-gray-600 hover:text-orange-600">
                                <Phone className="h-4 w-4" />
                                <span>{businessInfo.phone}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Comprehensive <span className="text-orange-600">Hearing Care & Auditory</span><br />
                            Rehabilitation in Doddanekundi, Bengaluru
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                            At KSK Healthcare in Doddanekundi, our certified audiologists provide comprehensive hearing
                            care services using state-of-the-art equipment. We specialize in addressing hearing challenges
                            common among Bengaluru's urban population, from noise-induced hearing loss to age-related
                            hearing decline, offering personalized solutions to restore and enhance your auditory experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <WhatsAppButton
                                message="Hello KSK Healthcare, I would like to schedule a comprehensive hearing assessment in Doddanekundi."
                                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center justify-center space-x-2"
                                showIcon={true}
                            >
                                Book Hearing Assessment
                            </WhatsAppButton>
                            <a href={`tel:${businessInfo.phone}`} className="bg-white border border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center justify-center space-x-2">
                                <Phone className="h-5 w-5" />
                                <span>Call Now</span>
                            </a>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4 text-orange-600" />
                            <span>Certified Audiologists</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>4.8/5 Rating from Doddanekundi Patients</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <CheckCircle className="h-4 w-4 text-orange-600" />
                            <span>Advanced Audiological Equipment</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Complete <span className="text-orange-600">Hearing Care Solutions</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive range of audiological services addresses all aspects of hearing health
                            for residents of Doddanekundi and the greater Bengaluru metropolitan area.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {hearingCareServices.map((service, index) => (
                            <div key={service.id} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="lg:w-1/2">
                                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="bg-orange-100 rounded-full p-3">
                                                <service.icon className="h-6 w-6 text-orange-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-semibold text-gray-900">{service.name}</h3>
                                                <div className="flex items-center space-x-2 text-sm mt-1">
                                                    <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-xs">{service.category}</span>
                                                    <span className="text-orange-600 font-medium">{service.duration}</span>
                                                    <span className="text-gray-600">• Age: {service.ageGroup}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                                        <WhatsAppButton
                                            message={`Hello KSK Healthcare, I would like to know more about ${service.name} services in Doddanekundi.`}
                                            className="bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center space-x-2"
                                            showIcon={true}
                                        >
                                            Learn More About {service.category}
                                        </WhatsAppButton>
                                    </div>
                                </div>

                                <div className="lg:w-1/2">
                                    <div className="bg-white rounded-xl p-8 shadow-lg border">
                                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">Services Include:</h4>
                                        <div className="space-y-3">
                                            {service.services.map((item, idx) => (
                                                <div key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600">{item}</span>
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

            {/* Technology Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Advanced <span className="text-orange-600">Audiological Technology</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We use the latest diagnostic and treatment technology to provide accurate assessments
                            and effective solutions for our Doddanekundi patients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Ear className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Audiometry</h3>
                            <p className="text-gray-600 text-sm">Precise hearing threshold testing with advanced calibrated equipment.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Headphones className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Hearing Aids</h3>
                            <p className="text-gray-600 text-sm">Latest digital hearing aids from leading global manufacturers.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Settings className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Ear Measurement</h3>
                            <p className="text-gray-600 text-sm">Precise hearing aid programming for optimal performance.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Zap className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Implant Programming</h3>
                            <p className="text-gray-600 text-sm">Advanced cochlear implant mapping and rehabilitation services.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Conditions Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Hearing Conditions We Treat in <span className="text-orange-600">Doddanekundi</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our expert team addresses a wide range of hearing and auditory processing conditions
                            affecting Bengaluru residents.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Noise-Induced Hearing Loss',
                                description: 'Common in urban Bengaluru due to traffic noise and industrial exposure.',
                                icon: VolumeX
                            },
                            {
                                title: 'Age-Related Hearing Loss',
                                description: 'Progressive hearing decline affecting adults over 50 years.',
                                icon: Users
                            },
                            {
                                title: 'Tinnitus & Ear Ringing',
                                description: 'Persistent ringing or buzzing sounds in the ears.',
                                icon: Ear
                            },
                            {
                                title: 'Conductive Hearing Loss',
                                description: 'Blockages in outer or middle ear affecting sound transmission.',
                                icon: Settings
                            },
                            {
                                title: 'Auditory Processing Disorders',
                                description: 'Difficulty processing and understanding speech despite normal hearing.',
                                icon: Volume2
                            },
                            {
                                title: 'Sudden Hearing Loss',
                                description: 'Rapid onset hearing loss requiring immediate medical attention.',
                                icon: Zap
                            }
                        ].map((condition, index) => (
                            <div key={index} className="bg-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="bg-orange-100 rounded-full p-2">
                                        <condition.icon className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">{condition.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm">{condition.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Success Stories from <span className="text-orange-600">Doddanekundi Patients</span>
                        </h2>
                    </div>

                    <div className="bg-orange-50 rounded-xl p-8 text-center">
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
                            <p className="text-orange-600 font-medium">{testimonial.condition}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Contact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Restore Your Hearing at Our <span className="text-orange-600">Doddanekundi Clinic</span>
                            </h2>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-orange-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Address</h3>
                                        <p className="text-gray-600">{businessInfo.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Phone className="h-6 w-6 text-orange-600" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Phone</h3>
                                        <p className="text-gray-600">{businessInfo.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Clock className="h-6 w-6 text-orange-600" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Audiology Hours</h3>
                                        <p className="text-gray-600">Monday - Sunday: 9:00 AM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <WhatsAppButton
                                    message="Hello KSK Healthcare, I would like to schedule a hearing assessment at your Doddanekundi clinic."
                                    className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                                    showIcon={true}
                                >
                                    Book Hearing Assessment
                                </WhatsAppButton>

                                <a
                                    href={`tel:${businessInfo.phone}`}
                                    className="w-full bg-white border border-orange-600 text-orange-600 py-4 px-6 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>Call for Immediate Consultation</span>
                                </a>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="bg-gray-100 rounded-xl overflow-hidden aspect-[3/2]">
                            <MapEmbed title="KSK Healthcare - Hearing Care & Auditory Rehabilitation in Doddanekundi, Bengaluru" height={400} className="rounded-xl" />
                            <div className="p-4 bg-white">
                                <h4 className="font-semibold text-gray-900 mb-2">KSK Healthcare - Doddanekundi</h4>
                                <p className="text-sm text-gray-600 mb-2">
                                    Expert Hearing Care & Auditory Rehabilitation Center in Bengaluru
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/LfKjkmm7VcutWpE27"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-1 text-orange-600 hover:text-orange-700 text-sm"
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
                            Who Benefits from <span className="text-orange-600">Hearing Care Services</span>?
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Comprehensive hearing solutions for all ages, from newborn screening to senior hearing aids.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                <Target className="h-5 w-5 text-orange-600" />
                                <span>Hearing Conditions We Treat</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-2">Hearing Loss Types</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Sensorineural hearing loss</li>
                                        <li>• Conductive hearing loss</li>
                                        <li>• Mixed hearing loss</li>
                                        <li>• Sudden hearing loss</li>
                                        <li>• Age-related hearing loss</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-2">Ear Disorders</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Tinnitus (ear ringing)</li>
                                        <li>• Vertigo & balance disorders</li>
                                        <li>• Ear infections (chronic)</li>
                                        <li>• Earwax blockage</li>
                                        <li>• Eustachian tube dysfunction</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-2">Pediatric Conditions</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Congenital hearing loss</li>
                                        <li>• Speech & language delays</li>
                                        <li>• Auditory processing disorders</li>
                                        <li>• Developmental delays</li>
                                        <li>• Learning difficulties</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-2">Communication Needs</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Workplace hearing safety</li>
                                        <li>• Music & entertainment needs</li>
                                        <li>• Phone & TV amplification</li>
                                        <li>• Group conversation challenges</li>
                                        <li>• Social isolation issues</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-2">Noise-Related Issues</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Noise-induced hearing loss</li>
                                        <li>• Industrial hearing damage</li>
                                        <li>• Music-induced hearing loss</li>
                                        <li>• Hearing protection needs</li>
                                        <li>• Hyperacusis (sound sensitivity)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-2">Age-Specific Needs</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Newborn hearing screening</li>
                                        <li>• School-age hearing issues</li>
                                        <li>• Adult onset hearing loss</li>
                                        <li>• Senior hearing aid needs</li>
                                        <li>• Dementia-related hearing care</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                <CheckCircle className="h-5 w-5 text-orange-600" />
                                <span>Who We Serve</span>
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-orange-50 rounded-lg">
                                    <h4 className="font-medium text-orange-800 mb-2">✅ All Age Groups</h4>
                                    <ul className="space-y-1 text-sm text-orange-700">
                                        <li>• Newborns (hearing screening from birth)</li>
                                        <li>• Infants & toddlers (6 months - 3 years)</li>
                                        <li>• Children & adolescents (3-18 years)</li>
                                        <li>• Adults (18-65 years)</li>
                                        <li>• Seniors (65+ years)</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <h4 className="font-medium text-blue-800 mb-2">🎯 Severity Levels</h4>
                                    <ul className="space-y-1 text-sm text-blue-700">
                                        <li>• Mild hearing loss (26-40 dB)</li>
                                        <li>• Moderate hearing loss (41-55 dB)</li>
                                        <li>• Moderately severe (56-70 dB)</li>
                                        <li>• Severe hearing loss (71-90 dB)</li>
                                        <li>• Profound hearing loss ({'>'}90 dB)</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-green-50 rounded-lg">
                                    <h4 className="font-medium text-green-800 mb-2">🌟 Special Services</h4>
                                    <ul className="space-y-1 text-sm text-green-700">
                                        <li>• Corporate hearing wellness programs</li>
                                        <li>• School hearing screening services</li>
                                        <li>• Home-based hearing assessments</li>
                                        <li>• Hearing aid trial & rental programs</li>
                                        <li>• Auditory-verbal therapy for children</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-purple-50 rounded-lg">
                                    <h4 className="font-medium text-purple-800 mb-2">🔧 Technology Solutions</h4>
                                    <ul className="space-y-1 text-sm text-purple-700">
                                        <li>• Digital hearing aids (all styles)</li>
                                        <li>• Assistive listening devices</li>
                                        <li>• Bluetooth connectivity solutions</li>
                                        <li>• Tinnitus masking devices</li>
                                        <li>• Cochlear implant support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Frequently Asked <span className="text-orange-600">Questions</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Common questions about hearing tests, hearing aids, and auditory rehabilitation services.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔍 Hearing Assessment</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-1">Q: How do I know if I need a hearing test?</h4>
                                    <p className="text-sm text-gray-600">A: Signs include asking people to repeat themselves, turning up TV volume, difficulty in noisy environments, ringing in ears, or others commenting on your hearing. We recommend annual testing after age 50, or immediately if you notice changes.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-1">Q: What happens during a hearing test?</h4>
                                    <p className="text-sm text-gray-600">A: We examine your ears, conduct pure tone and speech tests in a soundproof booth, check eardrum function, and may perform additional tests based on results. The entire process takes 45-60 minutes and is completely painless.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-1">Q: How often should children have their hearing tested?</h4>
                                    <p className="text-sm text-gray-600">A: Newborns should be screened before leaving the hospital. Subsequently, testing at 4, 5, 6, 8, and 10 years of age is recommended. More frequent testing if there are concerns about speech development or academic performance.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">🦻 Hearing Aids & Technology</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-1">Q: Will hearing aids restore my hearing to normal?</h4>
                                    <p className="text-sm text-gray-600">A: Hearing aids amplify and clarify sounds but don't restore hearing to normal. Modern digital aids can provide excellent improvement in most listening situations. The earlier you get aids, the better your brain adapts to using them effectively.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-1">Q: How do I choose the right hearing aid?</h4>
                                    <p className="text-sm text-gray-600">A: We consider your hearing loss degree, lifestyle needs, dexterity, budget, and cosmetic preferences. We offer trial periods to ensure the best fit. Behind-the-ear, in-the-ear, and invisible styles are available.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-1">Q: How long do hearing aids last and what maintenance do they need?</h4>
                                    <p className="text-sm text-gray-600">A: Quality hearing aids last 5-7 years with proper care. Daily cleaning, moisture protection, and regular professional maintenance extend lifespan. We provide detailed care instructions and free cleaning services in the first year.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">👶 Pediatric Hearing Care</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-1">Q: What are early signs of hearing loss in children?</h4>
                                    <p className="text-sm text-gray-600">A: Not responding to name by 12 months, delayed speech (no words by 15 months), speaking loudly, difficulty following directions, requesting repetition, or behavioral issues. Academic problems may also indicate hearing difficulties.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-1">Q: How effective is early intervention for children with hearing loss?</h4>
                                    <p className="text-sm text-gray-600">A: Early intervention (before 6 months) dramatically improves speech, language, and academic outcomes. Children receiving aids and therapy before age 1 often develop age-appropriate communication skills. Success rates decrease significantly with delayed intervention.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-1">Q: What is Auditory-Verbal Therapy and how does it help?</h4>
                                    <p className="text-sm text-gray-600">A: AVT teaches children to use their residual hearing (with aids/implants) to develop spoken language. It focuses on listening skills, speech development, and auditory brain development. Most children achieve age-appropriate communication with consistent therapy.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">💰 Cost & Insurance</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-1">Q: Does insurance cover hearing aids and therapy?</h4>
                                    <p className="text-sm text-gray-600">A: Coverage varies by insurer. Many policies cover hearing tests and some therapy costs. Government schemes like ADIP provide hearing aids for eligible individuals. We assist with insurance claims and pre-authorization processes.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-1">Q: What's included in hearing aid packages?</h4>
                                    <p className="text-sm text-gray-600">A: Our packages include hearing aids, custom ear molds, programming, fitting, 2-year warranty, follow-up adjustments, cleaning supplies, and user training. We also provide loaner aids during repairs.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-orange-600 mb-1">Q: Do you offer payment plans for expensive hearing aids?</h4>
                                    <p className="text-sm text-gray-600">A: Yes, we offer 0% EMI for aids above ₹20,000, rental programs for trial periods, and buy-back schemes for upgrades. We also help access government subsidies and charitable funding when available.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-orange-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Improve Your Hearing & Quality of Life?
                    </h2>
                    <p className="text-xl mb-8 text-orange-100">
                        Join hundreds of satisfied patients from Doddanekundi and across Bengaluru who have
                        regained their hearing clarity and reconnected with the world around them.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <WhatsAppButton
                            message="Hello KSK Healthcare, I'm ready to improve my hearing health in Doddanekundi. Please help me schedule a comprehensive hearing assessment."
                            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                            showIcon={true}
                        >
                            Start Your Hearing Journey
                        </WhatsAppButton>
                        <a
                            href={`tel:${businessInfo.phone}`}
                            className="bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition-colors inline-flex items-center justify-center space-x-2"
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

export default HearingCareServicesPage;
