import React from 'react';
import { Clock, CheckCircle2, Star } from 'lucide-react';

export const ValueProps: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        {/* Value Props Grid */}
        <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-5xl mx-auto">
            
            <div className="flex flex-col items-center text-center p-4">
                <div className="mb-4 text-black">
                    <Clock size={28} strokeWidth={1.5} className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-black uppercase tracking-wide">Rychlost</h3>
            </div>

            <div className="flex flex-col items-center text-center border-l border-r border-gray-100 p-4">
                <div className="mb-4 text-black">
                    <Star size={28} strokeWidth={1.5} className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-black uppercase tracking-wide">Kvalita</h3>
            </div>

            <div className="flex flex-col items-center text-center p-4">
                <div className="mb-4 text-black">
                    <CheckCircle2 size={28} strokeWidth={1.5} className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-black uppercase tracking-wide">Garance</h3>
            </div>

        </div>
      </div>
    </section>
  );
};