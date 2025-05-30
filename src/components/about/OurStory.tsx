import React from 'react';
import { Award, Users, HeartPulse } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const OurStory: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt={t('our_story_image_alt')}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-2xl font-bold">{t('our_story_badge_years')}</p>
                <p className="text-sm">{t('our_story_badge_excellence')}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h6 className="text-primary-500 font-medium mb-3">{t('our_story_tagline')}</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800">
              {t('our_story_title')}
            </h2>
            <p className="text-neutral-600 mb-6">
              {t('our_story_paragraph_1')}
            </p>
            <p className="text-neutral-600 mb-6">
              {t('our_story_paragraph_2')}
            </p>
            <p className="text-neutral-600 mb-8">
              {t('our_story_paragraph_3')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary-50 p-3 rounded-full text-primary-500 mb-3">
                  <Award size={24} />
                </div>
                <h4 className="font-semibold text-neutral-800 mb-1">{t('our_story_feature_excellence_title')}</h4>
                <p className="text-sm text-neutral-600">{t('our_story_feature_excellence_desc')}</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary-50 p-3 rounded-full text-primary-500 mb-3">
                  <HeartPulse size={24} />
                </div>
                <h4 className="font-semibold text-neutral-800 mb-1">{t('our_story_feature_compassion_title')}</h4>
                <p className="text-sm text-neutral-600">{t('our_story_feature_compassion_desc')}</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary-50 p-3 rounded-full text-primary-500 mb-3">
                  <Users size={24} />
                </div>
                <h4 className="font-semibold text-neutral-800 mb-1">{t('our_story_feature_community_title')}</h4>
                <p className="text-sm text-neutral-600">{t('our_story_feature_community_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;