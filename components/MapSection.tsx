import React from 'react';
import { useLanguage } from './LanguageContext';
import { Navigation } from 'lucide-react';

export const MapSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
            <h3 className="text-sm font-bold text-black uppercase tracking-wide mb-2 text-center">{t('whereToFindUs')}</h3>
            <p className="text-center text-gray-500 mb-6">{t('tramStop')}</p>
            
            <div className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden relative shadow-sm border border-gray-200 mb-6">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5120.30400669985!2d14.3559892!3d50.0834409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b954f059a39d5%3A0x274774180cfc2ab9!2sDeviceHelp%20%E2%80%93%20servis%20mobiln%C3%ADch%20telefon%C5%AF%20v%C5%A1ech%20zna%C4%8Dek%20Praha%206!5e0!3m2!1suk!2scz!4v1772026493115!5m2!1suk!2scz"
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kde nás najdete"
                ></iframe>
            </div>

            <div className="flex justify-center">
                <a 
                    href="https://maps.app.goo.gl/Se82NtCpEbUTFPZe7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors shadow-md"
                >
                    <Navigation size={18} />
                    {t('getDirections')}
                </a>
            </div>
      </div>
    </section>
  );
};