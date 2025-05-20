'use client';

import React from 'react';
import { useAnimation } from '../contexts/AnimationContext';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const { SlideInSection, FadeInElement } = useAnimation();

  const advantages = [
    "Licensed and insured professionals",
    "Premium quality paints and materials",
    "Clean and respectful work environment",
    "Detailed preparation and flawless execution",
    "On-time project completion",
    "Comprehensive clean-up after project completion"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideInSection className="order-2 lg:order-1">
            <h2 className="section-title">About Our Company</h2>
            <p className="text-neutral-700 mb-6">
              Marinus Painting has been transforming homes and businesses throughout West Valley City and surrounding areas. Our commitment to quality craftsmanship and customer satisfaction has made us a trusted name in the painting industry.
            </p>
            <p className="text-neutral-700 mb-8">
              Our team consists of experienced painters who take pride in their work and attention to detail. We believe that a successful painting project begins with thorough preparation and ends with meticulous execution. This philosophy has earned us hundreds of satisfied customers who continue to recommend our services.
            </p>

            <h3 className="text-xl font-medium mb-4 text-primary-700">Why Choose Us</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {advantages.map((advantage, index) => (
                <FadeInElement key={index} delay={0.1 * index} className="flex items-start">
                  <span className="text-primary-500 mr-2 mt-1">
                    <Check className="w-5 h-5" />
                  </span>
                  <span className="text-neutral-700">{advantage}</span>
                </FadeInElement>
              ))}
            </ul>

            <a href="#contact" className="btn btn-primary">Contact Us Today</a>
          </SlideInSection>

          <div className="order-1 lg:order-2 flex justify-center">
            <SlideInSection delay={0.2} className="relative">
              <img 
                src="https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750" 
                alt="Professional painter" 
                className="rounded-lg shadow-elevated w-full max-w-md h-auto"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs p-4 rounded-lg shadow-elegant">
                <p className="text-primary-500 font-serif font-medium text-xl">5 Years Experience</p>
              </div>
            </SlideInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;