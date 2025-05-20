

import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <span className="font-serif font-medium text-xl">Marinus Painting</span>
            </div>
            <p className="text-neutral-300 mb-6">
              Bringing color and quality to West Valley City homes and businesses since 2019.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary-800 hover:bg-primary-700 rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-800 hover:bg-primary-700 rounded-full transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/18015551234" className="p-2 bg-primary-800 hover:bg-primary-700 rounded-full transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-neutral-300 hover:text-white transition-colors">Interior Painting</a></li>
              <li><a href="#services" className="text-neutral-300 hover:text-white transition-colors">Exterior Painting</a></li>
              <li><a href="#services" className="text-neutral-300 hover:text-white transition-colors">Power Washing</a></li>
              <li><a href="#services" className="text-neutral-300 hover:text-white transition-colors">Repairs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-neutral-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-neutral-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="/portfolio.pdf" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-neutral-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-neutral-300">
              <li>West Valley City, Utah</li>
              <li>(801) 555-1234</li>
              <li>info@marinuspainting.com</li>
              <li>Monday-Friday: 8am - 6pm</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 pt-8 text-center text-neutral-400">
          <p>© {currentYear} Marinus Painting. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;