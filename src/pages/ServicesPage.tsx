import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, Home, Stethoscope, Shield, Monitor, Activity } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import CTASection from '../components/home/CTASection';
import { useTranslation } from 'react-i18next';

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

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Services Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-neutral-900 opacity-60"
            aria-hidden="true"
          ></div>
          <img 
            src="https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt={t('services_page_hero_image_alt')}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              {t('services_page_hero_title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('services_page_hero_subtitle')}
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
      
      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
              {t('services_page_list_title')}
            </h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              {t('services_page_list_subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 mt-12">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <img 
                    src={service.image} 
                    alt={t(service.title)}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="text-primary-500 mb-4">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-800">
                    {t(service.title)}
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    {t(service.shortDescription)}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-800 mb-3">{t('services_page_key_benefits')}</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-baseline gap-2">
                          <span className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-1"></span>
                          <span className="text-neutral-600">{t(benefit)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/services/${service.id}`} 
                    className="inline-flex items-center py-2 px-4 rounded-md bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
                  >
                    {t('learn_more')} <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default ServicesPage;