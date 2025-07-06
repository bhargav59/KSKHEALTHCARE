import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

import cuppingTherapyImg from "../assets/cupping-therapy.jpg";

const CuppingTherapyBlog = () => {
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
          <h1 className="text-4xl font-bold text-gray-900">Cupping Therapy: Ancient Healing Through Suction</h1>
          <div className="flex items-center space-x-6 mt-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>December 10, 2024</span>
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

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <img 
            src={cuppingTherapyImg} 
            alt="Cupping therapy treatment" 
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Cupping therapy is an ancient healing practice that has been used for thousands of years across various cultures. 
              This therapeutic technique uses suction cups to improve blood flow, reduce inflammation, and promote healing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Cupping Therapy?</h2>
            <p className="text-gray-700 mb-6">
              Cupping therapy involves placing special cups on the skin to create suction. This suction draws the skin and 
              superficial muscle layer into the cup, increasing blood circulation to the area and promoting healing. 
              The practice has roots in ancient Egyptian, Chinese, and Middle Eastern cultures.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Cupping Therapy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-3">Dry Cupping</h3>
                <p className="text-blue-700 text-sm mb-2">Most common form of cupping</p>
                <ul className="text-blue-600 text-sm">
                  <li>• Uses suction only</li>
                  <li>• No skin puncturing</li>
                  <li>• Safest method</li>
                  <li>• Suitable for beginners</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-bold text-purple-800 mb-3">Wet Cupping (Hijama)</h3>
                <p className="text-purple-700 text-sm mb-2">Traditional method with controlled bleeding</p>
                <ul className="text-purple-600 text-sm">
                  <li>• Combines suction with small incisions</li>
                  <li>• Removes stagnant blood</li>
                  <li>• More intensive treatment</li>
                  <li>• Requires experienced practitioner</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Does Cupping Work?</h2>
            <p className="text-gray-700 mb-4">
              Cupping therapy works through several mechanisms:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Improved Blood Circulation:</strong> Suction increases blood flow to the treated area</li>
              <li><strong>Muscle Relaxation:</strong> Helps release tension in tight muscles and fascia</li>
              <li><strong>Pain Relief:</strong> Stimulates nerve pathways that can block pain signals</li>
              <li><strong>Detoxification:</strong> Promotes lymphatic drainage and toxin removal</li>
              <li><strong>Inflammation Reduction:</strong> Helps reduce inflammatory markers in tissues</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conditions Treated with Cupping</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Musculoskeletal Issues:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Back and neck pain</li>
                  <li>Muscle stiffness and tension</li>
                  <li>Sports injuries</li>
                  <li>Arthritis pain</li>
                  <li>Fibromyalgia</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Other Conditions:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Respiratory issues</li>
                  <li>Digestive problems</li>
                  <li>Stress and anxiety</li>
                  <li>Headaches and migraines</li>
                  <li>Skin conditions</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Cupping Process</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">What to expect during your session:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Consultation</h4>
                    <p className="text-gray-600 text-sm">Discussion of your health concerns and treatment goals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Preparation</h4>
                    <p className="text-gray-600 text-sm">Positioning and cleaning of the treatment area</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Cup Placement</h4>
                    <p className="text-gray-600 text-sm">Strategic placement of cups on specific points</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">4</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Treatment Duration</h4>
                    <p className="text-gray-600 text-sm">Cups remain in place for 5-20 minutes depending on condition</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">5</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Aftercare</h4>
                    <p className="text-gray-600 text-sm">Post-treatment care instructions and follow-up recommendations</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits of Cupping Therapy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Physical Benefits:</h3>
                <ul className="list-disc pl-6 text-green-700">
                  <li>Pain reduction and muscle relaxation</li>
                  <li>Improved blood circulation</li>
                  <li>Enhanced athletic performance</li>
                  <li>Faster injury recovery</li>
                  <li>Reduced inflammation</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Mental & Emotional Benefits:</h3>
                <ul className="list-disc pl-6 text-blue-700">
                  <li>Deep relaxation and stress relief</li>
                  <li>Improved sleep quality</li>
                  <li>Enhanced mood and well-being</li>
                  <li>Reduced anxiety</li>
                  <li>Mental clarity</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Expect After Treatment</h2>
            <p className="text-gray-700 mb-4">
              After cupping therapy, you may experience:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Circular marks:</strong> Temporary discoloration where cups were placed (normal and painless)</li>
              <li><strong>Mild soreness:</strong> Similar to post-exercise muscle soreness</li>
              <li><strong>Increased energy:</strong> Many people feel energized and refreshed</li>
              <li><strong>Improved mobility:</strong> Reduced stiffness and increased range of motion</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Safety and Contraindications</h2>
            <p className="text-gray-700 mb-4">
              Cupping is generally safe when performed by trained professionals. However, it may not be suitable for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Pregnant women (especially abdominal cupping)</li>
              <li>People with bleeding disorders</li>
              <li>Those with severe heart conditions</li>
              <li>Individuals with skin conditions at treatment sites</li>
              <li>People taking blood-thinning medications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose KSK Healthcare for Cupping?</h2>
            <p className="text-gray-700 mb-4">
              Our cupping therapy services are provided by experienced practitioners who prioritize your safety and comfort:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Certified and experienced cupping therapists</li>
              <li>Sterile, high-quality equipment and cups</li>
              <li>Personalized treatment plans</li>
              <li>Comfortable and hygienic treatment environment</li>
              <li>Integration with other complementary therapies</li>
              <li>Comprehensive aftercare support</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Experience the Benefits of Cupping Therapy</h3>
              <p className="text-green-700 mb-4">
                Discover how this ancient healing practice can help relieve your pain, reduce stress, and improve your overall well-being. 
                Our skilled practitioners are here to guide you through a safe and effective treatment experience.
              </p>
              <a 
                href="https://wa.me/918884333439?text=Hello%20KSK%20Healthcare,%20I%20would%20like%20to%20book%20a%20cupping%20therapy%20session."
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

export default CuppingTherapyBlog;

