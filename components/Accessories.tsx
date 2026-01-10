import React, { useEffect, useState } from 'react';
import { AccessoryItem } from '../types';
import { ApiService } from '../services/api';
import { ShoppingBag } from 'lucide-react';

export const Accessories: React.FC = () => {
  const [products, setProducts] = useState<AccessoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await ApiService.getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center text-gray-400 text-base">
          Načítání produktů...
        </div>
      </section>
    );
  }

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
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-400 hover:shadow-md transition-all duration-300 group">
              <div className="aspect-[4/3] bg-gray-100 mb-6 rounded-lg overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <ShoppingBag size={32} strokeWidth={1} />
                 </div>
                 {/* Full color image */}
                 <img 
                   src={product.imageUrl} 
                   alt={product.name}
                   className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
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