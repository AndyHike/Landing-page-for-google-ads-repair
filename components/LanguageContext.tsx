import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'cs' | 'en';

interface Translations {
  [key: string]: {
    cs: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navbar
  accessories: { cs: 'Příslušenství', en: 'Accessories' },
  
  // Hero
  heroTitle: { cs: 'S čím vám můžeme pomoci?', en: 'How can we help you?' },
  laptop: { cs: 'Notebook', en: 'Laptop' },
  visitUs: { cs: 'Navštivte nás v Praze', en: 'Visit us in Prague' },
  address: { cs: 'Bělohorská 209/133, Praha 6 - Břevnov', en: 'Bělohorská 209/133, Prague 6 - Břevnov' },
  hours: { cs: 'Po - Pá: 9:00 - 19:00', en: 'Mon - Fri: 9:00 - 19:00' },
  lookingForward: { cs: 'Těšíme se na Vás!', en: 'We look forward to seeing you!' },
  contact: { cs: 'Kontaktovat', en: 'Contact' },
  reviews: { cs: 'Hodnocení', en: 'Reviews' },
  
  // ValueProps
  speed: { cs: 'Rychlost', en: 'Speed' },
  speedSub: { cs: '2 hodiny', en: '2 hours' },
  quality: { cs: 'Kvalita', en: 'Quality' },
  qualitySub: { cs: 'Premium', en: 'Premium' },
  guarantee: { cs: 'Garance', en: 'Guarantee' },
  guaranteeSub: { cs: '6 měsíců', en: '6 months' },
  
  // Accessories
  sellAccessories: { cs: 'Prodáváme příslušenství', en: 'We sell accessories' },
  storeOnly: { cs: 'Dostupné pouze na prodejně', en: 'Available only in store' },
  
  // Products
  glassName: { cs: 'Tvrzené Sklo Premium', en: 'Premium Tempered Glass' },
  glassCategory: { cs: 'Ochrana', en: 'Protection' },
  adapterName: { cs: 'USB-C Napájecí Adaptér', en: 'USB-C Power Adapter' },
  adapterCategory: { cs: 'Napájení', en: 'Power' },
  cableName: { cs: 'Datový kabel', en: 'Data Cable' },
  cableCategory: { cs: 'Konektivita', en: 'Connectivity' },
  caseName: { cs: 'Ochranný kryt', en: 'Protective Case' },
  caseCategory: { cs: 'Kryty', en: 'Cases' },
  
  // MapSection
  whereToFindUs: { cs: 'Kde nás najdete', en: 'Where to find us' },
  tramStop: { cs: 'hned u zastávky U Kaštanu, tramvaje 22/25', en: 'right next to the U Kaštanu stop, trams 22/25' },
  getDirections: { cs: 'Prokládat trasu', en: 'Get directions' },
  
  // Footer
  contactHeading: { cs: 'Kontakt', en: 'Contact' },
  openingHours: { cs: 'Otevírací doba', en: 'Opening hours' },
  monFri: { cs: 'Pondělí - Pátek', en: 'Monday - Friday' },
  weekends: { cs: 'Víkendy', en: 'Weekends' },
  closed: { cs: 'Zavřeno', en: 'Closed' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    return window.location.pathname.startsWith('/en') ? 'en' : 'cs';
  }
  return 'cs';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    const handlePopState = () => {
      setLanguageState(getInitialLanguage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      const currentHash = window.location.hash;
      const newPath = lang === 'en' ? '/en' : '/';
      window.history.pushState({}, '', newPath + currentHash);
    }
  };

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
