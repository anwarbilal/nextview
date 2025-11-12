import React from 'react';
import fImage from '../../assets/images/f.jpg';
const Services = () => {
  const services = [
    {
      number: "01",
      title: "Digital Solutions & Smart Technologies",
      description: "We provide integrated digital services, including:",
      buttonText: "Learn More",
      highlighted: false,
      features: ["Professional UI/UX design", "High-quality web and mobile app development", "AI integration to enhance performance and data analysis"]
    }// ,
    // {
    //   number: "02",
    //   title: "Photography & Aerial Imaging Services",
    //   description: "We offer professional photography services, including:",
    //   buttonText: "Learn More",
    //   highlighted: true,
    //   features: ["Portrait, corporate, and product photography", "High-resolution aerial drone imaging for projects and events", "Commercial and tourism photography for impactful promotional content"]
    // }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6" style={{ maxWidth: '1408px' }}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-6 animate-fade-in-up">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up animation-delay-200">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            From cutting-edge digital solutions to professional photography services, we provide comprehensive 
            solutions that elevate your brand and capture your vision with precision and creativity.
          </p>
        </div>

        {/* Single Service - Centered Professional Layout */}
        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative rounded-3xl overflow-hidden animate-fade-in-up bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2"
              style={{ animationDelay: `${(index + 1) * 300}ms` }}
            >
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 opacity-5 bg-blue-500" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px)`,
                backgroundSize: '50px 50px'
              }}></div>
              
              {/* Gradient Overlay */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

              {/* Floating Accent Circles */}
              <div className="absolute top-12 right-12 w-24 h-24 bg-blue-100 rounded-full animate-pulse opacity-60" style={{ animationDelay: `${index * 500}ms` }}></div>
              <div className="absolute bottom-12 left-12 w-20 h-20 bg-indigo-100 rounded-full animate-pulse opacity-60" style={{ animationDelay: `${(index + 1) * 700}ms` }}></div>

              {/* Content Container */}
              <div className="relative z-10 p-12 md:p-16">
                {/* Service Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-2xl mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {service.number}
                </div>

                {/* Service Title */}
                <div className="mb-6">
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight transition-all duration-500 group-hover:text-blue-700">
                    {service.title}
                  </h3>
                  <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-40 transition-all duration-500 shadow-md"></div>
                </div>

                {/* Description */}
                <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-3xl">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="group/feature relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mr-4 flex-shrink-0 shadow-md group-hover/feature:scale-110 transition-transform duration-300">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700 leading-relaxed font-medium pt-1">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <button className="group/btn relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 inline-flex items-center">
                      {service.buttonText}
                      <svg className="w-5 h-5 ml-3 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-100/30 to-indigo-100/30 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Custom Package Section */}
        <div className="relative mb-16 rounded-2xl overflow-hidden animate-fade-in-up animation-delay-1000 mt-40 w-full">
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${fImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Black Transparent Layer */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Blue Transparent Layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-indigo-900/40"></div>
          
          {/* Content */}
          <div className="relative z-10 p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need a Custom Package?
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Let us create a tailored drone photography solution that perfectly fits your unique project requirements. 
                From concept to final delivery, we'll work closely with you to bring your vision to life.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-12 gap-6 mb-8">
                <div className="col-span-4 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-400/50">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Personalized Planning</h4>
                  <p className="text-sm text-gray-300">Custom strategy tailored to your specific needs</p>
                </div>
                
                <div className="col-span-4 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-400/50">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Flexible Scheduling</h4>
                  <p className="text-sm text-gray-300">Work around your timeline and requirements</p>
                </div>
                
                <div className="col-span-4 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-400/50">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">24/7 Support</h4>
                  <p className="text-sm text-gray-300">Round-the-clock assistance for your project</p>
                </div>
              </div>
              
              {/* CTA Button */}
              <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 inline-flex items-center">
                  Get Custom Quote
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
