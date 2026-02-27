module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "translations",
    ()=>translations,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
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
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const getInitialLanguage = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return 'cs';
};
const LanguageProvider = ({ children })=>{
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getInitialLanguage);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handlePopState = ()=>{
            setLanguageState(getInitialLanguage());
        };
        window.addEventListener('popstate', handlePopState);
        return ()=>window.removeEventListener('popstate', handlePopState);
    }, []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    const t = (key)=>{
        if (!translations[key]) {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
        return translations[key][language];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
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
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e56d3def._.js.map