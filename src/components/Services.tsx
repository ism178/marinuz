'use client';

import React from 'react';
import { PaintBucket, Droplets, Hammer, Home } from 'lucide-react';
import { useAnimation } from '../contexts/AnimationContext';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  const { SlideInSection } = useAnimation();

  return (
    <SlideInSection delay={delay} className="bg-white rounded-lg shadow-elegant p-6 hover:shadow-elevated transition-shadow duration-300">
      <div className="p-4 bg-primary-50 rounded-full inline-block mb-4 text-primary-500">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-primary-800">{title}</h3>
      <p className="text-neutral-700">{description}</p>
    </SlideInSection>
  );
};

const Services: React.FC = () => {
  const { SlideInSection } = useAnimation();
  
  const services = [
    {
      title: "Interior Painting",
      description: "Transform your living spaces with our premium interior painting services. We use high-quality paints that are durable, washable, and provide excellent coverage.",
      icon: <Home className="w-8 h-8" />,
      delay: 0.1
    },
    {
      title: "Exterior Painting",
      description: "Protect and beautify your home's exterior with our weather-resistant paints that stand up to the harshest elements while maintaining their vibrant color and finish.",
      icon: <PaintBucket className="w-8 h-8" />,
      delay: 0.2
    },
    {
      title: "Power Washing",
      description: "Restore your surfaces to like-new condition with our thorough power washing services. Perfect for driveways, decks, siding, and more.",
      icon: <Droplets className="w-8 h-8" />,
      delay: 0.3
    },
    {
      title: "Repairs & Preparation",
      description: "We don't just paint over problems. Our team expertly repairs cracks, holes, and damaged surfaces to ensure a flawless finish that lasts.",
      icon: <Hammer className="w-8 h-8" />,
      delay: 0.4
    }
  ];

  return (
    <section id="services" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <SlideInSection className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We offer comprehensive painting solutions tailored to your needs, utilizing premium materials and expert techniques for lasting results.
          </p>
        </SlideInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>

        <SlideInSection delay={0.5} className="mt-12 text-center">
          <a href="#contact" className="btn btn-primary">Schedule a Consultation</a>
        </SlideInSection>
      </div>
    </section>
  );
};

export default Services;