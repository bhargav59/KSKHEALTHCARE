import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

import homeopathyImg from "../assets/homeopathy.jpg";

const HomeopathyBlog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Homeopathy: Gentle Healing for Mind and Body</h1>
          <div className="flex items-center space-x-6 mt-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>December 8, 2024</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>Dr. Gandrajupalli Swetha</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <img src={homeopathyImg} alt="Homeopathy treatment" className="w-full h-64 object-cover rounded-lg mb-8" />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Homeopathy is a gentle, natural system of healing that works with your body's own healing mechanisms. 
              Based on the principle of "like cures like," this 200-year-old medical system offers safe, effective treatment for a wide range of conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Homeopathy</h2>
            <p className="text-gray-700 mb-6">
              Founded by German physician Samuel Hahnemann in 1796, homeopathy is based on three fundamental principles: 
              the Law of Similars (like cures like), the principle of minimum dose, and the concept of individualization. 
              This holistic approach treats the person as a whole, not just the symptoms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Core Principles of Homeopathy</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">Law of Similars</h3>
                <p className="text-gray-700 text-sm">A substance that causes symptoms in a healthy person can cure similar symptoms in a sick person</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900">Minimum Dose</h3>
                <p className="text-gray-700 text-sm">The smallest possible dose that stimulates healing without causing side effects</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900">Individualization</h3>
                <p className="text-gray-700 text-sm">Treatment is tailored to each person's unique symptoms and constitution</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conditions Treated with Homeopathy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Acute Conditions:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Common colds and flu</li>
                  <li>Allergies and hay fever</li>
                  <li>Digestive upsets</li>
                  <li>Minor injuries and bruises</li>
                  <li>Emotional stress</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Chronic Conditions:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Asthma and respiratory issues</li>
                  <li>Skin conditions like eczema</li>
                  <li>Anxiety and depression</li>
                  <li>Arthritis and joint pain</li>
                  <li>Hormonal imbalances</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits of Homeopathic Treatment</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Safe for all ages, including infants and pregnant women</li>
              <li>No harmful side effects when properly prescribed</li>
              <li>Can be used alongside conventional medicine</li>
              <li>Treats the root cause, not just symptoms</li>
              <li>Strengthens the body's natural healing ability</li>
              <li>Cost-effective long-term treatment option</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Discover Gentle, Natural Healing</h3>
              <p className="text-green-700 mb-4">
                Experience the gentle power of homeopathy. Our experienced practitioners will work with you to find the right remedy for your unique needs.
              </p>
              <a 
                href="https://wa.me/918884333439?text=Hello%20KSK%20Healthcare,%20I%20would%20like%20to%20learn%20more%20about%20homeopathy%20treatment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeopathyBlog;

