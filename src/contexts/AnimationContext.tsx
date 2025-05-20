'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface AnimationContextType {
  fadeInUpProps: (delay?: number) => object;
  SlideInSection: React.FC<SlideInSectionProps>;
  FadeInElement: React.FC<FadeInElementProps>;
}

interface SlideInSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

interface FadeInElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const AnimationContext = createContext<AnimationContextType | null>(null);

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};

const AnimationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const fadeInUpProps = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      delay: delay,
    },
  });

  const SlideInSection: React.FC<SlideInSectionProps> = ({ 
    children, 
    delay = 0, 
    className = '' 
  }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
          delay: delay,
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  const FadeInElement: React.FC<FadeInElementProps> = ({ 
    children, 
    delay = 0, 
    duration = 0.8, 
    className = '' 
  }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: duration,
          ease: [0.4, 0, 0.2, 1],
          delay: delay,
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  const value = {
    fadeInUpProps,
    SlideInSection,
    FadeInElement,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;