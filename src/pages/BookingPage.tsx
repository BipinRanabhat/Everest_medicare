import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarClock, Phone, MapPin, Mail, ArrowRight } from 'lucide-react';
import BookingForm from '../components/booking/BookingForm';

const BookingPage: React.FC = () => {
  return (
    <>
      {/* Booking Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-neutral-900 opacity-60"
            aria-hidden="true"
          ></div>
          <img 
            src="https://images.pexels.com/photos/7089425/pexels-photo-7089425.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Medical appointment" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Book Your Appointment
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Schedule a visit with our healthcare professionals easily and quickly
            </p>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
            <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,42.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Booking Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-neutral-800">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-full text-primary-500 flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-800 mb-1">Phone</h3>
                      <a href="tel:+9779876543210" className="text-neutral-600 hover:text-primary-500 transition-colors">
                        +977 9876543210
                      </a>
                      <p className="text-neutral-500 text-sm mt-1">Mon-Fri: 8:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-full text-primary-500 flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-800 mb-1">Email</h3>
                      <a href="mailto:appointments@nepalcare.com" className="text-neutral-600 hover:text-primary-500 transition-colors">
                        appointments@nepalcare.com
                      </a>
                      <p className="text-neutral-500 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-full text-primary-500 flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-800 mb-1">Location</h3>
                      <p className="text-neutral-600">
                        123 Durbar Marg, Kathmandu, Nepal
                      </p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 text-sm font-medium inline-flex items-center mt-1"
                      >
                        View on Map <ArrowRight size={12} className="ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-full text-primary-500 flex-shrink-0">
                      <CalendarClock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-800 mb-1">Hours</h3>
                      <ul className="text-neutral-600 space-y-1">
                        <li>Monday - Friday: 8:00 AM - 7:00 PM</li>
                        <li>Saturday: 9:00 AM - 5:00 PM</li>
                        <li>Sunday: Closed</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h3 className="font-semibold text-lg text-neutral-800 mb-4">Emergency Services</h3>
                  <p className="text-neutral-600 mb-4">
                    For medical emergencies, please call our 24/7 emergency line or visit our emergency department.
                  </p>
                  <a 
                    href="tel:+9779876543211" 
                    className="flex items-center gap-2 py-3 px-4 bg-error-500 hover:bg-opacity-90 text-white rounded-md font-medium transition-colors w-full justify-center"
                  >
                    <Phone size={18} />
                    Emergency: +977 9876543211
                  </a>
                </div>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-xl mt-6">
                <h3 className="font-semibold text-lg text-neutral-800 mb-3">Need More Information?</h3>
                <p className="text-neutral-600 mb-4">
                  If you have questions about our services or need assistance in choosing the right specialist, our team is here to help.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-neutral-800">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Find answers to common questions about our appointment booking process
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-neutral-800">How far in advance should I book my appointment?</h3>
                <p className="text-neutral-600">
                  We recommend booking your appointment at least 3-5 days in advance for routine visits. For specialized care, booking 1-2 weeks ahead is advisable. However, we also accommodate urgent cases and same-day appointments when possible.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-neutral-800">What should I bring to my appointment?</h3>
                <p className="text-neutral-600">
                  Please bring your identification, insurance information (if applicable), a list of current medications, and any relevant medical records or test results. If you're a new patient, arriving 15 minutes early to complete registration is helpful.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-neutral-800">How can I reschedule or cancel my appointment?</h3>
                <p className="text-neutral-600">
                  You can reschedule or cancel your appointment by calling our reception at +977 9876543210 or by emailing appointments@nepalcare.com. We appreciate at least 24 hours' notice for cancellations to allow us to offer the slot to other patients.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-neutral-800">Do you offer telemedicine appointments?</h3>
                <p className="text-neutral-600">
                  Yes, we offer telemedicine consultations for select services. You can book a virtual appointment through our online booking system or by calling our reception. Our staff will provide instructions on how to connect for your virtual visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;