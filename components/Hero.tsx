import React from 'react';
import { ArrowRight, Smartphone, Laptop, MapPin, Clock, Phone, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  
  const handleSelection = (deviceType: 'iphone' | 'android' | 'laptop') => {
    let targetUrl = '';
    
    if (deviceType === 'iphone') targetUrl = 'https://www.devicehelp.cz/cs/series/iphone';
    if (deviceType === 'android') targetUrl = 'https://www.devicehelp.cz/cs/contact'; 
    if (deviceType === 'laptop') targetUrl = 'https://www.devicehelp.cz/cs/contact';
      
    window.location.href = targetUrl;
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-10 md:mb-14 tracking-tight">
              S čím vám můžeme pomoci?
            </h1>
            
            {/* Cards - Device Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left mb-16">
                {/* iPhone Button */}
                <button 
                    onClick={() => handleSelection('iphone')}
                    className="flex flex-row md:flex-col lg:flex-row items-center justify-between md:justify-center lg:justify-between p-5 md:p-8 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
                >
                    <div className="flex items-center gap-4 md:gap-6">
                        <Smartphone size={24} strokeWidth={1.5} className="md:w-10 md:h-10 text-gray-600 group-hover:text-black transition-colors" />
                        <span className="font-bold text-base md:text-xl text-black">iPhone</span>
                    </div>
                    <div className="md:mt-6 lg:mt-0">
                        <ArrowRight size={20} className="md:w-6 md:h-6 text-gray-300 group-hover:text-black transition-colors" />
                    </div>
                </button>

                {/* Android Button */}
                <button 
                    onClick={() => handleSelection('android')}
                    className="flex flex-row md:flex-col lg:flex-row items-center justify-between md:justify-center lg:justify-between p-5 md:p-8 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
                >
                    <div className="flex items-center gap-4 md:gap-6">
                        <Smartphone size={24} strokeWidth={1.5} className="md:w-10 md:h-10 text-gray-600 group-hover:text-black transition-colors" />
                        <span className="font-bold text-base md:text-xl text-black">Android</span>
                    </div>
                    <div className="md:mt-6 lg:mt-0">
                        <ArrowRight size={20} className="md:w-6 md:h-6 text-gray-300 group-hover:text-black transition-colors" />
                    </div>
                </button>

                {/* Notebook Button */}
                <button 
                    onClick={() => handleSelection('laptop')}
                    className="flex flex-row md:flex-col lg:flex-row items-center justify-between md:justify-center lg:justify-between p-5 md:p-8 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
                >
                    <div className="flex items-center gap-4 md:gap-6">
                        <Laptop size={24} strokeWidth={1.5} className="md:w-10 md:h-10 text-gray-600 group-hover:text-black transition-colors" />
                        <span className="font-bold text-base md:text-xl text-black">Notebook</span>
                    </div>
                    <div className="md:mt-6 lg:mt-0">
                         <ArrowRight size={20} className="md:w-6 md:h-6 text-gray-300 group-hover:text-black transition-colors" />
                    </div>
                </button>
            </div>

            {/* Contact Info Block - Centered and refined */}
            <div className="max-w-4xl mx-auto border-t border-gray-100 pt-10 md:pt-12">
                 <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 text-center">Navštivte nás v Praze</p>
                 
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-base md:text-lg font-medium text-slate-800 mb-8">
                    
                    {/* Address - Clickable */}
                    <a 
                        href="https://maps.app.goo.gl/LWYohc4a456BwwDaA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group hover:opacity-80 transition-opacity text-center md:text-left"
                    >
                        <div className="bg-gray-50 p-2 md:p-2.5 rounded-full text-black group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                            <MapPin size={18} className="md:w-5 md:h-5" />
                        </div>
                        <span className="border-b border-transparent group-hover:border-black transition-colors">
                            Bělohorská 209/133, Praha 6 - Břevnov
                        </span>
                    </a>
                    
                    {/* Phone */}
                    <span className="flex items-center gap-3 group cursor-default">
                        <div className="bg-gray-50 p-2 md:p-2.5 rounded-full text-black group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                            <Phone size={18} className="md:w-5 md:h-5" />
                        </div>
                        <a href="tel:+420775848259" className="hover:text-black font-bold whitespace-nowrap">+420 775 848 259</a>
                    </span>

                    {/* Hours */}
                    <span className="flex items-center gap-3 group cursor-default">
                         <div className="bg-gray-50 p-2 md:p-2.5 rounded-full text-black group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                            <Clock size={18} className="md:w-5 md:h-5" />
                        </div>
                        Po - Pá: 9:00 - 19:00
                    </span>
                 </div>

                 <div className="flex flex-col items-center gap-3">
                    <p className="text-base md:text-lg text-gray-500 italic">Těšíme se na Vás!</p>
                    <div className="flex gap-6 text-sm md:text-base font-bold mt-2">
                        <a 
                            href="https://www.devicehelp.cz/cs/contact" 
                            className="border-b-2 border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors"
                        >
                            Kontaktovat
                        </a>
                        <span className="text-gray-300">•</span>
                        <a 
                            href="https://share.google/HhIiD6rQifQgv0Cd7"
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 cursor-pointer hover:opacity-70"
                        >
                             <span>Hodnocení</span>
                             <div className="flex text-amber-400">
                                <Star size={14} fill="currentColor" className="md:w-4 md:h-4" />
                                <Star size={14} fill="currentColor" className="md:w-4 md:h-4" />
                                <Star size={14} fill="currentColor" className="md:w-4 md:h-4" />
                                <Star size={14} fill="currentColor" className="md:w-4 md:h-4" />
                                <Star size={14} fill="currentColor" className="md:w-4 md:h-4" />
                             </div>
                        </a>
                    </div>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};