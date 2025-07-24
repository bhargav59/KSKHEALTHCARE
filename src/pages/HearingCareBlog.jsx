import React from 'react';
import { Helmet } from 'react-helmet-async';
import hearingImg from '../assets/speech-therapy.jpg'; // Using a relevant existing image
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { CheckCircle, Zap, MessageCircle, Ear } from 'lucide-react';
import { Button } from '../components/ui/button';

const HearingCareBlog = () => (
  <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-white py-16">
    <Helmet>
      <title>Hearing Care & Auditory Rehab in Bangalore | KSK Healthcare</title>
      <meta name="description" content="Comprehensive hearing care at KSK Healthcare in Bangalore, including diagnostics, hearing aid fitting, auditory-verbal therapy (AVT), and cochlear implant rehabilitation." />
      <meta name="keywords" content="hearing care Bangalore, audiology, hearing aids, auditory verbal therapy, aural rehab, cochlear implant, CAPD, KSK Healthcare" />
    </Helmet>
    <div className="max-w-5xl mx-auto px-4 space-y-12">
      <header className="text-center">
        <img src={hearingImg} alt="Audiologist conducting a hearing test for a patient" className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg mb-10" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-4 leading-tight">A Guide to Hearing Care & Auditory Rehabilitation</h1>
        <p className="italic text-gray-600 max-w-3xl mx-auto">Empowering Better Hearing, Communication & Quality of Life</p>
      </header>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center"><Ear className="h-6 w-6 mr-2 text-teal-600" />Comprehensive Hearing Services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>At KSK Health Care, we offer a full spectrum of hearing rehabilitation services for all ages. Our expert team focuses on holistic auditory development, from diagnosis to therapy and advanced device fitting.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Key Services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-teal-600">1. Hearing Evaluation & Diagnosis</h3>
            <p>Thorough diagnostic services to assess hearing function using advanced audiological tools and procedures.</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-semibold text-teal-600">2. Hearing Aid Trial & Fitting</h3>
            <p>We help you choose the most suitable digital hearing aids based on your lifestyle and degree of hearing loss, including a trial period and guided use.</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-semibold text-teal-600">3. Auditory-Verbal Therapy (AVT)</h3>
            <p>A structured approach for children with hearing aids or cochlear implants to develop listening and spoken language skills.</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-semibold text-teal-600">4. Aural Rehabilitation Therapy</h3>
            <p>Focused on enhancing communication and listening strategies in individuals with acquired or age-related hearing loss.</p>
          </div>
          <Separator />
           <div>
            <h3 className="text-xl font-semibold text-teal-600">5. Central Auditory Processing Disorder (CAPD) Evaluation & Therapy</h3>
            <p>Specialized therapy to improve how the brain processes sounds, benefiting school-age children with learning difficulties and adults with auditory confusion.</p>
          </div>
          <Separator />
           <div>
            <h3 className="text-xl font-semibold text-teal-600">6. Cochlear Implant Therapy (Post-Surgical Auditory Rehabilitation)</h3>
            <p>We offer exclusive therapy for children and adults with cochlear implants, helping them adapt to and make effective use of the device.</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-teal-100 border-teal-200">
        <CardHeader>
          <CardTitle>Take the First Step to Better Hearing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>Don't let hearing challenges limit your life. Our team is ready to help you or your loved ones on the journey to improved communication.</p>
            <Button asChild size="lg" className="w-full md:w-auto bg-teal-600 hover:bg-teal-700">
                <a href="https://wa.me/918884333439?text=Hello%20KSK%20Healthcare,%20I%20would%20like%20to%20schedule%20a%20hearing%20evaluation." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Schedule a Hearing Evaluation
                </a>
            </Button>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default HearingCareBlog; 