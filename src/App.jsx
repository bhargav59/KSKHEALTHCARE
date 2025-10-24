import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Phone, Mail, MapPin, Clock, Star, Quote, Heart, MessageCircle,
  Send, Facebook, Instagram, Linkedin, Youtube, Menu, X, ChevronDown,
  Users, Award, Calendar, CheckCircle, ArrowRight,
  Activity, Shield, Target, Zap, Brain, Leaf,
  Twitter
} from 'lucide-react';
import './App.css';

// Import images
import heroBanner from './assets/new-hero-banner.jpg';
import aboutBanner from './assets/about-banner.png';
import acupunctureImg from './assets/acupuncture.jpg';
import speechTherapyImg from './assets/speech-therapy.jpg';
import drSwethaImg from './assets/dr-swetha.png';
import drMaheshImg from './assets/dr-mahesh.jpg';
import ayurvedaPanchakarmaImg from './assets/ayurveda-panchakarma.jpg';
import marmaTherapyImg from './assets/marma-therapy.jpg';
import reflexologyImg from './assets/reflexology.jpg';
import nutritionDietImg from './assets/nutrients.png';

//import homeopathyImg from './assets/homeopathy.jpg';
import kskMapImg from './assets/ksk-map.jpg'; // Added kskMapImg
// New doctor images
import drNishibhaImg from './assets/dr-nishibha.jpg';
import mrsGayathriImg from './assets/mrs-gayathri.jpg';
import nischithaImg from './assets/nischitha.jpg';
// Import service pages
import AcupunctureServicesPage from './pages/AcupunctureServicesPage.jsx';
import AcupressureServicesPage from './pages/AcupressureServicesPage.jsx';
import AyurvedicServicesPage from './pages/AyurvedicServicesPage.jsx';
import NeuroRehabServicesPage from './pages/NeuroRehabServicesPage.jsx';
import HearingCareServicesPage from './pages/HearingCareServicesPage.jsx';
import NutritionWellnessPage from './pages/NutritionWellnessPage.jsx';
import BlogList from './pages/BlogList.jsx';
import BookingConfirmationPage from './components/BookingConfirmationPage.jsx';
import ChatbotAdmin from './components/admin/ChatbotAdmin.jsx';
import AnalyticsDashboard from './components/AnalyticsDashboard.jsx';
import { Button } from './components/ui/button';
import DoctorAvatar from './components/DoctorAvatar';
import ChatBot from './components/ChatBot';
import ChatbotIntegration from './components/ChatbotIntegration';
import MobileStickyButtons from './components/MobileStickyButtons';
import PatientSuccessStories from './components/PatientSuccessStories';
import QuickBookingForm from './components/QuickBookingForm';
import SymptomChecker from './components/SymptomChecker';
import GoogleAnalyticsProvider from './components/GoogleAnalyticsProvider';
import SchemaMarkup from './components/SchemaMarkup';
import FloatingContactButtons from './components/FloatingContactButtons';
import { CHATBOT_CONFIG } from './config/chatbot';
import { useCTATracking, usePhoneTracking } from './hooks/useAnalytics';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection] = useState('home');
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Analytics tracking hooks
  const { trackCTA } = useCTATracking();
  const { trackPhone } = usePhoneTracking();

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/#about' },
    {
      id: 'services',
      label: 'Services',
      path: '/#services',
      dropdown: [
        { label: 'Acupuncture Therapies', path: '/services/acupuncture', icon: Activity },
        { label: 'Acupressure & Reflexology', path: '/services/acupressure', icon: Shield },
        { label: 'Ayurvedic & Panchakarma', path: '/services/ayurveda', icon: Leaf },
        { label: 'Neuro Rehabilitation', path: '/services/neuro-rehab', icon: Brain },
        { label: 'Hearing Care Services', path: '/services/hearing-care', icon: Target },
        { label: 'Nutrition & Wellness', path: '/services/nutrition', icon: Heart }
      ]
    },
    { id: 'doctors', label: 'Our Doctors', path: '/#doctors' },
    { id: 'testimonials', label: 'Patient Stories', path: '/#testimonials' },
    { id: 'contact', label: 'Contact', path: '/#contact' },
    { id: 'blog', label: 'Blog', path: '/blog' }
  ];

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // WhatsApp component
  const WhatsAppButton = ({ message, children, className = "", showIcon = false }) => {
    const whatsappUrl = `https://wa.me/919900546089?text=${encodeURIComponent(message)}`;

    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {showIcon && <MessageCircle className="h-5 w-5" />}
        {children}
      </a>
    );
  };

  // Services data
  const services = [
    {
      id: 1,
      name: 'Acupuncture Therapies',
      description: 'Time-tested needle techniques tailored to restore energy balance, relieve chronic pain, and stimulate your body\'s natural healing.',
      benefits: ['Chronic Pain Relief', 'Hormonal Balance', 'Improved Sleep', 'Stress & Anxiety Reduction'],
      image: acupunctureImg,
      icon: Activity,
      blogPath: '/services/acupuncture'
    },
    {
      id: 2,
      name: 'Acupressure & Reflexology',
      description: 'Drug-free, non-invasive pressure techniques on meridians and reflex zones to detox, relieve tension, and promote full-body wellness.',
      benefits: ['Muscle Relaxation', 'Detoxification', 'Better Circulation', 'Deep Relaxation'],
      image: reflexologyImg,
      icon: Shield,
      blogPath: '/services/acupressure'
    },
    {
      id: 3,
      name: 'Ayurvedic & Panchakarma',
      description: 'Authentic Ayurveda detox and rejuvenation programs using medicated oils, herbal steam and classical therapies.',
      benefits: ['Detoxification', 'Joint Pain Relief', 'Hormonal Balance', 'Rejuvenation'],
      image: ayurvedaPanchakarmaImg,
      icon: Leaf,
      blogPath: '/services/ayurveda'
    },
    {
      id: 4,
      name: 'Neuro-Functional Rehabilitation',
      description: 'Integrated physiotherapy, occupational, speech and behavioral therapies to enhance movement, cognition and daily living.',
      benefits: ['Motor Skills', 'Speech & Language', 'Cognitive Boost', 'Behavior Regulation'],
      image: marmaTherapyImg,
      icon: Brain,
      blogPath: '/services/neuro-rehab'
    },
    {
      id: 5,
      name: 'Hearing Care & Auditory Rehab',
      description: 'Comprehensive diagnostics, hearing aid fitting and auditory-verbal therapy for all ages.',
      benefits: ['Better Hearing', 'Speech Clarity', 'Improved Communication', 'Quality of Life'],
      image: speechTherapyImg,
      icon: Users,
      blogPath: '/services/hearing-care'
    },
    {
      id: 6,
      name: 'Nutrition & Wellness',
      description: 'Personalized diet plans that treat food as medicine to support healing, immunity and vitality.',
      benefits: ['Weight Management', 'Metabolic Health', 'Enhanced Immunity', 'Energy & Vitality'],
      image: nutritionDietImg,
      icon: Heart,
      blogPath: '/services/nutrition'
    }
  ];

  // Doctors data
  const doctors = [
    {
      id: 1,
      name: 'Dr. Gandrajupalli Swetha',
      title: 'Founder Director & Head – Neuro-Speech, Hearing & Acupuncture Dept.',
      qualification: 'Ph.D. in Neuro-Acupuncture | M.Sc. Speech-Language Pathology & Audiology | Certified Functional Medicine Practitioner',
      experience: '12+ years',
      specializations: [
        'Neuro-Speech & Language Disorders',
        'Hearing Aid Trial, Fitting & Aural Rehabilitation',
        'Functional Medicine & Integrative Health',
        'Neuro-Acupuncture & Acupressure',
        'Holistic Multimodal Therapy (All Age Groups)'
      ],
      achievements: [
        'Gold Medalist – Academic Excellence',
        'RCI-Certified Speech-Language Pathologist & Audiologist',
        'Published researcher – National & International journals',
        'Ph.D. in Neuro-Acupuncture',
        'Certified Functional Medicine Specialist'
      ],
      patientsHelped: '10,000+',
      rating: 4.9,
      image: drSwethaImg
    },
    {
      id: 2,
      name: 'Dr. Maheshwarswami K. H',
      title: 'Senior Ayurvedic Physician',
      qualification: 'MD (Ayurveda) | Member – AYUSH',
      experience: '16+ years',
      specializations: [
        'Classical Ayurveda & Panchakarma Therapies',
        'Holistic Lifestyle & Preventive Care',
        'Integrative Pain Management',
        'Herbal Pharmacology',
        'Detox & Rejuvenation Programs'
      ],
      achievements: [
        'Treated 10,000+ patients successfully',
        'Expert in Traditional & Evidence-based Ayurveda',
        'Regular speaker at Ayurveda conferences',
        'Developed customised Panchakarma protocols'
      ],
      patientsHelped: '10,000+',
      rating: 4.8,
      image: drMaheshImg
    },
    {
      id: 3,
      name: 'Dr. Nishibha G. Kotian',
      title: 'Senior Physiotherapist',
      qualification: 'MPT (Pediatrics & Neurology)',
      experience: '7+ years',
      specializations: [
        'Developmental Movement Intervention (DMI)',
        'Neuro Developmental Therapy (NDT)',
        'Sensory Integration Therapy',
        'Dysgraphia Management'
      ],
      achievements: [
        'Treated 5,000+ pediatric & neuro patients',
        'Certified in multiple paediatric rehab techniques',
        'Active contributor to parent training workshops'
      ],
      patientsHelped: '5,000+',
      rating: 4.7,
      image: drNishibhaImg
    },
    {
      id: 4,
      name: 'Dr. Harish Shinde',
      title: 'Senior Audiologist',
      qualification: 'M.Sc (Audiology) | RCI & ISHA Certified',
      experience: '18+ years',
      specializations: [
        'Diagnostic Audiology',
        'Advanced Hearing Aid Solutions',
        'Vestibular Assessment',
        'Tinnitus Management'
      ],
      achievements: [
        'Helped 10,000+ patients regain hearing',
        'Lead trainer for budding audiologists',
        'Published articles on adult & geriatric audiology'
      ],
      patientsHelped: '10,000+',
      rating: 4.9,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      name: 'Dr. Satheesh Sakinala Patel',
      title: 'Sr. Speech-Language Pathologist & Audiologist',
      qualification: 'M.Sc (SLP & Audiology) | RCI & ISHA Certified',
      experience: '16+ years',
      specializations: [
        'Hearing, Speech & Vestibular Disorders',
        'Adult Neuro-Rehabilitation',
        'Voice Therapy',
        'Cochlear Implant Rehabilitation'
      ],
      achievements: [
        'Assisted 10,000+ clients',
        'Keynote speaker at speech & hearing seminars',
        'Developed vestibular rehab protocols'
      ],
      patientsHelped: '10,000+',
      rating: 4.8,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 6,
      name: 'Mrs. Nagaveni',
      title: 'Acupuncture Therapist',
      qualification: 'M.Sc (Acupuncture)',
      experience: '4+ years',
      specializations: [
        'Pain Management',
        'Holistic Healing',
        'Stress & Anxiety Relief'
      ],
      achievements: [
        'Treated 2,000+ patients',
        'Known for gentle & effective needle techniques'
      ],
      patientsHelped: '2,000+',
      rating: 4.6,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 7,
      name: 'Mrs. Nischitha G. C.',
      title: 'Child Psychologist & Remedial Therapist',
      qualification: 'M.Sc (Clinical Psychology)',
      experience: '3+ years',
      specializations: [
        'Emotional & Behavioural Difficulties',
        'Learning Disabilities',
        'Cognitive-Behavioural Therapy (CBT)',
        'Parent & Family Counselling'
      ],
      achievements: [
        'Supported 1,000+ children & families',
        'Conducted school-based mental health programs'
      ],
      patientsHelped: '1,000+',
      rating: 4.7,
      image: nischithaImg
    },
    {
      id: 8,
      name: 'Mrs. Gayathri Ravish',
      title: 'Special Educator – Hearing Impairment & Educational Psychologist',
      qualification: 'M.Ed (Special Education)',
      experience: '20+ years',
      specializations: [
        'Inclusive Education',
        'Educational Psychology',
        'Curriculum Adaptation',
        'Research & Training'
      ],
      achievements: [
        'Empowered 10,000+ children & families',
        'Developed inclusive education modules',
        'Mentor for aspiring special educators'
      ],
      patientsHelped: '10,000+',
      rating: 4.9,
      image: mrsGayathriImg
    }
  ];

  // Separate main doctor and others for layout
  const mainDoctor = doctors.find((d) => d.name === 'Dr. Gandrajupalli Swetha');
  const otherDoctors = doctors.filter((d) => d.name !== 'Dr. Gandrajupalli Swetha');

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Aparna',
      location: 'Bangalore',
      service: 'Speech & Hearing Therapy',
      doctor: 'Dr. Gandrajupalli Swetha',
      rating: 5,
      text: "Aarohi, my daughter, has learnt some dialogues from her brother Abhimanyu's role in drama. It's a miraculous journey that she is able to speak so fluently. Very grateful to you Dr. Swetha and your team.",
      category: 'Speech Therapy'
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Stats data
  const stats = [
    { number: '1500+', label: 'Happy Patients', icon: Users },
    { number: '98%', label: 'Success Rate', icon: Award },
    { number: '12+', label: 'Years Experience', icon: Calendar },
    { number: '4.9/5', label: 'Patient Rating', icon: Star }
  ];

  // Credibility badges data
  const credibilityBadges = [
    { name: 'RCI Certified', description: 'Rehabilitation Council of India', icon: Shield },
    { name: 'AYUSH Registered', description: 'Ministry of AYUSH, Govt. of India', icon: Award },
    { name: 'SSL Secured', description: 'Your data is safe with us', icon: CheckCircle },
    { name: 'ISO Certified', description: 'Quality Management System', icon: Star }
  ];

  // Business Information (NAP)
  const businessInfo = {
    name: 'KSK Healthcare',
    fullName: 'KSK Healthcare - Cure and Care with a Difference',
    address: {
      street: '6B, Kote NCMR Building, Karthik Nagar Service Road',
      area: 'Outer Ring Rd, Doddanekundi',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560037',
      country: 'India'
    },
    phone: '+91 88843 33439',
    email: 'kskhealthcare.in@gmail.com',
    coordinates: {
      latitude: 12.9698,
      longitude: 77.7500
    },
    hours: 'Monday - Sunday: 9:00 AM - 7:00 PM',
    website: 'https://kskhealthcare.in'
  };

  // JSON-LD Schema Markup for Local Business (Medical Clinic)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": businessInfo.fullName,
    "alternateName": businessInfo.name,
    "description": "Premier clinic in Bangalore offering Acupuncture, Ayurveda, Speech Therapy, and comprehensive traditional healing modalities integrated with modern medical practices. Cure and Care with a Difference.",
    "url": businessInfo.website,
    "telephone": businessInfo.phone,
    "email": businessInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address.street,
      "addressLocality": businessInfo.address.city,
      "addressRegion": businessInfo.address.state,
      "postalCode": businessInfo.address.pincode,
      "addressCountry": businessInfo.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.coordinates.latitude,
      "longitude": businessInfo.coordinates.longitude
    },
    "openingHours": [
      "Mo-Su 09:00-19:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "UPI", "Bank Transfer"],
    "currenciesAccepted": "INR",
    "areaServed": {
      "@type": "City",
      "name": "Bengaluru"
    },
    "medicalSpecialty": [
      "Acupuncture",
      "Ayurveda",
      "Speech Therapy",
      "Physiotherapy",
      "Audiology",
      "Psychology",
      "Reflexology",
      "Panchakarma"
    ],
    "hasCredential": [
      "RCI Certification",
      "AYUSH Registration",
      "ISO Standards"
    ],
    "founder": {
      "@type": "Person",
      "name": "Dr. Gandrajupalli Swetha",
      "jobTitle": "Founder Director & Head – Neuro-Speech, Hearing & Acupuncture Dept.",
      "hasCredential": "Ph.D. in Neuro-Acupuncture, M.Sc. Speech-Language Pathology & Audiology"
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Dr. Maheshwarswami K. H",
        "jobTitle": "Senior Ayurvedic Physician",
        "hasCredential": "MD (Ayurveda), Member – AYUSH"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "350",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Dr. Aparna"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Aarohi, my daughter, has learnt some dialogues from her brother Abhimanyu's role in drama. It's a miraculous journey that she is able to speak so fluently. Very grateful to you Dr. Swetha and your team."
      }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61563837613811",
      "https://www.instagram.com/kskhealthcare/",
      "https://www.linkedin.com/in/ksk-health-care-b067a0329/",
      "https://x.com/kskhealthcarein"
    ]
  };

  return (
    <GoogleAnalyticsProvider measurementId="G-XXXXXXXXXX">
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Helmet>
              <title>KSK Healthcare - World-Class Holistic Wellness Center in Doddanekundi, Bangalore</title>
              <meta name="description" content="Government-certified holistic healthcare in Doddanekundi, Bangalore. Expert Acupuncture, Ayurveda, Physiotherapy, Speech & Hearing Care. 12+ years excellence. Book consultation: +91-8884333439" />
              <meta name="keywords" content="KSK Healthcare Doddanekundi, holistic healthcare Bangalore, acupuncture near Marathahalli, ayurveda Whitefield, speech therapy Bangalore, physiotherapy Doddanekundi, hearing care Marathahalli" />
               <link rel="preload" as="image" href={heroBanner} fetchpriority="high" />
            </Helmet>

            {/* Enhanced Schema Markup */}
            <SchemaMarkup />
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  {/* Logo */}
                  <div className="flex items-center space-x-3">
                    <img src="/logo.png" alt="KSK Healthcare Logo" className="h-12" />
                    <div>
                      <h1 className="text-xl font-bold text-gray-900">KSK Healthcare</h1>
                      <p className="text-xs text-gray-600">Cure and Care with a Difference</p>
                    </div>
                  </div>

                  {/* Desktop Navigation */}
                  <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                      item.dropdown ? (
                        <div key={item.id} className="relative">
                          <button
                            onMouseEnter={() => setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => setIsServicesDropdownOpen(false)}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-green-600 ${activeSection === item.id ? 'text-green-600' : 'text-gray-700'
                              }`}
                          >
                            <span>{item.label}</span>
                            <ChevronDown className="h-4 w-4" />
                          </button>

                          {/* Services Dropdown */}
                          {isServicesDropdownOpen && (
                            <div
                              className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border z-50"
                              onMouseEnter={() => setIsServicesDropdownOpen(true)}
                              onMouseLeave={() => setIsServicesDropdownOpen(false)}
                            >
                              <div className="p-2">
                                {item.dropdown.map((service) => (
                                  <Link
                                    key={service.path}
                                    to={service.path}
                                    className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors group"
                                  >
                                    <service.icon className="h-4 w-4 text-gray-400 group-hover:text-green-600" />
                                    <span className="text-sm font-medium">{service.label}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : item.id === 'blog' ? (
                        <Link
                          key={item.id}
                          to={item.path}
                          className={`text-sm font-medium transition-colors hover:text-green-600 ${activeSection === item.id ? 'text-green-600' : 'text-gray-700'
                            }`}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`text-sm font-medium transition-colors hover:text-green-600 ${activeSection === item.id ? 'text-green-600' : 'text-gray-700'
                            }`}
                        >
                          {item.label}
                        </button>
                      )
                    ))}
                  </nav>

                  {/* Contact Info & Mobile Menu */}
                  <div className="flex items-center space-x-4">
                    <div className="hidden lg:flex items-center space-x-4 text-sm">
                      <a
                        href="tel:+918884333439"
                        className="flex items-center space-x-1 text-gray-600 hover:text-green-600"
                        onClick={() => trackPhone('header', 'general_inquiry')}
                      >
                        <Phone className="h-4 w-4" />
                        <span>+91 88843 33439</span>
                      </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="md:hidden p-2 rounded-md text-gray-600 hover:text-green-600"
                    >
                      {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                  </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                  <div className="md:hidden py-4 border-t">
                    <nav className="flex flex-col space-y-2">
                      {navItems.map((item) => (
                        item.dropdown ? (
                          <div key={item.id} className="space-y-1">
                            <button
                              onClick={() => scrollToSection(item.id)}
                              className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md flex items-center justify-between"
                            >
                              <span>{item.label}</span>
                              <ChevronDown className="h-4 w-4" />
                            </button>
                            <div className="ml-4 space-y-1">
                              {item.dropdown.map((service) => (
                                <Link
                                  key={service.path}
                                  to={service.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md"
                                >
                                  <service.icon className="h-4 w-4" />
                                  <span>{service.label}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : item.id === 'blog' ? (
                          <Link
                            key={item.id}
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                          >
                            {item.label}
                          </button>
                        )
                      ))}
                    </nav>

                    {/* Mobile Contact Actions */}
                    <div className="mt-4 px-4 space-y-3">
                      <div className="flex space-x-2">
                        <a
                          href="tel:+918884333439"
                          className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                        >
                          <Phone className="h-4 w-4" />
                          <span>Call Now</span>
                        </a>
                        <a
                          href="https://wa.me/919900546089?text=Hello%20KSK%20Healthcare%2C%20I%20would%20like%20to%20book%20an%20appointment."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>

                    {/* Mobile NAP Info */}
                    <div className="mt-4 px-4 py-2 bg-gray-50 rounded-md">
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-3 w-3" />
                          <a href="tel:+918884333439" className="hover:text-green-600">
                            +91 88843 33439
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBanner})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  World-Class <span className="text-green-400">Holistic</span><br />
                  Healthcare in Bangalore
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  Experience the perfect blend of ancient wisdom and modern healing techniques.
                  Your journey to optimal wellness starts here.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <WhatsAppButton
                    message="Hello KSK Healthcare, I would like to book a consultation."
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                    showIcon={true}
                  >
                    Book Consultation
                  </WhatsAppButton>

                  <button
                    onClick={() => scrollToSection('services')}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Our Services</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Government Registration Banner */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-green-800 font-semibold text-lg">
                      Government Registered Clinic – Safe and Trusted Since 2012
                    </span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Certified by RCI, AYUSH Ministry & ISO Standards for Quality Healthcare
                  </p>
                </div>

                {/* Prominent Patient Rating */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg border">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-xl font-bold text-gray-900">4.9/5</span>
                    <span className="text-gray-600">from 350+ patients</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">Trusted Choice</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <stat.icon className="h-8 w-8 text-green-600" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Credibility Badges */}
                <div className="mt-12">
                  <h3 className="text-center text-lg font-semibold text-gray-900 mb-6">
                    Our Certifications & Security
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {credibilityBadges.map((badge, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center border">
                        <badge.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{badge.name}</h4>
                        <p className="text-xs text-gray-600">{badge.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    About <span className="text-green-600">KSK Healthcare</span>
                  </h2>
                  <div className="relative mb-12">
                    <img
                      src={aboutBanner}
                      alt="About KSK Healthcare"
                      className="w-full aspect-[16/9] object-cover rounded-xl shadow-lg"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-green-600 text-center">12+</div>
                      <div className="text-sm text-gray-600 text-center">Years of Excellence</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story & Mission</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      KSK Healthcare is a premier clinic in Bangalore, dedicated to providing Cure and Care with a Difference
                      world-class healthcare services that integrate traditional healing wisdom with modern medical practices.
                    </p>
                    <p className="text-gray-600 mb-8">
                      Founded with a vision to make holistic healthcare accessible to everyone, we offer a comprehensive
                      range of services including Acupuncture, Ayurveda, Speech Therapy, and various traditional healing
                      modalities. Our team of experienced practitioners is committed to your journey towards optimal health and wellness.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose KSK Healthcare</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Expert Practitioners</h4>
                        <p className="text-sm text-gray-600">Highly qualified and experienced doctors</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Holistic Approach</h4>
                        <p className="text-sm text-gray-600">Treating mind, body, and spirit</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Modern Facilities</h4>
                        <p className="text-sm text-gray-600">State-of-the-art equipment and environment</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Personalized Care</h4>
                        <p className="text-sm text-gray-600">Customized treatment plans for each patient</p>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>

                {/* World-Class Facilities & Standards - Full Width */}
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center flex items-center justify-center space-x-2">
                    <Shield className="h-6 w-6 text-green-600" />
                    <span>World-Class Facilities & Standards</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Facilities */}
                    <div>
                      <h4 className="font-semibold text-green-600 mb-4 flex items-center space-x-2">
                        <MapPin className="h-5 w-5" />
                        <span>Modern Facilities</span>
                      </h4>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>8 specialized therapy rooms with climate control</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Advanced diagnostic equipment & hearing testing booth</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Ayurvedic Panchakarma suite with steam chambers</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Comfortable patient waiting areas with WiFi</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Herbal medicine preparation & consultation rooms</span>
                        </li>
                      </ul>
                    </div>

                    {/* Hygiene Standards */}
                    <div>
                      <h4 className="font-semibold text-green-600 mb-4 flex items-center space-x-2">
                        <Shield className="h-5 w-5" />
                        <span>Hygiene & Safety</span>
                      </h4>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>ISO 9001:2015 certified hygiene protocols</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>UV sterilization for all acupuncture needles</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Daily sanitization of all therapy equipment</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>HEPA air filtration in all treatment rooms</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Disposable linens & single-use medical supplies</span>
                        </li>
                      </ul>
                    </div>

                    {/* Accessibility */}
                    <div>
                      <h4 className="font-semibold text-green-600 mb-4 flex items-center space-x-2">
                        <Users className="h-5 w-5" />
                        <span>Accessibility & Convenience</span>
                      </h4>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Wheelchair accessible entrance & ramp</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Dedicated parking for 15+ vehicles</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Near Doddanekundi bus stop (2 mins walk)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Elevator access to all floors</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Accessible restrooms & baby changing facilities</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Transport & Location Info */}
                  <div className="mt-8 p-6 bg-white rounded-lg border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-4 text-center flex items-center justify-center space-x-2">
                      <MapPin className="h-5 w-5 text-green-600" />
                      <span>Easy to Reach</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
                      <div className="text-center">
                        <span className="font-medium text-green-600 text-base">🚌 Public Transport:</span>
                        <p className="mt-1">BMTC Bus Stop 50m away • Metro connectivity via Baiyappanahalli</p>
                      </div>
                      <div className="text-center">
                        <span className="font-medium text-green-600 text-base">🚗 By Car:</span>
                        <p className="mt-1">Free parking • GPS: KSK Healthcare, Doddanekundi Main Road</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <WhatsAppButton
                      message="Hello KSK Healthcare, I would like to know more about your services."
                      className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center space-x-2"
                      showIcon={true}
                    >
                      Learn More
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our <span className="text-green-600">Services</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Comprehensive holistic healthcare services designed to address your unique needs and
                    promote optimal wellness through traditional and modern healing approaches.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800 mt-6">Traditional & Modern Healing Solutions</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service) => (
                    <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 bg-green-600 rounded-full p-2">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>

                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                          <div className="grid grid-cols-2 gap-1">
                            {service.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-center space-x-1">
                                <CheckCircle className="h-3 w-3 text-green-600" />
                                <span className="text-xs text-gray-600">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <WhatsAppButton
                          message={`Hello KSK Healthcare, I would like to book a consultation for ${service.name}.`}
                          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                          showIcon={true}
                        >
                          Book Consultation
                        </WhatsAppButton>
                        <Link to={service.blogPath}>
                          <Button variant="outline" className="w-full">Learn More</Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Doctors Section */}
            <section id="doctors" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Meet Our <span className="text-green-600">Expert Doctors</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Our team of highly qualified and experienced practitioners brings together decades of expertise
                    in traditional and modern healing approaches.
                  </p>
                </div>

                {/* Main Doctor */}
                {mainDoctor && (
                  <div className="max-w-3xl mx-auto mb-16 bg-gray-50 rounded-xl p-12 shadow-lg flex flex-col items-center text-center">
                    <img
                      src={mainDoctor.image}
                      alt={`Photo of ${mainDoctor.name}`}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-6"
                      loading="lazy"
                    />
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{mainDoctor.name}</h3>
                    <p className="text-green-600 font-semibold mb-2">{mainDoctor.title}</p>
                    <p className="text-gray-600 text-sm mb-4 max-w-xl">{mainDoctor.qualification}</p>
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-4 py-2 mb-4">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">Founder & Lead Practitioner</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{mainDoctor.rating}/5 rating</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center space-x-6 text-sm mb-6">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>{mainDoctor.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span>{mainDoctor.patientsHelped} patients</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                      <div className="md:text-left">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Areas of Expertise</h3>
                        <h4 className="font-semibold text-gray-700 mb-3">Specializations</h4>
                        <ul className="space-y-2">
                          {mainDoctor.specializations.map((spec, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-gray-600">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:text-left">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Professional Recognition</h3>
                        <h4 className="font-semibold text-gray-700 mb-3">Achievements</h4>
                        <ul className="space-y-2">
                          {mainDoctor.achievements.map((ach, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <Award className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-gray-600">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 w-full">
                      <WhatsAppButton
                        message={`Hello KSK Healthcare, I would like to book a consultation with ${mainDoctor.name}.`}
                        className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                        showIcon={true}
                      >
                        Book Consultation with {mainDoctor.name.split(' ')[1]}
                      </WhatsAppButton>
                    </div>
                  </div>
                )}

                {/* Other Doctors */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherDoctors.map((doctor) => (
                    <div key={doctor.id} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <DoctorAvatar doctor={doctor} />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                          <p className="text-green-600 font-semibold mb-1 text-sm">{doctor.title}</p>
                          <p className="text-gray-600 text-xs mb-2">{doctor.qualification}</p>

                          {/* Professional Certifications */}
                          {doctor.qualification.includes('RCI') && (
                            <div className="flex items-center space-x-1 mb-2">
                              <Shield className="h-3 w-3 text-green-600" />
                              <span className="text-xs text-green-600 font-medium">RCI Certified</span>
                            </div>
                          )}
                          {doctor.qualification.includes('AYUSH') && (
                            <div className="flex items-center space-x-1 mb-2">
                              <Award className="h-3 w-3 text-green-600" />
                              <span className="text-xs text-green-600 font-medium">AYUSH Registered</span>
                            </div>
                          )}

                          <div className="flex items-center space-x-3 text-xs">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3 text-gray-500" />
                              <span>{doctor.experience}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-3 w-3 text-gray-500" />
                              <span>{doctor.patientsHelped}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                              <span>{doctor.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Booking removed for other doctors */}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Patient Success Stories Section */}
            <PatientSuccessStories />

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Contact <span className="text-green-600">KSK Healthcare</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Your path to holistic wellness starts here. Reach out to us for consultations,
                    appointments, or any questions about our services.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Contact Information */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
                      <h3 className="text-base font-semibold text-gray-700 mb-4">Contact Details</h3>

                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-green-100 rounded-full p-3">
                            <Phone className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Phone</h4>
                            <a
                              href="tel:+918884333439"
                              className="text-green-600 hover:text-green-700 font-medium"
                            >
                              +91 88843 33439
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="bg-green-100 rounded-full p-3">
                            <Mail className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Email</h4>
                            <a
                              href="mailto:kskhealthcare.in@gmail.com"
                              className="text-green-600 hover:text-green-700 font-medium"
                            >
                              kskhealthcare.in@gmail.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="bg-green-100 rounded-full p-3">
                            <MapPin className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Address</h4>
                            <p className="text-gray-600">
                              6B, Kote NCMR Building, Karthik Nagar Service Road,<br />
                              Outer Ring Rd, Doddanekundi,<br />
                              Bengaluru, Karnataka 560037
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="bg-green-100 rounded-full p-3">
                            <Clock className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Clinic Hours</h4>
                            <p className="text-gray-600">Monday - Sunday: 9:00 AM - 7:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Contact Options */}
                    <div className="space-y-4">
                      <WhatsAppButton
                        message="Hello KSK Healthcare, I need immediate assistance."
                        className="w-full bg-green-500 text-white py-4 px-6 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                        showIcon={true}
                      >
                        Chat on WhatsApp
                      </WhatsAppButton>

                      <a
                        href="tel:+919900546089"
                        className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Phone className="h-5 w-5" />
                        <span>Call Now</span>
                      </a>

                      <a
                        href="mailto:kskhealthcare.in@gmail.com"
                        className="w-full bg-gray-500 text-white py-4 px-6 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Mail className="h-5 w-5" />
                        <span>Send Email</span>
                      </a>
                    </div>
                  </div>

                  {/* Quick Booking Form */}
                  <div>
                    <QuickBookingForm />
                  </div>

                  {/* Map and Additional Info */}
                  <div className="space-y-6">
                    {/* Clickable Map Image */}
                    <div className="bg-gray-100 rounded-xl overflow-hidden">
                      <a
                        href="https://www.google.com/maps?q=KSK+Healthcare,+Doddanekundi,+Bengaluru&ll=12.9698,77.7499&z=17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative group cursor-pointer"
                        aria-label="Open Google Maps location for KSK Healthcare in a new tab"
                        title="Open in Google Maps"
                      >
                        <img
                          src={kskMapImg}
                          alt="KSK Healthcare Location Map - Doddanekundi, Bengaluru"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-[300px] md:h-[360px] object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow">
                            <MapPin className="h-6 w-6 text-green-600" />
                          </div>
                        </div>
                      </a>
                      <div className="p-4 bg-white">
                        <h4 className="font-semibold text-gray-900 mb-2">Visit Our Clinic</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>KSK Healthcare</strong> - Acupuncture & Holistic Wellness in Bengaluru
                        </p>
                        <p className="text-sm text-gray-600">
                          6B, Kote NCMR Building, Karthik Nagar Service Road, Outer Ring Rd, Doddanekundi, Bengaluru, Karnataka 560037
                        </p>
                        <a
                          href="https://www.google.com/maps?q=KSK+Healthcare,+Doddanekundi,+Bengaluru&ll=12.9698,77.7499&z=17"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-green-600 hover:text-green-700 text-sm mt-2"
                          aria-label="Get directions to KSK Healthcare on Google Maps"
                        >
                          <MapPin className="h-4 w-4" />
                          <span>Get Directions</span>
                        </a>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
                      <p className="text-gray-600 mb-4 text-sm">
                        Stay connected with KSK Healthcare on social media for health tips, updates, and community events.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61563837613811' },
                          { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/kskhealthcare/' },
                          { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/ksk-health-care-b067a0329/' },
                          { icon: Twitter, name: 'X', url: 'https://x.com/kskhealthcarein' },
                        ].map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
                          >
                            <social.icon className="h-5 w-5" />
                            <span className="text-sm">{social.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Company Info */}
                  <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <img src="/logo.png" alt="KSK Logo" className="h-10 w-10 mr-2" />
                      <div>
                        <h3 className="text-xl font-bold">KSK Healthcare</h3>
                        <p className="text-sm text-gray-400">Cure and Care with a Difference</p>
                      </div>
                    </div>

                    {/* Trust Banner */}
                    <div className="bg-green-900 border border-green-700 rounded-lg p-3 mb-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <Shield className="h-4 w-4 text-green-400" />
                        <span className="text-green-400 font-semibold text-sm">
                          Government Registered Clinic – Safe and Trusted Since 2012
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-green-800 px-2 py-1 rounded">RCI Certified</span>
                        <span className="bg-green-800 px-2 py-1 rounded">AYUSH Registered</span>
                        <span className="bg-green-800 px-2 py-1 rounded">SSL Secured</span>
                        <span className="bg-green-800 px-2 py-1 rounded">ISO Standards</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">
                      Your trusted partner in holistic healthcare, offering world-class services that integrate
                      traditional healing wisdom with modern medical practices.
                    </p>
                    <div className="flex space-x-4">
                      {[
                        { Icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61563837613811' },
                        { Icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/kskhealthcare/' },
                        { Icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/ksk-health-care-b067a0329/' },
                        { Icon: Twitter, name: 'X', url: 'https://x.com/kskhealthcarein' },
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors"
                          aria-label={`Follow us on ${social.name}`}
                        >
                          <social.Icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                      {navItems.map((item) => (
                        <li key={item.id}>
                          {item.id === 'blog' ? (
                            <Link
                              to={item.path}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <button
                              onClick={() => scrollToSection(item.id)}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              {item.label}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                    <div className="space-y-3 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <a href="tel:+918884333439" className="hover:text-white transition-colors">
                          +91 88843 33439
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <a href="mailto:kskhealthcare.in@gmail.com" className="hover:text-white transition-colors">
                          kskhealthcare.in@gmail.com
                        </a>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 mt-1" />
                        <span>6B, Kote NCMR Building, Karthik Nagar Service Road, Outer Ring Rd, Doddanekundi, Bengaluru, Karnataka 560037</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Mon-Sun: 9:00 AM - 7:00 PM</span>
                      </div>
                    </div>

                    {/* SSL and Security Badges */}
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <h5 className="text-sm font-semibold mb-2">Security & Trust</h5>
                      <div className="flex flex-wrap gap-1">
                        <div className="bg-gray-800 px-2 py-1 rounded text-xs flex items-center space-x-1">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span>SSL Secured</span>
                        </div>
                        <div className="bg-gray-800 px-2 py-1 rounded text-xs flex items-center space-x-1">
                          <Shield className="h-3 w-3 text-green-400" />
                          <span>Data Protected</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                  <p className="text-gray-400">
                    © 2025 KSK Healthcare. All rights reserved. |
                    <span className="text-sm"> Designed for optimal wellness and healing.</span>
                  </p>
                  <div className="flex items-center justify-center space-x-4 mt-2 text-sm">
                    <span className="flex items-center space-x-1">
                      <CheckCircle className="h-3 w-3 text-green-400" />
                      <span className="text-gray-400">Privacy Protected</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Shield className="h-3 w-3 text-green-400" />
                      <span className="text-gray-400">Secure Transactions</span>
                    </span>
                  </div>
                </div>
              </div>
            </footer>

            {/* Enhanced Floating Contact Buttons */}
            <FloatingContactButtons />

            {/* Mobile Sticky Buttons */}
            <MobileStickyButtons />

            {/* Chatbot Integration */}
            <ChatbotIntegration
              platform={CHATBOT_CONFIG.platform}
              config={CHATBOT_CONFIG[CHATBOT_CONFIG.platform]}
            />

            {/* Custom ChatBot - only show if platform is custom */}
            {CHATBOT_CONFIG.platform === 'custom' && CHATBOT_CONFIG.custom.enabled && (
              <ChatBot />
            )}

            {/* Symptom Checker Chatbot */}
            <SymptomChecker />
          </div>
        } />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/acupuncture-therapies" element={<AcupunctureServicesPage />} />
        <Route path="/blog/acupressure-therapies" element={<AcupressureServicesPage />} />
        <Route path="/blog/ayurvedic-panchakarma" element={<AyurvedicServicesPage />} />
        <Route path="/blog/neuro-rehab" element={<NeuroRehabServicesPage />} />
        <Route path="/blog/hearing-care" element={<HearingCareServicesPage />} />
        <Route path="/blog/nutrition-wellness" element={<NutritionWellnessPage />} />
        <Route path="/services/acupuncture" element={<AcupunctureServicesPage />} />
        <Route path="/services/acupressure" element={<AcupressureServicesPage />} />
        <Route path="/services/ayurveda" element={<AyurvedicServicesPage />} />
        <Route path="/services/neuro-rehab" element={<NeuroRehabServicesPage />} />
        <Route path="/services/hearing-care" element={<HearingCareServicesPage />} />
        <Route path="/services/nutrition" element={<NutritionWellnessPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
        <Route path="/admin/chatbot" element={<ChatbotAdmin />} />
        <Route path="/admin/analytics" element={<AnalyticsDashboard />} />
      </Routes>
    </GoogleAnalyticsProvider>
  );
};

export default App;


