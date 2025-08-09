import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Calendar,
  ArrowLeft,
  Home
} from 'lucide-react';

const BookingConfirmationPage = () => {
  const businessInfo = {
    phone: '+91 88843 33439',
    whatsapp: '919900546089',
    email: 'kskhealthcare.in@gmail.com',
    address: '6B, Kote NCMR Building, Karthik Nagar Service Road, Outer Ring Rd, Doddanekundi, Bengaluru, Karnataka 560037'
  };

  const nextSteps = [
    {
      step: 1,
      title: "Confirmation Call",
      description: "Our team will call you within 2 hours to confirm your appointment time.",
      icon: Phone,
      timeframe: "Within 2 hours"
    },
    {
      step: 2,
      title: "Appointment Reminder",
      description: "You'll receive a WhatsApp reminder 1 day before your appointment.",
      icon: MessageCircle,
      timeframe: "1 day before"
    },
    {
      step: 3,
      title: "Visit Our Clinic",
      description: "Arrive 15 minutes early with your medical reports and valid ID.",
      icon: MapPin,
      timeframe: "On appointment day"
    }
  ];

  const whatToBring = [
    "Valid government-issued photo ID",
    "Recent medical reports and test results (if any)",
    "List of current medications",
    "Previous treatment records (if applicable)",
    "Insurance card (if applicable)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Helmet>
        <title>Booking Confirmed - KSK Healthcare | Doddanekundi, Bengaluru</title>
        <meta name="description" content="Your appointment has been successfully booked with KSK Healthcare. Here are your next steps and important information for your visit." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-4">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Booking Confirmed Successfully! 🎉
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Thank you for choosing KSK Healthcare. Your appointment request has been received and will be confirmed shortly.
            </p>

            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-green-800 mb-2">
                What happens next?
              </h2>
              <p className="text-green-700">
                Our healthcare coordinators will contact you within 2 hours to confirm your appointment time and answer any questions you may have.
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-green-600" />
              <span>Your Next Steps</span>
            </h2>

            <div className="space-y-6">
              {nextSteps.map((step) => (
                <div key={step.step} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-green-100 rounded-full p-3">
                      <step.icon className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-green-600 text-white text-sm px-2 py-1 rounded-full font-medium">
                        Step {step.step}
                      </span>
                      <span className="text-sm text-gray-500">{step.timeframe}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What to Bring */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                What to Bring to Your Appointment
              </h2>
              <ul className="space-y-3">
                {whatToBring.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-green-600 hover:text-green-700"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">WhatsApp</p>
                    <a
                      href={`https://wa.me/${businessInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600 text-sm">
                      {businessInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Clinic Hours</p>
                    <p className="text-gray-600 text-sm">
                      Monday - Sunday: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Need Immediate Assistance?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${businessInfo.phone}`}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent('Hello, I just booked an appointment and have a question.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </a>

              <Link
                to="/"
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
              >
                <Home className="h-5 w-5" />
                <span>Return to Home</span>
              </Link>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-blue-50 rounded-xl p-6 mt-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Important Notes:
            </h3>
            <ul className="text-blue-800 text-sm space-y-2">
              <li>• Please arrive 15 minutes before your scheduled appointment time</li>
              <li>• If you need to reschedule, please call us at least 24 hours in advance</li>
              <li>• Parking is available at our clinic premises</li>
              <li>• Our clinic follows strict hygiene and safety protocols</li>
              <li>• Payment can be made via cash, card, or UPI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
