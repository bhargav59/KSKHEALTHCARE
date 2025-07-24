import React from 'react';
import { Helmet } from 'react-helmet-async';
import acupunctureImg from '../assets/acupuncture.jpg';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { CheckCircle, Zap, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const AcupunctureTherapiesBlog = () => (
  <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-white py-16">
    <Helmet>
      <title>Acupuncture Therapies in Bangalore | KSK Healthcare</title>
      <meta name="description" content="Explore comprehensive acupuncture therapies at KSK Healthcare in Bangalore, including traditional, neuro, auricular, and cosmetic acupuncture for pain relief, stress, and wellness." />
      <meta name="keywords" content="acupuncture Bangalore, neuro-acupuncture, ear acupuncture, cosmetic acupuncture, pain relief, holistic healing, KSK Healthcare" />
    </Helmet>
    <div className="max-w-5xl mx-auto px-4 space-y-12">
      <header className="text-center">
        <img src={acupunctureImg} alt="Hands performing acupuncture therapy" className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg mb-10" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4 leading-tight">Rediscover Natural Healing: A Guide to Acupuncture</h1>
        <p className="italic text-gray-600 max-w-3xl mx-auto">Transform your health journey with ancient wisdom and modern expertise</p>
      </header>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center"><Zap className="h-6 w-6 mr-2 text-green-600" />Why Choose Acupuncture at KSK Health Care?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Unlike conventional treatments that often mask symptoms, acupuncture addresses the root cause of your health concerns by restoring your body's natural energy balance. Our highly experienced specialists don't just insert needles—they craft personalized healing journeys tailored to your unique health needs, lifestyle, and goals.</p>
          <ul className="space-y-2">
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 shrink-0" /><span>Drug-free and surgery-free healing approach</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 shrink-0" /><span>Experienced practitioners with deep knowledge of traditional Chinese diagnostics</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 shrink-0" /><span>Personalized treatment plans for every individual</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 shrink-0" /><span>Comprehensive range of specialized acupuncture techniques</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 shrink-0" /><span>Safe, effective treatments suitable for all ages</span></li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Complete Range of Acupuncture Therapies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-green-600">1. Traditional Acupuncture Diagnosis & Therapy</h3>
            <p className="text-sm italic text-gray-500 mb-2">The Foundation of Natural Healing</p>
            <p>Your healing journey begins with our comprehensive energy-based evaluation using authentic traditional Chinese diagnostic methods. Our practitioners examine your pulse, tongue, and energy flow patterns to understand the underlying imbalances causing your symptoms.</p>
            <p className="font-semibold mt-4">Perfect for treating:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-2">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Chronic Pain Conditions</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Spinal Issues</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Women's Health</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Digestive Disorders</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Neurological Issues</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Mental Wellness</span></li>
            </ul>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-semibold text-green-600">2. Neuro-Acupuncture: Advanced Brain & Nerve Stimulation</h3>
             <p className="text-sm italic text-gray-500 mb-2">Where Ancient Wisdom Meets Modern Neuroscience</p>
            <p>This advanced technique integrates classical acupuncture with modern understanding of neuroplasticity to address complex neurological and developmental conditions.</p>
             <p className="font-semibold mt-4">Breakthrough results for:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-2">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Developmental Disorders (ASD, ADHD)</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Communication Challenges</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Cognitive Issues</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Neurological Conditions</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Recovery Support</span></li>
            </ul>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-semibold text-green-600">3. Auricular Acupuncture (Ear Acupuncture)</h3>
             <p className="text-sm italic text-gray-500 mb-2">A Gateway to Total Body Healing</p>
            <p>Utilizes a micro-system on the ear where specific points correspond to organs and systems, making it incredibly powerful for both acute and chronic conditions.</p>
             <p className="font-semibold mt-4">Exceptional results for:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-2">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Hearing Issues</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Mental Health</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Addiction Recovery</span></li>
                 <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Weight Management</span></li>
            </ul>
          </div>
          <Separator />
           <div>
            <h3 className="text-xl font-semibold text-green-600">4. Cosmetic Acupuncture: Natural Anti-Aging</h3>
             <p className="text-sm italic text-gray-500 mb-2">Reveal Your Natural Radiance</p>
            <p>A holistic approach to facial rejuvenation that works from the inside out by stimulating blood circulation and promoting collagen production.</p>
            <p className="font-semibold mt-4">Transform your appearance with:</p>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-2">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Anti-Aging Benefits</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Skin Tightening</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Complexion Improvement</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" /><span>Hair Health</span></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What to Expect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>Your journey begins with a comprehensive health assessment, leading to a customized treatment plan. We ensure a comfortable and relaxing experience, maintaining the highest standards of safety and hygiene with single-use, sterile needles.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold">Does acupuncture hurt?</h4>
            <p>Most patients experience minimal discomfort. The needles are extremely thin—much finer than injection needles.</p>
          </div>
           <div>
            <h4 className="font-semibold">How quickly will I see results?</h4>
            <p>Many patients notice improvements after 2-3 sessions, though this varies by condition.</p>
          </div>
           <div>
            <h4 className="font-semibold">Is it safe for children?</h4>
            <p>Yes, our specialized pediatric acupuncture techniques are completely safe and age-appropriate.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-green-100 border-green-200">
        <CardHeader>
          <CardTitle>Ready to Begin Your Natural Healing Journey?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>Don't let pain, stress, or health challenges limit your life any longer. At KSK Health Care, we're committed to helping you discover your body's incredible capacity for self-healing.</p>
             <ul className="space-y-2 my-4">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 shrink-0" /><span>Schedule your comprehensive consultation</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 shrink-0" /><span>Discuss your health goals with our practitioners</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 shrink-0" /><span>Begin your personalized treatment plan</span></li>
            </ul>
            <Button asChild size="lg" className="w-full md:w-auto">
                <a href="https://wa.me/918884333439?text=Hello%20KSK%20Healthcare,%20I%20would%20like%20to%20schedule%20an%20acupuncture%20consultation." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Schedule Consultation
                </a>
            </Button>
        </CardContent>
      </Card>
      
      <footer className="text-center text-xs text-gray-500">
        <p>Disclaimer: Individual results may vary. Acupuncture treatments are provided by licensed practitioners. Please consult with our healthcare professionals to determine the best treatment approach for your specific condition.</p>
      </footer>

    </div>
  </div>
);

export default AcupunctureTherapiesBlog; 