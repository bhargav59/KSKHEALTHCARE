import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

import ayurvedaImg from "../assets/ayurveda-panchakarma.jpg";

const AyurvedaBlog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Ayurveda & Panchakarma: The Science of Life and Detoxification</h1>
          <div className="flex items-center space-x-6 mt-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>December 12, 2024</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>Dr. Maheshwarswami K.H</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <img 
            src={ayurvedaImg} 
            alt="Ayurveda and Panchakarma treatment" 
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Ayurveda, often called the "Science of Life," is one of the world's oldest healing systems, originating in India over 5,000 years ago. 
              This comprehensive approach to health focuses on achieving balance between mind, body, and spirit through natural methods.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Ayurveda</h2>
            <p className="text-gray-700 mb-6">
              Ayurveda is based on the principle that health is maintained by balancing three fundamental energies called doshas: 
              Vata (air and space), Pitta (fire and water), and Kapha (earth and water). Each person has a unique constitution 
              (Prakriti) that determines their physical, mental, and emotional characteristics.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Three Doshas Explained</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-3">Vata (Air + Space)</h3>
                <p className="text-blue-700 text-sm mb-2">Governs movement and communication</p>
                <ul className="text-blue-600 text-sm">
                  <li>• Breathing and circulation</li>
                  <li>• Nervous system function</li>
                  <li>• Creativity and flexibility</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-bold text-red-800 mb-3">Pitta (Fire + Water)</h3>
                <p className="text-red-700 text-sm mb-2">Controls metabolism and transformation</p>
                <ul className="text-red-600 text-sm">
                  <li>• Digestion and metabolism</li>
                  <li>• Body temperature</li>
                  <li>• Intelligence and focus</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-800 mb-3">Kapha (Earth + Water)</h3>
                <p className="text-green-700 text-sm mb-2">Provides structure and stability</p>
                <ul className="text-green-600 text-sm">
                  <li>• Immunity and strength</li>
                  <li>• Lubrication of joints</li>
                  <li>• Emotional stability</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Panchakarma?</h2>
            <p className="text-gray-700 mb-6">
              Panchakarma, meaning "five actions," is Ayurveda's premier detoxification and rejuvenation program. 
              This comprehensive treatment removes accumulated toxins (ama) from the body while restoring balance to the doshas. 
              It's not just a physical cleanse but a complete reset for mind, body, and spirit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Five Panchakarma Therapies</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">1. Vamana (Therapeutic Vomiting)</h3>
                <p className="text-gray-700 text-sm">Eliminates excess Kapha dosha and respiratory toxins</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">2. Virechana (Purgation Therapy)</h3>
                <p className="text-gray-700 text-sm">Cleanses excess Pitta dosha and liver toxins</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">3. Basti (Medicated Enemas)</h3>
                <p className="text-gray-700 text-sm">Balances Vata dosha and cleanses the colon</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">4. Nasya (Nasal Administration)</h3>
                <p className="text-gray-700 text-sm">Cleanses the head and neck region</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">5. Raktamokshana (Bloodletting)</h3>
                <p className="text-gray-700 text-sm">Purifies blood and treats skin conditions</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits of Ayurveda & Panchakarma</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Physical Benefits:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Deep detoxification and cleansing</li>
                  <li>Improved digestion and metabolism</li>
                  <li>Enhanced immunity</li>
                  <li>Better sleep quality</li>
                  <li>Increased energy and vitality</li>
                  <li>Weight management</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Mental & Emotional Benefits:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Reduced stress and anxiety</li>
                  <li>Mental clarity and focus</li>
                  <li>Emotional balance</li>
                  <li>Improved concentration</li>
                  <li>Enhanced creativity</li>
                  <li>Spiritual awareness</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Panchakarma Process at KSK Healthcare</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Our comprehensive approach includes:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Consultation & Assessment</h4>
                    <p className="text-gray-600 text-sm">Detailed evaluation of your constitution and current health status</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Preparation Phase (Purvakarma)</h4>
                    <p className="text-gray-600 text-sm">Oil massage and steam therapy to prepare the body</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Main Treatment (Panchakarma)</h4>
                    <p className="text-gray-600 text-sm">Customized detoxification therapies based on your needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">4</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Recovery Phase (Paschatkarma)</h4>
                    <p className="text-gray-600 text-sm">Gradual return to normal diet and lifestyle with ongoing support</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Who Can Benefit?</h2>
            <p className="text-gray-700 mb-4">
              Ayurveda and Panchakarma are beneficial for people of all ages and health conditions:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Those seeking preventive healthcare and wellness maintenance</li>
              <li>Individuals with chronic health conditions</li>
              <li>People experiencing stress, fatigue, or burnout</li>
              <li>Anyone looking to improve their overall quality of life</li>
              <li>Those interested in natural, holistic healing approaches</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose KSK Healthcare?</h2>
            <p className="text-gray-700 mb-4">
              Our Ayurveda and Panchakarma programs are led by Dr. Maheshwarswami K.H, a certified Ayurvedic physician with over 15 years of experience. We offer:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Authentic Ayurvedic treatments following traditional protocols</li>
              <li>Personalized treatment plans based on individual constitution</li>
              <li>High-quality, organic herbal medicines and oils</li>
              <li>Comfortable, serene treatment environment</li>
              <li>Comprehensive lifestyle and dietary guidance</li>
              <li>Ongoing support throughout your healing journey</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Begin Your Ayurvedic Journey Today</h3>
              <p className="text-green-700 mb-4">
                Experience the transformative power of Ayurveda and Panchakarma. Let us help you achieve optimal health and well-being through time-tested natural healing methods.
              </p>
              <a 
                href="https://wa.me/918884333439?text=Hello%20KSK%20Healthcare,%20I%20would%20like%20to%20learn%20more%20about%20Ayurveda%20and%20Panchakarma%20treatments."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AyurvedaBlog;

