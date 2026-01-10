import React from 'react';
import { PhoneCall } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3">
      <div className="container mx-auto px-6 flex justify-between items-center h-10">
        
        {/* Logo / Brand - Minimalist */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <span className="text-lg font-extrabold tracking-tight text-black uppercase">
            DeviceHelp
          </span>
        </div>
        
        {/* Navigation - Monochrome */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#accessories" className="text-xs font-semibold text-gray-500 hover:text-black uppercase tracking-wider transition-colors">Příslušenství</a>
          
          <a href="tel:+420775848259" className="flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-gray-800 transition-colors">
            <PhoneCall size={14} />
            <span>+420 775 848 259</span>
          </a>
        </div>

        {/* Mobile Phone Icon */}
        <div className="md:hidden">
            <a href="tel:+420775848259" className="text-black p-1">
                <PhoneCall size={20} />
            </a>
        </div>
      </div>
    </nav>
  );
};