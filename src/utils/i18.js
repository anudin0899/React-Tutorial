import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en", // Default language
        returnObjects: true,
        resources: {
            en: {
                translation: {
                    greeting: "Hello, Welcome!",
                    description: {
                        line1: "you're watching and learning react {{channel}}",
                        line2: "good luck!"
                    }
                },
            },
            fr: {
                translation: {
                    greeting: "Bonjour, Bienvenue",
                    description: {
                        line1: "vous regardez et apprenez React {{channel}}",
                        line2: "bonne chance !"
                    }
                },
            },
            hi: {
                translation: {
                    greeting: "नमस्ते, स्वागत है",
                    description: {
                        line1: "आप रिएक्ट को देख रहे हैं और सीख रहे हैं {{channel}}",
                        line2: "शुभकामनाएँ!"
                    }
                },
            },
            ar: {
                translation: {
                    greeting: "مرحبًا، أهلاً بك!",
                    description: {
                        line1: "أنت تشاهد وتتعلم الرد",
                        line2: "حظًا سعيدًا!"
                    }
                },
            },
        },
    });

export default i18n;
