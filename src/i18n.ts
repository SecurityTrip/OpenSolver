import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n.use(LanguageDetector).use(HttpBackend).init({
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: './locales/{{lng}}/{{ns}}.json',
  },
});

export default i18n;
