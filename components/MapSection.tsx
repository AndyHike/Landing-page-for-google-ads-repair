import React from 'react';

export const MapSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
            <h3 className="text-sm font-bold text-black uppercase tracking-wide mb-6 text-center">Kde nás najdete</h3>
            <div className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden relative shadow-sm border border-gray-200">
                <iframe 
                    src="https://maps.google.com/maps?q=Bělohorská+209/133,+Praha+6&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kde nás najdete"
                ></iframe>
            </div>
      </div>
    </section>
  );
};