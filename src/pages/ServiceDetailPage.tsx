import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, Home, Stethoscope, Shield, Monitor, Activity, Check } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import CTASection from '../components/home/CTASection';

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'stethoscope':
      return <Stethoscope size={36} />;
    case 'heart-pulse':
      return <HeartPulse size={36} />;
    case 'home':
      return <Home size={36} />;
    case 'shield':
      return <Shield size={36} />;
    case 'monitor':
      return <Monitor size={36} />;
    case 'activity':
      return <Activity size={36} />;
    default:
      return <Stethoscope size={36} />;
  }
};

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData.find(s => s.id === serviceId);
  
  // Handle service not found
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4 text-neutral-800">Service Not Found</h1>
          <p className="text-neutral-600 mb-6">The service you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/services" 
            className="inline-flex items-center py-2 px-4 rounded-md bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
          >
            View All Services <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      {/* Service Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-neutral-900 opacity-60"
            aria-hidden="true"
          ></div>
          <img 
            src={service.image}
            alt={service.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="inline-block bg-primary-500 px-4 py-1 rounded-md text-white text-sm font-medium mb-4">
              Everest HomeCare Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {service.shortDescription}
            </p>
            <Link 
              to="/booking" 
              className="inline-flex items-center bg-white hover:bg-neutral-100 text-primary-600 py-3 px-6 rounded-md font-medium transition-colors animate-fade-in" 
              style={{ animationDelay: '0.4s' }}
            >
              Book an Appointment <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
            <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,42.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Service Description */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="text-primary-500 mb-4">
                {getServiceIcon(service.icon)}
              </div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">
                About Our {service.title}
              </h2>
              <p className="text-neutral-600 mb-8 text-lg leading-relaxed">
                {service.longDescription}
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-neutral-800">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {service.features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
                    <h4 className="text-xl font-semibold mb-3 text-neutral-800">{feature.title}</h4>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-neutral-800">Why Choose Our {service.title}</h3>
              <div className="bg-neutral-50 p-6 rounded-lg mb-8">
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="bg-primary-100 p-1 rounded-full text-primary-500 flex-shrink-0 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-neutral-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              {/* Booking Card */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-neutral-800">Book This Service</h3>
                <p className="text-neutral-600 mb-6">
                  Schedule an appointment with our {service.title} specialists to discuss your healthcare needs.
                </p>
                <Link 
                  to="/booking" 
                  className="block w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white text-center rounded-md font-medium transition-colors mb-4"
                >
                  Book Appointment
                </Link>
                <a 
                  href="tel:+9779876543210" 
                  className="block w-full py-3 px-4 bg-white border border-primary-500 text-primary-600 hover:bg-primary-50 text-center rounded-md font-medium transition-colors"
                >
                  Call for Inquiries
                </a>

                {/* Additional Info */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h4 className="font-semibold text-neutral-800 mb-3">Available at:</h4>
                  <ul className="space-y-2 text-neutral-600">
                    <li>• Kathmandu Main Clinic</li>
                    <li>• Pokhara Branch</li>
                    <li>• Telemedicine (Online)</li>
                  </ul>
                </div>
                
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <h4 className="font-semibold text-neutral-800 mb-3">Service Hours:</h4>
                  <ul className="space-y-2 text-neutral-600">
                    <li>Monday - Friday: 8:00 AM - 7:00 PM</li>
                    <li>Saturday: 9:00 AM - 5:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Services */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-neutral-800">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesData
              .filter(s => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <div key={relatedService.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-primary-500 mb-4">{getServiceIcon(relatedService.icon)}</div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-800">{relatedService.title}</h3>
                  <p className="text-neutral-600 mb-4">{relatedService.shortDescription}</p>
                  <Link 
                    to={`/services/${relatedService.id}`} 
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};
export default ServiceDetailPage;