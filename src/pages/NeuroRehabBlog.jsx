import React from 'react';
import { Helmet } from 'react-helmet-async';
import neuroImg from '../assets/marma-therapy.jpg';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { CheckCircle, Zap, MessageCircle, ShieldAlert, BrainCircuit, HeartHandshake } from 'lucide-react';
import { Button } from '../components/ui/button';

const NeuroRehabBlog = () => (
  <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white py-16">
    <Helmet>
      <title>Neuro-Functional Rehabilitation in Bangalore | KSK Healthcare</title>
      <meta name="description" content="KSK Healthcare offers integrated neuro-functional rehabilitation in Bangalore, including physiotherapy, occupational, and speech therapy to improve movement, cognition, and daily living." />
      <meta name="keywords" content="neuro rehabilitation Bangalore, physiotherapy, occupational therapy, speech therapy, behavioral therapy, sensory integration, KSK Healthcare" />
    </Helmet>
    <div className="max-w-5xl mx-auto px-4 space-y-12">
      <header className="text-center">
        <img src={neuroImg} alt="Therapist assisting a patient with neuro-functional rehabilitation exercises" className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg mb-10" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4 leading-tight">Empowering Lives: A Guide to Neuro-Functional Rehabilitation</h1>
        <p className="italic text-gray-600 max-w-3xl mx-auto">Transforming Body, Brain & Behavior for All Ages - Where Hope Meets Science</p>
      </header>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center"><BrainCircuit className="h-6 w-6 mr-2 text-purple-600" />Why Choose Neuro-Functional Rehabilitation?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Our integrative approach recognizes that the brain, body, and behavior are intimately connected. We don't just treat symptoms—we build bridges to independence, confidence, and meaningful participation in life through a multidisciplinary team approach.</p>
          <ul className="space-y-2">
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 shrink-0" /><span>Multidisciplinary team collaboration for maximum results</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 shrink-0" /><span>Evidence-based interventions combined with personalized care</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 shrink-0" /><span>Family-centered approach, involving caregivers in the healing process</span></li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Complete Range of Rehabilitation Services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
            <div>
                <h3 className="text-xl font-semibold text-purple-600">1. Behavioral Modification Therapy</h3>
                <p>We teach new skills and build emotional regulation abilities to create positive behavior patterns that support success in all areas of life.</p>
            </div>
            <Separator />
            <div>
                <h3 className="text-xl font-semibold text-purple-600">2. Sensory Integration Therapy</h3>
                <p>Through fun, play-based activities, we help the nervous system become more organized, leading to improvements in behavior, attention, and motor skills.</p>
            </div>
            <Separator />
            <div>
                <h3 className="text-xl font-semibold text-purple-600">3. Occupational Therapy (OT)</h3>
                <p>Our OT services build the foundations for independence and participation in life's important activities, from self-care to handwriting.</p>
            </div>
            <Separator />
            <div>
                <h3 className="text-xl font-semibold text-purple-600">4. Physiotherapy & Motor Rehabilitation</h3>
                <p>We address the full spectrum of movement challenges, from basic mobility and strength to complex coordination and balance.</p>
            </div>
            <Separator />
            <div>
                <h3 className="text-xl font-semibold text-purple-600">5. Speech and Language Therapy</h3>
                <p>Our certified speech-language pathologists help develop communication skills that open doors to education, relationships, and community.</p>
            </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>The KSK Multidisciplinary Advantage</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Our therapists work as an integrated team, sharing insights and coordinating interventions. We focus on functional outcomes and empower families with training and support to continue therapeutic activities at home.</p>
        </CardContent>
      </Card>
      
       <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold">How long does rehabilitation typically take?</h4>
            <p>This varies greatly. Some see improvements in weeks, while others benefit from ongoing support over months or years. We regularly reassess and adjust plans.</p>
          </div>
           <div>
            <h4 className="font-semibold">Are these therapies mainly for children?</h4>
            <p>Our services benefit individuals across the lifespan, from child development to adult recovery from injury or illness.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-purple-100 border-purple-200">
        <CardHeader>
          <CardTitle>Begin Your Transformation Journey Today</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>Whether you're seeking support for a child's development or recovery from injury, our expert neuro-functional rehabilitation team is ready to partner with you.</p>
            <Button asChild size="lg" className="w-full md:w-auto bg-purple-600 hover:bg-purple-700">
                <a href="https://wa.me/918884333439?text=Hello%20KSK%20Healthcare,%20I%20would%20like%20to%20schedule%20a%20neuro-functional%20rehabilitation%20evaluation." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Schedule an Evaluation
                </a>
            </Button>
        </CardContent>
      </Card>
      
      <footer className="text-center text-xs text-gray-500">
        <p>Note: Individual outcomes vary. All services are provided by licensed, experienced rehabilitation professionals.</p>
      </footer>

    </div>
  </div>
);

export default NeuroRehabBlog; 