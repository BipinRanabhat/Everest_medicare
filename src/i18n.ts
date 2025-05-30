import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// For now, we'll use an empty resources object.
// We'll add translations later.
// const resources = {
//   en: {
//     translation: {
//       // English translations will go here
//     }
//   },
//   ne: { // 'ne' is the language code for Nepali
//     translation: {
//       // Nepali translations will go here
//     }
//   }
// };

i18n
  .use(HttpApi) // Use i18next-http-backend
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n down to react-i18next
  .init({
    // resources, // Remove this line
    supportedLngs: ['en', 'ne'],
    fallbackLng: 'en', // Use English if detected language is not available
    debug: true, // Set to false in production
    interpolation: {
      escapeValue: false // React already safes from xss
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    }
  });

export default i18n; 