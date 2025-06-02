import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarClock, Phone, MapPin, Mail, ArrowRight } from 'lucide-react';
import BookingForm from '../components/booking/BookingForm';
import { useTranslation } from 'react-i18next';

const BookingPage: React.FC = () => {
  const { t } = useTranslation();
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
            alt={t('booking_hero_image_alt')} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              {t('booking_hero_title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('booking_hero_subtitle')}
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
                <h2 className="text-2xl font-bold mb-6 text-neutral-800">{t('booking_contact_info_title')}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-full text-primary-500 flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-800 mb-1">{t('booking_contact_phone_title')}</h3>
                      <a href="tel:+9779876543210" className="text-neutral-600 hover:text-primary-500 transition-colors">
                        +977 9876543210
                      </a>
                      <p className="text-neutral-500 text-sm mt-1">{t('booking_contact_phone_hours_weekdays')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-full text-primary-500 flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-800 mb-1">{t('booking_contact_email_title')}</h3>
                      <a href="mailto:appointments@nepalcare.com" className="text-neutral-600 hover:text-primary-500 transition-colors">
                        appointments@nepalcare.com
                      </a>
                      <p className="text-neutral-500 text-sm mt-1">{t('booking_contact_email_response_time')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-full text-primary-500 flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-800 mb-1">{t('booking_contact_location_title')}</h3>
                      <p className="text-neutral-600">
                        {t('booking_contact_location_address')}
                      </p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 text-sm font-medium inline-flex items-center mt-1"
                      >
                        {t('booking_contact_view_on_map_link')} <ArrowRight size={12} className="ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-full text-primary-500 flex-shrink-0">
                      <CalendarClock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-800 mb-1">{t('booking_contact_hours_title')}</h3>
                      <ul className="text-neutral-600 space-y-1">
                        <li>{t('service_detail_hours_weekdays')}</li>
                        <li>{t('service_detail_hours_saturday')}</li>
                        <li>{t('service_detail_hours_sunday')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h3 className="font-semibold text-lg text-neutral-800 mb-4">{t('booking_emergency_services_title')}</h3>
                  <p className="text-neutral-600 mb-4">
                    {t('booking_emergency_services_message')}
                  </p>
                  <a 
                    href="tel:+9779876543211" 
                    className="flex items-center gap-2 py-3 px-4 bg-error-500 hover:bg-opacity-90 text-white rounded-md font-medium transition-colors w-full justify-center"
                  >
                    <Phone size={18} />
                    {t('booking_emergency_call_button')}
                  </a>
                </div>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-xl mt-6">
                <h3 className="font-semibold text-lg text-neutral-800 mb-3">{t('booking_need_info_title')}</h3>
                <p className="text-neutral-600 mb-4">
                  {t('booking_need_info_message')}
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  {t('booking_need_info_contact_link')} <ArrowRight size={16} className="ml-1" />
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
            <h2 className="text-3xl font-bold mb-4 text-neutral-800">{t('booking_faq_main_title')}</h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              {t('booking_faq_main_subtitle')}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-neutral-800">{t('booking_faq_q1')}</h3>
                <p className="text-neutral-600">
                  {t('booking_faq_a1')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-neutral-800">{t('booking_faq_q2')}</h3>
                <p className="text-neutral-600">
                  {t('booking_faq_a2')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-neutral-800">{t('booking_faq_q3')}</h3>
                <p className="text-neutral-600">
                  {t('booking_faq_a3')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-neutral-800">{t('booking_faq_q4')}</h3>
                <p className="text-neutral-600">
                  {t('booking_faq_a4')}
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