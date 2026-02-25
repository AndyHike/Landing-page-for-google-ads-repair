import React from 'react';
import { AccessoryItem } from '../types';
import { ShoppingBag, ImageOff } from 'lucide-react';

// POZOR: Zde jsou cesty k vašim obrázkům.
// Vytvořte složku "images" v kořenovém adresáři a vložte do ní obrázky s těmito názvy.
const PRODUCTS: AccessoryItem[] = [
  {
    id: 1,
    name: "Tvrzené Sklo Premium",
    category: "Ochrana",
    priceRange: "390 Kč",
    imageUrl: "/images/glass.jpg", // Pojmenujte svůj soubor: glass.jpg
    description: "Maximální tvrdost, oleofobní vrstva."
  },
  {
    id: 2,
    name: "USB-C Napájecí Adaptér",
    category: "Napájení",
    priceRange: "590 Kč",
    imageUrl: "/images/adapter.jpg", // Pojmenujte svůj soubor: adapter.jpg
    description: "20W rychlonabíjení pro iPhone a iPad."
  },
  {
    id: 3,
    name: "Datový kabel",
    category: "Konektivita",
    priceRange: "450 Kč",
    imageUrl: "/images/cable.jpg", // Pojmenujte svůj soubor: cable.jpg
    description: "Certifikovaný kabel s kevlarovým opletem."
  },
  {
    id: 4,
    name: "Ochranný kryt",
    category: "Kryty",
    priceRange: "490 Kč",
    imageUrl: "/images/case.jpg", // Pojmenujte svůj soubor: case.jpg
    description: "Ultratenký profil, matný povrch."
  }
];

export const Accessories: React.FC = () => {
  return (
    <section id="accessories" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12 border-b border-gray-200 pb-6 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
             <h2 className="text-2xl md:text-3xl font-bold text-black">
                Prodáváme příslušenství
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-2">
                Dostupné pouze na prodejně
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-400 hover:shadow-md transition-all duration-300 group">
              <div className="aspect-[4/3] bg-gray-100 mb-6 rounded-lg overflow-hidden relative">
                 {/* Placeholder / Fallback logic if image is missing */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-100 z-0">
                    <ShoppingBag size={32} strokeWidth={1} />
                 </div>
                 
                 {/* Product Image */}
                 <img 
                   src={product.imageUrl} 
                   alt={product.name}
                   className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90 relative z-10"
                   onError={(e) => {
                     // If image fails to load, hide it so the placeholder icon shows
                     (e.target as HTMLImageElement).style.opacity = '0';
                   }}
                 />
              </div>
              
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{product.category}</span>
                <h3 className="font-bold text-lg text-black mt-2 mb-2 truncate">{product.name}</h3>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-black font-extrabold text-lg">{product.priceRange}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};