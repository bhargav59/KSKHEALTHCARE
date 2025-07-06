import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

import speechTherapyImg from "../assets/speech-therapy.jpg";

const SpeechTherapyBlog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Speech & Hearing Therapy: Unlocking Communication Potential</h1>
          <div className="flex items-center space-x-6 mt-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>December 2, 2024</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>Dr. Gandrajupalli Swetha</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <img src={speechTherapyImg} alt="Speech therapy session" className="w-full h-64 object-cover rounded-lg mb-8" />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Speech and hearing therapy is a specialized field that helps individuals overcome communication challenges and reach their full potential. 
              Our comprehensive approach addresses speech, language, hearing, and swallowing disorders across all age groups.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Speech & Language Disorders</h2>
            <p className="text-gray-700 mb-6">
              Communication disorders can affect anyone at any age and may involve difficulties with speech sounds, language comprehension, 
              expression, voice quality, fluency, or hearing. Early identification and intervention are crucial for optimal outcomes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Conditions We Treat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Speech Disorders:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Articulation disorders</li>
                  <li>Phonological disorders</li>
                  <li>Apraxia of speech</li>
                  <li>Dysarthria</li>
                  <li>Voice disorders</li>
                  <li>Stuttering and fluency issues</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Language & Hearing:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Language delays</li>
                  <li>Autism spectrum disorders</li>
                  <li>Hearing impairments</li>
                  <li>Auditory processing disorders</li>
                  <li>Swallowing difficulties</li>
                  <li>Cognitive-communication disorders</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Comprehensive Approach</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Our therapy process includes:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Comprehensive Assessment</h4>
                    <p className="text-gray-600 text-sm">Detailed evaluation of speech, language, and hearing abilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Individualized Treatment Plan</h4>
                    <p className="text-gray-600 text-sm">Customized therapy goals based on specific needs and abilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Evidence-Based Therapy</h4>
                    <p className="text-gray-600 text-sm">Research-proven techniques and modern therapeutic approaches</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">4</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Family Involvement</h4>
                    <p className="text-gray-600 text-sm">Training and support for families to continue progress at home</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">5</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Progress Monitoring</h4>
                    <p className="text-gray-600 text-sm">Regular assessment and adjustment of treatment goals</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Specialized Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-3">Early Intervention (0-3 years)</h3>
                <p className="text-blue-700 text-sm mb-2">Critical period for language development</p>
                <ul className="text-blue-600 text-sm">
                  <li>• Parent-child interaction therapy</li>
                  <li>• Play-based interventions</li>
                  <li>• Developmental milestone support</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-800 mb-3">School-Age Support</h3>
                <p className="text-green-700 text-sm mb-2">Academic and social communication</p>
                <ul className="text-green-600 text-sm">
                  <li>• Classroom communication skills</li>
                  <li>• Reading and writing support</li>
                  <li>• Social skills development</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits of Speech & Hearing Therapy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Communication Benefits:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Improved speech clarity</li>
                  <li>Enhanced language skills</li>
                  <li>Better listening abilities</li>
                  <li>Increased vocabulary</li>
                  <li>Improved reading and writing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Life Benefits:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Increased confidence</li>
                  <li>Better social interactions</li>
                  <li>Academic success</li>
                  <li>Career opportunities</li>
                  <li>Overall quality of life</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When to Seek Help</h2>
            <p className="text-gray-700 mb-4">
              Consider speech and hearing therapy if you notice:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">In Children:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Limited vocabulary for age</li>
                  <li>Difficulty following directions</li>
                  <li>Unclear speech</li>
                  <li>Stuttering or repetitions</li>
                  <li>Not responding to sounds</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">In Adults:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Voice changes or hoarseness</li>
                  <li>Difficulty swallowing</li>
                  <li>Hearing loss</li>
                  <li>Speech changes after illness</li>
                  <li>Communication difficulties</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose KSK Healthcare?</h2>
            <p className="text-gray-700 mb-4">
              Dr. Gandrajupalli Swetha brings over 12 years of experience in speech-language pathology and audiology:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Masters in Speech Language Pathology & Audiology</li>
              <li>Ph.D in Neuro Acupuncture for comprehensive care</li>
              <li>Specialized training in autism spectrum disorders</li>
              <li>Evidence-based therapy techniques</li>
              <li>Family-centered approach</li>
              <li>State-of-the-art assessment and therapy equipment</li>
              <li>Multilingual therapy services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Success Stories</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-blue-800 italic mb-2">
                "Aarohi, my daughter, has learnt some dialogues from her brother Abhimanyu's role in drama. 
                It's a miraculous journey that she is able to speak so fluently. Very grateful to you Dr. Swetha and your team."
              </p>
              <p className="text-blue-600 text-sm">- Dr. Aparna, Parent</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Start Your Communication Journey Today</h3>
              <p className="text-green-700 mb-4">
                Every individual deserves the opportunity to communicate effectively. Let us help you or your loved one 
                unlock their communication potential through personalized, evidence-based therapy.
              </p>
              <a 
                href="https://wa.me/918884333439?text=Hello%20KSK%20Healthcare,%20I%20would%20like%20to%20schedule%20a%20speech%20and%20hearing%20evaluation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Schedule Evaluation
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SpeechTherapyBlog;

