'use client';

import React from 'react';
import { PhoneCall, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'cs' ? 'en' : 'cs');
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3">
      <div className="container mx-auto px-6 flex justify-between items-center h-10">

        {/* Logo / Brand - Minimalist */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <span className="text-lg font-extrabold tracking-tight text-black uppercase">
            DeviceHelp
          </span>
        </div>

        {/* Navigation - Monochrome */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#accessories" className="text-xs font-semibold text-gray-500 hover:text-black uppercase tracking-wider transition-colors">{t('accessories')}</a>

          <button onClick={toggleLanguage} className="flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-black uppercase tracking-wider transition-colors">
            <Globe size={14} />
            {language.toUpperCase()}
          </button>

          <a href="tel:+420775848259" className="flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-gray-800 transition-colors">
            <PhoneCall size={14} />
            <span>+420 775 848 259</span>
          </a>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleLanguage} className="text-gray-500 hover:text-black p-1 flex items-center gap-1 text-xs font-bold">
            <Globe size={16} />
            {language.toUpperCase()}
          </button>
          <a href="tel:+420775848259" className="text-black p-1">
            <PhoneCall size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};