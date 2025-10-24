import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup = () => {
  // LocalBusiness + MedicalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalClinic", "HealthAndBeautyBusiness"],
    "@id": "https://kskhealthcare.in/#organization",
    "name": "KSK Healthcare",
    "alternateName": "KSK Health Care",
    "description": "Government-certified holistic wellness center in Doddanekundi offering acupuncture, Ayurveda, physiotherapy, speech therapy & hearing care. 12+ years serving Bangalore with expert doctors.",
    "url": "https://kskhealthcare.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://kskhealthcare.in/logo.png",
      "width": 250,
      "height": 250
    },
    "image": [
      "https://kskhealthcare.in/src/assets/new-hero-banner.jpg",
      "https://kskhealthcare.in/src/assets/about-banner.png"
    ],
    "telephone": "+91-8884333439",
    "alternativeTelephone": "+91-9900546089",
    "email": "kskhealthcare.in@gmail.com",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6B, Kote NCMR Building, Karthik Nagar Service Road, Outer Ring Rd",
      "addressLocality": "Doddanekundi",
      "addressRegion": "Karnataka",
      "postalCode": "560037",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9903",
      "longitude": "77.6949"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Bengaluru"
      },
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "12.9903",
          "longitude": "77.6949"
        },
        "geoRadius": "10000"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "350",
      "bestRating": "5",
      "worstRating": "1"
    },
    "medicalSpecialty": [
      "Acupuncture",
      "Ayurveda",
      "Physiotherapy",
      "Speech-Language Pathology",
      "Audiology",
      "Neuro-Rehabilitation",
      "Nutrition & Dietetics"
    ],
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Acupuncture Therapies",
        "description": "Time-tested needle techniques for chronic pain relief, hormonal balance, and stress reduction"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Acupressure & Reflexology",
        "description": "Drug-free pressure techniques for muscle relaxation and detoxification"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Ayurvedic & Panchakarma",
        "description": "Authentic Ayurveda detox and rejuvenation programs"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Neuro-Functional Rehabilitation",
        "description": "Integrated therapy to enhance movement, cognition and daily living"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Hearing Care & Auditory Rehabilitation",
        "description": "Comprehensive diagnostics and hearing aid fitting"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Nutrition & Wellness",
        "description": "Personalized diet plans for healing and vitality"
      }
    ],
    "employee": [
      {
        "@type": "Physician",
        "name": "Dr. Gandrajupalli Swetha",
        "jobTitle": "Founder Director & Head – Neuro-Speech, Hearing & Acupuncture Dept.",
        "worksFor": {
          "@id": "https://kskhealthcare.in/#organization"
        },
        "qualifications": "Ph.D. in Neuro-Acupuncture, M.Sc. Speech-Language Pathology & Audiology, Certified Functional Medicine Practitioner",
        "award": "Gold Medalist – Academic Excellence",
        "yearsOfExperience": "12+"
      },
      {
        "@type": "Physician",
        "name": "Dr. Maheshwarswami K. H",
        "jobTitle": "Senior Ayurvedic Physician",
        "worksFor": {
          "@id": "https://kskhealthcare.in/#organization"
        },
        "qualifications": "MD (Ayurveda), Member – AYUSH"
      },
      {
        "@type": "Physician",
        "name": "Dr. Nishibha",
        "jobTitle": "Occupational Therapist & Behavioral Specialist",
        "worksFor": {
          "@id": "https://kskhealthcare.in/#organization"
        }
      },
      {
        "@type": "MedicalSpecialist",
        "name": "Mrs. Gayathri",
        "jobTitle": "Special Educator & Language Specialist",
        "worksFor": {
          "@id": "https://kskhealthcare.in/#organization"
        }
      }
    ],
    "sameAs": [
      "https://www.facebook.com/kskhealthcare",
      "https://www.instagram.com/kskhealthcare",
      "https://www.linkedin.com/company/kskhealthcare",
      "https://www.youtube.com/@kskhealthcare"
    ],
    "hasMap": "https://www.google.com/maps?q=KSK+Healthcare,+Doddanekundi,+Bengaluru",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Wheelchair Accessible",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking",
        "value": "Free parking for 15+ vehicles"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Near Public Transport",
        "value": "2 min walk from bus stop"
      }
    ],
    "knowsAbout": [
      "Acupuncture",
      "Neuro-Acupuncture",
      "Ayurveda",
      "Panchakarma",
      "Speech Therapy",
      "Audiology",
      "Hearing Aids",
      "Neuro-Rehabilitation",
      "Physiotherapy",
      "Functional Medicine",
      "Holistic Healthcare"
    ],
    "slogan": "Cure and Care with a Difference",
    "foundingDate": "2013",
    "additionalType": [
      "https://schema.org/MedicalOrganization",
      "https://schema.org/LocalBusiness"
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://kskhealthcare.in/#website",
    "url": "https://kskhealthcare.in",
    "name": "KSK Healthcare",
    "description": "World-class holistic healthcare center in Bangalore",
    "publisher": {
      "@id": "https://kskhealthcare.in/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://kskhealthcare.in/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://kskhealthcare.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://kskhealthcare.in/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About Us",
        "item": "https://kskhealthcare.in/#about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://kskhealthcare.in/#contact"
      }
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does KSK Healthcare offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "KSK Healthcare offers comprehensive holistic healthcare services including Acupuncture Therapies, Acupressure & Reflexology, Ayurvedic & Panchakarma treatments, Neuro-Functional Rehabilitation, Speech & Hearing Care, and Nutrition & Wellness programs. All services are provided by qualified, government-certified doctors."
        }
      },
      {
        "@type": "Question",
        "name": "Where is KSK Healthcare located in Bangalore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "KSK Healthcare is located at 6B, Kote NCMR Building, Karthik Nagar Service Road, Outer Ring Road, Doddanekundi, Bengaluru, Karnataka 560037. We are easily accessible from Whitefield, Marathahalli, and Mahadevapura, just 2 minutes walk from the nearest bus stop with free parking for 15+ vehicles."
        }
      },
      {
        "@type": "Question",
        "name": "What are the clinic timings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "KSK Healthcare is open Monday to Sunday from 9:00 AM to 7:00 PM. We also accommodate emergency appointments. Please call +91-8884333439 to schedule your visit."
        }
      },
      {
        "@type": "Question",
        "name": "Are the doctors at KSK Healthcare certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our doctors are highly qualified and government-certified. Our team includes Ph.D. holders, Gold Medalists, RCI-certified professionals, and AYUSH registered practitioners with 12+ years of combined experience."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
