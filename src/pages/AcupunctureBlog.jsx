import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

import acupunctureImg from "../assets/acupuncture.jpg";

const AcupunctureBlog = () => {
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
          <h1 className="text-4xl font-bold text-gray-900">Acupuncture: Ancient Healing for Modern Times</h1>
          <div className="flex items-center space-x-6 mt-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>December 15, 2024</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>Dr. Maheshwarswami K.H</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <img 
            src={acupunctureImg} 
            alt="Acupuncture treatment" 
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Acupuncture, a cornerstone of Traditional Chinese Medicine (TCM), has been healing people for over 3,000 years. 
              This ancient practice involves inserting thin needles into specific points on the body to restore balance and promote natural healing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Acupuncture?</h2>
            <p className="text-gray-700 mb-6">
              Acupuncture is based on the concept of Qi (pronounced "chee"), the vital energy that flows through pathways called meridians in our body. 
              When this energy flow is disrupted, illness and pain can occur. By inserting fine needles at specific acupoints, 
              acupuncturists can restore the proper flow of Qi and stimulate the body's natural healing mechanisms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Does Acupuncture Work?</h2>
            <p className="text-gray-700 mb-4">
              From a modern scientific perspective, acupuncture works through several mechanisms:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Stimulates the release of endorphins, the body's natural painkillers</li>
              <li>Activates the nervous system to release neurotransmitters</li>
              <li>Improves blood circulation and reduces inflammation</li>
              <li>Modulates the immune system response</li>
              <li>Influences the autonomic nervous system</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conditions Treated with Acupuncture</h2>
            <p className="text-gray-700 mb-4">
              The World Health Organization (WHO) recognizes acupuncture as effective for treating numerous conditions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Pain Management:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Chronic back pain</li>
                  <li>Arthritis</li>
                  <li>Migraines and headaches</li>
                  <li>Neck pain</li>
                  <li>Fibromyalgia</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Other Conditions:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Anxiety and depression</li>
                  <li>Insomnia</li>
                  <li>Digestive disorders</li>
                  <li>Allergies</li>
                  <li>Fertility issues</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Expect During Treatment</h2>
            <p className="text-gray-700 mb-4">
              Your first acupuncture session at KSK Healthcare begins with a comprehensive consultation where we:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Review your medical history and current symptoms</li>
              <li>Examine your tongue and check your pulse</li>
              <li>Develop a personalized treatment plan</li>
              <li>Explain the treatment process and answer your questions</li>
            </ul>

            <p className="text-gray-700 mb-6">
              During the treatment, you'll lie comfortably while sterile, disposable needles are gently inserted at specific points. 
              Most people find the experience relaxing and may even fall asleep during the session.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Safety and Side Effects</h2>
            <p className="text-gray-700 mb-6">
              Acupuncture is extremely safe when performed by licensed practitioners. Side effects are rare and typically mild, 
              such as slight bruising or temporary soreness at needle sites. At KSK Healthcare, we use only sterile, 
              single-use needles and follow strict safety protocols.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose KSK Healthcare for Acupuncture?</h2>
            <p className="text-gray-700 mb-4">
              Our acupuncture services are provided by Dr. Maheshwarswami K.H, who brings over 15 years of experience in traditional healing methods. 
              We offer:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Personalized treatment plans tailored to your specific needs</li>
              <li>Integration with other holistic therapies for comprehensive care</li>
              <li>Modern, clean, and comfortable treatment environment</li>
              <li>Ongoing support and lifestyle recommendations</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Ready to Experience the Benefits of Acupuncture?</h3>
              <p className="text-green-700 mb-4">
                Take the first step towards natural healing and pain relief. Our experienced practitioners are here to guide you on your wellness journey.
              </p>
              <a 
                href="https://wa.me/918884333439?text=Hello%20KSK%20Healthcare,%20I%20would%20like%20to%20book%20an%20acupuncture%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Book Your Consultation
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AcupunctureBlog;

