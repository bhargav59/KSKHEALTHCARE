import React from 'react';
import { Helmet } from 'react-helmet-async';
import reflexologyImg from '../assets/reflexology.jpg';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { CheckCircle, Zap, MessageCircle, ShieldAlert } from 'lucide-react';
import { Button } from '../components/ui/button';

const AcupressureTherapiesBlog = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white py-16">
    <Helmet>
      <title>Acupressure & Reflexology in Bangalore | KSK Healthcare</title>
      <meta name="description" content="Discover gentle, non-invasive acupressure and reflexology at KSK Healthcare in Bangalore. Relieve stress, detoxify, and improve circulation with our expert therapeutic touch." />
      <meta name="keywords" content="acupressure Bangalore, reflexology Bangalore, healing touch, non-invasive therapy, stress relief, detoxification, KSK Healthcare" />
    </Helmet>
    <div className="max-w-5xl mx-auto px-4 space-y-12">
      <header className="text-center">
        <img src={reflexologyImg} alt="Therapist applying pressure to a patient's foot for reflexology" className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg mb-10" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 leading-tight">Healing Touch: A Guide to Acupressure Therapies</h1>
        <p className="italic text-gray-600 max-w-3xl mx-auto">Experience the power of therapeutic touch - no needles, maximum results</p>
      </header>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center"><Zap className="h-6 w-6 mr-2 text-blue-600" />Why Acupressure? The Gentle Path to Wellness</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Acupressure offers all the benefits of acupuncture without needles, making it perfect for those who prefer a gentler approach. By applying targeted pressure to specific meridian points, we can release energy blockages, improve circulation, and activate your body's innate healing mechanisms.</p>
          <ul className="space-y-2">
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 shrink-0" /><span>Completely non-invasive and needle-free</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 shrink-0" /><span>Safe and effective for all ages</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 shrink-0" /><span>Immediate relaxation and stress relief</span></li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Comprehensive Acupressure Services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-600">1. Traditional Acupressure Therapy</h3>
            <p className="text-sm italic text-gray-500 mb-2">Targeted Healing Through Therapeutic Touch</p>
            <p>Using precise finger pressure, our therapists release muscular tension, improve blood flow, and promote the natural flow of healing energy.</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-semibold text-blue-600">2. Reflexology (Foot & Hand Acupressure)</h3>
             <p className="text-sm italic text-gray-500 mb-2">Mirrors of Total Body Health</p>
            <p>Reflexology is based on the principle that your feet and hands contain reflex zones corresponding to every organ, gland, and system in your body.</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-semibold text-blue-600">3. Acupressure with Moxibustion</h3>
             <p className="text-sm italic text-gray-500 mb-2">The Union of Touch and Heat</p>
            <p>This powerful therapy merges acupressure with the warming, energizing effects of moxibustion (burning medicinal herbs) for deep healing.</p>
          </div>
          <Separator />
           <div>
            <h3 className="text-xl font-semibold text-blue-600">4. Gua Sha & Dry Cupping</h3>
             <p className="text-sm italic text-gray-500 mb-2">Ancient Detoxification for Modern Wellness</p>
            <p>Traditional therapies that release trapped toxins, break up muscle adhesions, and promote deep tissue healing through controlled friction or gentle suction.</p>
          </div>
           <Separator />
           <div>
            <h3 className="text-xl font-semibold text-blue-600">5. Bloodletting (Blood Detox Therapy)</h3>
             <p className="text-sm italic text-gray-500 mb-2">Traditional Purification for Deep Healing</p>
            <p>This ancient technique involves minimal, controlled bleeding at specific points to remove stagnated blood and toxins. It is performed by trained practitioners using sterile, single-use instruments.</p>
            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm">
                <p><ShieldAlert className="inline h-4 w-4 mr-1"/>Not suitable for pregnant women, individuals on blood-thinning medications, or those with bleeding disorders. A thorough health assessment is conducted before treatment.</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>What Makes KSK's Acupressure Different?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <ul className="space-y-2">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 shrink-0" /><span><strong>Expert Practitioners:</strong> Our therapists undergo extensive training in traditional pressure point location and therapeutic techniques.</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 shrink-0" /><span><strong>Personalized Approach:</strong> Every session is customized to your current condition, stress levels, and treatment goals.</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 shrink-0" /><span><strong>Integrated Healing:</strong> Our therapies can be combined with our other services for comprehensive healing support.</span></li>
            </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold">How is acupressure different from massage?</h4>
            <p>While massage primarily works on muscles, acupressure targets specific energy points connected to organ systems and healing pathways.</p>
          </div>
           <div>
            <h4 className="font-semibold">Can I receive acupressure if I'm pregnant?</h4>
            <p>Yes, most techniques are safe during pregnancy, but certain points are avoided. We always get clearance from your healthcare provider first.</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-blue-100 border-blue-200">
        <CardHeader>
          <CardTitle>Begin Your Healing Touch Journey Today</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>Ready to experience the remarkable healing power of therapeutic touch? Our expert acupressure therapists are waiting to help you unlock your body's natural potential.</p>
             <ul className="space-y-2 my-4">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 shrink-0" /><span>Comprehensive assessment and personalized plan</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 shrink-0" /><span>Expert application of traditional techniques</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 shrink-0" /><span>Safe, non-invasive healing for all ages</span></li>
            </ul>
            <Button asChild size="lg" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
                <a href="https://wa.me/918884333439?text=Hello%20KSK%20Healthcare,%20I%20would%20like%20to%20schedule%20an%20acupressure%20consultation." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Schedule Acupressure Session
                </a>
            </Button>
        </CardContent>
      </Card>
      
      <footer className="text-center text-xs text-gray-500">
        <p>Note: Individual results may vary. All treatments are provided by trained, experienced practitioners. Please inform us of any health conditions or concerns before beginning treatment.</p>
      </footer>

    </div>
  </div>
);

export default AcupressureTherapiesBlog; 