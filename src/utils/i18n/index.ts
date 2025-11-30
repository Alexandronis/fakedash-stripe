import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import fr from "./fr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr }
    },
    fallbackLng: "en",
    detection: {
      order: ["cookie", "localStorage", "navigator"],
      caches: ["cookie"],
      cookieMinutes: 365 * 24 * 60, // 1 year
      cookieDomain: window.location.hostname
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
