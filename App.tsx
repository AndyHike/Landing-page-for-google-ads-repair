import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { Accessories } from './components/Accessories';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ValueProps />
        <Accessories />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;