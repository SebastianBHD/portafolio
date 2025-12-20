import { createContext, useState, useEffect, useContext } from 'react';
import enTranslations from '../assets/public/locales/en.json';
import esTranslations from '../assets/public/locales/es.json';
import ptTranslations from '../assets/public/locales/pt.json';

const TranslationContext = createContext();
const translations = { en: enTranslations, es: esTranslations, pt: ptTranslations };

const getBrowserLanguage = () => {
  const langCode = (navigator.language || navigator.languages[0]).split('-')[0].toLowerCase();
  return ['es', 'en', 'pt'].includes(langCode) ? langCode : 'en';
};

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem('selected-language') || getBrowserLanguage());

  useEffect(() => {
    localStorage.setItem('selected-language', language);
  }, [language]);

  const getNestedValue = (obj, path) => path.split('.').reduce((current, key) => current?.[key], obj);

  const t = (key, params = {}) => {
    let translation = getNestedValue(translations[language], key) || getNestedValue(translations.en, key) || key;
    if (typeof translation === 'string' && Object.keys(params).length > 0) {
      translation = translation.replace(/\{(\w+)\}/g, (match, paramKey) => params[paramKey] ?? match);
    }
    return translation;
  };

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => {
  const context = useContext(TranslationContext);
  if (!context) throw new Error('useTranslationContext must be used within TranslationProvider');
  return context;
};

