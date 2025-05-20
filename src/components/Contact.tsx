'use client';

import React, { useState, useEffect } from 'react';
import { useAnimation } from '../contexts/AnimationContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

const Contact: React.FC = () => {
  const { SlideInSection } = useAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  // Estado para controlar si estamos en el cliente
  const [isClient, setIsClient] = useState(false);
  
  // Estado para almacenar los componentes de react-leaflet
  const [MapComponents, setMapComponents] = useState<{
    MapContainer: any;
    TileLayer: any;
    Marker: any;
    Popup: any;
    L: any;
  } | null>(null);

  // Cargamos react-leaflet solo cuando estamos en el cliente
  useEffect(() => {
    setIsClient(true);
    
    // Importación dinámica de los componentes
    const loadMap = async () => {
      const leaflet = await import('leaflet');
      const reactLeaflet = await import('react-leaflet');
      
      // Fix para el icono del marcador
      delete (leaflet.Icon.Default.prototype as any)._getIconUrl;
      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
      
      setMapComponents({
        MapContainer: reactLeaflet.MapContainer,
        TileLayer: reactLeaflet.TileLayer,
        Marker: reactLeaflet.Marker,
        Popup: reactLeaflet.Popup,
        L: leaflet.default,
      });
    };
    
    loadMap();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setSubmitted(false);
    }, 5000);
  };

  // West Valley City coordinates
  const position: [number, number] = [40.6916, -112.0011];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <SlideInSection className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Ready to transform your space? Contact us today for a free consultation and quote.
          </p>
        </SlideInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <SlideInSection className="space-y-8">
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-medium text-primary-800 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 rounded-full text-primary-600 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-700">Phone</h4>
                    <p className="text-neutral-700">(801) 555-1234</p>
                    <p className="text-neutral-500 text-sm">Monday-Friday, 8am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 rounded-full text-primary-600 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-700">Email</h4>
                    <p className="text-neutral-700">info@marinuspainting.com</p>
                    <p className="text-neutral-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 rounded-full text-primary-600 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-700">Location</h4>
                    <p className="text-neutral-700">West Valley City, Utah</p>
                    <p className="text-neutral-500 text-sm">Serving all surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-container h-96 rounded-lg overflow-hidden">
              {isClient && MapComponents ? (
                <MapComponents.MapContainer 
                  center={position} 
                  zoom={13} 
                  style={{ height: '100%', width: '100%' }}
                >
                  <MapComponents.TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <MapComponents.Marker position={position}>
                    <MapComponents.Popup>
                      Marinus Painting<br />
                      West Valley City, Utah
                    </MapComponents.Popup>
                  </MapComponents.Marker>
                </MapComponents.MapContainer>
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-100">
                  Cargando mapa...
                </div>
              )}
            </div>
          </SlideInSection>

          <SlideInSection delay={0.2}>
            {submitted ? (
              <div className="bg-success-50 p-8 rounded-lg text-center">
                <svg className="mx-auto mb-4 text-success-500 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h3 className="text-xl font-medium text-success-700 mb-2">Message Sent!</h3>
                <p className="text-success-600">Thank you for contacting us. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:border-primary-500 focus:ring-3 focus:ring-primary-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:border-primary-500 focus:ring-3 focus:ring-primary-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:border-primary-500 focus:ring-3 focus:ring-primary-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:border-primary-500 focus:ring-3 focus:ring-primary-200 focus:ring-opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="interior">Interior Painting</option>
                      <option value="exterior">Exterior Painting</option>
                      <option value="power-washing">Power Washing</option>
                      <option value="repairs">Repairs</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:border-primary-500 focus:ring-3 focus:ring-primary-200 focus:ring-opacity-50"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </SlideInSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;