import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full px-4 py-4 md:px-8 transition-all duration-300 z-50 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <img 
              src="/brainpower-logo.svg" 
              alt="BrainPower" 
              className="h-8 md:h-10"
            />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
          >
            About
          </button>
        </nav>
        
        <div className="hidden md:block">
          <Button variant="gradient" size="md">
            Contact
          </Button>
        </div>
        
        <button className="md:hidden text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;