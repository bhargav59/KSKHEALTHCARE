import React, { useState } from 'react';
import { Star, Quote, Play, ChevronLeft, ChevronRight, Award, TrendingUp } from 'lucide-react';
import patientImg from '../assets/patient.png';

const PatientSuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Helper function to extract YouTube video ID from URL (handles both regular and privacy-enhanced URLs)
  const getYouTubeVideoId = (url) => {
    const match = url.match(/(?:youtube\.com|youtube-nocookie\.com)\/embed\/([^?&]+)/);
    return match ? match[1] : null;
  };

  const successStories = [
    {
      id: 1,
      name: "Patient Testimonial",
      age: 45,
      location: "Bengaluru",
      condition: "Chronic Back & Joint Pain",
      treatment: "Comprehensive Pain Management",
      duration: "2-3 weeks",
      rating: 5,
      testimonial: "I had been suffering from back pain for over 10–12 years, along with joint pain in my hands and legs. I tried many well-known and recommended hospitals, but nothing really helped. Then someone suggested I visit KSK Health Care. Within just 2–3 weeks of starting treatment, I began to feel relief. My back pain is almost gone now, and I feel active again. If you're facing issues while walking, or if you have back pain, shoulder pain, or joint problems — I truly recommend you visit KSK Health Care. The treatment here is really effective and trustworthy.",
      beforeAfter: {
        before: {
          backPain: "Severe pain for 10-12 years",
          jointPain: "Hands and legs affected",
          mobility: "Difficulty walking",
          activityLevel: "Severely limited daily activities"
        },
        after: {
          backPain: "Almost completely gone",
          jointPain: "Significantly reduced",
          mobility: "Normal walking without issues",
          activityLevel: "Active and energetic again"
        }
      },
      videoTestimonial: {
        thumbnail: `https://img.youtube.com/vi/r0AqHS9R1Q0/hqdefault.jpg`,
        duration: "1:47",
        title: "Hear this life-changing story from a patient who suffered for over a decade | KSKHEALTHCARE",
        videoUrl: "https://www.youtube-nocookie.com/embed/r0AqHS9R1Q0", // Privacy-enhanced YouTube embed
        videoType: "youtube"
      },
      image: patientImg
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
    setIsPlaying(false); // Reset video when changing stories
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
    setIsPlaying(false); // Reset video when changing stories
  };

  const story = successStories[currentStory];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Patient <span className="text-green-600">Success Stories</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover how our patients transformed their health and lives through our holistic treatment approaches.
            These are real stories from real people in the Bengaluru community.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Left Side - Patient Story */}
            <div className="space-y-6">
              {/* Patient Header */}
              <div className="flex items-center space-x-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                  <p className="text-gray-600">{story.age} years old • {story.location}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Treatment Info */}
              <div className="bg-green-50 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-green-800">Condition:</p>
                    <p className="text-green-700">{story.condition}</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-800">Treatment:</p>
                    <p className="text-green-700">{story.treatment}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-medium text-green-800">Treatment Duration:</p>
                    <p className="text-green-700">{story.duration}</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="relative">
                <Quote className="h-8 w-8 text-green-200 absolute -top-2 -left-2" />
                <blockquote className="text-gray-700 italic pl-6">
                  "{story.testimonial}"
                </blockquote>
              </div>

              {/* Video Testimonial */}
              <div className="relative">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <Play className="h-5 w-5 text-green-600" />
                  <span>Video Testimonial</span>
                </h4>
                <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                  {!isPlaying ? (
                    // Video Thumbnail with Play Button
                    <>
                      <img
                        src={story.videoTestimonial.thumbnail}
                        alt={story.videoTestimonial.title}
                        className="w-full h-full object-cover"
                        onLoad={(e) => {
                          // Image loaded successfully - no logging needed in production
                        }}
                        onError={(e) => {
                          // Progressive fallback for YouTube thumbnails
                          const videoId = getYouTubeVideoId(story.videoTestimonial.videoUrl);
                          if (videoId && e.target.src.includes('hqdefault')) {
                            e.target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                          } else if (videoId && e.target.src.includes('mqdefault')) {
                            e.target.src = `https://img.youtube.com/vi/${videoId}/default.jpg`;
                          } else {
                            // Final fallback to a clean placeholder
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDY0MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzNjAiIGZpbGw9IiNGMUY1RjkiLz48Y2lyY2xlIGN4PSIzMjAiIGN5PSIxODAiIHI9IjQwIiBmaWxsPSIjOTQ5NkE0Ii8+PHBhdGggZD0iTTMwNSAxNjhWMTkyTDMzNSAxODBMMzA1IDE2OFoiIGZpbGw9IndoaXRlIi8+PC9zdmc+';
                            e.target.alt = 'Video thumbnail unavailable';
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="bg-white rounded-full p-4 hover:scale-110 transition-transform shadow-lg group"
                        >
                          <Play className="h-8 w-8 text-green-600 fill-current group-hover:text-green-700" />
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-medium text-sm">{story.videoTestimonial.title}</p>
                        <p className="text-xs opacity-90">{story.videoTestimonial.duration}</p>
                      </div>
                    </>
                  ) : (
                    // Actual Video Player
                    <div className="w-full h-full">
                      {story.videoTestimonial.videoType === 'youtube' ? (
                        // YouTube Embed
                        <iframe
                          width="100%"
                          height="100%"
                          src={`${story.videoTestimonial.videoUrl}?autoplay=1&rel=0&modestbranding=1&enablejsapi=0`}
                          title={story.videoTestimonial.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg"
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin allow-presentation"
                        ></iframe>
                      ) : story.videoTestimonial.videoType === 'vimeo' ? (
                        // Vimeo Embed
                        <iframe
                          width="100%"
                          height="100%"
                          src={`${story.videoTestimonial.videoUrl}?autoplay=1`}
                          title={story.videoTestimonial.title}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg"
                        ></iframe>
                      ) : story.videoTestimonial.videoType === 'instagram' ? (
                        // Instagram Embed
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600">
                          <div className="text-center text-white p-8">
                            <div className="bg-white rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                              <Play className="h-8 w-8 text-purple-600 fill-current" />
                            </div>
                            <p className="text-lg font-medium mb-2">Instagram Video</p>
                            <p className="text-sm opacity-90 mb-4">Click to open in Instagram</p>
                            <a
                              href={story.videoTestimonial.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                            >
                              Watch on Instagram
                            </a>
                          </div>
                        </div>
                      ) : (
                        // Direct Video File
                        <video
                          width="100%"
                          height="100%"
                          controls
                          autoPlay
                          className="rounded-lg"
                        >
                          <source src={story.videoTestimonial.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Before/After Results */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <span>Treatment Results</span>
              </h4>

              <div className="space-y-4">
                {Object.entries(story.beforeAfter.before).map(([key, beforeValue], index) => {
                  const afterValue = story.beforeAfter.after[key];
                  const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');

                  return (
                    <div key={key} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-medium text-gray-900 mb-3">{label}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Before */}
                        <div className="bg-red-50 rounded-lg p-3">
                          <p className="text-sm font-medium text-red-800 mb-1">Before Treatment</p>
                          <p className="text-sm text-red-700">{beforeValue}</p>
                        </div>

                        {/* After */}
                        <div className="bg-green-50 rounded-lg p-3">
                          <p className="text-sm font-medium text-green-800 mb-1">After Treatment</p>
                          <p className="text-sm text-green-700">{afterValue}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Achievement Badge */}
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-6 text-white text-center">
                <Award className="h-12 w-12 mx-auto mb-3" />
                <h5 className="text-lg font-bold mb-2">Treatment Success</h5>
                <p className="text-sm opacity-90">
                  Achieved significant health improvement in {story.duration}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 px-8 py-4 flex items-center justify-between">
            <button
              onClick={prevStory}
              className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Previous Story</span>
            </button>

            <div className="flex space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentStory(index);
                    setIsPlaying(false); // Reset video when changing stories
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentStory ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextStory}
              className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <span>Next Story</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your own success story?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919900546089?text=Hello%20KSK%20Healthcare%2C%20I%20would%20like%20to%20book%20a%20consultation%20after%20reading%20the%20success%20stories."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Book Your Consultation</span>
            </a>
            <a
              href="tel:+918884333439"
              className="bg-white border border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Call for Free Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientSuccessStories;
