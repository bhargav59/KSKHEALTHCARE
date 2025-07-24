import React from 'react';
import { Helmet } from 'react-helmet-async';
import ayurvedaImg from '../assets/ayurveda-panchakarma.jpg';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { CheckCircle, Zap, MessageCircle, ShieldAlert } from 'lucide-react';
import { Button } from '../components/ui/button';

const AyurvedicPanchakarmaBlog = () => (
  <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white py-16">
    <Helmet>
      <title>Ayurvedic & Panchakarma Therapies in Bangalore | KSK Healthcare</title>
      <meta name="description" content="Experience authentic Ayurvedic and Panchakarma therapies at KSK Healthcare, Bangalore. We offer personalized detox, rejuvenation, and pain relief treatments." />
      <meta name="keywords" content="ayurveda Bangalore, panchakarma Bangalore, ayurvedic treatment, detox, rejuvenation, abhyanga, shirodhara, KSK Healthcare" />
    </Helmet>
    <div className="max-w-5xl mx-auto px-4 space-y-12">
      <header className="text-center">
        <img src={ayurvedaImg} alt="Herbal oils and equipment for Ayurvedic panchakarma therapy" className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg mb-10" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-4 leading-tight">Ancient Wisdom, Modern Healing: A Guide to Ayurvedic & Panchakarma Therapies</h1>
        <p className="italic text-gray-600 max-w-3xl mx-auto">Holistic wellness for all ages - from chronic pain relief to brain development support</p>
      </header>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center"><Zap className="h-6 w-6 mr-2 text-orange-600" />Why Choose Ayurvedic & Panchakarma Therapies?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Ayurveda, the world's oldest healing system, recognizes that true health comes from balance. Our therapies work by detoxifying deeply, restoring balance, strengthening immunity, and calming the nervous system.</p>
          <ul className="space-y-2">
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-1 shrink-0" /><span>Qualified Ayurvedic doctors supervise every treatment</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-1 shrink-0" /><span>High-quality medicated oils and herbal formulations</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-1 shrink-0" /><span>Personalized treatment plans based on your unique constitution</span></li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Complete Range of Ayurvedic & Panchakarma Therapies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-orange-600">1. Abhyanga with Swedana (Full Body Massage with Herbal Steam)</h3>
            <p>A synchronized, rhythmic massage using warm medicated oils, followed by herbal steam to open channels, improve circulation, and eliminate toxins.</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-semibold text-orange-600">2. Shira Abhyanga (Ayurvedic Head Massage)</h3>
            <p>A specialized therapeutic massage focusing on the scalp, forehead, and neck with oils that calm the nervous system and improve brain function.</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-semibold text-orange-600">3. Kati, Janu & Greeva Basti (Localized Oil Pooling)</h3>
            <p>Specialized therapies where warm medicated oil is pooled over the lower back, knees, or neck to deeply nourish tissues and relieve pain.</p>
          </div>
           <Separator />
          <div>
            <h3 className="text-xl font-semibold text-orange-600">4. Pichu Therapy with Swedana (Oil-Soaked Pad Therapy)</h3>
            <p>Involves placing thick cotton pads soaked in warm medicated oil on specific body areas for prolonged, deep oil penetration.</p>
          </div>
           <Separator />
          <div>
            <h3 className="text-xl font-semibold text-orange-600">5. Lepana Therapy with Swedana (Herbal Paste Application)</h3>
            <p>Offers targeted relief using therapeutic herbal pastes applied directly to affected areas to reduce inflammation and pain.</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-semibold text-orange-600">6. Udwarthana with Swedana (Herbal Powder Massage)</h3>
            <p>An invigorating therapy that uses dry herbal powders to massage the body, stimulating circulation and energizing tissues.</p>
          </div>
          <Separator />
           <div>
            <h3 className="text-xl font-semibold text-orange-600">7. Shirodhara Therapy (Rhythmic Oil Pouring)</h3>
            <p>A continuous stream of warm medicated oil is poured over the forehead to calm the nervous system, balance hormones, and regulate mental activity.</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>The Science Behind Ayurvedic Healing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Our therapies are based on ancient principles of constitutional balance (doshas), vital energy points (marmas), and the deep therapeutic action of medicated oils and herbs. Each treatment is customized to your unique constitution and health needs.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold">Are these treatments safe for children?</h4>
            <p>Absolutely! Ayurvedic therapies are particularly beneficial for children's development. We use gentler techniques and milder oil formulations.</p>
          </div>
           <div>
            <h4 className="font-semibold">How do I know which therapy is right for me?</h4>
            <p>Our Ayurvedic consultation will determine your constitution and imbalances, allowing us to recommend the most appropriate therapies.</p>
          </div>
           <div>
            <h4 className="font-semibold">Can I combine these with other KSK treatments?</h4>
            <p>Yes! Ayurvedic therapies complement our other services beautifully. We often create integrated treatment plans for comprehensive healing.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-orange-100 border-orange-200">
        <CardHeader>
          <CardTitle>Begin Your Ayurvedic Healing Journey</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>Ready to experience the profound healing power of authentic Ayurvedic therapies? Our expert team is ready to guide you on a transformative journey.</p>
            <Button asChild size="lg" className="w-full md:w-auto bg-orange-600 hover:bg-orange-700">
                <a href="https://wa.me/918884333439?text=Hello%20KSK%20Healthcare,%20I%20would%20like%20to%20schedule%20an%20Ayurvedic%20consultation." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Schedule Ayurvedic Consultation
                </a>
            </Button>
        </CardContent>
      </Card>
      
      <footer className="text-center text-xs text-gray-500">
        <p>Note: Individual results may vary. All treatments are supervised by qualified Ayurvedic practitioners. Please inform us of any health conditions, allergies, or medications before beginning treatment.</p>
      </footer>

    </div>
  </div>
);

export default AyurvedicPanchakarmaBlog; 