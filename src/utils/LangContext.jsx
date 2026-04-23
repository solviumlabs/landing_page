// src/utils/LangContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const LangContext = createContext(null);

/**
 * t(field) — helper de traducción:
 *   t('Solvium')               → 'Solvium'   (string plano)
 *   t({ es: 'Hola', en: 'Hi'}) → 'Hola' o 'Hi' según lang
 */
export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('solvium_lang') || 'es');

  useEffect(() => {
    localStorage.setItem('solvium_lang', lang);
  }, [lang]);

  const toggle = () => setLang((l) => (l === 'es' ? 'en' : 'es'));

  const t = (field) => {
    if (typeof field === 'object' && field !== null) {
      return field[lang] ?? field.es ?? '';
    }
    return field ?? '';
  };

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
