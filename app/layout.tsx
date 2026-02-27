import React from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import './globals.css';

export const metadata = {
    title: 'Prémiová Péče o Zařízení',
    description: 'Prémiová péče o vaše zařízení. Profesionální servis a opravy mobilních telefonů a tabletů v Praze na Břevnově. Rychle, kvalitně a spolehlivě.',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Prémiová Péče o Zařízení | Servis a Opravy Těšnov',
        description: 'Profesionální servis a opravy mobilních telefonů a tabletů v Praze na Břevnově. Rychle, kvalitně a spolehlivě.',
        url: 'https://mobil-brevnov.cz/',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="cs" style={{ scrollBehavior: 'auto' }} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body className="bg-white text-slate-900 antialiased font-['Manrope'] min-h-screen flex flex-col" suppressHydrationWarning>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
