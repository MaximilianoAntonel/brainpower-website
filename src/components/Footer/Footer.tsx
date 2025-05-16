import React from 'react';
import Button from '../Button/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-2 bg-white rounded-md p-2">
                <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g transform="scale(0.84)">
                    <path d="M373 64C373 64 313 124 313 124C313 124 253 64 253 64C253 64 193 124 193 124C193 124 133 64 133 64C133 64 73 124 73 124C73 124 133 184 133 184C133 184 193 124 193 124C193 124 253 184 253 184C253 184 313 124 313 124C313 124 373 184 373 184C373 184 433 124 433 124C433 124 493 184 493 184C493 184 553 124 553 124C553 124 493 64 493 64C493 64 433 124 433 124C433 124 373 64 373 64Z" fill="#0F172A"/>
                    <path d="M73 364C73 364 133 304 133 304C133 304 73 244 73 244C73 244 133 184 133 184C133 184 73 124 73 124C73 124 13 184 13 184C13 184 73 244 73 244C73 244 13 304 13 304C13 304 73 364 73 364Z" fill="#0F172A"/>
                    <path d="M253 484C253 484 313 424 313 424C313 424 253 364 253 364C253 364 193 424 193 424C193 424 133 364 133 364C133 364 73 424 73 424C73 424 133 484 133 484C133 484 193 424 193 424C193 424 253 484 253 484Z" fill="#0F172A"/>
                    <path d="M493 484C493 484 553 424 553 424C553 424 493 364 493 364C493 364 433 424 433 424C433 424 493 484 493 484Z" fill="#0F172A"/>
                    <path d="M553 244C553 244 493 184 493 184C493 184 433 244 433 244C433 244 373 184 373 184C373 184 313 244 313 244C313 244 373 304 373 304C373 304 433 244 433 244C433 244 493 304 493 304C493 304 553 244 553 244Z" fill="#0F172A"/>
                    <path d="M373 304C373 304 313 364 313 364C313 364 373 424 373 424C373 424 433 364 433 364C433 364 373 304 373 304Z" fill="#0F172A"/>
                    <path d="M253 364C253 364 193 304 193 304C193 304 133 364 133 364C133 364 193 424 193 424C193 424 253 364 253 364Z" fill="#0F172A"/>
                  </g>
                </svg>
              </div>
              <span className="text-2xl font-bold">BrainPower</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Helping businesses automate repetitive tasks so they can focus on what matters most.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-4">
              <Button variant="gradient" size="md">
                Get in touch
              </Button>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 BrainPower. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;