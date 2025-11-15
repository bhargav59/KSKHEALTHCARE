import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    Phone, Mail, MapPin, Clock, Star, ArrowLeft, CheckCircle, Award,
    Activity, Shield, Target, Zap, MessageCircle, Calendar, Brain,
    Heart, Gamepad2, Users, Volume2, Eye, Hand, Lightbulb, ExternalLink
} from 'lucide-react';
import SimpleMapRedirect from '../components/SimpleMapRedirect';

const NeuroRehabServicesPage = () => {
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

    const neuroRehabServices = [
        {
            id: 1,
            name: 'ASD (Autism Spectrum Disorder) Therapy',
            description: 'Comprehensive intervention program combining behavioral therapy, sensory integration, and communication training to help children with autism develop essential life skills.',
            conditions: [
                'Social communication difficulties',
                'Repetitive behaviors and restricted interests',
                'Sensory processing challenges',
                'Difficulty with social interactions',
                'Language and communication delays',
                'Adaptive behavior development'
            ],
            ageGroup: '2-18 years',
            icon: Users,
            duration: '60-90 minutes',
            category: 'Developmental Therapy'
        },
        {
            id: 2,
            name: 'ADHD (Attention Deficit Hyperactivity Disorder) Management',
            description: 'Structured therapy program focusing on attention training, impulse control, and behavioral modification techniques to improve focus and reduce hyperactivity.',
            conditions: [
                'Attention and concentration problems',
                'Hyperactivity and restlessness',
                'Impulsive behavior',
                'Academic performance issues',
                'Social skill deficits',
                'Executive function challenges'
            ],
            ageGroup: '4-16 years',
            icon: Lightbulb,
            duration: '45-60 minutes',
            category: 'Behavioral Therapy'
        },
        {
            id: 3,
            name: 'Speech & Language Therapy',
            description: 'Specialized therapy to address speech delays, articulation problems, and language development issues through evidence-based techniques and exercises.',
            conditions: [
                'Speech delay and articulation disorders',
                'Language comprehension difficulties',
                'Stuttering and fluency problems',
                'Voice disorders',
                'Swallowing difficulties (dysphagia)',
                'Communication skill development'
            ],
            ageGroup: '1-16 years',
            icon: Volume2,
            duration: '45 minutes',
            category: 'Communication Therapy'
        },
        {
            id: 4,
            name: 'Sensory Integration Therapy',
            description: 'Therapeutic activities designed to help children process sensory information more effectively and respond appropriately to their environment.',
            conditions: [
                'Sensory processing disorder',
                'Over-responsivity to sensory input',
                'Under-responsivity to stimuli',
                'Sensory seeking behaviors',
                'Motor planning difficulties',
                'Attention and focus issues'
            ],
            ageGroup: '2-12 years',
            icon: Activity,
            duration: '45-60 minutes',
            category: 'Sensory Therapy'
        },
        {
            id: 5,
            name: 'Cognitive Rehabilitation Therapy',
            description: 'Targeted exercises and activities to improve memory, attention, problem-solving, and other cognitive functions affected by neurological conditions.',
            conditions: [
                'Memory and learning difficulties',
                'Attention and concentration problems',
                'Executive function deficits',
                'Problem-solving challenges',
                'Processing speed issues',
                'Academic skill development'
            ],
            ageGroup: '5-18 years',
            icon: Brain,
            duration: '60 minutes',
            category: 'Cognitive Therapy'
        },
        {
            id: 6,
            name: 'Occupational Therapy for Children',
            description: 'Comprehensive therapy focusing on daily living skills, fine motor development, and adaptive behaviors to enhance independence and functionality.',
            conditions: [
                'Fine motor skill delays',
                'Handwriting difficulties',
                'Self-care skill challenges',
                'Visual-motor integration problems',
                'Coordination and balance issues',
                'Activities of daily living'
            ],
            ageGroup: '1-16 years',
            icon: Hand,
            duration: '45-60 minutes',
            category: 'Functional Therapy'
        },
        {
            id: 7,
            name: 'Behavioral Intervention Therapy',
            description: 'Applied Behavior Analysis (ABA) and positive behavior support strategies to address challenging behaviors and promote appropriate responses.',
            conditions: [
                'Challenging behaviors',
                'Self-injurious behaviors',
                'Aggression and tantrums',
                'Non-compliance issues',
                'Social skill deficits',
                'Adaptive behavior development'
            ],
            ageGroup: '2-18 years',
            icon: Target,
            duration: '60-90 minutes',
            category: 'Behavioral Therapy'
        },
        {
            id: 8,
            name: 'Play Therapy & Social Skills Training',
            description: 'Therapeutic play activities and structured social interaction training to develop communication, cooperation, and relationship-building skills.',
            conditions: [
                'Social interaction difficulties',
                'Peer relationship challenges',
                'Communication barriers',
                'Emotional regulation issues',
                'Play skill development',
                'Group participation problems'
            ],
            ageGroup: '3-12 years',
            icon: Gamepad2,
            duration: '45-60 minutes',
            category: 'Social Therapy'
        }
    ];

    const testimonial = {
        name: 'Radhika & Suresh Kumar',
        location: 'Doddanekundi, Bengaluru',
        text: 'Our 6-year-old son was diagnosed with autism, and we were overwhelmed until we found KSK Healthcare in Doddanekundi. The neuro-rehabilitation team, especially the speech and behavioral therapists, have been incredible. Over the past year, we\'ve seen remarkable improvement in his communication and social skills. The personalized approach and regular progress updates give us so much hope for his future.',
        rating: 5,
        condition: 'Autism Spectrum Disorder (ASD)'
    };

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Neuro-Functional Rehabilitation Services in Doddanekundi, Bengaluru | KSK Healthcare</title>
                <meta name="description" content="Expert neuro-rehabilitation in Doddanekundi for ASD, ADHD, speech therapy & sensory integration. Child development specialists. Government-certified!" />
                <meta name="keywords" content="neuro rehabilitation Doddanekundi, ASD therapy Bengaluru, ADHD treatment, speech therapy, autism therapy, child development, KSK Healthcare" />
                <meta name="geo.region" content="IN-KA" />
                <meta name="geo.placename" content="Doddanekundi, Bengaluru" />
            </Helmet>

            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center space-x-2 text-purple-600 hover:text-purple-700">
                            <ArrowLeft className="h-5 w-5" />
                            <span>Back to Home</span>
                        </Link>
                        <div className="flex items-center space-x-4 text-sm">
                            <a href={`tel:${businessInfo.phone}`} className="flex items-center space-x-1 text-gray-600 hover:text-purple-600">
                                <Phone className="h-4 w-4" />
                                <span>{businessInfo.phone}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Expert <span className="text-purple-600">Neuro-Functional Rehabilitation</span><br />
                            Services in Doddanekundi, Bengaluru
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                            At KSK Healthcare in Doddanekundi, our specialized neuro-rehabilitation team provides
                            comprehensive therapy for children with developmental challenges. We combine evidence-based
                            treatments with compassionate care to help children in the Bengaluru area reach their full
                            potential through targeted interventions for autism, ADHD, speech delays, and other neurological conditions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <WhatsAppButton
                                message="Hello KSK Healthcare, I would like to schedule a neuro-rehabilitation assessment for my child in Doddanekundi."
                                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center space-x-2"
                                showIcon={true}
                            >
                                Book Child Assessment
                            </WhatsAppButton>
                            <a href={`tel:${businessInfo.phone}`} className="bg-white border border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center space-x-2">
                                <Phone className="h-5 w-5" />
                                <span>Call Now</span>
                            </a>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4 text-purple-600" />
                            <span>RCI Certified Therapists</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>4.9/5 Rating from Doddanekundi Families</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <CheckCircle className="h-4 w-4 text-purple-600" />
                            <span>Evidence-Based Treatment Methods</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Specialized <span className="text-purple-600">Neuro-Rehabilitation Therapies</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive range of neuro-rehabilitation services are designed to address the unique
                            developmental needs of children in Doddanekundi and the greater Bengaluru metropolitan area.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {neuroRehabServices.map((service) => (
                            <div key={service.id} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start space-x-4 mb-4">
                                    <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                                        <service.icon className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                                                {service.category}
                                            </span>
                                            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                                                Age: {service.ageGroup}
                                            </span>
                                            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                                                {service.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6">{service.description}</p>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Addresses:</h4>
                                    <div className="grid grid-cols-1 gap-2">
                                        {service.conditions.map((condition, index) => (
                                            <div key={index} className="flex items-start space-x-2">
                                                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-gray-600">{condition}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <WhatsAppButton
                                    message={`Hello KSK Healthcare, I would like to know more about ${service.name} for my child in Doddanekundi.`}
                                    className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                                    showIcon={true}
                                >
                                    Learn More About {service.category}
                                </WhatsAppButton>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Treatment Approach Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-purple-600">Evidence-Based Approach</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We follow internationally recognized treatment protocols and adapt them to the cultural
                            context of Bengaluru families for maximum effectiveness.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Brain className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Comprehensive Assessment</h3>
                            <p className="text-gray-600 text-sm">Detailed evaluation using standardized tools to understand each child's unique needs.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Target className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Individualized Plans</h3>
                            <p className="text-gray-600 text-sm">Customized therapy goals and strategies based on the child's specific strengths and challenges.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Users className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Family Involvement</h3>
                            <p className="text-gray-600 text-sm">Training and support for parents to continue therapeutic activities at home.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Activity className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Progress Monitoring</h3>
                            <p className="text-gray-600 text-sm">Regular assessments and therapy plan adjustments to ensure optimal progress.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Doddanekundi Families Trust <span className="text-purple-600">KSK Healthcare</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-purple-50 rounded-xl p-8 text-center">
                            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Award className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
                            <p className="text-gray-600">RCI certified therapists with specialized training in pediatric neuro-rehabilitation.</p>
                        </div>

                        <div className="bg-purple-50 rounded-xl p-8 text-center">
                            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Heart className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Care</h3>
                            <p className="text-gray-600">Understanding, patient approach that respects each child's pace and individual needs.</p>
                        </div>

                        <div className="bg-purple-50 rounded-xl p-8 text-center">
                            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Shield className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe Environment</h3>
                            <p className="text-gray-600">Child-friendly facilities with safety protocols and sensory-appropriate spaces.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Success Stories from <span className="text-purple-600">Doddanekundi Families</span>
                        </h2>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-8 text-center">
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
                            <p className="text-purple-600 font-medium">{testimonial.condition}</p>
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
                                Begin Your Child's Journey at Our <span className="text-purple-600">Doddanekundi Center</span>
                            </h2>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Address</h3>
                                        <p className="text-gray-600">{businessInfo.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Phone className="h-6 w-6 text-purple-600" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Phone</h3>
                                        <p className="text-gray-600">{businessInfo.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Clock className="h-6 w-6 text-purple-600" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Therapy Hours</h3>
                                        <p className="text-gray-600">Monday - Sunday: 9:00 AM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <WhatsAppButton
                                    message="Hello KSK Healthcare, I would like to schedule a neuro-rehabilitation assessment for my child at your Doddanekundi clinic."
                                    className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                                    showIcon={true}
                                >
                                    Schedule Child Assessment
                                </WhatsAppButton>

                                <a
                                    href={`tel:${businessInfo.phone}`}
                                    className="w-full bg-white border border-purple-600 text-purple-600 py-4 px-6 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>Call for Immediate Consultation</span>
                                </a>
                            </div>
                        </div>

                        {/* Simple Map Redirect */}
                        <div className="bg-gray-100 rounded-xl overflow-hidden">
                            <SimpleMapRedirect
                                title="KSK Healthcare - Neuro-Rehabilitation Services in Doddanekundi, Bengaluru"
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Conditions Treated & Eligibility */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Who Benefits from <span className="text-purple-600">Neuro-Functional Rehabilitation</span>?
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Specialized care for children and adults with neurological and developmental challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                <Target className="h-5 w-5 text-purple-600" />
                                <span>Conditions We Treat</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-2">Developmental Disorders</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Autism Spectrum Disorder (ASD)</li>
                                        <li>• ADHD & attention deficits</li>
                                        <li>• Global developmental delay</li>
                                        <li>• Intellectual disabilities</li>
                                        <li>• Learning disabilities</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-2">Communication Disorders</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Speech & language delays</li>
                                        <li>• Articulation disorders</li>
                                        <li>• Stuttering & fluency issues</li>
                                        <li>• Voice disorders</li>
                                        <li>• Childhood apraxia of speech</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-2">Neurological Conditions</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Cerebral palsy</li>
                                        <li>• Traumatic brain injury</li>
                                        <li>• Stroke recovery (pediatric)</li>
                                        <li>• Seizure disorders</li>
                                        <li>• Genetic syndromes</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-2">Motor & Sensory</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Gross & fine motor delays</li>
                                        <li>• Sensory processing disorders</li>
                                        <li>• Balance & coordination issues</li>
                                        <li>• Visual-motor integration</li>
                                        <li>• Muscle weakness/hypotonia</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-2">Behavioral & Social</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Social communication deficits</li>
                                        <li>• Behavioral challenges</li>
                                        <li>• Emotional regulation issues</li>
                                        <li>• Play skill development</li>
                                        <li>• Daily living skills</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-2">Academic Support</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Reading & writing difficulties</li>
                                        <li>• Math concept challenges</li>
                                        <li>• Executive function deficits</li>
                                        <li>• Study skills & organization</li>
                                        <li>• School readiness preparation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                <CheckCircle className="h-5 w-5 text-purple-600" />
                                <span>Who We Serve</span>
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-purple-50 rounded-lg">
                                    <h4 className="font-medium text-purple-800 mb-2">✅ Age Groups</h4>
                                    <ul className="space-y-1 text-sm text-purple-700">
                                        <li>• Early intervention (6 months - 3 years)</li>
                                        <li>• Preschoolers (3-6 years)</li>
                                        <li>• School-age children (6-18 years)</li>
                                        <li>• Young adults (18-25 years)</li>
                                        <li>• Adult neurological conditions</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <h4 className="font-medium text-blue-800 mb-2">🎯 Severity Levels</h4>
                                    <ul className="space-y-1 text-sm text-blue-700">
                                        <li>• Mild developmental delays</li>
                                        <li>• Moderate learning challenges</li>
                                        <li>• Severe neurological impairments</li>
                                        <li>• Complex medical conditions</li>
                                        <li>• Multiple disability combinations</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-green-50 rounded-lg">
                                    <h4 className="font-medium text-green-800 mb-2">🌟 Special Programs</h4>
                                    <ul className="space-y-1 text-sm text-green-700">
                                        <li>• Parent training & coaching</li>
                                        <li>• Sibling support groups</li>
                                        <li>• School collaboration programs</li>
                                        <li>• Transition planning services</li>
                                        <li>• Family-centered care approach</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-yellow-50 rounded-lg">
                                    <h4 className="font-medium text-yellow-800 mb-2">⚠️ Assessment First</h4>
                                    <ul className="space-y-1 text-sm text-yellow-700">
                                        <li>• Comprehensive initial evaluation</li>
                                        <li>• Standardized testing protocols</li>
                                        <li>• Multidisciplinary team assessment</li>
                                        <li>• Regular progress monitoring</li>
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
                            Frequently Asked <span className="text-purple-600">Questions</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Common questions about neuro-functional rehabilitation and developmental therapy services.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔍 Assessment & Diagnosis</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-1">Q: How do you assess my child's needs?</h4>
                                    <p className="text-sm text-gray-600">A: Our comprehensive assessment includes standardized testing, clinical observation, parent interviews, and developmental checklists. We evaluate speech, language, motor skills, cognitive abilities, social skills, and adaptive behaviors over 2-3 sessions.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-1">Q: What ages do you serve and what's the earliest intervention age?</h4>
                                    <p className="text-sm text-gray-600">A: We serve clients from 6 months to 25 years. Early intervention (6 months-3 years) is crucial for maximum benefit. The earlier we start, the better the outcomes, especially for autism, speech delays, and developmental concerns.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-1">Q: Do you provide diagnosis or just therapy?</h4>
                                    <p className="text-sm text-gray-600">A: We provide clinical assessment and therapeutic recommendations. For formal medical diagnosis, we collaborate with developmental pediatricians and neurologists. We can refer you to trusted specialists when needed.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">📈 Treatment & Progress</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-1">Q: How long does therapy take to show results?</h4>
                                    <p className="text-sm text-gray-600">A: Progress varies by child and condition. Some skills may emerge within 4-6 weeks, while complex goals take 3-6 months. Early intervention cases typically show faster progress. We track data weekly and adjust treatment plans accordingly.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-1">Q: What therapy approaches do you use?</h4>
                                    <p className="text-sm text-gray-600">A: We use evidence-based approaches including ABA (Applied Behavior Analysis), TEACCH, sensory integration, Bobath technique, play therapy, and speech therapy techniques like PROMPT and oral-motor therapy. Treatment is individualized to each child's needs.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-1">Q: How do you involve parents in the therapy process?</h4>
                                    <p className="text-sm text-gray-600">A: Parents are essential team members. We provide parent training, home program activities, regular progress updates, and strategy coaching. Many sessions include parent participation to ensure skills generalize to home environments.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">📅 Scheduling & Duration</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-1">Q: How often should my child come for therapy?</h4>
                                    <p className="text-sm text-gray-600">A: Frequency depends on needs and goals:</p>
                                    <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-600">
                                        <li>• Intensive intervention: 3-5 times per week</li>
                                        <li>• Standard therapy: 2-3 times per week</li>
                                        <li>• Maintenance: 1-2 times per week</li>
                                        <li>• School support: Weekly or bi-weekly</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-1">Q: How long is each therapy session?</h4>
                                    <p className="text-sm text-gray-600">A: Individual sessions are typically 45 minutes, group sessions 60 minutes. For very young children (under 3), we may start with 30-minute sessions. Assessment sessions are 60-90 minutes depending on the child's attention span.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-1">Q: Do you offer flexible scheduling for working parents?</h4>
                                    <p className="text-sm text-gray-600">A: Yes, we offer evening slots until 7 PM and Saturday appointments. We also provide home-based therapy for families who cannot travel to our center regularly.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">🏫 School & Social Integration</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-1">Q: Do you help with school placement and IEP development?</h4>
                                    <p className="text-sm text-gray-600">A: Yes, we provide school consultation, IEP support, classroom observations, and teacher training. We help families navigate special education services and advocate for appropriate educational placements.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-1">Q: Can therapy help my child make friends and improve social skills?</h4>
                                    <p className="text-sm text-gray-600">A: Absolutely! We offer social skills groups, peer interaction opportunities, and structured play therapy. We work on conversation skills, friendship building, emotional regulation, and social problem-solving in both individual and group settings.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-purple-600 mb-1">Q: What's your success rate with different conditions?</h4>
                                    <p className="text-sm text-gray-600">A: Success rates vary by condition and early intervention timing. Generally: speech delays (85% significant improvement), autism early intervention (70% mainstream school integration), ADHD management (80% improved focus), cerebral palsy (60% functional improvement).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-purple-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Help Your Child Reach Their Full Potential?
                    </h2>
                    <p className="text-xl mb-8 text-purple-100">
                        Join the many families from Doddanekundi and across Bengaluru who have seen remarkable
                        progress in their children through our specialized neuro-rehabilitation programs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <WhatsAppButton
                            message="Hello KSK Healthcare, I'm ready to start my child's neuro-rehabilitation journey in Doddanekundi. Please help me schedule an assessment."
                            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                            showIcon={true}
                        >
                            Start Your Child's Journey
                        </WhatsAppButton>
                        <a
                            href={`tel:${businessInfo.phone}`}
                            className="bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-flex items-center justify-center space-x-2"
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

export default NeuroRehabServicesPage;
