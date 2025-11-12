import React from 'react';
import droneImage from '../../assets/images/t1.jpg';

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800">
      {/* Drone Background Image */}
      <div className="absolute inset-0">
        <img 
          src={droneImage} 
          alt="Drone Technology Background" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/70 to-blue-800/80"></div>
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
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl border border-purple-400/30 flex items-center justify-center">
            <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-1/3 right-1/6 w-16 h-16 opacity-20 animate-float animation-delay-2000">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-blue-400/30 flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
                DIGITAL SOLUTIONS
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 leading-none tracking-tight">
                & PHOTOGRAPHY
              </h2>
            </div>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Professional digital services and aerial imaging solutions for your business needs.
            </p>

            {/* Feature Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-blue-600/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-blue-400/30 shadow-lg shadow-blue-500/20">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              UI/UX Design • Web Development • AI Integration • Drone Photography
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-400/30">
                Get Started
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                View Portfolio →
              </button>
            </div>
          </div>

          {/* Right Column - Empty Space */}
          {/* <div className="relative flex justify-center items-center">
           
            <div className="w-80 h-80 flex items-center justify-center">
              <div className="text-center text-white/30">
                <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p className="text-sm">Space for future content</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom Feature Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-8 text-white/70 text-sm">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <span>Digital Solutions</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          <span>Photography Services</span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-purple-500/10 rounded-full animate-float border border-purple-400/20"></div>
      <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-blue-500/10 rounded-full animate-float animation-delay-1000 border border-blue-400/20"></div>
    </section>
  );
};

export default Hero;

