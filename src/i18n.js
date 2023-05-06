import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(new LanguageDetector(null, { lookupLocalStorage: "lang" }))
  .init({
    // resources,
    // lng: "ja",
    lng: window.localStorage.getItem("lang"),
    // lng: window.localStorage.defaultLanguage,
    fallbackLng: "ja",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
