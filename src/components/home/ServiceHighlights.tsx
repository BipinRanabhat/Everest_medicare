import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Home, Stethoscope, Shield, ArrowRight, Utensils} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, titleKey, descriptionKey, link }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-primary-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-neutral-800">{t(titleKey)}</h3>
      <p className="text-neutral-600 mb-4">{t(descriptionKey)}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
      >
        {t('learn_more')} <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

const ServiceHighlights: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">{t('services_main_title')}</h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            {t('services_main_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            icon={<Stethoscope size={36} />}
            titleKey="service_personal_care_title"
            descriptionKey="service_personal_care_desc"
            link="/services/primary-care"
          />
          
          <ServiceCard 
            icon={<Utensils size={36} />}
            titleKey="service_meal_prep_title"
            descriptionKey="service_meal_prep_desc"
            link="/services/specialized-care"
          />
          
          <ServiceCard 
            icon={<Home size={36} />}
            titleKey="service_housekeeping_title"
            descriptionKey="service_housekeeping_desc"
            link="/services/home-care"
          />
          
          <ServiceCard 
            icon={<Shield size={36} />}
            titleKey="service_health_support_title"
            descriptionKey="service_health_support_desc"
            link="/services/preventive-care"
          />
          
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/services" 
            className="inline-flex items-center py-3 px-6 rounded-md bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
          >
            {t('view_all_services')} <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;