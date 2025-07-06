import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const blogPosts = [
    { id: 1, title: 'Acupuncture Blog', path: '/blog/acupuncture' },
    { id: 2, title: 'Ayurveda Blog', path: '/blog/ayurveda' },
    { id: 3, title: 'Cupping Therapy Blog', path: '/blog/cupping-therapy' },
    { id: 4, title: 'Homeopathy Blog', path: '/blog/homeopathy' },
    { id: 5, title: 'Marma Therapy Blog', path: '/blog/marma-therapy' },
    { id: 6, title: 'Reflexology Blog', path: '/blog/reflexology' },
    { id: 7, title: 'Speech Therapy Blog', path: '/blog/speech-therapy' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Our Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={post.path} 
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <h2 className="text-xl font-semibold text-green-700 mb-2">{post.title}</h2>
              <p className="text-gray-600">Read more about {post.title.toLowerCase()}.</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;


