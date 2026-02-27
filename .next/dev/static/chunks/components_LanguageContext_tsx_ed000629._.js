(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "translations",
    ()=>translations,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const translations = {
    // Navbar
    accessories: {
        cs: 'Příslušenství',
        en: 'Accessories'
    },
    // Hero
    heroTitle: {
        cs: 'S čím vám můžeme pomoci?',
        en: 'How can we help you?'
    },
    laptop: {
        cs: 'Notebook',
        en: 'Laptop'
    },
    visitUs: {
        cs: 'Navštivte nás v Praze',
        en: 'Visit us in Prague'
    },
    address: {
        cs: 'Bělohorská 209/133, Praha 6 - Břevnov',
        en: 'Bělohorská 209/133, Prague 6 - Břevnov'
    },
    hours: {
        cs: 'Po - Pá: 9:00 - 19:00',
        en: 'Mon - Fri: 9:00 - 19:00'
    },
    lookingForward: {
        cs: 'Těšíme se na Vás!',
        en: 'We look forward to seeing you!'
    },
    contact: {
        cs: 'Kontaktovat',
        en: 'Contact'
    },
    reviews: {
        cs: 'Hodnocení',
        en: 'Reviews'
    },
    // ValueProps
    speed: {
        cs: 'Rychlost',
        en: 'Speed'
    },
    speedSub: {
        cs: '2 hodiny',
        en: '2 hours'
    },
    quality: {
        cs: 'Kvalita',
        en: 'Quality'
    },
    qualitySub: {
        cs: 'Premium',
        en: 'Premium'
    },
    guarantee: {
        cs: 'Garance',
        en: 'Guarantee'
    },
    guaranteeSub: {
        cs: '6 měsíců',
        en: '6 months'
    },
    // Accessories
    sellAccessories: {
        cs: 'Prodáváme příslušenství',
        en: 'We sell accessories'
    },
    storeOnly: {
        cs: 'Dostupné pouze na prodejně',
        en: 'Available only in store'
    },
    // Products
    glassName: {
        cs: 'Tvrzené Sklo Premium',
        en: 'Premium Tempered Glass'
    },
    glassCategory: {
        cs: 'Ochrana',
        en: 'Protection'
    },
    adapterName: {
        cs: 'USB-C Napájecí Adaptér',
        en: 'USB-C Power Adapter'
    },
    adapterCategory: {
        cs: 'Napájení',
        en: 'Power'
    },
    cableName: {
        cs: 'Datový kabel',
        en: 'Data Cable'
    },
    cableCategory: {
        cs: 'Konektivita',
        en: 'Connectivity'
    },
    caseName: {
        cs: 'Ochranný kryt',
        en: 'Protective Case'
    },
    caseCategory: {
        cs: 'Kryty',
        en: 'Cases'
    },
    // MapSection
    whereToFindUs: {
        cs: 'Kde nás najdete',
        en: 'Where to find us'
    },
    tramStop: {
        cs: 'hned u zastávky U Kaštanu, tramvaje 22/25',
        en: 'right next to the U Kaštanu stop, trams 22/25'
    },
    getDirections: {
        cs: 'Prokládat trasu',
        en: 'Get directions'
    },
    // Footer
    contactHeading: {
        cs: 'Kontakt',
        en: 'Contact'
    },
    openingHours: {
        cs: 'Otevírací doba',
        en: 'Opening hours'
    },
    monFri: {
        cs: 'Pondělí - Pátek',
        en: 'Monday - Friday'
    },
    weekends: {
        cs: 'Víkendy',
        en: 'Weekends'
    },
    closed: {
        cs: 'Zavřeno',
        en: 'Closed'
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const getInitialLanguage = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return window.location.pathname.startsWith('/en') ? 'en' : 'cs';
    }
    //TURBOPACK unreachable
    ;
};
const LanguageProvider = ({ children })=>{
    _s();
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getInitialLanguage);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            const handlePopState = {
                "LanguageProvider.useEffect.handlePopState": ()=>{
                    setLanguageState(getInitialLanguage());
                }
            }["LanguageProvider.useEffect.handlePopState"];
            window.addEventListener('popstate', handlePopState);
            return ({
                "LanguageProvider.useEffect": ()=>window.removeEventListener('popstate', handlePopState)
            })["LanguageProvider.useEffect"];
        }
    }["LanguageProvider.useEffect"], []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        if ("TURBOPACK compile-time truthy", 1) {
            const currentHash = window.location.hash;
            const newPath = lang === 'en' ? '/en' : '/';
            window.history.pushState({}, '', newPath + currentHash);
        }
    };
    const t = (key)=>{
        if (!translations[key]) {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
        return translations[key][language];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/LanguageContext.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageProvider, "O/IyUGyLvIcr4kILVTq6htcXhdc=");
_c = LanguageProvider;
const useLanguage = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_LanguageContext_tsx_ed000629._.js.map