import React from 'react';
import { AccessoryItem } from '../types';
import { ShoppingBag, ImageOff } from 'lucide-react';
import { useLanguage } from './LanguageContext';

// POZOR: Zde jsou cesty k vašim obrázkům.
// Vytvořte složku "images" v kořenovém adresáři a vložte do ní obrázky s těmito názvy.
const getProducts = (t: (key: string) => string): AccessoryItem[] => [
  {
    id: 1,
    name: t('glassName'),
    category: t('glassCategory'),
    priceRange: "390 Kč",
    imageUrl: "/images/glass.jpg", // Pojmenujte svůj soubor: glass.jpg
    description: "Maximální tvrdost, oleofobní vrstva."
  },
  {
    id: 2,
    name: t('adapterName'),
    category: t('adapterCategory'),
    priceRange: "590 Kč",
    imageUrl: "/images/adapter.jpg", // Pojmenujte svůj soubor: adapter.jpg
    description: "20W rychlonabíjení pro iPhone a iPad."
  },
  {
    id: 3,
    name: t('cableName'),
    category: t('cableCategory'),
    priceRange: "450 Kč",
    imageUrl: "/images/cable.jpg", // Pojmenujte svůj soubor: cable.jpg
    description: "Certifikovaný kabel s kevlarovým opletem."
  },
  {
    id: 4,
    name: t('caseName'),
    category: t('caseCategory'),
    priceRange: "490 Kč",
    imageUrl: "/images/case.jpg", // Pojmenujte svůj soubor: case.jpg
    description: "Ultratenký profil, matný povrch."
  }
];

export const Accessories: React.FC = () => {
  const { t } = useLanguage();
  const products = getProducts(t);

  return (
    <section id="accessories" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12 border-b border-gray-200 pb-6 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              {t('sellAccessories')}
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-2">
              {t('storeOnly')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 hover:border-gray-400 hover:shadow-md transition-all duration-300 group">
              <div className="aspect-[4/3] bg-gray-100 mb-4 md:mb-6 rounded-lg overflow-hidden relative">
                {/* Placeholder / Fallback logic if image is missing */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-100 z-0">
                  <ShoppingBag size={24} strokeWidth={1} className="md:w-8 md:h-8" />
                </div>

                {/* Product Image */}
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90 relative z-10"
                  onError={(e) => {
                    // If image fails to load, hide it so the placeholder icon shows
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
              </div>

              <div>
                <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">{product.category}</span>
                <h3 className="font-bold text-sm md:text-lg text-black mt-1 md:mt-2 mb-1 md:mb-2 line-clamp-2 md:truncate">{product.name}</h3>

                <div className="flex items-center justify-between mt-2 md:mt-4">
                  <span className="text-black font-extrabold text-sm md:text-lg">{product.priceRange}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};