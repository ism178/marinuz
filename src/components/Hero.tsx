'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(25, 48, 83, 0.7), rgba(25, 48, 83, 0.85)),
          url('https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080')
        `,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-primary-900/50 to-primary-900/70"></div>
      
      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-white text-shadow mb-6">
            Transform Your Space with <br className="hidden md:block" />
            <span className="text-accent-300">Professional Painting</span>
          </h1>
        </motion.div>
        
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-neutral-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We bring more than color to your walls - we bring life to your home. Serving West Valley City with pride and professionalism.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#contact" className="btn btn-accent w-full sm:w-auto">
            Get a Free Quote
          </a>
          <a href="#services" className="btn btn-secondary w-full sm:w-auto">
            Explore Our Services
          </a>
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;