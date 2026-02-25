import React from 'react';
import { useLanguage } from './LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 max-w-4xl mx-auto mb-16 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-black text-lg mb-6 uppercase tracking-wider">{t('contactHeading')}</h3>
            
            <a 
                href="https://maps.app.goo.gl/LWYohc4a456BwwDaA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 text-base mb-2 hover:text-black hover:underline transition-colors"
            >
                {t('address')}
            </a>

            <a href="tel:+420775848259" className="text-black text-xl font-extrabold mb-2 hover:opacity-70 transition-opacity">+420 775 848 259</a>
            <a href="mailto:info@devicehelp.cz" className="text-gray-500 text-base hover:text-black transition-colors">info@devicehelp.cz</a>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold text-black text-lg mb-6 uppercase tracking-wider">{t('openingHours')}</h3>
            <ul className="text-gray-600 text-base space-y-3 w-full max-w-[200px]">
              <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span>{t('monFri')}</span>
                <span className="text-black font-bold">9:00 - 19:00</span>
              </li>
              <li className="flex justify-between items-center text-gray-400">
                <span>{t('weekends')}</span>
                <span className="font-medium">{t('closed')}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex justify-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} DeviceHelp</p>
        </div>
      </div>
    </footer>
  );
};