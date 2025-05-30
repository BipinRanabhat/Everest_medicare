import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-neutral-900 opacity-50"
          aria-hidden="true"
        ></div>
        <img 
          src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt={t('hero_image_alt')}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            {t('hero_title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/booking" 
              className="flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-md font-medium transition-colors"
            >
              <Calendar size={20} />
              {t('hero_book_appointment')}
            </Link>
            <a 
              href="tel:+9779709007721" 
              className="flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-primary-600 py-3 px-6 rounded-md font-medium transition-colors"
            >
              <Phone size={20} />
              {t('hero_call_now')}
            </a>
          </div>
        </div>
      </div>
      
      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
          <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,42.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;