import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MapEmbed from '../components/MapEmbed';
import {
    Phone, Mail, MapPin, Clock, Star, ArrowLeft, CheckCircle, Award,
    Activity, Shield, Target, Zap, MessageCircle, Calendar
} from 'lucide-react';

const AcupunctureServicesPage = () => {
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

    const acupunctureServices = [
        {
            id: 1,
            name: 'Acupuncture Diagnosis & Therapy',
            description: 'An in-depth energy-based evaluation using traditional Chinese diagnostics followed by precise needle therapy on acupuncture meridians.',
            conditions: [
                'Chronic pain (back, neck, knee, shoulder)',
                'Disc issues & sciatica',
                'Menstrual problems, PCOD/PCOS',
                'Digestive issues (gas, constipation, IBS)',
                'Headaches, sinusitis, and allergy',
                'Anxiety, stress, and sleep disorders'
            ],
            icon: Activity
        },
        {
            id: 2,
            name: 'Neuro-Acupuncture',
            description: 'Advanced Brain & Nerve Stimulation through Acupuncture. Integrates classical Chinese acupuncture with neuromodulation to address nervous system and brain development conditions.',
            conditions: [
                'Autism Spectrum Disorder (ASD)',
                'ADHD (Attention Deficit Hyperactivity Disorder)',
                'Speech Delay & Communication Challenges',
                'Memory Problems & Brain Fog',
                'Poor Concentration & Learning Difficulties',
                'Cerebral Palsy & Developmental Delay',
                'Facial palsy / Bell\'s Palsy',
                'Migraine & Neurological Pain',
                'Post-stroke Rehabilitation',
                'Parkinson\'s disease & Dementia',
                'Anxiety, Depression & Emotional Dysregulation'
            ],
            icon: Zap
        },
        {
            id: 3,
            name: 'Auricular Acupuncture (Ear Acupuncture)',
            description: 'Micro-system acupuncture through ear points linked to the brain. Stimulates specific nerve endings and reflex points on the ear that correspond to organ systems.',
            conditions: [
                'Hearing Loss (Sensorineural & Conductive)',
                'Tinnitus (Ringing in the Ear)',
                'Vertigo & Vestibular Balance Disorders',
                'Stress, Anxiety & Sleep Disturbance',
                'Addiction, Cravings & Withdrawal',
                'Appetite Control & Weight Regulation',
                'Pain Management & Inflammation Relief'
            ],
            icon: Target
        },
        {
            id: 4,
            name: 'Cosmetic Acupuncture',
            description: 'A natural facial rejuvenation method that improves circulation, reduces wrinkles, and promotes healthy glowing skin without chemicals.',
            conditions: [
                'Wrinkles and fine lines',
                'Facial muscle sagging',
                'Acne, pigmentation',
                'Hair thinning',
                'Puffy eyes and dark circles'
            ],
            icon: Shield
        }
    ];

    const testimonial = {
        name: 'Ramesh Kumar',
        location: 'Doddanekundi, Bengaluru',
        text: 'For years, I suffered from debilitating back pain that affected my daily work in Bengaluru\'s IT sector. After just a few sessions of acupuncture at KSK Healthcare in Doddanekundi, I feel like a new person. The relief is incredible, and Dr. Swetha\'s team is so supportive and knowledgeable about treating chronic pain.',
        rating: 5,
        condition: 'Chronic Back Pain'
    };

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Acupuncture Therapy Services in Doddanekundi, Bengaluru | KSK Healthcare</title>
                <meta name="description" content="Expert acupuncture in Doddanekundi Bangalore for pain relief, PCOD, fertility & stress. Traditional Chinese medicine with 12+ years experience. Book consultation today!" />
                <meta name="keywords" content="acupuncture Doddanekundi, acupuncture Bengaluru, chronic pain relief, neuro-acupuncture, ear acupuncture, cosmetic acupuncture, KSK Healthcare" />
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
            <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Professional <span className="text-green-600">Acupuncture Therapy</span><br />
                            Services in Doddanekundi, Bengaluru
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                            At KSK Healthcare in Doddanekundi, our highly experienced acupuncture specialists use time-tested
                            techniques to stimulate your body's natural healing system. Each therapy is tailored to individual
                            health needs of Bengaluru residents, restoring energy balance and relieving deep-rooted conditions
                            without drugs or surgery.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <WhatsAppButton
                                message="Hello KSK Healthcare, I would like to book an acupuncture consultation in Doddanekundi."
                                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center space-x-2"
                                showIcon={true}
                            >
                                Book Acupuncture Consultation
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
                            <span>RCI Certified Practitioners</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>4.9/5 Rating from Doddanekundi Patients</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>12+ Years Serving Bengaluru</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Comprehensive <span className="text-green-600">Acupuncture Services</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our specialized acupuncture treatments address the unique health challenges faced by residents
                            of Doddanekundi and greater Bengaluru, from stress-related disorders to chronic pain conditions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {acupunctureServices.map((service) => (
                            <div key={service.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="bg-green-100 rounded-full p-3">
                                        <service.icon className="h-6 w-6 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                                </div>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Effectively Treats:</h4>
                                    <div className="grid grid-cols-1 gap-2">
                                        {service.conditions.map((condition, index) => (
                                            <div key={index} className="flex items-start space-x-2">
                                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-gray-600">{condition}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <WhatsAppButton
                                    message={`Hello KSK Healthcare, I would like to know more about ${service.name} treatment in Doddanekundi.`}
                                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                                    showIcon={true}
                                >
                                    Learn More About {service.name}
                                </WhatsAppButton>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Doddanekundi Residents Choose <span className="text-green-600">KSK Healthcare</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 text-center shadow-md">
                            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Award className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Practitioners</h3>
                            <p className="text-gray-600">RCI certified acupuncturists with 12+ years of experience serving Bengaluru's diverse population.</p>
                        </div>

                        <div className="bg-white rounded-xl p-8 text-center shadow-md">
                            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <MapPin className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Convenient Doddanekundi Location</h3>
                            <p className="text-gray-600">Easily accessible from Whitefield, Marathahalli, and surrounding Bengaluru areas with ample parking.</p>
                        </div>

                        <div className="bg-white rounded-xl p-8 text-center shadow-md">
                            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Shield className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe & Sterile Practice</h3>
                            <p className="text-gray-600">We use only sterile, single-use needles and follow international safety protocols for your protection.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Our <span className="text-green-600">Doddanekundi Patients</span> Say
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
                                Visit Our <span className="text-green-600">Doddanekundi Clinic</span>
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
                                        <h3 className="font-semibold text-gray-900">Clinic Hours</h3>
                                        <p className="text-gray-600">Monday - Sunday: 9:00 AM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <WhatsAppButton
                                    message="Hello KSK Healthcare, I would like to book an acupuncture appointment at your Doddanekundi clinic."
                                    className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                                    showIcon={true}
                                >
                                    Book Acupuncture Appointment
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
                            <MapEmbed title="KSK Healthcare - Acupuncture Services in Doddanekundi, Bengaluru" height={400} className="rounded-xl" />
                            <div className="p-4 bg-white">
                                <h4 className="font-semibold text-gray-900 mb-2">KSK Healthcare - Doddanekundi</h4>
                                <p className="text-sm text-gray-600 mb-2">
                                    Premier Acupuncture & Holistic Wellness Center in Bengaluru
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
                            Who Can Benefit from <span className="text-green-600">Acupuncture</span>?
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our acupuncture treatments are safe and effective for a wide range of conditions and age groups.
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
                                    <h4 className="font-medium text-green-600 mb-2">Pain Management</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Chronic back & neck pain</li>
                                        <li>• Arthritis & joint pain</li>
                                        <li>• Fibromyalgia</li>
                                        <li>• Sciatica & nerve pain</li>
                                        <li>• Migraine & headaches</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-2">Women's Health</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Menstrual irregularities</li>
                                        <li>• PCOD/PCOS</li>
                                        <li>• Fertility support</li>
                                        <li>• Menopause symptoms</li>
                                        <li>• Pregnancy-related issues</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-2">Mental Health</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Anxiety & depression</li>
                                        <li>• Stress management</li>
                                        <li>• Sleep disorders</li>
                                        <li>• PTSD support</li>
                                        <li>• Addiction recovery</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-2">Neurological</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Autism spectrum disorders</li>
                                        <li>• ADHD & learning difficulties</li>
                                        <li>• Speech delays</li>
                                        <li>• Post-stroke recovery</li>
                                        <li>• Facial palsy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span>Eligibility Criteria</span>
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-green-50 rounded-lg">
                                    <h4 className="font-medium text-green-800 mb-2">✅ Ideal Candidates</h4>
                                    <ul className="space-y-1 text-sm text-green-700">
                                        <li>• Ages 2 years and above</li>
                                        <li>• Chronic conditions not responding to conventional treatment</li>
                                        <li>• Those seeking drug-free pain management</li>
                                        <li>• Patients wanting complementary therapy alongside medical care</li>
                                        <li>• Individuals with stress-related conditions</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-yellow-50 rounded-lg">
                                    <h4 className="font-medium text-yellow-800 mb-2">⚠️ Special Considerations</h4>
                                    <ul className="space-y-1 text-sm text-yellow-700">
                                        <li>• Pregnancy (specialized prenatal protocols)</li>
                                        <li>• Blood clotting disorders (consultation required)</li>
                                        <li>• Pacemaker users (alternative techniques available)</li>
                                        <li>• Severe needle phobia (ear seeds/acupressure alternatives)</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-red-50 rounded-lg">
                                    <h4 className="font-medium text-red-800 mb-2">❌ Contraindications</h4>
                                    <ul className="space-y-1 text-sm text-red-700">
                                        <li>• Active infection at needle sites</li>
                                        <li>• Severe bleeding disorders</li>
                                        <li>• Certain heart valve conditions</li>
                                        <li>• Local skin conditions at treatment points</li>
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
                            Why Choose <span className="text-green-600">Acupuncture</span>?
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            See how acupuncture compares to other treatment options for holistic healing.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-green-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Treatment Aspect</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Acupuncture</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Pain Medications</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Surgery</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Physiotherapy</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Side Effects</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Minimal to None</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">High Risk</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">Significant</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Low</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Cost Effectiveness</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">High</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Moderate</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">High Cost</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Moderate</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Recovery Time</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Gradual & Lasting</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Temporary</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">Weeks to Months</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Moderate</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Holistic Approach</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Complete</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">Symptom Only</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Limited</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Good</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Long-term Benefits</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Excellent</td>
                                        <td className="px-6 py-4 text-center text-sm text-red-600">Poor</td>
                                        <td className="px-6 py-4 text-center text-sm text-yellow-600">Variable</td>
                                        <td className="px-6 py-4 text-center text-sm text-green-600">Good</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-8 bg-green-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">✨ Unique Benefits of Acupuncture</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Treats root cause, not just symptoms</li>
                                <li>• Enhances body's natural healing mechanisms</li>
                                <li>• Can complement other treatments safely</li>
                                <li>• Improves overall energy and vitality</li>
                            </ul>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• No drug interactions or dependencies</li>
                                <li>• Personalizable to individual constitution</li>
                                <li>• Preventive health benefits</li>
                                <li>• Suitable for all age groups</li>
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
                            Get answers to common questions about acupuncture treatment at KSK Healthcare.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔍 Treatment Process</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: What happens during my first acupuncture session?</h4>
                                    <p className="text-sm text-gray-600">A: Your first visit includes a comprehensive consultation (30 minutes) where we review your health history, current symptoms, and lifestyle. This is followed by a gentle acupuncture treatment (30-45 minutes) tailored to your specific needs.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: Does acupuncture hurt?</h4>
                                    <p className="text-sm text-gray-600">A: Most patients experience minimal discomfort. Our ultra-fine, sterile needles are much thinner than injection needles. You may feel a tiny pinch during insertion, followed by a dull ache or tingling sensation, which indicates the treatment is working.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: How clean and safe is the treatment?</h4>
                                    <p className="text-sm text-gray-600">A: We follow strict hygiene protocols with single-use, pre-sterilized needles, UV sterilization equipment, and maintain clinical-grade cleanliness standards. All practitioners are licensed and follow international safety guidelines.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">📈 Expected Outcomes</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: How soon will I see results?</h4>
                                    <p className="text-sm text-gray-600">A: Results vary by condition and individual. Acute issues may improve within 1-3 sessions, while chronic conditions typically show significant improvement after 6-8 sessions. Some patients notice immediate relief, while others experience gradual improvement over weeks.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: What is the success rate for common conditions?</h4>
                                    <p className="text-sm text-gray-600">A: Our clinic sees 85-90% improvement rates for chronic pain, 80% for stress-related disorders, 75% for digestive issues, and 70% for neurological conditions. Success rates depend on condition severity, consistency of treatment, and individual response.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: Are the results permanent?</h4>
                                    <p className="text-sm text-gray-600">A: Acupuncture creates lasting changes by restoring natural balance. While some conditions may require occasional maintenance sessions, many patients experience long-term relief. Lifestyle factors and underlying health play important roles in maintaining results.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">⚠️ Side Effects & Safety</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: Are there any side effects?</h4>
                                    <p className="text-sm text-gray-600">A: Acupuncture is extremely safe when performed by licensed practitioners. Mild side effects may include temporary soreness at needle sites, minor bruising, or feeling relaxed/tired after treatment. Serious side effects are extremely rare.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: Can I take my regular medications?</h4>
                                    <p className="text-sm text-gray-600">A: Yes, acupuncture complements conventional medicine safely. Always inform us about medications you're taking. Many patients find they can reduce medication dependence over time, but any changes should be made with your primary physician's guidance.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: What should I do after treatment?</h4>
                                    <p className="text-sm text-gray-600">A: Drink plenty of water, avoid intense exercise for 24 hours, and get adequate rest. Some patients feel energized while others feel deeply relaxed. Both responses are normal and indicate your body is responding to treatment.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">📅 Treatment Schedule</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: How many sessions will I need?</h4>
                                    <p className="text-sm text-gray-600">A: Treatment plans are personalized based on your condition:</p>
                                    <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-600">
                                        <li>• Acute conditions: 3-6 sessions</li>
                                        <li>• Chronic pain: 8-12 sessions</li>
                                        <li>• Neurological conditions: 12-20 sessions</li>
                                        <li>• Wellness/prevention: Monthly maintenance</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: How often should I come for treatment?</h4>
                                    <p className="text-sm text-gray-600">A: Initially, we recommend 1-2 sessions per week for optimal results. As you improve, sessions can be spaced further apart. The frequency depends on your condition severity and response to treatment.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-600 mb-1">Q: Can I combine acupuncture with other treatments?</h4>
                                    <p className="text-sm text-gray-600">A: Absolutely! Acupuncture works excellently alongside physiotherapy, Ayurveda, conventional medicine, and other therapies. We often coordinate with your other healthcare providers for comprehensive care.</p>
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
                        Ready to Experience Natural Pain Relief?
                    </h2>
                    <p className="text-xl mb-8 text-green-100">
                        Join hundreds of satisfied patients from Doddanekundi and across Bengaluru who have found
                        lasting relief through our expert acupuncture treatments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <WhatsAppButton
                            message="Hello KSK Healthcare, I'm ready to start my acupuncture treatment in Doddanekundi. Please help me book an appointment."
                            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                            showIcon={true}
                        >
                            Start Your Healing Journey
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

export default AcupunctureServicesPage;
