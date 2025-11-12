import React from 'react';
import omar from '../../assets/images/omar.png';
import aboutme from '../../assets/images/aboutme.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-blue-500 mr-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              About us
          </h2>
          </div>
          <div className="flex items-center justify-center space-x-8 ">
            <div className="text-3xl font-bold text-gray-800">NEXTVIEW</div>
            <div className="text-xl font-bold text-gray-800">Empowering Brands, Inspiring Impact</div>
          </div>
        </div>
      </div>

      {/* Main About Content - Full Width Image */}
      <div className="flex justify-center items-center">
        <img
          src={aboutme}
          alt="About NextView"
          className="w-3/4"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
      

        {/* Why Choose Me Section */}
        <div className="mt-32 animate-fade-in-up animation-delay-1200">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Me?</h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Row 1 */}
            {/* LIGHT COMPOSURE */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-2 border-blue-400 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M3 12h1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">LIGHT COMPOSURE</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                Mastering the art of light to create stunning visual narratives that capture the perfect moment with precision and elegance.
              </p>
            </div>
            
            {/* PROFESSIONAL SKILLS */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-2 border-blue-400 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">PROFESSIONAL SKILLS</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                Years of expertise and continuous learning ensure every project meets the highest standards of quality and innovation.
              </p>
            </div>
            
            {/* PERFECT EQUIPMENT */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-2 border-blue-400 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">PERFECT EQUIPMENT</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                State-of-the-art technology and premium tools that enable us to deliver exceptional results with unmatched clarity and detail.
              </p>
            </div>
            
            {/* Row 2 */}
            {/* ULTRA HD */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-2 border-blue-400 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">ULTRA HD</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                Crystal-clear resolution and breathtaking detail that brings your vision to life with stunning visual fidelity.
          </p>
        </div>

            {/* UNIQUE VISION */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-2 border-blue-400 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">UNIQUE VISION</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                Creative perspective and artistic insight that transforms ordinary moments into extraordinary visual experiences.
              </p>
            </div>
            
            {/* FOCUSING KNOWLEDGE */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-2 border-blue-400 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">FOCUSING KNOWLEDGE</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                Deep understanding of industry best practices and cutting-edge techniques that drive exceptional outcomes.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
