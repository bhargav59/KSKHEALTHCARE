import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

import reflexologyImg from "../assets/reflexology.jpg";

const ReflexologyBlog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Reflexology: Healing Through Pressure Points</h1>
          <div className="flex items-center space-x-6 mt-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>December 4, 2024</span>
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
          <img src={reflexologyImg} alt="Reflexology treatment" className="w-full h-64 object-cover rounded-lg mb-8" />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Reflexology is a therapeutic practice that involves applying pressure to specific points on the feet, hands, and ears. 
              These reflex points correspond to different organs and systems in the body, promoting healing and relaxation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Reflexology?</h2>
            <p className="text-gray-700 mb-6">
              Reflexology is based on the principle that the feet, hands, and ears contain reflex points that mirror the entire body. 
              By applying targeted pressure to these points, reflexologists can stimulate corresponding organs and systems, 
              promoting natural healing and restoring balance to the body.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Reflexology Works</h2>
            <p className="text-gray-700 mb-4">
              Reflexology works through several mechanisms:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Stimulates nerve pathways and improves neural communication</li>
              <li>Enhances blood circulation throughout the body</li>
              <li>Promotes lymphatic drainage and detoxification</li>
              <li>Releases endorphins, the body's natural painkillers</li>
              <li>Activates the parasympathetic nervous system for relaxation</li>
              <li>Balances energy flow throughout the body</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits of Reflexology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Physical Benefits:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Pain relief and muscle relaxation</li>
                  <li>Improved circulation</li>
                  <li>Enhanced immune function</li>
                  <li>Better sleep quality</li>
                  <li>Reduced inflammation</li>
                  <li>Increased energy levels</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Mental & Emotional Benefits:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Deep relaxation and stress relief</li>
                  <li>Reduced anxiety and tension</li>
                  <li>Improved mood and well-being</li>
                  <li>Enhanced mental clarity</li>
                  <li>Better emotional balance</li>
                  <li>Increased sense of calm</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conditions Helped by Reflexology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ul className="list-disc pl-6 text-gray-700">
                <li>Stress and anxiety</li>
                <li>Headaches and migraines</li>
                <li>Back and neck pain</li>
                <li>Digestive issues</li>
                <li>Sleep disorders</li>
                <li>Chronic fatigue</li>
              </ul>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Hormonal imbalances</li>
                <li>Circulation problems</li>
                <li>Arthritis and joint pain</li>
                <li>Respiratory issues</li>
                <li>High blood pressure</li>
                <li>Depression</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Expect During a Session</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Your reflexology experience:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Consultation</h4>
                    <p className="text-gray-600 text-sm">Discussion of your health concerns and goals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Comfortable Positioning</h4>
                    <p className="text-gray-600 text-sm">Relaxing in a comfortable chair or treatment table</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Pressure Point Work</h4>
                    <p className="text-gray-600 text-sm">Gentle pressure applied to specific reflex points</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">4</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Relaxation Time</h4>
                    <p className="text-gray-600 text-sm">Time to rest and integrate the healing benefits</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Safety and Considerations</h2>
            <p className="text-gray-700 mb-4">
              Reflexology is generally safe for most people. However, certain conditions require special consideration:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Pregnancy (especially first trimester)</li>
              <li>Recent injuries or surgeries to feet or hands</li>
              <li>Blood clots or circulation disorders</li>
              <li>Severe heart conditions</li>
              <li>Active infections or open wounds</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Experience Deep Relaxation and Healing</h3>
              <p className="text-green-700 mb-4">
                Discover the therapeutic benefits of reflexology. Our skilled practitioners will help you achieve deep relaxation 
                and promote your body's natural healing abilities through this gentle, effective therapy.
              </p>
              <a 
                href="https://wa.me/918884333439?text=Hello%20KSK%20Healthcare,%20I%20would%20like%20to%20book%20a%20reflexology%20session."
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

export default ReflexologyBlog;

