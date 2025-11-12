import React from 'react';
import aiImage from '../../assets/images/ai.png';

const Hero2 = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${aiImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Abstract Lines */}
      <div className="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
      <div className="absolute top-32 left-20 w-24 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
      <div className="absolute bottom-32 right-20 w-40 h-px bg-gradient-to-l from-purple-400 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white space-y-8 -mt-40">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              FROM DRONE SHOT TO AI INSIGHT
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-300 max-w-2xl">
              Aerial imagery supercharged by AI — 
              <br />capture, enhance, analyze.
            </p>
            
            {/* Feature Tags */}
            <div className="inline-flex items-center gap-3 px-6 py-3 border border-purple-400/50 rounded-full bg-purple-500/10 backdrop-blur-sm">
              <span className="text-purple-300 text-xl">Pro</span>
              <span className="text-white font-semibold text-xl">•</span>
              <span className="text-white font-bold text-xl">8K HDR</span>
              <span className="text-purple-300 text-xl">•</span>
              <span className="text-purple-300 text-xl">Licensed Pilots</span>
            </div>
          </div>
          

        </div>
      </div>
      
      {/* Bottom Feature Cards */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: AERIAL PHOTOGRAPHY */}
            <div className="bg-slate-800/30 backdrop-blur-sm border-2 border-purple-400/50 rounded-3xl p-8 hover:border-purple-400 transition-all duration-300">
              {/* First Row: Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center border-2 border-purple-400/50 flex-shrink-0">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl">AERIAL <br></br> PHOTOGRAPHY</h3>
              </div>
              {/* Second Row: Description */}
              <p className="text-gray-300 text-2xl leading-relaxed">Capture breathtaking visuals from <br></br> new perspectives.</p>
            </div>
            
            {/* Card 2: AI ENHANCEMENT */}
            <div className="bg-slate-800/30 backdrop-blur-sm border-2 border-purple-400/50 rounded-3xl p-8 hover:border-purple-400 transition-all duration-300">
              {/* First Row: Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center border-2 border-purple-400/50 flex-shrink-0">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl">AI <br></br>  ENHANCEMENT</h3>
              </div>
              {/* Second Row: Description */}
              <p className="text-gray-300 text-2xl leading-relaxed">Transform images with cutting-edge<br></br>  artificial intelligence.</p>
            </div>
            
            {/* Card 3: MAPPING & ANALYTICS */}
            <div className="bg-slate-800/30 backdrop-blur-sm border-2 border-purple-400/50 rounded-3xl p-8 hover:border-purple-400 transition-all duration-300">
              {/* First Row: Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center border-2 border-purple-400/50 flex-shrink-0">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl">MAPPING & <br></br> ANALYTICS</h3>
              </div>
              {/* Second Row: Description */}
              <p className="text-gray-300 text-2xl leading-relaxed">Generate valuable insights from <br></br> detailed aerial surveys.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Left Compliance Text */}
      <div className="absolute bottom-8 left-8 text-purple-300/70 text-sm space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-green-400">✔</span>
          <span>No Fly Zone Compliance</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-400">✔</span>
          <span>AI Enhancement</span>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
