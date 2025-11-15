import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    Search,
    Filter,
    Clock,
    Tag,
    ArrowRight,
    ChevronRight
} from 'lucide-react';
import acupunctureImg from '../assets/acupuncture.jpg';
import reflexologyImg from '../assets/reflexology.jpg';
import ayurvedaImg from '../assets/ayurveda-panchakarma.jpg';
import marmaTherapyImg from '../assets/marma-therapy.jpg';
import speechTherapyImg from '../assets/speech-therapy.jpg';
import nutrientsImg from '../assets/nutrients.png';

const blogPosts = [
    {
        id: 1,
        title: 'Acupuncture Therapies That Reset Your Nervous System',
        summary: 'Discover how evidence-based acupuncture blends with neuromodulation to relieve pain, regulate hormones, and calm the mind without medication.',
        path: '/blog/acupuncture-therapies',
        category: 'Holistic Therapies',
        readTime: '12 min read',
        published: 'Nov 03, 2025',
        author: 'Dr. G. Swetha',
        authorTitle: 'Neuro-Acupuncture Specialist',
        cover: acupunctureImg,
        tags: ['Acupuncture', 'Pain Relief', 'Brain Health']
    },
    {
        id: 2,
        title: 'Acupressure & Reflexology For Desk-Job Burnout',
        summary: 'Simple pressure point rituals to undo tech-neck, migraines, and anxiety for professionals who spend 8+ hours at a screen.',
        path: '/blog/acupressure-therapies',
        category: 'Lifestyle Wellness',
        readTime: '10 min read',
        published: 'Oct 28, 2025',
        author: 'Therapist Team',
        authorTitle: 'Acupressure & Reflexology Unit',
        cover: reflexologyImg,
        tags: ['Acupressure', 'Stress', 'Work-life Balance']
    },
    {
        id: 3,
        title: 'Authentic Ayurvedic & Panchakarma Detox Plans',
        summary: 'A seasonal Panchakarma blueprint designed for Bengaluru climate—covering dosha-specific diets, medicated therapies, and recovery timelines.',
        path: '/blog/ayurvedic-panchakarma',
        category: 'Traditional Medicine',
        readTime: '14 min read',
        published: 'Oct 15, 2025',
        author: 'Dr. Maheshwarswami',
        authorTitle: 'Senior Ayurvedic Physician',
        cover: ayurvedaImg,
        tags: ['Ayurveda', 'Detox', 'Immunity']
    },
    {
        id: 4,
        title: 'Neuro-Rehab Roadmap For Stroke & Developmental Delays',
        summary: 'Step-by-step neuro-functional rehab protocols that combine physiotherapy, sensory diets, and cognitive training for all ages.',
        path: '/blog/neuro-rehab',
        category: 'Neurosciences',
        readTime: '16 min read',
        published: 'Sep 30, 2025',
        author: 'Interdisciplinary Team',
        authorTitle: 'Neuro Rehab Collective',
        cover: marmaTherapyImg,
        tags: ['Neuro Rehab', 'Stroke', 'Pediatrics']
    },
    {
        id: 5,
        title: 'Modern Hearing Care & Auditory Rehabilitation',
        summary: 'From diagnostic audiology to vestibular rehab—learn how we personalise hearing recovery for kids, adults, and senior citizens.',
        path: '/blog/hearing-care',
        category: 'Sensory Health',
        readTime: '9 min read',
        published: 'Sep 18, 2025',
        author: 'Dr. Harish Shinde',
        authorTitle: 'Senior Audiologist',
        cover: speechTherapyImg,
        tags: ['Audiology', 'Vestibular', 'Hearing Aids']
    },
    {
        id: 6,
        title: 'Functional Nutrition & Lifestyle For Brain Health',
        summary: 'Neuro-friendly meal plans, lab markers, and supplementation strategies that improve focus, mood, and metabolic health.',
        path: '/blog/nutrition-wellness',
        category: 'Nutrition & Lifestyle',
        readTime: '11 min read',
        published: 'Sep 05, 2025',
        author: 'Gayathri Ravish',
        authorTitle: 'Functional Nutrition Lead',
        cover: nutrientsImg,
        tags: ['Nutrition', 'Metabolism', 'Brain Health']
    }
];

const BlogList = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = useMemo(() => {
        const uniques = new Set(blogPosts.map((post) => post.category));
        return ['All', ...uniques];
    }, []);

    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
            const term = searchTerm.trim().toLowerCase();
            if (!term) {
                return matchesCategory;
            }
            const haystack = `${post.title} ${post.summary} ${post.tags.join(' ')}`.toLowerCase();
            return matchesCategory && haystack.includes(term);
        });
    }, [activeCategory, searchTerm]);

    const featuredPost = filteredPosts[0] || blogPosts[0];
    const regularPosts = filteredPosts.filter((post) => post.id !== featuredPost.id);

    return (
        <div className="min-h-screen bg-gray-50">
            <Helmet>
                <title>Healthcare Blog | KSK Healthcare Doddanekundi - Holistic Health Tips & Insights</title>
                <meta name="description" content="Expert healthcare blog on Acupuncture, Ayurveda, Nutrition & Wellness. Get holistic health tips from KSK Healthcare's certified practitioners in Bangalore!" />
                <meta name="keywords" content="healthcare blog Bangalore, acupuncture tips, ayurveda guide, nutrition advice, wellness blog Doddanekundi, KSK Healthcare" />
            </Helmet>

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 py-24">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-start gap-10">
                        <div className="lg:w-2/3">
                            <p className="inline-flex items-center space-x-2 text-emerald-100 uppercase tracking-[0.25em] text-xs mb-4">
                                <Tag className="h-4 w-4" />
                                <span>Insights • Research • Case Studies</span>
                            </p>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                KSK Healthcare Knowledge Hub
                            </h1>
                            <p className="text-lg text-emerald-100/90 max-w-3xl mb-8">
                                Deep-dive explainers, clinical frameworks, and DIY wellness rituals curated by our interdisciplinary medical team in Doddanekundi, Bengaluru.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center bg-white/10 backdrop-blur rounded-full px-5 py-3 text-emerald-100 text-sm">
                                    <span className="font-semibold text-white mr-2">150K+</span> monthly readers
                                </div>
                                <div className="flex items-center bg-white/10 backdrop-blur rounded-full px-5 py-3 text-emerald-100 text-sm">
                                    <span className="font-semibold text-white mr-2">6</span> clinical specialties
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 w-full">
                            <div className="bg-white rounded-2xl p-6 shadow-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Filter className="h-5 w-5 text-emerald-600" />
                                    <h3 className="text-lg font-semibold text-gray-900">Find actionable guidance</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <Search className="h-4 w-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                                        <input
                                            type="text"
                                            value={searchTerm}
                                            onChange={(event) => setSearchTerm(event.target.value)}
                                            placeholder="Search by symptom, therapy, or goal"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                                        />
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => setActiveCategory(category)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category ? 'bg-emerald-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
                {/* Featured Article */}
                {featuredPost && (
                    <section className="grid lg:grid-cols-[2fr_1fr] gap-10">
                        <Link
                            to={featuredPost.path}
                            className="relative rounded-3xl overflow-hidden shadow-2xl group"
                        >
                            <img
                                src={featuredPost.cover}
                                alt={featuredPost.title}
                                className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 p-8 text-white">
                                <div className="flex items-center gap-3 text-sm text-white/80 mb-3">
                                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white font-medium text-xs">
                                        {featuredPost.category}
                                    </span>
                                    <Clock className="h-4 w-4" />
                                    <span>{featuredPost.readTime}</span>
                                </div>
                                <h2 className="text-3xl font-bold mb-3">{featuredPost.title}</h2>
                                <p className="text-white/80 mb-6 max-w-3xl">{featuredPost.summary}</p>
                                <div className="flex items-center gap-6 text-sm text-white/70">
                                    <div>
                                        <p className="font-semibold text-white">{featuredPost.author}</p>
                                        <p>{featuredPost.authorTitle}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4" />
                                        <span>Read deep dive</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 space-y-6">
                            <h3 className="text-xl font-semibold text-gray-900">This Week's Clinical Highlights</h3>
                            <ul className="space-y-5 text-sm text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2"></span>
                                    Neuro-acupuncture case study: full speech recovery in 90 days for a pediatric ASD case.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2"></span>
                                    Panchakarma detox tracker—how to sync meal plans with Bengaluru's winter season.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2"></span>
                                    DIY vestibular reset drills to pair with your next hearing-care follow-up.
                                </li>
                            </ul>
                            <Link
                                to="/services/consultation"
                                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors"
                            >
                                Book a personalised care plan
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>
                )}

                {/* Article Grid */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <p className="text-sm text-emerald-600 font-semibold">Browse Insights</p>
                            <h3 className="text-2xl font-bold text-gray-900">Latest from every speciality</h3>
                        </div>
                        <Link to="/contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                            Need a specific topic? Request it
                            <ChevronRight className="h-4 w-4" />
                        </Link>
                    </div>
                    {regularPosts.length === 0 ? (
                        <div className="bg-white rounded-2xl p-10 text-center border">
                            <p className="text-lg font-medium text-gray-900 mb-2">No articles found</p>
                            <p className="text-gray-600 mb-6">Try changing your category filter or search phrase.</p>
                            <button
                                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                                onClick={() => {
                                    setActiveCategory('All');
                                    setSearchTerm('');
                                }}
                            >
                                Reset filters
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {regularPosts.map((post) => (
                                <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
                                    <Link to={post.path} className="block overflow-hidden">
                                        <img src={post.cover} alt={post.title} className="h-48 w-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                                    </Link>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                                            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-semibold">{post.category}</span>
                                            <span>{post.published}</span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-3.5 w-3.5" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <Link to={post.path} className="group">
                                            <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{post.title}</h4>
                                        </Link>
                                        <p className="text-gray-600 text-sm mb-4 flex-1">{post.summary}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map((tag) => (
                                                <span key={tag} className="inline-flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                                                    <Tag className="h-3 w-3" />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <div>
                                                <p className="font-semibold text-gray-900">{post.author}</p>
                                                <p>{post.authorTitle}</p>
                                            </div>
                                            <Link to={post.path} className="inline-flex items-center gap-2 text-emerald-600 font-semibold">
                                                Read article
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>

            </main>
        </div>
    );
};

export default BlogList;
