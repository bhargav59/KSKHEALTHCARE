import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Star, Quote, Heart, MessageCircle, 
  Send, Facebook, Instagram, Linkedin, Youtube, Menu, X, ChevronDown,
  Stethoscope, Users, Award, Calendar, CheckCircle, ArrowRight,
  Activity, Shield, Target, Zap, Brain, Leaf
} from 'lucide-react';
import './App.css';

// Import images
import heroBanner from './assets/new-hero-banner.jpg';
import aboutBanner from './assets/about-banner.jpg';
import acupunctureImg from './assets/acupuncture.jpg';
import speechTherapyImg from './assets/speech-therapy.jpg';
import medicalBannerImg from './assets/medical-banner.jpg';
import drSwethaImg from './assets/dr-swetha.png';
import drMaheshImg from './assets/dr-mahesh.jpg';
import ayurvedaPanchakarmaImg from './assets/ayurveda-panchakarma.jpg';
import marmaTherapyImg from './assets/marma-therapy.jpg';
import cuppingTherapyImg from './assets/cupping-therapy.jpg';
import reflexologyImg from './assets/reflexology.jpg';
import homeopathyImg from './assets/homeopathy.jpg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Our Doctors' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
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
    const whatsappUrl = `https://wa.me/918884333439?text=${encodeURIComponent(message)}`;
    
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
      name: 'Acupuncture',
      description: 'Traditional Chinese medicine technique using fine needles to stimulate specific points on the body for pain relief and healing.',
      benefits: ['Pain Management', 'Stress Relief', 'Improved Sleep', 'Enhanced Immunity'],
      duration: '45-60 minutes',
      sessions: '6-12 sessions',
      image: acupunctureImg,
      icon: Activity
    },
    {
      id: 2,
      name: 'Ayurveda & Panchakarma',
      description: 'Ancient Indian holistic healing system focusing on detoxification, rejuvenation, and balancing mind, body, and spirit.',
      benefits: ['Detoxification', 'Rejuvenation', 'Stress Management', 'Digestive Health'],
      duration: '60-90 minutes',
      sessions: '7-21 days',
      image: ayurvedaPanchakarmaImg,
      icon: Leaf
    },
    {
      id: 3,
      name: 'Speech & Hearing Therapy',
      description: 'Comprehensive therapy for communication disorders, speech delays, and hearing impairments in children and adults.',
      benefits: ['Improved Communication', 'Language Development', 'Confidence Building', 'Social Skills'],
      duration: '45 minutes',
      sessions: '12-24 sessions',
      image: speechTherapyImg,
      icon: Brain
    },
    {
      id: 4,
      name: 'Marma Therapy',
      description: 'Ancient Ayurvedic healing technique targeting vital energy points to restore balance and promote natural healing.',
      benefits: ['Energy Balance', 'Pain Relief', 'Improved Circulation', 'Mental Clarity'],
      duration: '60 minutes',
      sessions: '8-15 sessions',
      image: marmaTherapyImg,
      icon: Target
    },
    {
      id: 5,
      name: 'Cupping Therapy',
      description: 'Traditional healing method using suction cups to improve blood flow, reduce inflammation, and promote healing.',
      benefits: ['Muscle Relaxation', 'Improved Blood Flow', 'Pain Reduction', 'Stress Relief'],
      duration: '30-45 minutes',
      sessions: '6-10 sessions',
      image: cuppingTherapyImg,
      icon: Shield
    },
    {
      id: 6,
      name: 'Reflexology',
      description: 'Therapeutic foot and hand massage targeting pressure points that correspond to different organs and systems.',
      benefits: ['Relaxation', 'Improved Circulation', 'Stress Reduction', 'Better Sleep'],
      duration: '45 minutes',
      sessions: '6-12 sessions',
      image: reflexologyImg,
      icon: Zap
    },
    {
      id: 7,
      name: 'Homeopathy',
      description: 'A holistic system of medicine that stimulates the body\'s self-healing abilities using highly diluted substances.',
      benefits: ['Gentle Healing', 'Individualized Treatment', 'No Side Effects', 'Chronic Disease Management'],
      duration: '30-60 minutes',
      sessions: 'Varies based on condition',
      image: homeopathyImg,
      icon: Heart
    }
  ];

  // Doctors data
  const doctors = [
    {
      id: 1,
      name: 'Dr. Gandrajupalli Swetha',
      title: 'Director & Chief Speech-Language Pathologist',
      qualification: 'Masters in Speech Language Pathology & Audiology, Ph.D in Neuro Acupuncture',
      experience: '12+ years',
      specializations: [
        'Speech & Language Disorders',
        'Hearing Impairment Therapy',
        'Autism Spectrum Disorders',
        'Developmental Delays',
        'Neuro Acupuncture'
      ],
      achievements: [
        'Certified Speech-Language Pathologist',
        'Ph.D in Neuro Acupuncture',
        'Member of Indian Speech & Hearing Association',
        'Published researcher in speech therapy'
      ],
      patientsHelped: '800+',
      rating: 4.9,
      image: drSwethaImg
    },
    {
      id: 2,
      name: 'Dr. Maheshwarswami K.H',
      title: 'Managing Director & Chief Ayurvedic Physician',
      qualification: 'AYU, MBA, PhD',
      experience: '15+ years',
      specializations: [
        'Ayurveda & Panchakarma',
        'Acupuncture & Acupressure',
        'Marma Therapy',
        'Cupping Therapy',
        'Holistic Wellness'
      ],
      achievements: [
        'Certified Ayurvedic Physician',
        'PhD in Alternative Medicine',
        'Member of Ayurvedic Medical Association',
        'Expert in Traditional Healing Methods'
      ],
      patientsHelped: '1200+',
      rating: 4.8,
      image: drMaheshImg
    }
  ];

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
    },
    {
      id: 2,
      name: 'Shalini',
      location: 'Koramangala',
      service: 'Ayurveda & Panchakarma',
      doctor: 'Dr. Maheshwarswami K.H',
      rating: 5,
      text: "KSK Products and services are potent and herbal, offering effective solutions without side effects. Trusted for their purity and efficacy, they cater to various needs from skincare to supplements.",
      category: 'Ayurveda'
    },
    {
      id: 3,
      name: 'Ramesh Kumar',
      location: 'Jayanagar',
      service: 'Acupuncture',
      doctor: 'Dr. Maheshwarswami K.H',
      rating: 5,
      text: "For years, I suffered from debilitating back pain. After just a few sessions of acupuncture at KSK Healthcare, I feel like a new person. The relief is incredible, and the team is so supportive and knowledgeable.",
      category: 'Acupuncture'
    },
    {
      id: 4,
      name: 'Priya Sharma',
      location: 'Indiranagar',
      service: 'Ayurveda & Panchakarma',
      doctor: 'Dr. Maheshwarswami K.H',
      rating: 5,
      text: "The Panchakarma therapy at KSK Healthcare was a truly transformative experience. I feel detoxified, rejuvenated, and my energy levels have soared. The personalized care and serene environment made all the difference.",
      category: 'Panchakarma'
    },
    {
      id: 5,
      name: 'Anil Kumar',
      location: 'Basavanagudi',
      service: 'Homeopathy',
      doctor: 'Dr. Gandrajupalli Swetha',
      rating: 5,
      text: "I was skeptical about homeopathy, but KSK Healthcare changed my mind. Their personalized approach and gentle remedies have significantly improved my chronic allergies. Highly recommend!",
      category: 'Homeopathy'
    },
    {
      id: 6,
      name: 'Deepa Reddy',
      location: 'Malleshwaram',
      service: 'Cupping Therapy',
      doctor: 'Dr. Maheshwarswami K.H',
      rating: 5,
      text: "Cupping therapy at KSK Healthcare helped relieve my muscle stiffness and pain. The therapists are skilled and the clinic is very clean. I felt immediate relief after the sessions.",
      category: 'Cupping Therapy'
    },
    {
      id: 7,
      name: 'Suresh Bhat',
      location: 'Rajajinagar',
      service: 'Reflexology',
      doctor: 'Dr. Gandrajupalli Swetha',
      rating: 5,
      text: "The reflexology sessions are incredibly relaxing and therapeutic. I always leave feeling refreshed and re-energized. KSK Healthcare provides a truly holistic healing experience.",
      category: 'Reflexology'
    },
    {
      id: 8,
      name: 'Meena Devi',
      location: 'Whitefield',
      service: 'Marma Therapy',
      doctor: 'Dr. Maheshwarswami K.H',
      rating: 5,
      text: "Marma therapy has been a revelation for my chronic fatigue. Dr. Maheshwarswami's expertise is remarkable, and I've seen a significant improvement in my energy levels and overall well-being.",
      category: 'Marma Therapy'
    },
    {
      id: 9,
      name: 'John Doe',
      location: 'Koramangala',
      service: 'Speech & Hearing Therapy',
      doctor: 'Dr. Gandrajupalli Swetha',
      rating: 5,
      text: "My son's speech development has come so far thanks to Dr. Swetha and her team. They are patient, encouraging, and truly dedicated. We are so grateful for their support.",
      category: 'Speech Therapy'
    },
    {
      id: 10,
      name: 'Sarah Khan',
      location: 'HSR Layout',
      service: 'Ayurveda & Panchakarma',
      doctor: 'Dr. Maheshwarswami K.H',
      rating: 5,
      text: "KSK Healthcare's Ayurvedic treatments are exceptional. I experienced profound healing and relaxation during my Panchakarma. The staff is caring and the environment is serene.",
      category: 'Ayurveda'
    }
  ];

  // Stats data
  const stats = [
    { number: '1500+', label: 'Happy Patients', icon: Users },
    { number: '98%', label: 'Success Rate', icon: Award },
    { number: '12+', label: 'Years Experience', icon: Calendar },
    { number: '4.9/5', label: 'Patient Rating', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="KSK Healthcare Logo" className="h-12" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">KSK Healthcare</h1>
                <p className="text-xs text-gray-600">Holistic Wellness Center</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-green-600 ${
                    activeSection === item.id ? 'text-green-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Contact Info & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4 text-sm">
                <a href="tel:+918884333439" className="flex items-center space-x-1 text-gray-600 hover:text-green-600">
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
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-green-600">KSK Healthcare</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                KSK Healthcare is a premier holistic wellness center in Bangalore, dedicated to providing 
                world-class healthcare services that integrate traditional healing wisdom with modern medical practices.
              </p>
              <p className="text-gray-600 mb-8">
                Founded with a vision to make holistic healthcare accessible to everyone, we offer a comprehensive 
                range of services including Acupuncture, Ayurveda, Speech Therapy, and various traditional healing 
                modalities. Our team of experienced practitioners is committed to your journey towards optimal health and wellness.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

              <WhatsAppButton 
                message="Hello KSK Healthcare, I would like to know more about your services."
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center space-x-2"
                showIcon={true}
              >
                Learn More
              </WhatsAppButton>
            </div>
            
            <div className="relative">
              <img 
                src={aboutBanner} 
                alt="KSK Healthcare Facility"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6">
                <div className="text-2xl font-bold text-green-600">12+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 rounded-full p-2">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Sessions:</span>
                      <span className="font-medium">{service.sessions}</span>
                    </div>
                  </div>
                  
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-start space-x-6 mb-6">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                    <p className="text-green-600 font-semibold mb-2">{doctor.title}</p>
                    <p className="text-gray-600 text-sm mb-3">{doctor.qualification}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>{doctor.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span>{doctor.patientsHelped} patients</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{doctor.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Specializations</h4>
                    <ul className="space-y-2">
                      {doctor.specializations.map((spec, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      {doctor.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <WhatsAppButton 
                    message={`Hello KSK Healthcare, I would like to book a consultation with ${doctor.name}.`}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                    showIcon={true}
                  >
                    Book Consultation with {doctor.name.split(' ')[1]}
                  </WhatsAppButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Patient <span className="text-green-600">Testimonials</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your healing journeys inspire us every day. Read what our patients have to say about their 
              transformative experiences with holistic healthcare at KSK Healthcare.
            </p>
            <div className="flex items-center justify-center space-x-2 mt-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">4.9 out of 5</span>
              <span className="text-gray-600">from 350+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Quote className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-md font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-xs">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-3 mt-auto">
                  <p className="text-xs font-medium text-green-600">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <WhatsAppButton 
              message="Hello KSK Healthcare, I would like to share my positive experience and testimonial about my treatment."
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center space-x-2"
              showIcon={true}
            >
              Share Your Story
            </WhatsAppButton>
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+91 88843 33439</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">kskhealthcare.in@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        #123, 1st Floor, 80 Feet Road<br />
                        Koramangala 4th Block<br />
                        Bangalore - 560034, Karnataka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Clinic Hours</h4>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
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

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Interactive Map</p>
                  <p className="text-sm text-gray-500 mt-2">
                    <a 
                      href="https://maps.app.goo.gl/LfKjkmm7VcutWpE27"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-red-800 mb-2">Emergency Contact</h4>
                <p className="text-red-700 text-sm mb-4">
                  For urgent medical situations, please contact emergency services immediately at <strong>108</strong> or visit your nearest hospital.
                </p>
                <p className="text-red-600 text-sm">
                  For non-emergency urgent consultations:
                </p>
                <a 
                  href="tel:+919900546089"
                  className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors mt-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 9900546089</span>
                </a>
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
                    { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/kskhealthcare.in/' },
                    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/company/ksk-healthcare/' },
                    { icon: Youtube, name: 'YouTube', url: 'https://www.youtube.com/@kskhealthcarein' }
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
                <div className="bg-green-500 rounded-full p-2">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">KSK Healthcare</h3>
                  <p className="text-sm text-gray-400">Holistic Wellness Center</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner in holistic healthcare, offering world-class services that integrate 
                traditional healing wisdom with modern medical practices.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href={(() => {
                      switch (Icon) {
                        case Facebook: return "https://www.facebook.com/profile.php?id=61563837613811";
                        case Instagram: return "https://www.instagram.com/kskhealthcare.in/";
                        case Linkedin: return "https://www.linkedin.com/company/ksk-healthcare/";
                        case Youtube: return "https://www.youtube.com/@kskhealthcarein";
                        default: return "#";
                      }
                    })()}
                    className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
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
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
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
                  <span>+91 88843 33439</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>kskhealthcare.in@gmail.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>Koramangala 4th Block, Bangalore - 560034</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 KSK Healthcare. All rights reserved. | 
              <span className="text-sm"> Designed for optimal wellness and healing.</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppButton 
          message="Hello KSK Healthcare, I would like to get in touch with you."
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Contact us on WhatsApp</span>
        </WhatsAppButton>
      </div>
    </div>
  );
};

export default App;

