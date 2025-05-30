import React from 'react';
import { Award, Users, Clock, HeartHandshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FeatureProps {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, titleKey, descriptionKey }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-primary-50 p-3 rounded-full text-primary-500">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-neutral-800">{t(titleKey)}</h3>
        <p className="text-neutral-600">{t(descriptionKey)}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">{t('why_choose_us_title')}</h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            {t('why_choose_us_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Feature 
            icon={<Award size={24} />}
            titleKey="feature_experienced_professionals_title"
            descriptionKey="feature_experienced_professionals_desc"
          />
          
          <Feature 
            icon={<Users size={24} />}
            titleKey="feature_patient_centered_care_title"
            descriptionKey="feature_patient_centered_care_desc"
          />
          
          <Feature 
            icon={<Clock size={24} />}
            titleKey="feature_accessible_services_title"
            descriptionKey="feature_accessible_services_desc"
          />
          
          <Feature 
            icon={<HeartHandshake size={24} />}
            titleKey="feature_compassionate_approach_title"
            descriptionKey="feature_compassionate_approach_desc"
          />
        </div>
        
        {/* Stats Section */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <p className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">20+</p>
            <p className="text-neutral-700 font-medium">Years Experience</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <p className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">50+</p>
            <p className="text-neutral-700 font-medium">Medical Experts</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <p className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">15k+</p>
            <p className="text-neutral-700 font-medium">Happy Patients</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <p className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">24/7</p>
            <p className="text-neutral-700 font-medium">Emergency Care</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;