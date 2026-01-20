import {
  Activity,
  Shield,
  Leaf,
  Brain,
  Users,
  Heart,
  Calendar,
  Award,
  Star,
  CheckCircle,
} from 'lucide-react';

// Import images
import acupunctureImg from '../assets/acupuncture.jpg';
import speechTherapyImg from '../assets/speech-therapy.jpg';
import drSwethaImg from '../assets/dr-swetha.png';
import drMaheshImg from '../assets/dr-mahesh.jpg';
import ayurvedaPanchakarmaImg from '../assets/ayurveda-panchakarma.jpg';
import marmaTherapyImg from '../assets/marma-therapy.jpg';
import reflexologyImg from '../assets/reflexology.jpg';
import nutritionDietImg from '../assets/nutrients.png';
import drNishibhaImg from '../assets/dr-nishibha.jpg';
import mrsGayathriImg from '../assets/mrs-gayathri.jpg';
import nischithaImg from '../assets/nischitha.jpg';

export const BUSINESS_INFO = {
  name: 'KSK Healthcare',
  fullName: 'KSK Healthcare - Cure and Care with a Difference',
  tagline: 'World-Class Holistic Healthcare',
  address: {
    street: '6B, Kote NCMR Building, Karthik Nagar Service Road',
    area: 'Outer Ring Rd, Doddanekundi',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560037',
    country: 'India'
  },
  phone: '+91 88843 33439',
  whatsapp: '919900546089',
  email: 'kskhealthcare.in@gmail.com',
  coordinates: {
    latitude: 12.9698,
    longitude: 77.7500
  },
  hours: 'Monday - Sunday: 9:00 AM - 7:00 PM',
  website: 'https://kskhealthcare.in'
};

export const SERVICES = [
  {
    id: 1,
    name: 'Acupuncture Therapies',
    description: 'Time-tested needle techniques tailored to restore energy balance, relieve chronic pain, and stimulate your body\'s natural healing.',
    benefits: ['Chronic Pain Relief', 'Hormonal Balance', 'Improved Sleep', 'Stress & Anxiety Reduction'],
    image: acupunctureImg,
    icon: Activity,
    blogPath: '/services/acupuncture',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 2,
    name: 'Acupressure & Reflexology',
    description: 'Drug-free, non-invasive pressure techniques on meridians and reflex zones to detox, relieve tension, and promote full-body wellness.',
    benefits: ['Muscle Relaxation', 'Detoxification', 'Better Circulation', 'Deep Relaxation'],
    image: reflexologyImg,
    icon: Shield,
    blogPath: '/services/acupressure',
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    id: 3,
    name: 'Ayurvedic & Panchakarma',
    description: 'Authentic Ayurveda detox and rejuvenation programs using medicated oils, herbal steam and classical therapies.',
    benefits: ['Detoxification', 'Joint Pain Relief', 'Hormonal Balance', 'Rejuvenation'],
    image: ayurvedaPanchakarmaImg,
    icon: Leaf,
    blogPath: '/services/ayurveda',
    color: 'from-green-400 to-green-600'
  },
  {
    id: 4,
    name: 'Neuro-Functional Rehabilitation',
    description: 'Integrated physiotherapy, occupational, speech and behavioral therapies to enhance movement, cognition and daily living.',
    benefits: ['Motor Skills', 'Speech & Language', 'Cognitive Boost', 'Behavior Regulation'],
    image: marmaTherapyImg,
    icon: Brain,
    blogPath: '/services/neuro-rehab',
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 5,
    name: 'Hearing Care & Auditory Rehab',
    description: 'Comprehensive diagnostics, hearing aid fitting and auditory-verbal therapy for all ages.',
    benefits: ['Better Hearing', 'Speech Clarity', 'Improved Communication', 'Quality of Life'],
    image: speechTherapyImg,
    icon: Users,
    blogPath: '/services/hearing-care',
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 6,
    name: 'Nutrition & Wellness',
    description: 'Personalized diet plans that treat food as medicine to support healing, immunity and vitality.',
    benefits: ['Immune System Support', 'Gut Health', 'Weight Management', 'Energy Boost'],
    types: ['Metabolic & Lifestyle Disorders', 'Gut Health', 'Neurodevelopmental Support', 'Women\'s Health', 'Pain & Inflammation', 'Immune System Support'],
    image: nutritionDietImg,
    icon: Heart,
    blogPath: '/services/nutrition',
    color: 'from-red-400 to-red-600'
  }
];

export const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Gandrajupalli Swetha',
    title: 'Founder & Lead Practitioner',
    qualification: 'Ph.D. (Neuro-Acupuncture) | M.Sc. (Speech-Language Pathology & Audiology) | Certified Functional Medicine Practitioner',
    experience: '12+ years',
    specializations: [
      'Neuro-Speech & Language Disorders',
      'Hearing Evaluation & Aural Rehabilitation',
      'Neuro-Acupuncture & Acupressure for Brain Development',
      'Functional Nutrition for Brain & Cognitive Health',
      'Multimodal Therapy for ADHD, Autism & Speech Delay',
      'Functional Rehabilitation & Brain Stimulation',
      'Stroke & Neuro-Rehabilitation (All Ages)',
      'Holistic Integration of Speech, Acupuncture & Nutrition'
    ],
    achievements: [
      'Gold Medalist – Academic Excellence',
      'RCI-Certified Speech-Language Pathologist & Audiologist',
      'Researcher – National & International Journals',
      'Ph.D. in Neuro-Acupuncture',
      'Certified Functional Nutrition Specialist',
      'Founder – KSK Health Care & Swadhma Essentials',
      'Director – Prime Health 5D India Pvt. Ltd.',
      'Conducted 1,000+ Health Awareness Camps Nationwide'
    ],
    patientsHelped: '10,000+',
    rating: 4.9,
    image: drSwethaImg,
    isFounder: true
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

export const TESTIMONIALS = [
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
    name: 'Mrs. Savitha',
    location: 'Bangalore',
    service: 'Acupuncture & Pain Management',
    doctor: 'Dr. Gandrajupalli Swetha',
    rating: 5,
    text: "I had been suffering from back pain for over 10–12 years... Within just 2–3 weeks of starting treatment at KSK, I began to feel relief. My back pain is almost gone now. I truly recommend you visit KSK Health Care.",
    category: 'Pain Management'
  },
  {
    id: 3,
    name: 'Mr. Rajesh',
    location: 'Whitefield',
    service: 'Neuro Rehabilitation',
    doctor: 'Dr. Maheshwarswami',
    rating: 5,
    text: "The holistic approach here is amazing. The combination of Ayurveda and Acupuncture worked wonders for my frozen shoulder. Highly knowledgeable doctors and caring staff.",
    category: 'Neuro Rehab'
  }
];

export const STATS = [
  { number: '1500+', label: 'Happy Patients', icon: Users },
  { number: '98%', label: 'Success Rate', icon: Award },
  { number: '12+', label: 'Years Experience', icon: Calendar },
  { number: '4.9/5', label: 'Patient Rating', icon: Star }
];

export const CREDIBILITY_BADGES = [
  { name: 'RCI Certified', description: 'Rehabilitation Council of India', icon: Shield },
  { name: 'AYUSH Registered', description: 'Ministry of AYUSH, Govt. of India', icon: Award },
  { name: 'SSL Secured', description: 'Your data is safe with us', icon: CheckCircle },
  { name: 'ISO Certified', description: 'Quality Management System', icon: Star }
];
