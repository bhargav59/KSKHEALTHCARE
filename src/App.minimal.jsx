import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Import only the blog list for now
import BlogList from './pages/BlogList.jsx';

const App = () => {
    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>KSK Healthcare | Holistic Wellness Center in Bangalore</title>
                <meta name="description" content="Experience world-class holistic healthcare at KSK Healthcare Bangalore." />
            </Helmet>

            <Routes>
                <Route path="/" element={
                    <div className="container mx-auto p-8">
                        <h1 className="text-4xl font-bold text-center mb-8 text-green-600">
                            KSK Healthcare - Holistic Wellness Center
                        </h1>
                        <p className="text-center text-lg mb-8">
                            Welcome to our holistic healthcare center in Bangalore.
                            We offer world-class treatments in Acupuncture, Ayurveda, Speech Therapy, and more.
                        </p>
                        <div className="text-center">
                            <a href="/blog" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                                View Our Blog
                            </a>
                        </div>
                    </div>
                } />
                <Route path="/blog" element={<BlogList />} />
            </Routes>
        </div>
    );
};

export default App;
