import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    .use(LanguageDetector)
    .use(initReactI18next).use(Backend)
    .init({
        debug: true,
        fallbackLng: "en", // Default language
        returnObjects: true,
        backend: {
            // for all available options read the backend's repository readme file
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    });

export default i18n;
