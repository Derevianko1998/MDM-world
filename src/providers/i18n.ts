import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ukTranslation from './locales/uk/translation.json';
import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uk: { translation: ukTranslation },
      en: { translation: enTranslation },
      ru: { translation: ruTranslation }
    },
    fallbackLng: 'uk',
    interpolation: { escapeValue: false }
  });

export default i18n;