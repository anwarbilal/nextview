import React, { useState, useEffect } from 'react'
import logo from '../../assets/images/nextview.png'
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const sections = ['home', 'services', 'portfolio', 'team', 'about', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial active section based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'team', label: 'Team', href: '#team' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header className="w-full relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-white/80 backdrop-blur-md border-b border-blue-200 shadow-lg">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 ">
            <img src={logo} alt="logo" className="w-10 h-10" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            NextView
          </span>
        </div>

        {/* Center: Nav Links - Desktop */}
        <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 xl:space-x-8 text-gray-700 font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-3 py-2 rounded transition-all duration-200 hover:bg-blue-50 ${
                activeSection === link.id
                  ? 'text-blue-600 font-bold'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Mobile Menu Button */}
        <div className="flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-white/95 backdrop-blur-md shadow-xl border-t border-blue-200">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 sm:px-6 py-3 border-b border-blue-100 transition-all duration-200 hover:bg-blue-50 ${
                  activeSection === link.id
                    ? 'text-blue-600 font-bold bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header
