import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    Phone, Mail, MapPin, Clock, Star, ArrowLeft, CheckCircle, Award,
    Activity, Shield, Target, Zap, MessageCircle, Calendar, Apple,
    Heart, Utensils, Scale, Leaf, Users, TrendingUp, Baby, ExternalLink
} from 'lucide-react';
import SimpleMapRedirect from '../components/SimpleMapRedirect';

const NutritionWellnessPage = () => {
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

    const nutritionServices = [
        {
            id: 1,
            name: 'Clinical Nutrition Therapy',
            description: 'Evidence-based nutritional interventions for managing chronic diseases and medical conditions prevalent among Bengaluru\'s urban population.',
            specializations: [
                'Diabetes and blood sugar management',
                'Hypertension and cardiovascular health',
                'Kidney disease and renal nutrition',
                'Liver disorders and hepatic nutrition',
                'Thyroid dysfunction management',
                'PCOD/PCOS nutritional support',
                'Digestive disorders (IBS, IBD, gastritis)',
                'Cancer nutrition therapy'
            ],
            icon: Heart,
            duration: '60 minutes',
            category: 'Medical Nutrition'
        },
        {
            id: 2,
            name: 'Weight Management & Obesity Treatment',
            description: 'Comprehensive weight management programs combining nutrition counseling, lifestyle modification, and behavioral therapy for sustainable results.',
            specializations: [
                'Obesity assessment and treatment',
                'Metabolic syndrome management',
                'Pre and post-bariatric surgery nutrition',
                'Sustainable weight loss strategies',
                'Body composition analysis',
                'Portion control and mindful eating',
                'Exercise and nutrition integration',
                'Long-term weight maintenance'
            ],
            icon: Scale,
            duration: '45-60 minutes',
            category: 'Weight Management'
        },
        {
            id: 3,
            name: 'Sports & Performance Nutrition',
            description: 'Specialized nutrition plans for athletes, fitness enthusiasts, and active individuals in Bengaluru\'s growing fitness community.',
            specializations: [
                'Athletic performance optimization',
                'Pre and post-workout nutrition',
                'Hydration and electrolyte balance',
                'Supplement guidance and evaluation',
                'Body composition optimization',
                'Endurance and strength training nutrition',
                'Recovery and injury prevention',
                'Competition preparation nutrition'
            ],
            icon: TrendingUp,
            duration: '60 minutes',
            category: 'Sports Nutrition'
        },
        {
            id: 4,
            name: 'Pediatric & Adolescent Nutrition',
            description: 'Specialized nutrition care for growing children and teenagers, addressing common nutritional challenges in urban Bengaluru families.',
            specializations: [
                'Childhood obesity prevention and treatment',
                'Picky eating and feeding difficulties',
                'Growth and development nutrition',
                'School-age nutrition planning',
                'Adolescent nutrition counseling',
                'Teen athlete nutrition',
                'Family meal planning strategies',
                'Nutritional deficiency correction'
            ],
            icon: Baby,
            duration: '45 minutes',
            category: 'Pediatric Nutrition'
        },
        {
            id: 5,
            name: 'Women\'s Health Nutrition',
            description: 'Comprehensive nutritional support for women through all life stages, addressing unique health needs of women in Bengaluru.',
            specializations: [
                'Pregnancy and prenatal nutrition',
                'Lactation and breastfeeding support',
                'Menstrual health and nutrition',
                'Menopause nutrition management',
                'PCOD/PCOS dietary therapy',
                'Iron deficiency and anemia',
                'Bone health and calcium optimization',
                'Fertility and reproductive nutrition'
            ],
            icon: Users,
            duration: '60 minutes',
            category: 'Women\'s Health'
        },
        {
            id: 6,
            name: 'Preventive & Wellness Nutrition',
            description: 'Proactive nutrition counseling for health optimization and disease prevention, ideal for health-conscious Bengaluru residents.',
            specializations: [
                'Preventive health nutrition',
                'Anti-inflammatory diet planning',
                'Immune system strengthening',
                'Stress and mental health nutrition',
                'Aging and longevity nutrition',
                'Detox and cleansing programs',
                'Lifestyle disease prevention',
                'Optimal wellness planning'
            ],
            icon: Leaf,
            duration: '45-60 minutes',
            category: 'Wellness Nutrition'
        }
    ];

    const testimonial = {
        name: 'Anita Sharma',
        location: 'Doddanekundi, Bengaluru',
        text: 'As a working mother in Bengaluru\'s fast-paced environment, I struggled with managing my family\'s nutrition while dealing with my own diabetes. The nutrition counselor at KSK Healthcare in Doddanekundi created such a practical and sustainable meal plan that works with our busy schedule. Not only has my blood sugar improved significantly, but my whole family is eating healthier. The ongoing support and recipe suggestions have been invaluable.',
        rating: 5,
        condition: 'Diabetes Management & Family Nutrition'
    };

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Nutrition & Wellness Services in Doddanekundi, Bengaluru | KSK Healthcare</title>
                <meta name="description" content="Expert nutrition in Doddanekundi. Weight management, diabetes diet, PCOD nutrition & sports nutrition by certified dietitians. Government-approved clinic!" />
                <meta name="keywords" content="nutritionist Doddanekundi, dietitian Bengaluru, weight loss, diabetes nutrition, PCOD diet, sports nutrition, clinical nutrition, KSK Healthcare" />
                <meta name="geo.region" content="IN-KA" />
                <meta name="geo.placename" content="Doddanekundi, Bengaluru" />
            </Helmet>

            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700">
                            <ArrowLeft className="h-5 w-5" />
                            <span>Back to Home</span>
                        </Link>
                        <div className="flex items-center space-x-4 text-sm">
                            <a href={`tel:${businessInfo.phone}`} className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600">
                                <Phone className="h-4 w-4" />
                                <span>{businessInfo.phone}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-50 via-green-50 to-lime-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Expert <span className="text-emerald-600">Nutrition & Wellness</span><br />
                            Services in Doddanekundi, Bengaluru
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                            Transform your health and well-being with personalized nutrition counseling at KSK Healthcare
                            in Doddanekundi. Our certified clinical nutritionists and dietitians understand the unique
                            dietary challenges faced by Bengaluru's urban population and provide evidence-based nutrition
                            solutions for optimal health, disease management, and lifestyle enhancement.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <WhatsAppButton
                                message="Hello KSK Healthcare, I would like to schedule a nutrition consultation in Doddanekundi."
                                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center justify-center space-x-2"
                                showIcon={true}
                            >
                                Book Nutrition Consultation
                            </WhatsAppButton>
                            <a href={`tel:${businessInfo.phone}`} className="bg-white border border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center space-x-2">
                                <Phone className="h-5 w-5" />
                                <span>Call Now</span>
                            </a>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4 text-emerald-600" />
                            <span>Certified Clinical Nutritionists</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>4.9/5 Rating from Doddanekundi Clients</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>Evidence-Based Nutrition Plans</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Comprehensive <span className="text-emerald-600">Nutrition Specializations</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our expert nutritionists provide specialized care for various health conditions and wellness
                            goals, tailored to the lifestyle and dietary patterns of Doddanekundi and Bengaluru residents.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {nutritionServices.map((service) => (
                            <div key={service.id} className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="bg-emerald-100 rounded-full p-3">
                                        <service.icon className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                                        <div className="flex items-center space-x-2 text-sm">
                                            <span className="bg-emerald-200 text-emerald-800 px-2 py-1 rounded-full text-xs">{service.category}</span>
                                            <span className="text-emerald-600 font-medium">{service.duration}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6">{service.description}</p>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Specializations:</h4>
                                    <div className="grid grid-cols-1 gap-2">
                                        {service.specializations.slice(0, 6).map((specialization, index) => (
                                            <div key={index} className="flex items-start space-x-2">
                                                <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-gray-600">{specialization}</span>
                                            </div>
                                        ))}
                                        {service.specializations.length > 6 && (
                                            <p className="text-xs text-emerald-600 font-medium">+{service.specializations.length - 6} more specializations</p>
                                        )}
                                    </div>
                                </div>

                                <WhatsAppButton
                                    message={`Hello KSK Healthcare, I would like to know more about ${service.name} services in Doddanekundi.`}
                                    className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                                    showIcon={true}
                                >
                                    Learn About {service.category}
                                </WhatsAppButton>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-emerald-600">Holistic Nutrition Approach</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We believe in sustainable, lifestyle-integrated nutrition solutions that work with
                            the busy schedules and cultural preferences of Bengaluru residents.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Target className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Personalized Assessment</h3>
                            <p className="text-gray-600 text-sm">Comprehensive evaluation including medical history, lifestyle, and dietary preferences.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Utensils className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Customized Meal Plans</h3>
                            <p className="text-gray-600 text-sm">Practical, culturally appropriate meal plans that fit your lifestyle and preferences.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Activity className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Lifestyle Integration</h3>
                            <p className="text-gray-600 text-sm">Practical strategies to maintain healthy eating habits within your busy schedule.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-md">
                            <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <TrendingUp className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Ongoing Support</h3>
                            <p className="text-gray-600 text-sm">Regular follow-ups and plan adjustments to ensure sustainable long-term results.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Concerns Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Common Nutrition Concerns in <span className="text-emerald-600">Doddanekundi & Bengaluru</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We address the most prevalent nutrition and wellness challenges faced by urban professionals
                            and families in the Bengaluru metropolitan area.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Work-Life Balance & Nutrition',
                                description: 'Managing healthy eating with demanding IT sector schedules and long commutes.',
                                icon: Clock,
                                color: 'emerald'
                            },
                            {
                                title: 'Diabetes & Blood Sugar',
                                description: 'Rising diabetes rates requiring specialized meal planning and carbohydrate management.',
                                icon: Heart,
                                color: 'red'
                            },
                            {
                                title: 'Weight Management',
                                description: 'Sedentary lifestyles and stress eating leading to weight gain and obesity.',
                                icon: Scale,
                                color: 'blue'
                            },
                            {
                                title: 'PCOD/PCOS in Women',
                                description: 'Hormonal imbalances requiring targeted nutrition therapy and lifestyle changes.',
                                icon: Users,
                                color: 'purple'
                            },
                            {
                                title: 'Children\'s Nutrition',
                                description: 'Picky eating, junk food habits, and nutritional deficiencies in growing children.',
                                icon: Baby,
                                color: 'yellow'
                            },
                            {
                                title: 'Digestive Health Issues',
                                description: 'IBS, acidity, and digestive problems from irregular eating patterns and stress.',
                                icon: Apple,
                                color: 'green'
                            }
                        ].map((concern, index) => (
                            <div key={index} className="bg-emerald-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="bg-emerald-100 rounded-full p-2">
                                        <concern.icon className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">{concern.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm">{concern.description}</p>
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
                            Success Stories from <span className="text-emerald-600">Doddanekundi Families</span>
                        </h2>
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-8 text-center">
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
                            <p className="text-emerald-600 font-medium">{testimonial.condition}</p>
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
                                Transform Your Health at Our <span className="text-emerald-600">Doddanekundi Center</span>
                            </h2>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Address</h3>
                                        <p className="text-gray-600">{businessInfo.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Phone className="h-6 w-6 text-emerald-600" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Phone</h3>
                                        <p className="text-gray-600">{businessInfo.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Clock className="h-6 w-6 text-emerald-600" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Consultation Hours</h3>
                                        <p className="text-gray-600">Monday - Sunday: 9:00 AM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <WhatsAppButton
                                    message="Hello KSK Healthcare, I would like to schedule a nutrition consultation at your Doddanekundi clinic."
                                    className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                                    showIcon={true}
                                >
                                    Book Nutrition Consultation
                                </WhatsAppButton>

                                <a
                                    href={`tel:${businessInfo.phone}`}
                                    className="w-full bg-white border border-emerald-600 text-emerald-600 py-4 px-6 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>Call for Immediate Consultation</span>
                                </a>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="bg-gray-100 rounded-xl overflow-hidden">
                            <SimpleMapRedirect
                                title="KSK Healthcare - Nutrition & Wellness Services in Doddanekundi, Bengaluru"
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
                            Who Benefits from <span className="text-emerald-600">Nutrition & Wellness</span> Services?
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Comprehensive nutritional care for medical conditions, weight management, and optimal health across all life stages.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                <Target className="h-5 w-5 text-emerald-600" />
                                <span>Conditions We Address Through Nutrition</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-2">Metabolic Disorders</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Type 1 & Type 2 Diabetes</li>
                                        <li>• Pre-diabetes & insulin resistance</li>
                                        <li>• Metabolic syndrome</li>
                                        <li>• Thyroid disorders (hypo/hyper)</li>
                                        <li>• PCOD/PCOS management</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-2">Cardiovascular Health</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Hypertension management</li>
                                        <li>• High cholesterol & triglycerides</li>
                                        <li>• Heart disease prevention</li>
                                        <li>• Post-cardiac event recovery</li>
                                        <li>• Stroke rehabilitation nutrition</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-2">Digestive Disorders</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• IBS & IBD management</li>
                                        <li>• Acid reflux & gastritis</li>
                                        <li>• Food intolerances & allergies</li>
                                        <li>• Celiac disease</li>
                                        <li>• Gut health optimization</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-2">Weight-Related Issues</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Obesity (BMI {'>'}30)</li>
                                        <li>• Overweight management</li>
                                        <li>• Underweight concerns</li>
                                        <li>• Body composition issues</li>
                                        <li>• Eating disorders support</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-2">Kidney & Liver Health</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Chronic kidney disease</li>
                                        <li>• Dialysis nutrition support</li>
                                        <li>• Fatty liver disease</li>
                                        <li>• Liver cirrhosis management</li>
                                        <li>• Kidney stone prevention</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-2">Life Stage Nutrition</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• Pregnancy & lactation</li>
                                        <li>• Pediatric nutrition</li>
                                        <li>• Adolescent growth support</li>
                                        <li>• Senior nutrition needs</li>
                                        <li>• Menopause management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                <CheckCircle className="h-5 w-5 text-emerald-600" />
                                <span>Who We Serve</span>
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-emerald-50 rounded-lg">
                                    <h4 className="font-medium text-emerald-800 mb-2">✅ Medical Conditions</h4>
                                    <ul className="space-y-1 text-sm text-emerald-700">
                                        <li>• Diagnosed chronic diseases requiring dietary modification</li>
                                        <li>• Pre-disease states (pre-diabetes, pre-hypertension)</li>
                                        <li>• Post-surgery nutritional recovery</li>
                                        <li>• Cancer patients undergoing treatment</li>
                                        <li>• Athletes with sports-specific nutrition needs</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <h4 className="font-medium text-blue-800 mb-2">🎯 Weight Goals</h4>
                                    <ul className="space-y-1 text-sm text-blue-700">
                                        <li>• BMI {'>'}25 (overweight) seeking sustainable weight loss</li>
                                        <li>• BMI {'<'}18.5 (underweight) needing healthy weight gain</li>
                                        <li>• Normal weight seeking body composition improvement</li>
                                        <li>• Post-pregnancy weight management</li>
                                        <li>• Individuals with repeated diet failures</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-orange-50 rounded-lg">
                                    <h4 className="font-medium text-orange-800 mb-2">🌟 Preventive Care</h4>
                                    <ul className="space-y-1 text-sm text-orange-700">
                                        <li>• Family history of diabetes, heart disease</li>
                                        <li>• Sedentary lifestyle seeking health optimization</li>
                                        <li>• Frequent travelers needing practical meal planning</li>
                                        <li>• Busy professionals with irregular eating patterns</li>
                                        <li>• Health-conscious individuals wanting optimal nutrition</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-purple-50 rounded-lg">
                                    <h4 className="font-medium text-purple-800 mb-2">👨‍👩‍👧‍👦 Special Populations</h4>
                                    <ul className="space-y-1 text-sm text-purple-700">
                                        <li>• Pregnant women with gestational diabetes, anemia</li>
                                        <li>• Children with growth issues, picky eating</li>
                                        <li>• Seniors with decreased appetite, multiple medications</li>
                                        <li>• Vegetarians/vegans ensuring nutrient adequacy</li>
                                        <li>• Corporate groups seeking workplace wellness</li>
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
                            Why Choose <span className="text-emerald-600">Professional Nutrition</span> Counseling?
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Evidence-based nutrition therapy vs. popular diet trends and self-guided approaches.
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
                        <table className="w-full">
                            <thead className="bg-emerald-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Approach</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-emerald-800">Professional Nutrition Counseling</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Popular Diet Plans</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Self-Guided Dieting</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Personalization</td>
                                    <td className="px-6 py-4 text-center text-emerald-600">✅ Fully customized to individual health, preferences, lifestyle</td>
                                    <td className="px-6 py-4 text-center text-gray-500">⚠️ One-size-fits-all approach</td>
                                    <td className="px-6 py-4 text-center text-gray-500">❌ Generic guidelines only</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">Medical Consideration</td>
                                    <td className="px-6 py-4 text-center text-emerald-600">✅ Accounts for medical conditions, medications</td>
                                    <td className="px-6 py-4 text-center text-gray-500">❌ Ignores medical history</td>
                                    <td className="px-6 py-4 text-center text-gray-500">❌ No medical oversight</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Sustainability</td>
                                    <td className="px-6 py-4 text-center text-emerald-600">✅ 85% long-term success rate</td>
                                    <td className="px-6 py-4 text-center text-gray-500">⚠️ 15-20% long-term success</td>
                                    <td className="px-6 py-4 text-center text-gray-500">❌ 5-10% long-term success</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">Nutrient Adequacy</td>
                                    <td className="px-6 py-4 text-center text-emerald-600">✅ Ensures complete nutrition</td>
                                    <td className="px-6 py-4 text-center text-gray-500">⚠️ Often nutritionally incomplete</td>
                                    <td className="px-6 py-4 text-center text-gray-500">❌ High risk of deficiencies</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Support System</td>
                                    <td className="px-6 py-4 text-center text-emerald-600">✅ Continuous monitoring & adjustment</td>
                                    <td className="px-6 py-4 text-center text-gray-500">⚠️ Limited community support</td>
                                    <td className="px-6 py-4 text-center text-gray-500">❌ No professional guidance</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">Cost-Effectiveness</td>
                                    <td className="px-6 py-4 text-center text-emerald-600">✅ ₹130-200/day prevents future medical costs</td>
                                    <td className="px-6 py-4 text-center text-gray-500">⚠️ ₹50-200/day with yo-yo effect</td>
                                    <td className="px-6 py-4 text-center text-gray-500">❌ Free but leads to health issues</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Health Outcomes</td>
                                    <td className="px-6 py-4 text-center text-emerald-600">✅ Improved biomarkers, energy, quality of life</td>
                                    <td className="px-6 py-4 text-center text-gray-500">⚠️ Short-term weight loss only</td>
                                    <td className="px-6 py-4 text-center text-gray-500">❌ Often worsens health markers</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-emerald-50 rounded-xl p-6 text-center">
                            <div className="text-2xl font-bold text-emerald-600 mb-2">85%</div>
                            <p className="text-sm text-emerald-700">Success rate with professional nutrition counseling</p>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-6 text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-2">₹12,000</div>
                            <p className="text-sm text-blue-700">Average annual savings in medical costs</p>
                        </div>
                        <div className="bg-orange-50 rounded-xl p-6 text-center">
                            <div className="text-2xl font-bold text-orange-600 mb-2">6-12 months</div>
                            <p className="text-sm text-orange-700">Timeline for sustainable lifestyle changes</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Frequently Asked <span className="text-emerald-600">Questions</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Common questions about nutrition counseling, meal planning, and achieving sustainable health goals.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">🍎 Getting Started</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-1">Q: What should I expect in my first nutrition consultation?</h4>
                                    <p className="text-sm text-gray-600">A: We'll review your medical history, current eating habits, lifestyle, and goals. You'll receive a comprehensive diet analysis, personalized meal plan, and practical tips to start immediately. The session typically lasts 60-75 minutes.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-1">Q: Do I need to bring any reports or documents?</h4>
                                    <p className="text-sm text-gray-600">A: Yes, please bring recent blood tests (within 6 months), prescription medications list, and a 3-day food diary if possible. Previous nutrition plans or diet attempts history is also helpful for personalized recommendations.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-1">Q: How quickly will I see results?</h4>
                                    <p className="text-sm text-gray-600">A: Most clients notice increased energy within 1-2 weeks. Weight changes typically become apparent after 3-4 weeks. Blood parameter improvements (cholesterol, blood sugar) usually show within 6-8 weeks of consistent adherence.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">📋 Meal Planning & Diet</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-1">Q: Will I have to give up my favorite foods completely?</h4>
                                    <p className="text-sm text-gray-600">A: No! We believe in balanced, sustainable eating. We'll modify your favorite recipes to be healthier and include occasional treats in moderation. The goal is creating a realistic eating pattern you can maintain long-term.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-1">Q: Can you accommodate vegetarian, vegan, or other dietary preferences?</h4>
                                    <p className="text-sm text-gray-600">A: Absolutely! We create meal plans for all dietary preferences including vegetarian, vegan, Jain, gluten-free, and religious dietary restrictions. We ensure nutritional adequacy regardless of your food preferences or restrictions.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-1">Q: How do you handle eating out, travel, and social situations?</h4>
                                    <p className="text-sm text-gray-600">A: We provide practical strategies for dining out, travel meal planning, and handling social eating situations. You'll receive restaurant guides, portable meal options, and tips for making healthy choices in any environment.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">🏥 Medical Nutrition Therapy</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-1">Q: How does nutrition therapy help with diabetes management?</h4>
                                    <p className="text-sm text-gray-600">A: We create personalized carbohydrate counting plans, teach glycemic index concepts, and coordinate with your doctor for medication adjustments. Most clients see 1-2% reduction in HbA1c within 3 months with consistent nutrition therapy.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-1">Q: Can nutrition help with PCOD/PCOS symptoms?</h4>
                                    <p className="text-sm text-gray-600">A: Yes! Anti-inflammatory eating patterns, balanced blood sugar management, and specific nutrient recommendations can significantly improve PCOD symptoms including irregular periods, weight gain, and insulin resistance.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-1">Q: Do you work with my doctor or other healthcare providers?</h4>
                                    <p className="text-sm text-gray-600">A: We encourage collaborative care and can provide progress reports to your physician with your consent. We coordinate nutrition therapy with medical treatments and can adjust recommendations based on medication changes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">💰 Practical Concerns</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-1">Q: Will following your meal plans increase my grocery expenses?</h4>
                                    <p className="text-sm text-gray-600">A: Most clients find their grocery bills remain similar or even decrease because we focus on whole foods and reduce expensive processed items. We provide budget-friendly meal options and bulk cooking strategies to optimize costs.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-1">Q: How often do I need follow-up appointments?</h4>
                                    <p className="text-sm text-gray-600">A: Initially, weekly or bi-weekly sessions help establish new habits. Once stable, monthly check-ins are sufficient for most clients. Frequency can be adjusted based on your progress, health condition complexity, and personal preferences.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-emerald-600 mb-1">Q: What happens if I don't see the expected results?</h4>
                                    <p className="text-sm text-gray-600">A: We'll reassess your plan, investigate potential barriers, and adjust our approach. Sometimes underlying medical issues, medications, or stress factors affect progress. We're committed to finding strategies that work for your unique situation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-emerald-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Health Through Nutrition?
                    </h2>
                    <p className="text-xl mb-8 text-emerald-100">
                        Join hundreds of satisfied clients from Doddanekundi and across Bengaluru who have achieved
                        their health goals through our personalized nutrition counseling and wellness programs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <WhatsAppButton
                            message="Hello KSK Healthcare, I'm ready to start my nutrition transformation journey in Doddanekundi. Please help me schedule a consultation."
                            className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                            showIcon={true}
                        >
                            Start Your Nutrition Journey
                        </WhatsAppButton>
                        <a
                            href={`tel:${businessInfo.phone}`}
                            className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition-colors inline-flex items-center justify-center space-x-2"
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

export default NutritionWellnessPage;
