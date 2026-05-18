import { getLocales } from "expo-localization";
import * as i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import hr from "./hr.json";

const defaultLanguage = getLocales()[0].languageCode;

i18n.use(initReactI18next).init({
  resources: {
    hr: { translation: hr },
    en: { translation: en },
  },
  lng: defaultLanguage || "hr",
  fallbackLng: "hr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
