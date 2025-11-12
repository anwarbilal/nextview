import React, { useState, useEffect } from 'react';
import urban from '../../assets/images/1.png';
import luxury from '../../assets/images/2.png';
import wedding from '../../assets/images/3.png';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentBgImage, setCurrentBgImage] = useState(0);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'aerial', name: 'Aerial Photography' },
    { id: 'real-estate', name: 'Real Estate' },
    { id: 'events', name: 'Events' },
    { id: 'cinematic', name: 'Cinematic' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Urban Skyline',
      description: 'Breathtaking city views from above',
      category: 'aerial',
      image: urban,
      tags: ['Aerial', 'Urban', 'Cityscape']
    },
    {
      id: 2,
      title: 'Luxury Villa',
      description: 'Premium real estate aerial showcase',
      category: 'real-estate',
      image: luxury,
      tags: ['Real Estate', 'Luxury', 'Property']
    },
    {
      id: 3,
      title: 'Wedding Celebration',
      description: 'Magical moments from above',
      category: 'events',
      image: wedding,
      tags: ['Events', 'Wedding', 'Celebration']
    },
    {
      id: 4,
      title: 'Mountain Range',
      description: 'Stunning natural landscapes',
      category: 'aerial',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      tags: ['Aerial', 'Nature', 'Mountains']
    },
    {
      id: 5,
      title: 'Corporate Event',
      description: 'Professional event coverage',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
      tags: ['Events', 'Corporate', 'Professional']
    },
    {
      id: 6,
      title: 'Cinematic Sequence',
      description: 'Movie-like aerial storytelling',
      category: 'cinematic',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      tags: ['Cinematic', 'Storytelling', 'Film']
    }
  ];

  // Background images for the section
  const backgroundImages = [
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop'
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Change background image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgImage(prev => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Images with Smooth Transition */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBgImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>

      {/* Blue Transparent Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-indigo-900/80"></div>

      {/* Content - All existing content remains the same */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-6 animate-fade-in-up">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
            Drone Photography Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Explore our collection of stunning aerial photography and videography projects that showcase 
            the power of drone technology and creative vision.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-none border-0 hover:border-blue-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Transparent Bluish Layer */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Hover Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-white">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200 mb-3">{item.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-500/80 text-white text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-blue-600/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                  {item.category.replace('-', ' ').toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 animate-fade-in-up animation-delay-800">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-300">Aerial Shots</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">100+</div>
            <div className="text-gray-300">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up animation-delay-1000">
          <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 inline-flex items-center">
              View Full Gallery
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
