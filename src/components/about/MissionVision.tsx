import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MissionVision: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-500">
            <div className="text-primary-500 mb-4">
              <Target size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-neutral-800">{t('mission_title')}</h3>
            <p className="text-neutral-600 mb-4">
              {t('mission_paragraph_1')}
            </p>
            <p className="text-neutral-600">
              {t('mission_paragraph_2')}
            </p>
          </div>
          
          <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-500">
            <div className="text-secondary-500 mb-4">
              <Eye size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-neutral-800">{t('vision_title')}</h3>
            <p className="text-neutral-600 mb-4">
              {t('vision_paragraph_1')}
            </p>
            <p className="text-neutral-600">
              {t('vision_paragraph_2')}
            </p>
          </div>
          
          <div className="bg-accent-50 p-8 rounded-lg border-l-4 border-accent-500">
            <div className="text-accent-500 mb-4">
              <Award size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-neutral-800">{t('values_title')}</h3>
            <ul className="text-neutral-600 space-y-3">
              <li className="flex items-baseline gap-2">
                <span className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0 mt-1"></span>
                <span><strong>{t('value_excellence_strong')}</strong> {t('value_excellence_text')}</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0 mt-1"></span>
                <span><strong>{t('value_compassion_strong')}</strong> {t('value_compassion_text')}</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0 mt-1"></span>
                <span><strong>{t('value_innovation_strong')}</strong> {t('value_innovation_text')}</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0 mt-1"></span>
                <span><strong>{t('value_integrity_strong')}</strong> {t('value_integrity_text')}</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0 mt-1"></span>
                <span><strong>{t('value_accessibility_strong')}</strong> {t('value_accessibility_text')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;