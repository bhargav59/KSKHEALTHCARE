import React from 'react';
import MapEmbed from '../components/MapEmbed';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    Phone, Mail, MapPin, Clock, Star, ArrowLeft, CheckCircle, Award,
    Activity, Shield, Target, Zap, MessageCircle, Calendar, Leaf, Heart,
    Droplets, Wind, Sun, Moon
} from 'lucide-react';

const AyurvedicServicesPage = () => {
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

    const ayurvedicServices = [
        {
            id: 1,
            name: 'Complete Panchakarma Detox Program',
            description: 'Comprehensive 7-21 day detoxification program combining all five purification methods to eliminate deep-seated toxins and restore natural balance.',
            benefits: [
                'Complete body detoxification',
                'Immune system strengthening',
                'Mental clarity and emotional balance',
                'Improved digestive health',
                'Enhanced energy and vitality',
                'Weight management',
                'Stress reduction and relaxation'
            ],
            icon: Leaf,
            duration: '7-21 days',
            category: 'Detox Program'
        },
        {
            id: 2,
            name: 'Abhyanga (Ayurvedic Full Body Massage)',
            description: 'Traditional warm oil massage using medicated oils customized to your dosha. Improves circulation, relieves muscle tension, and nourishes the skin.',
            benefits: [
                'Deep muscle relaxation',
                'Improved blood circulation',
                'Skin nourishment and glow',
                'Stress and anxiety relief',
                'Better sleep quality',
                'Joint flexibility enhancement',
                'Lymphatic drainage'
            ],
            icon: Heart,
            duration: '60-90 minutes',
            category: 'Massage Therapy'
        },
        {
            id: 3,
            name: 'Shirodhara (Oil Pouring Therapy)',
            description: 'Continuous stream of warm medicated oil poured gently over the forehead and scalp. Deeply relaxing therapy for nervous system disorders.',
            benefits: [
                'Mental stress and anxiety relief',
                'Improved sleep and insomnia treatment',
                'Migraine and headache relief',
                'Enhanced memory and concentration',
                'Nervous system strengthening',
                'Hair growth and scalp health',
                'Emotional balance and tranquility'
            ],
            icon: Droplets,
            duration: '45-60 minutes',
            category: 'Relaxation Therapy'
        },
        {
            id: 4,
            name: 'Nasya (Nasal Therapy)',
            description: 'Medicated oil or herbal preparations administered through nasal passages to treat disorders of head, neck, and respiratory system.',
            benefits: [
                'Sinusitis and allergic rhinitis relief',
                'Chronic headache treatment',
                'Respiratory disorder management',
                'Mental clarity enhancement',
                'Hair fall and premature graying prevention',
                'Voice improvement',
                'Cervical spondylosis relief'
            ],
            icon: Wind,
            duration: '30-45 minutes',
            category: 'Therapeutic Treatment'
        },
        {
            id: 5,
            name: 'Kizhi (Herbal Poultice Therapy)',
            description: 'Warm herbal poultices applied to specific body parts to reduce inflammation, improve circulation, and provide pain relief.',
            benefits: [
                'Joint pain and arthritis relief',
                'Muscle inflammation reduction',
                'Improved circulation',
                'Flexibility enhancement',
                'Chronic pain management',
                'Skin condition improvement',
                'Stress and tension relief'
            ],
            icon: Sun,
            duration: '45-60 minutes',
            category: 'Pain Management'
        },
        {
            id: 6,
            name: 'Pizhichil (Royal Treatment)',
            description: 'Luxurious therapy combining oil massage with continuous warm oil pouring. Known as the "King of Ayurvedic treatments" for ultimate relaxation.',
            benefits: [
                'Deep relaxation and stress relief',
                'Nervous system rejuvenation',
                'Muscle and joint nourishment',
                'Skin texture improvement',
                'Enhanced flexibility',
                'Overall vitality boost',
                'Premature aging prevention'
            ],
            icon: Shield,
            duration: '90-120 minutes',
            category: 'Luxury Therapy'
        },
        {
            id: 7,
            name: 'Udvartana (Herbal Powder Massage)',
            description: 'Invigorating massage using herbal powders to stimulate circulation, reduce cellulite, and promote weight loss.',
            benefits: [
                'Weight reduction and cellulite removal',
                'Improved skin texture',
                'Enhanced circulation',
                'Lymphatic drainage',
                'Body toning and firming',
                'Excess oil balance',
                'Metabolic enhancement'
            ],
            icon: Activity,
            duration: '45-60 minutes',
            category: 'Body Shaping'
        },
        {
            id: 8,
            name: 'Akshi Tarpana (Eye Treatment)',
            description: 'Specialized eye therapy using medicated ghee to nourish and strengthen the eyes, improving vision and relieving eye strain.',
            benefits: [
                'Eye strain and fatigue relief',
                'Vision improvement',
                'Dry eye syndrome treatment',
                'Computer vision syndrome relief',
                'Eye muscle strengthening',
                'Dark circles reduction',
                'Overall eye health enhancement'
            ],
            icon: Target,
            duration: '30-45 minutes',
            category: 'Eye Care'
        },
        {
            id: 9,
            name: 'Yoni Prakshalanam (Ayurvedic Feminine Care)',
            description: 'Gentle therapeutic treatment for women\'s reproductive health using herbal decoctions and medicated oils.',
            benefits: [
                'Menstrual disorder management',
                'PCOD/PCOS symptom relief',
                'Reproductive health enhancement',
                'Hormonal balance',
                'Post-delivery care',
                'Infection prevention',
                'Overall feminine wellness'
            ],
            icon: Moon,
            duration: '30-45 minutes',
            category: 'Women\'s Health'
        }
    ];

    const testimonial = {
        name: 'Anjali Nair',
        location: 'Doddanekundi, Bengaluru',
        text: 'After struggling with chronic stress and digestive issues from Bengaluru\'s hectic lifestyle, I decided to try the Panchakarma program at KSK Healthcare in Doddanekundi. The 14-day detox program was transformative - not only did my digestion improve dramatically, but I also feel more energetic and mentally clear than I have in years. The traditional approach combined with modern understanding made all the difference.',
        rating: 5,
        condition: 'Chronic Stress & Digestive Issues'
    };

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Ayurvedic & Panchakarma Therapy in Doddanekundi, Bengaluru | KSK Healthcare</title>
                <meta name="description" content="Authentic Ayurveda & Panchakarma in Doddanekundi. Detox programs, Shirodhara, Abhyanga massage & traditional healing. Government-certified. Book today!" />
                <meta name="keywords" content="Ayurveda Doddanekundi, Panchakarma Bengaluru, Shirodhara, Abhyanga, Ayurvedic massage, detox therapy, KSK Healthcare" />
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
            <section className="bg-gradient-to-r from-green-50 via-yellow-50 to-orange-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Authentic <span className="text-green-600">Ayurvedic & Panchakarma</span><br />
                            Treatments in Doddanekundi, Bengaluru
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                            Discover the ancient science of Ayurveda at KSK Healthcare in Doddanekundi. Our AYUSH-certified
                            practitioners offer traditional Panchakarma detox programs and therapeutic treatments that address
                            the root cause of health issues common among Bengaluru's urban population. Experience holistic
                            healing that balances mind, body, and spirit naturally.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <WhatsAppButton
                                message="Hello KSK Healthcare, I would like to know more about Ayurvedic & Panchakarma treatments in Doddanekundi."
                                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center space-x-2"
                                showIcon={true}
                            >
                                Book Ayurvedic Consultation
                            </WhatsAppButton>
                            <a href={`tel:${businessInfo.phone}`} className="bg-white border border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center space-x-2">
                                <Phone className="h-5 w-5" />
                                <span>Call Now</span>
                            </a>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4 text-green-600" />
                            <span>AYUSH Certified Practitioners</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>4.9/5 Rating from Doddanekundi Clients</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Authentic Traditional Methods</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Comprehensive <span className="text-green-600">Ayurvedic Therapies</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our wide range of authentic Ayurvedic treatments are designed to address the modern health
                            challenges faced by residents of Doddanekundi and greater Bengaluru area.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ayurvedicServices.map((service) => (
                            <div key={service.id} className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="bg-green-100 rounded-full p-3">
                                        <service.icon className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                                        <div className="flex items-center space-x-2 text-sm">
                                            <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">{service.category}</span>
                                            <span className="text-green-600 font-medium">{service.duration}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Benefits:</h4>
                                    <div className="space-y-1">
                                        {service.benefits.slice(0, 4).map((benefit, index) => (
                                            <div key={index} className="flex items-start space-x-2">
                                                <CheckCircle className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                                                <span className="text-xs text-gray-600">{benefit}</span>
                                            </div>
                                        ))}
                                        {service.benefits.length > 4 && (
                                            <p className="text-xs text-green-600 font-medium">+{service.benefits.length - 4} more benefits</p>
                                        )}
                                    </div>
                                </div>

                                <WhatsAppButton
                                    message={`Hello KSK Healthcare, I would like to book ${service.name} treatment in Doddanekundi.`}
                                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 text-sm"
                                    showIcon={true}
                                >
                                    Book {service.category}
                                </WhatsAppButton>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Panchakarma Special Section */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Experience Complete <span className="text-yellow-200">Panchakarma Detox</span>
                        </h2>
                        <p className="text-xl text-green-100 max-w-3xl mx-auto">
                            Our signature Panchakarma program is perfect for Bengaluru professionals seeking deep detoxification
                            and rejuvenation from urban stress and pollution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {[
                            { name: 'Vamana', desc: 'Therapeutic Vomiting', icon: Wind },
                            { name: 'Virechana', desc: 'Purgation Therapy', icon: Droplets },
                            { name: 'Basti', desc: 'Medicated Enemas', icon: Heart },
                            { name: 'Nasya', desc: 'Nasal Therapy', icon: Target },
                            { name: 'Raktamokshana', desc: 'Blood Purification', icon: Activity }
                        ].map((therapy, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <therapy.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{therapy.name}</h3>
                                <p className="text-green-100 text-sm">{therapy.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <WhatsAppButton
                            message="Hello KSK Healthcare, I would like to know more about the complete Panchakarma detox program in Doddanekundi."
                            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                            showIcon={true}
                        >
                            Learn About Panchakarma Program
                        </WhatsAppButton>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Doddanekundi Residents Choose <span className="text-green-600">Our Ayurvedic Center</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-xl p-8 text-center shadow-md">
                            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Award className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentic Tradition</h3>
                            <p className="text-gray-600">AYUSH certified practitioners following authentic 5000-year-old Ayurvedic principles.</p>
                        </div>

                        <div className="bg-white rounded-xl p-8 text-center shadow-md">
                            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Leaf className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Pure Herbal Medicine</h3>
                            <p className="text-gray-600">Organic herbs and medicated oils sourced from trusted suppliers for maximum efficacy.</p>
                        </div>

                        <div className="bg-white rounded-xl p-8 text-center shadow-md">
                            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Heart className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Care</h3>
                            <p className="text-gray-600">Individual dosha assessment and customized treatment plans for optimal results.</p>
                        </div>

                        <div className="bg-white rounded-xl p-8 text-center shadow-md">
                            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Shield className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Hygiene</h3>
                            <p className="text-gray-600">Traditional treatments with modern hygiene standards and safety protocols.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Transformation Stories from <span className="text-green-600">Doddanekundi</span>
                        </h2>
                    </div>

                    <div className="bg-green-50 rounded-xl p-8 text-center">
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
                            <p className="text-green-600 font-medium">{testimonial.condition}</p>
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
                                Begin Your Ayurvedic Journey in <span className="text-green-600">Doddanekundi</span>
                            </h2>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-green-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Address</h3>
                                        <p className="text-gray-600">{businessInfo.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Phone className="h-6 w-6 text-green-600" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Phone</h3>
                                        <p className="text-gray-600">{businessInfo.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Clock className="h-6 w-6 text-green-600" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Treatment Hours</h3>
                                        <p className="text-gray-600">Monday - Sunday: 9:00 AM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <WhatsAppButton
                                    message="Hello KSK Healthcare, I would like to book an Ayurvedic consultation and treatment at your Doddanekundi center."
                                    className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                                    showIcon={true}
                                >
                                    Book Ayurvedic Consultation
                                </WhatsAppButton>

                                <a
                                    href={`tel:${businessInfo.phone}`}
                                    className="w-full bg-white border border-green-600 text-green-600 py-4 px-6 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>Call for Immediate Consultation</span>
                                </a>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="bg-gray-100 rounded-xl overflow-hidden aspect-[3/2]">
                            <MapEmbed title="KSK Healthcare - Ayurvedic & Panchakarma Center in Doddanekundi, Bengaluru" height={400} className="rounded-xl" />
                            <div className="p-4 bg-white">
                                <h4 className="font-semibold text-gray-900 mb-2">KSK Healthcare - Doddanekundi</h4>
                                <p className="text-sm text-gray-600 mb-2">
                                    Authentic Ayurvedic & Panchakarma Treatment Center in Bengaluru
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/LfKjkmm7VcutWpE27"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-1 text-green-600 hover:text-green-700 text-sm"
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
                            Who Benefits from <span className="text-green-600">Ayurveda & Panchakarma</span>?
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Ancient healing science for modern health challenges - suitable for all constitutions and ages.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                <Target className="h-5 w-5 text-green-600" />
                                <span>Conditions We Treat</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-medium text-green-600 mb-2">Musculoskeletal</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Arthritis & joint pain</li>
                                        <li>• Chronic back & neck pain</li>
                                        <li>• Muscle stiffness & inflammation</li>
                                        <li>• Sports injuries & strains</li>
                                        <li>• Fibromyalgia & chronic fatigue</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-2">Digestive Health</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• IBS & digestive disorders</li>
                                        <li>• Acid reflux & hyperacidity</li>
                                        <li>• Constipation & bloating</li>
                                        <li>• Loss of appetite</li>
                                        <li>• Liver detoxification</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-2">Hormonal Balance</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• PCOD/PCOS management</li>
                                        <li>• Menstrual irregularities</li>
                                        <li>• Fertility enhancement</li>
                                        <li>• Thyroid disorders</li>
                                        <li>• Menopause support</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-2">Lifestyle Diseases</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Diabetes management</li>
                                        <li>• Hypertension control</li>
                                        <li>• Cholesterol management</li>
                                        <li>• Weight management</li>
                                        <li>• Stress & anxiety</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-2">Skin & Hair</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Eczema & psoriasis</li>
                                        <li>• Acne & pigmentation</li>
                                        <li>• Hair loss & premature graying</li>
                                        <li>• Allergic skin conditions</li>
                                        <li>• Anti-aging treatments</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-2">Mental Health</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Depression & mood disorders</li>
                                        <li>• Anxiety & panic attacks</li>
                                        <li>• Insomnia & sleep disorders</li>
                                        <li>• Memory & concentration issues</li>
                                        <li>• Stress-related disorders</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span>Ideal Candidates</span>
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-green-50 rounded-lg">
                                    <h4 className="font-medium text-green-800 mb-2">✅ Perfect For</h4>
                                    <ul className="space-y-1 text-sm text-green-700">
                                        <li>• All ages (children to seniors)</li>
                                        <li>• Chronic disease management</li>
                                        <li>• Preventive health & wellness</li>
                                        <li>• Natural detoxification seekers</li>
                                        <li>• Those wanting holistic healing</li>
                                        <li>• Individuals seeking lifestyle balance</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <h4 className="font-medium text-blue-800 mb-2">🎯 Special Programs</h4>
                                    <ul className="space-y-1 text-sm text-blue-700">
                                        <li>• Pre/post-surgery recovery</li>
                                        <li>• Pregnancy & postnatal care</li>
                                        <li>• Senior citizen wellness</li>
                                        <li>• Corporate stress management</li>
                                        <li>• Sports performance enhancement</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-yellow-50 rounded-lg">
                                    <h4 className="font-medium text-yellow-800 mb-2">⚠️ Special Considerations</h4>
                                    <ul className="space-y-1 text-sm text-yellow-700">
                                        <li>• Pregnancy (specialized protocols)</li>
                                        <li>• Heart conditions (consultation required)</li>
                                        <li>• Severe diabetes (modified approach)</li>
                                        <li>• Recent surgeries (timing important)</li>
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
                            Why Choose <span className="text-green-600">Ayurveda & Panchakarma</span>?
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            See how Ayurvedic treatment compares to other healing modalities for holistic wellness.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-green-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Comparison Factor</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Ayurveda/Panchakarma</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Allopathic Medicine</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Spa Treatments</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Generic Supplements</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Personalization</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Highly Individualized</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Standardized</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Generic</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">One-size-fits-all</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Root Cause Treatment</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Yes - Addresses Core</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">Symptom Management</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Temporary Relief</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">Surface Level</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Side Effects</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Minimal/None</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">Common & Serious</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">None</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Variable</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Preventive Care</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Strong Focus</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Limited</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Minimal</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Basic</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Holistic Approach</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Complete Mind-Body</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">Disease-focused</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Relaxation-focused</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">Symptom-targeted</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Long-term Value</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Excellent</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Ongoing Costs</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">Expensive</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Variable</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-8 bg-green-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">🌟 Unique Benefits of Ayurveda</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• 5000+ years of proven healing wisdom</li>
                                <li>• Treats constitution, not just disease</li>
                                <li>• Natural detoxification without chemicals</li>
                                <li>• Builds immunity and prevents disease</li>
                            </ul>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Integrates seamlessly with modern medicine</li>
                                <li>• Enhances quality of life and longevity</li>
                                <li>• Sustainable lifestyle transformation</li>
                                <li>• Suitable for all ages and conditions</li>
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
                            Frequently Asked <span className="text-green-600">Questions</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Common questions about Ayurvedic treatment and Panchakarma therapy at KSK Healthcare.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔍 Treatment Process</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: What happens during my first Ayurvedic consultation?</h4>
                                    <p className="text-sm text-gray-600">A: Our 60-minute consultation includes detailed health history, pulse diagnosis, tongue examination, and lifestyle assessment. We determine your dosha (constitution) and create a personalized treatment plan based on your unique needs.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: What is Panchakarma and how does it work?</h4>
                                    <p className="text-sm text-gray-600">A: Panchakarma is a 5-step detoxification process that eliminates toxins, balances doshas, and rejuvenates the body. It includes oil therapies, steam treatments, specialized massages, and cleansing procedures customized to your constitution.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: Are the oils and herbs safe and authentic?</h4>
                                    <p className="text-sm text-gray-600">A: Yes, we use only authentic, high-quality oils and herbs sourced from certified suppliers. All preparations follow traditional formulations and are prepared under strict quality control. Our herbs are organic and chemical-free.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">📈 Expected Results</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: How soon will I see improvements?</h4>
                                    <p className="text-sm text-gray-600">A: Initial relaxation and improved sleep often occur within 2-3 sessions. Chronic conditions typically show significant improvement after 7-14 days of treatment. Complete transformation usually takes 21 days to 3 months depending on the condition.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: What conditions show the best results?</h4>
                                    <p className="text-sm text-gray-600">A: Excellent results for arthritis (85% improvement), digestive disorders (90%), stress-related conditions (80%), skin problems (75%), and hormonal imbalances (70%). Lifestyle diseases respond particularly well to Ayurvedic treatment.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: Are the results permanent?</h4>
                                    <p className="text-sm text-gray-600">A: Ayurveda creates lasting changes by addressing root causes and rebalancing your constitution. Following prescribed diet, lifestyle modifications, and periodic maintenance treatments help maintain long-term health benefits.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">⚠️ Safety & Considerations</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: Are there any side effects of Ayurvedic treatment?</h4>
                                    <p className="text-sm text-gray-600">A: Ayurvedic treatments are generally very safe. Some people may experience temporary detox symptoms like mild fatigue or changes in bowel movements. These are normal healing responses that typically resolve within 2-3 days.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: Can I continue my regular medications?</h4>
                                    <p className="text-sm text-gray-600">A: Yes, Ayurveda complements conventional medicine safely. Always inform both your Ayurvedic practitioner and regular doctor about all treatments. Many patients find they can gradually reduce medications under medical supervision.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: What should I eat during treatment?</h4>
                                    <p className="text-sm text-gray-600">A: We provide detailed dietary guidelines based on your dosha and condition. Generally, we recommend warm, cooked foods, avoiding processed foods, cold drinks, and heavy meals. Specific restrictions depend on your treatment plan.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">📅 Treatment Duration</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: How long does a typical treatment program last?</h4>
                                    <p className="text-sm text-gray-600">A: Treatment duration varies by condition:</p>
                                    <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-600">
                                        <li>• Stress & digestive issues: 7-14 days</li>
                                        <li>• Chronic pain & arthritis: 14-21 days</li>
                                        <li>• Lifestyle diseases: 21-45 days</li>
                                        <li>• Preventive/wellness: 7 days quarterly</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: How often should I come for sessions?</h4>
                                    <p className="text-sm text-gray-600">A: During active treatment: daily sessions are recommended. For maintenance: weekly to monthly sessions. The frequency depends on your condition, constitution, and response to treatment.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: What's the best time of year for Panchakarma?</h4>
                                    <p className="text-sm text-gray-600">A: While Panchakarma can be done year-round, spring (March-May) and autumn (September-November) are considered ideal as the body naturally detoxifies during seasonal transitions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-green-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Health Naturally?
                    </h2>
                    <p className="text-xl mb-8 text-green-100">
                        Join thousands of satisfied patients from Doddanekundi and across Bengaluru who have experienced
                        the healing power of authentic Ayurveda and Panchakarma treatments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <WhatsAppButton
                            message="Hello KSK Healthcare, I'm ready to start my Ayurvedic healing journey in Doddanekundi. Please help me book a consultation."
                            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                            showIcon={true}
                        >
                            Start Your Ayurvedic Journey
                        </WhatsAppButton>
                        <a
                            href={`tel:${businessInfo.phone}`}
                            className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors inline-flex items-center justify-center space-x-2"
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

export default AyurvedicServicesPage;
