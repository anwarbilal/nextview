import React from 'react';
import lense from '../../assets/images/lense.jpg';
import logo from '../../assets/images/nextview.png';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Image with Bluish Overlay */}
      <div className="absolute inset-0">
        <img 
          src={lense} 
          alt="Lense Background" 
          className="w-full h-full object-cover"
        />
        {/* Bluish Transparent Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/85 to-indigo-900/90"></div>
      </div>

      {/* Awesome Blue Background Pattern */}
      <div className="absolute inset-0">
        {/* Dynamic Blue Waves */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-400/30 to-transparent transform -skew-y-6 origin-top-left"></div>
        <div className="absolute top-20 right-0 w-96 h-24 bg-gradient-to-l from-indigo-400/25 to-transparent transform skew-y-12 origin-top-right"></div>
        <div className="absolute bottom-40 left-0 w-80 h-20 bg-gradient-to-r from-cyan-400/25 to-transparent transform -skew-y-6 origin-bottom-left"></div>
        
        {/* Floating Blue Orbs */}
        <div className="absolute top-10 left-20 w-32 h-32 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-32 w-40 h-40 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        
        {/* Electric Blue Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-96 h-px bg-gradient-to-l from-transparent via-indigo-300 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"></div>
        
        {/* Glowing Blue Dots */}
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50 animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-indigo-300 rounded-full shadow-lg shadow-indigo-300/50 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-300 rounded-full shadow-lg shadow-cyan-300/50 animate-pulse animation-delay-2000"></div>
        
        {/* Blue Tech Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-300">
            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
            <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 left-20 w-16 h-16 opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-300">
            <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
            <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        
        {/* Floating Blue Elements */}
        <div className="absolute top-1/3 left-1/6 w-12 h-12 opacity-40 animate-float">
          <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-indigo-400/30 backdrop-blur-sm rounded-xl border border-blue-300/40 shadow-lg shadow-blue-300/20"></div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/6 w-10 h-10 opacity-40 animate-float animation-delay-2000">
          <div className="w-full h-full bg-gradient-to-br from-indigo-400/30 to-cyan-400/30 backdrop-blur-sm rounded-xl border border-indigo-300/40 shadow-lg shadow-indigo-300/20"></div>
        </div>
        
        {/* Blue Energy Bursts */}
        <div className="absolute top-1/6 left-1/4 w-24 h-24 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <g className="animate-pulse">
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={50 + 20 * Math.cos((i * 45 * Math.PI) / 180)}
                  y2={50 + 20 * Math.sin((i * 45 * Math.PI) / 180)}
                  stroke="url(#blueBurstGradient)"
                  strokeWidth="2"
                  opacity="0.8"
                />
              ))}
            </g>
            <defs>
              <radialGradient id="blueBurstGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        
        {/* Blue Circuit Pattern */}
        <div className="absolute top-1/3 left-1/4 w-32 h-24 opacity-25">
          <svg viewBox="0 0 100 80" className="w-full h-full">
            <g className="animate-pulse">
              <rect x="10" y="10" width="25" height="20" rx="3" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
              <rect x="65" y="25" width="25" height="20" rx="3" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.6" />
              <rect x="40" y="50" width="25" height="20" rx="3" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
              <line x1="35" y1="20" x2="65" y2="35" stroke="#3b82f6" strokeWidth="2" opacity="0.5" />
              <line x1="50" y1="30" x2="50" y2="50" stroke="#8b5cf6" strokeWidth="2" opacity="0.5" />
              <circle cx="35" cy="20" r="3" fill="#3b82f6" opacity="0.6" />
              <circle cx="65" cy="35" r="3" fill="#8b5cf6" opacity="0.6" />
              <circle cx="50" cy="50" r="3" fill="#06b6d4" opacity="0.6" />
            </g>
          </svg>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Footer Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 bg-blue-500/20 backdrop-blur-sm border border-blue-400/40 rounded-full text-blue-200 text-sm font-semibold mb-6 shadow-lg shadow-blue-500/20">
              <div className="w-3 h-3 bg-blue-300 rounded-full mr-3 animate-pulse shadow-lg shadow-blue-300/50"></div>
              NextView • Drone Photography • AI-Powered
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Capture Your{' '}
              <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                Vision?
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the future of aerial imagery with cutting-edge drone technology and AI-powered enhancement.
            </p>
          </div>

          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30">
                  <img src={logo} alt="logo" className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">NextView</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Empowering brands with cutting-edge digital solutions and AI-enhanced aerial photography that transforms visions into extraordinary visual experiences.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-blue-400/30 transition-all duration-300 cursor-pointer shadow-lg shadow-blue-500/20 border border-blue-400/30 hover:scale-110">
                  <svg className="w-6 h-6 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-blue-400/30 transition-all duration-300 cursor-pointer shadow-lg shadow-blue-500/20 border border-blue-400/30 hover:scale-110">
                  <svg className="w-6 h-6 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-blue-400/30 transition-all duration-300 cursor-pointer shadow-lg shadow-blue-500/20 border border-blue-400/30 hover:scale-110">
                  <svg className="w-6 h-6 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">Aerial Photography</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">Drone Videography</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">AI Enhancement</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">Mapping & Analytics</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">Custom Packages</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">About Us</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">Our Team</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">Careers</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">Press</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">Contact</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">Help Center</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">Documentation</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">API Reference</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">Status</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 inline-block">Contact Support</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-blue-400/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-blue-200 text-sm">
                © 2025 NextView. All rights reserved. | Privacy Policy | Terms of Service
              </div>
              <div className="flex items-center space-x-2 text-blue-200 text-sm">
                <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
