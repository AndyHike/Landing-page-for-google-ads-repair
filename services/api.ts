import { AccessoryItem } from '../types';

// Simulation of a Backend Response
// In production, replace the contents of fetchProducts with:
// const response = await fetch('https://api.yourdomain.com/v1/products');
// return response.json();

const MOCK_DB: AccessoryItem[] = [
  {
    id: 1,
    name: "Tvrzené Sklo Premium",
    category: "Ochrana",
    priceRange: "390 Kč",
    imageUrl: "https://picsum.photos/id/1/400/300",
    description: "Maximální tvrdost, oleofobní vrstva."
  },
  {
    id: 2,
    name: "USB-C Napájecí Adaptér",
    category: "Napájení",
    priceRange: "590 Kč",
    imageUrl: "https://picsum.photos/id/3/400/300",
    description: "20W rychlonabíjení pro iPhone a iPad."
  },
  {
    id: 3,
    name: "Datový kabel",
    category: "Konektivita",
    priceRange: "450 Kč",
    imageUrl: "https://picsum.photos/id/48/400/300",
    description: "Certifikovaný kabel s kevlarovým opletem."
  },
  {
    id: 4,
    name: "Ochranný kryt",
    category: "Kryty",
    priceRange: "490 Kč",
    imageUrl: "https://picsum.photos/id/119/400/300",
    description: "Ultratenký profil, matný povrch."
  }
];

export const ApiService = {
  getProducts: async (): Promise<AccessoryItem[]> => {
    // Simulating network latency
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_DB);
      }, 300);
    });
  },

  // Example of another backend method
  subscribeNewsletter: async (email: string): Promise<boolean> => {
    console.log(`Sending ${email} to backend...`);
    return true;
  }
};