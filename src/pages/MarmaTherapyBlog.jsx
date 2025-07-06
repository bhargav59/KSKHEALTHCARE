import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

import marmaTherapyImg from "../assets/marma-therapy.jpg";

const MarmaTherapyBlog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Marma Therapy: Unlocking Vital Energy Points</h1>
          <div className="flex items-center space-x-6 mt-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>December 6, 2024</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>Dr. Maheshwarswami K.H</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <img src={marmaTherapyImg} alt="Marma therapy treatment" className="w-full h-64 object-cover rounded-lg mb-8" />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Marma therapy is an ancient Ayurvedic healing technique that focuses on vital energy points throughout the body. 
              These sacred points, known as marmas, are junctions where consciousness meets physiology, offering profound healing potential.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Marma Points</h2>
            <p className="text-gray-700 mb-6">
              Marma points are vital energy centers located at the intersections of muscles, veins, ligaments, bones, and joints. 
              There are 107 marma points throughout the human body, each serving as a gateway to deeper layers of the body and consciousness. 
              These points are considered the seats of life force (prana) and play a crucial role in maintaining health and vitality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Marma Points</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-3">Mamsa Marma</h3>
                <p className="text-blue-700 text-sm mb-2">Muscle-related points</p>
                <p className="text-blue-600 text-sm">11 points that affect muscular function and strength</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-800 mb-3">Sira Marma</h3>
                <p className="text-green-700 text-sm mb-2">Vessel-related points</p>
                <p className="text-green-600 text-sm">41 points that influence circulation and blood flow</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-bold text-purple-800 mb-3">Asthi Marma</h3>
                <p className="text-purple-700 text-sm mb-2">Bone-related points</p>
                <p className="text-purple-600 text-sm">8 points that affect skeletal structure and support</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Marma Therapy Works</h2>
            <p className="text-gray-700 mb-4">
              Marma therapy works by stimulating these vital points through gentle pressure, massage, and energy work. This stimulation:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Balances the flow of prana (life force energy)</li>
              <li>Removes blockages in energy channels</li>
              <li>Harmonizes the three doshas (Vata, Pitta, Kapha)</li>
              <li>Enhances circulation and lymphatic drainage</li>
              <li>Promotes deep relaxation and stress relief</li>
              <li>Stimulates the body's natural healing mechanisms</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits of Marma Therapy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Physical Benefits:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Pain relief and muscle relaxation</li>
                  <li>Improved flexibility and mobility</li>
                  <li>Enhanced circulation</li>
                  <li>Better sleep quality</li>
                  <li>Increased energy and vitality</li>
                  <li>Strengthened immune system</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Mental & Emotional Benefits:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Reduced stress and anxiety</li>
                  <li>Mental clarity and focus</li>
                  <li>Emotional balance</li>
                  <li>Enhanced creativity</li>
                  <li>Spiritual awareness</li>
                  <li>Deep sense of peace</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conditions Treated</h2>
            <p className="text-gray-700 mb-4">
              Marma therapy is effective for treating various conditions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ul className="list-disc pl-6 text-gray-700">
                <li>Chronic pain and stiffness</li>
                <li>Stress-related disorders</li>
                <li>Digestive issues</li>
                <li>Sleep disorders</li>
                <li>Fatigue and low energy</li>
              </ul>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Anxiety and depression</li>
                <li>Headaches and migraines</li>
                <li>Joint problems</li>
                <li>Respiratory issues</li>
                <li>Hormonal imbalances</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Marma Therapy Session</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">What to expect during your treatment:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Assessment</h4>
                    <p className="text-gray-600 text-sm">Evaluation of your constitution and energy imbalances</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Preparation</h4>
                    <p className="text-gray-600 text-sm">Relaxation and centering to prepare for treatment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Marma Stimulation</h4>
                    <p className="text-gray-600 text-sm">Gentle pressure and massage on specific marma points</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">4</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Integration</h4>
                    <p className="text-gray-600 text-sm">Time to rest and integrate the healing energy</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose KSK Healthcare?</h2>
            <p className="text-gray-700 mb-4">
              Our marma therapy is provided by Dr. Maheshwarswami K.H, who has extensive training in traditional Ayurvedic healing methods:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Deep knowledge of marma point locations and functions</li>
              <li>Personalized treatment based on individual constitution</li>
              <li>Integration with other Ayurvedic therapies</li>
              <li>Safe, gentle, and effective techniques</li>
              <li>Peaceful, healing environment</li>
              <li>Ongoing support and lifestyle guidance</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Unlock Your Body's Healing Potential</h3>
              <p className="text-green-700 mb-4">
                Experience the profound healing power of marma therapy. Let us help you restore balance, vitality, and well-being through this ancient Ayurvedic practice.
              </p>
              <a 
                href="https://wa.me/918884333439?text=Hello%20KSK%20Healthcare,%20I%20would%20like%20to%20book%20a%20marma%20therapy%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Book Your Session
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarmaTherapyBlog;

