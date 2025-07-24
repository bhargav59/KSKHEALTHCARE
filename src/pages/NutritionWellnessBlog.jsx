import React from 'react';
import { Helmet } from 'react-helmet-async';
import nutritionImg from '../assets/homeopathy.jpg'; // Using a relevant existing image
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { CheckCircle, Leaf, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const NutritionWellnessBlog = () => (
  <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-white py-16">
    <Helmet>
      <title>Nutrition & Wellness in Bangalore | KSK Healthcare</title>
      <meta name="description" content="Achieve your health goals with personalized nutrition plans from KSK Healthcare in Bangalore. We specialize in diet counseling for metabolic disorders, digestive health, and more." />
      <meta name="keywords" content="nutritionist Bangalore, diet plan, wellness, weight management, diabetes diet, PCOS diet, gut health, KSK Healthcare" />
    </Helmet>
    <div className="max-w-5xl mx-auto px-4 space-y-12">
      <header className="text-center">
        <img src={nutritionImg} alt="A colorful array of healthy foods for nutrition and wellness" className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg mb-10" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-4 leading-tight">A Guide to Nutrition & Wellness Services</h1>
        <p className="italic text-gray-600 max-w-3xl mx-auto">Healing Through Food, Fueling Healthy Living</p>
      </header>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center"><Leaf className="h-6 w-6 mr-2 text-red-600" />Personalized Diet Consultation & Planning</CardTitle>
        </CardHeader>
        <CardContent>
          <p>At KSK Health Care, we believe that “food is medicine.” Our nutritionists assess your body composition, clinical reports, and lifestyle to design a customized diet chart that integrates with your ongoing treatments and supports your healing journey.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conditions We Specialize In</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-red-600">Metabolic & Lifestyle Disorders</h3>
                <ul className="list-disc list-inside pl-4 mt-2">
                    <li>Diabetes (Type 1 & 2), Hypothyroidism & PCOS</li>
                    <li>Obesity & Overweight, High Cholesterol & Hypertension</li>
                </ul>
            </div>
             <div>
                <h3 className="text-lg font-semibold text-red-600">Digestive & Gut-Related Disorders</h3>
                <ul className="list-disc list-inside pl-4 mt-2">
                    <li>IBS, Acidity, Bloating, Constipation & GERD</li>
                </ul>
            </div>
             <div>
                <h3 className="text-lg font-semibold text-red-600">Neurodevelopmental & Behavioral Support (Children & Teens)</h3>
                 <p className="text-sm italic text-gray-500">Special plans for brain development, gut-brain connection, and focus.</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-red-600">Women's Health & Hormonal Balance</h3>
                 <ul className="list-disc list-inside pl-4 mt-2">
                    <li>Menstrual irregularities, PCOD/PCOS, Fertility & Menopause</li>
                </ul>
            </div>
             <div>
                <h3 className="text-lg font-semibold text-red-600">Pain, Inflammation & Musculoskeletal Conditions</h3>
                 <p className="text-sm italic text-gray-500">Anti-inflammatory, alkaline, and joint-supportive foods.</p>
            </div>
        </CardContent>
      </Card>
      
      <Card className="bg-red-100 border-red-200">
        <CardHeader>
          <CardTitle>Transform Your Health Through Food</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>Whether you're managing a chronic illness or working toward better health, our tailored nutritional guidance can help you achieve your goals.</p>
            <Button asChild size="lg" className="w-full md:w-auto bg-red-600 hover:bg-red-700">
                <a href="https://wa.me/918884333439?text=Hello%20KSK%20Healthcare,%20I%20would%20like%20to%20schedule%20a%20nutrition%20consultation." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Schedule a Nutrition Consultation
                </a>
            </Button>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default NutritionWellnessBlog; 