'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimation } from '../contexts/AnimationContext';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const { SlideInSection } = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "Marinus Painting transformed our home completely. The team was professional, punctual, and detail-oriented. Our walls have never looked better, and they completed the project ahead of schedule.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      text: "I hired Marinus Painting to refresh my restaurant, and I couldn't be happier with the results. Their team worked after hours to avoid disrupting our business, and the quality of work was exceptional.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Emily Roberts",
      role: "Homeowner",
      text: "From the initial consultation to the final walkthrough, working with Marinus Painting was a pleasure. They helped me select the perfect colors and delivered a flawless finish that transformed our living space.",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "David Wilson",
      role: "Property Manager",
      text: "We've used Marinus Painting for multiple properties in our portfolio. Their reliability and consistent quality make them our go-to painting company. Highly recommended for any property management needs.",
      rating: 4,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <SlideInSection className="text-center mb-16">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </SlideInSection>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-10 rounded-lg shadow-elegant text-center"
              >
                <div className="mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-6 h-6 ${i < testimonials[currentIndex].rating ? 'text-accent-500 fill-accent-500' : 'text-neutral-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-neutral-700 text-lg italic mb-6">"{testimonials[currentIndex].text}"</p>
                <div>
                  <p className="font-medium text-primary-800">{testimonials[currentIndex].name}</p>
                  <p className="text-neutral-500">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-elegant hover:bg-primary-50 transition-colors text-primary-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-500' : 'bg-neutral-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-elegant hover:bg-primary-50 transition-colors text-primary-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;