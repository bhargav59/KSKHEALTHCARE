import { Link } from 'react-router-dom';

const BlogList = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Acupuncture Therapies",
            path: "/blog/acupuncture-therapies"
        },
        {
            id: 2,
            title: "Acupressure & Reflexology",
            path: "/blog/acupressure-therapies"
        },
        {
            id: 3,
            title: "Ayurvedic & Panchakarma",
            path: "/blog/ayurvedic-panchakarma"
        },
        {
            id: 4,
            title: "Neuro-Functional Rehabilitation",
            path: "/blog/neuro-rehab"
        },
        {
            id: 5,
            title: "Hearing Care & Auditory Rehabilitation",
            path: "/blog/hearing-care"
        },
        {
            id: 6,
            title: "Nutrition & Wellness",
            path: "/blog/nutrition-wellness"
        }
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
