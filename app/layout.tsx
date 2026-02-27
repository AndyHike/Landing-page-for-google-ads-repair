import React from 'react';
import Script from 'next/script';
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

                {/* 1. Google Analytics Consent Mode Defaults */}
                <Script id="google-consent" strategy="beforeInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}

                        // 1. ЦЕЙ БЛОК МАЄ ЙТИ ПЕРЕД 'js' ТА 'config'
                        // Він жорстко встановлює відмову (denied) для всіх сервісів
                        gtag('consent', 'default', {
                            'ad_storage': 'denied',
                            'ad_user_data': 'denied',
                            'ad_personalization': 'denied',
                            'analytics_storage': 'denied'
                        });

                        // 2. Додатковий захист даних (анонімізація)
                        gtag('set', 'ads_data_redaction', true);

                        gtag('js', new Date());

                        // 3. Конфігурація вашого тегу
                        gtag('config', 'GTM-PZF7N5BQ', {
                            'anonymize_ip': true, // Анонімізація IP
                            'allow_ad_personalization_signals': false // Повна заборона персоналізації
                        });
                    `}
                </Script>

                {/* 2. Google Tag Manager */}
                <Script id="google-tag-manager" strategy="beforeInteractive">
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-PZF7N5BQ');
                    `}
                </Script>
            </head>
            <body className="bg-white text-slate-900 antialiased font-['Manrope'] min-h-screen flex flex-col" suppressHydrationWarning>
                {/* 3. Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-PZF7N5BQ"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>

                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
