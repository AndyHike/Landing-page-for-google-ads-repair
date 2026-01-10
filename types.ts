import React from 'react';

export interface AccessoryItem {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  imageUrl: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}