import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface LanguageContextType {
  lang: 'ar' | 'en';
  dir: 'rtl' | 'ltr';
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ar',
  dir: 'rtl',
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const saved = localStorage.getItem('dr-ahmed-lang') as 'ar' | 'en' | null;
    if (saved) setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    localStorage.setItem('dr-ahmed-lang', lang);
  }, [lang, dir]);

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
