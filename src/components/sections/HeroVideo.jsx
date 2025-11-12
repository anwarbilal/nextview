import React from 'react';
import videoFile from '../../assets/images/video.mp4';

const HeroVideo = () => {
  return (
    <section id="home" className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src={videoFile}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-screen h-full object-cover"
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            minWidth: '100%'
          }}
        ></video>
        {/* Blue Transparent Overlay */}
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        
        {/* Beautiful Wave Patterns */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-400/20 to-transparent transform -skew-y-6 origin-top-left"></div>
        <div className="absolute top-20 right-0 w-96 h-24 bg-gradient-to-l from-blue-400/15 to-transparent transform skew-y-12 origin-top-right"></div>
        <div className="absolute bottom-40 left-0 w-80 h-20 bg-gradient-to-r from-blue-400/15 to-transparent transform -skew-y-6 origin-bottom-left"></div>
        
        {/* Elegant Line Patterns */}
        <div className="absolute top-1/4 left-10 w-32 h-0.5 bg-gradient-to-r from-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-24 h-0.5 bg-gradient-to-l from-blue-400 to-transparent animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-20 w-20 h-0.5 bg-gradient-to-r from-blue-400 to-transparent animate-pulse animation-delay-2000"></div>
        
        {/* Curved Lines */}
        <div className="absolute top-1/2 left-0 w-40 h-40 border-l-2 border-t-2 border-blue-400/30 rounded-tl-full animate-pulse animation-delay-1500"></div>
        <div className="absolute bottom-1/4 right-0 w-32 h-32 border-r-2 border-b-2 border-blue-400/30 rounded-br-full animate-pulse animation-delay-2500"></div>
        
        {/* Diagonal Lines */}
        <div className="absolute top-1/6 left-1/4 w-16 h-0.5 bg-gradient-to-r from-blue-400/40 to-transparent transform rotate-45 animate-pulse animation-delay-500"></div>
        <div className="absolute top-2/3 right-1/3 w-20 h-0.5 bg-gradient-to-l from-blue-400/40 to-transparent transform -rotate-45 animate-pulse animation-delay-3000"></div>
        
        {/* Floating Dots */}
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse animation-delay-3000"></div>

        {/* Creative Drone Silhouettes */}
        <div className="absolute top-1/6 right-1/4 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400">
            <path d="M50 20 L80 40 L80 60 L50 80 L20 60 L20 40 Z" fill="currentColor" opacity="0.3"/>
            <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>
        
        <div className="absolute bottom-1/6 left-1/4 w-20 h-20 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400">
            <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="currentColor" opacity="0.3"/>
            <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-1/3 left-1/6 w-16 h-16 opacity-20 animate-float">
          <svg className="w-full h-full text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        
        <div className="absolute bottom-1/3 right-1/6 w-12 h-12 opacity-15 animate-float animation-delay-2000">
          <svg className="w-full h-full text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
              NEXTVIEW
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 leading-none tracking-tight">
              DIGITAL SOLUTIONS & PHOTOGRAPHY
            </h2>
          </div>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
            Empowering Brands, Inspiring Impact
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
            Professional digital services and aerial imaging solutions for your business needs. 
            We deliver exceptional results through innovative technology and creative excellence.
          </p>

          {/* Feature Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-blue-600/20 backdrop-blur-sm text-white text-base font-semibold rounded-full border border-blue-400/30 shadow-lg shadow-blue-500/20 mb-12">
            <span className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
            UI/UX Design • Web Development • AI Integration
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-400/30 text-lg">
              Get Started
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-semibold px-10 py-5 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm text-lg">
              View Portfolio →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Feature Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-8 text-white/70 text-sm">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span>AI-Powered</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" clipRule="evenodd" />
          </svg>
          <span>4K Quality</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>24/7 Support</span>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
