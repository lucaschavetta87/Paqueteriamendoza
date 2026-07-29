(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
// Reemplaza estos valores con los de tu proyecto en el panel de Supabase
// Los encontrás en Settings -> API
const supabaseUrl = 'https://cetezqmkqjqaxjsqemhe.supabase.co';
const supabaseAnonKey = 'sb_publishable_rzifzJbfkb0VWVxiP26rWA_3JZc5Dau';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey); /**
 * Notas para Lucas:
 * * 1. Asegurate de instalar la librería primero con:
 * npm install @supabase/supabase-js
 * * 2. Si estás usando Next.js, te recomiendo usar variables de entorno (.env.local)
 * para que las claves no queden pegadas directamente en el código:
 * * const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
 * const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
 */ 
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WhatsAppChat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsAppChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// --- ICONO OFICIAL DE WHATSAPP (SVG) ---
const IconoWhatsApp = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "30",
        height: "30",
        viewBox: "0 0 448 512",
        fill: "white",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
        }, void 0, false, {
            fileName: "[project]/components/WhatsAppChat.tsx",
            lineNumber: 7,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/WhatsAppChat.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = IconoWhatsApp;
function WhatsAppChat() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const colorWA = "#25D366";
    const azulModerno = "#3b82f6";
    const colorFondoChat = "#0b141a"; // El oscuro real de WhatsApp Web
    const opciones = [
        {
            label: "📦 Presupuestar envio",
            msg: "Hola! Quisiera presupuestar un envio."
        },
        {
            label: "📦 Asesoramiento",
            msg: "Hola! Necesito ascesoramiento para hacer importar/exportar"
        }
    ];
    const irAWhatsApp = (mensaje)=>{
        const nro = "5492616852139";
        const url = `https://wa.me/${nro}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 2000,
            fontFamily: 'sans-serif'
        },
        className: "jsx-6bb75a40eee28242",
        children: [
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '80px',
                    right: '0',
                    width: '320px',
                    backgroundColor: colorFondoChat,
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    overflow: 'hidden',
                    animation: 'fadeInUp 0.3s ease'
                },
                className: "jsx-6bb75a40eee28242",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: '#075e54',
                            padding: '20px',
                            textAlign: 'center'
                        },
                        className: "jsx-6bb75a40eee28242",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '55px',
                                    height: '55px',
                                    backgroundColor: '#fff',
                                    borderRadius: '50%',
                                    margin: '0 auto 12px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1.2rem',
                                    fontWeight: '900',
                                    color: '#075e54',
                                    border: '2px solid #25D366'
                                },
                                className: "jsx-6bb75a40eee28242",
                                children: "CC"
                            }, void 0, false, {
                                fileName: "[project]/components/WhatsAppChat.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem',
                                    color: '#fff'
                                },
                                className: "jsx-6bb75a40eee28242",
                                children: "ANDES BOX"
                            }, void 0, false, {
                                fileName: "[project]/components/WhatsAppChat.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.85rem',
                                    color: '#e0e0e0',
                                    marginTop: '4px'
                                },
                                className: "jsx-6bb75a40eee28242",
                                children: "Logistica & Asesoramiento 🟢"
                            }, void 0, false, {
                                fileName: "[project]/components/WhatsAppChat.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WhatsAppChat.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            backgroundColor: '#111b21'
                        },
                        className: "jsx-6bb75a40eee28242",
                        children: opciones.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>irAWhatsApp(opt.msg),
                                style: {
                                    padding: '14px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    backgroundColor: '#202c33',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontSize: '0.9rem',
                                    transition: '0.2s',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                                },
                                onMouseOver: (e)=>e.currentTarget.style.backgroundColor = '#2a3942',
                                onMouseOut: (e)=>e.currentTarget.style.backgroundColor = '#202c33',
                                className: "jsx-6bb75a40eee28242",
                                children: opt.label
                            }, i, false, {
                                fileName: "[project]/components/WhatsAppChat.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/WhatsAppChat.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhatsAppChat.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                style: {
                    backgroundColor: isOpen ? '#333' : colorWA,
                    width: '65px',
                    height: '65px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
                    cursor: 'pointer',
                    border: 'none',
                    transition: '0.3s',
                    position: 'relative'
                },
                className: "jsx-6bb75a40eee28242" + " " + ((!isOpen ? "pulse-button" : "") || ""),
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: '24px',
                        color: '#fff'
                    },
                    className: "jsx-6bb75a40eee28242",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/components/WhatsAppChat.tsx",
                    lineNumber: 50,
                    columnNumber: 19
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconoWhatsApp, {}, void 0, false, {
                    fileName: "[project]/components/WhatsAppChat.tsx",
                    lineNumber: 50,
                    columnNumber: 80
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/WhatsAppChat.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "6bb75a40eee28242",
                children: '@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.pulse-button.jsx-6bb75a40eee28242:before{content:"";opacity:.7;z-index:-1;background-color:#25d366;border-radius:50%;width:100%;height:100%;animation:2s infinite pulse;position:absolute}@keyframes pulse{0%{opacity:.7;transform:scale(1)}to{opacity:0;transform:scale(1.6)}}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WhatsAppChat.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(WhatsAppChat, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c1 = WhatsAppChat;
var _c, _c1;
__turbopack_context__.k.register(_c, "IconoWhatsApp");
__turbopack_context__.k.register(_c1, "WhatsAppChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Navbar({ setVista, azulModerno }) {
    _s();
    // Estado para controlar la apertura del menú tipo sanguchito
    const [menuAbierto, setMenuAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>{
        setMenuAbierto(!menuAbierto);
    // Acá podrás disparar la acción del menú o abrir tu modal en el futuro
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .public-nav {
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          padding: 0 5%; 
          background-color: rgba(0,0,0,0.6); 
          backdrop-filter: blur(20px); 
          position: fixed; 
          top: 0; 
          left: 0;
          width: 100%;
          z-index: 100; 
          border-bottom: 1px solid rgba(255,255,255,0.08); 
          height: 80px; 
          box-sizing: border-box;
        }
        
        .logo-nav-left { 
          display: flex; 
          align-items: center; 
          cursor: pointer; 
          height: 100%;
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: -0.5px;
          user-select: none;
        }

        .logo-text {
          background: linear-gradient(135deg, #ffffff 40%, ${azulModerno} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .btn-hamburger {
          background-color: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          width: 45px;
          height: 45px;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-hamburger:hover {
          background-color: rgba(255,255,255,0.15);
          border-color: ${azulModerno};
        }
        
        @media (max-width: 480px) {
          .public-nav { height: 70px !important; padding: 0 4% !important; }
          .logo-nav-left { font-size: 1.25rem !important; }
          .btn-hamburger { width: 40px !important; height: 40px !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "public-nav",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo-nav-left",
                        onClick: ()=>setVista('inicio'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "logo-text",
                            children: "ANDESBOX"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-hamburger",
                        onClick: toggleMenu,
                        "aria-label": "Menú principal",
                        children: menuAbierto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 94,
                            columnNumber: 26
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBars"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 94,
                            columnNumber: 50
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "Zb+gSCFxOdAnEnh0lR4JBhhJeMM=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CalculadoraView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalculadoraView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function CalculadoraView({ azulModerno }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '120px 5% 40px',
            textAlign: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "Calculadora de Envíos (Próximamente)"
        }, void 0, false, {
            fileName: "[project]/components/CalculadoraView.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CalculadoraView.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = CalculadoraView;
var _c;
__turbopack_context__.k.register(_c, "CalculadoraView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/InfoSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InfoSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function InfoSidebar({ setMostrarResumen, azulModerno }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: 0,
            right: 0,
            width: '300px',
            height: '100vh',
            backgroundColor: '#111',
            zIndex: 200,
            padding: '20px',
            borderLeft: '1px solid rgba(255,255,255,0.1)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setMostrarResumen(false),
                style: {
                    color: '#fff',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                },
                children: "Cerrar"
            }, void 0, false, {
                fileName: "[project]/components/InfoSidebar.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    marginTop: '20px'
                },
                children: "Dirección de tu Casillero Miami"
            }, void 0, false, {
                fileName: "[project]/components/InfoSidebar.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/InfoSidebar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = InfoSidebar;
var _c;
__turbopack_context__.k.register(_c, "InfoSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WebAndesBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhatsAppChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WhatsAppChat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
// Componentes modulares adaptados a AndesBox
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../components/TrackingView'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CalculadoraView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CalculadoraView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InfoSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/InfoSidebar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function WebAndesBox() {
    _s();
    const azulModerno = "#3b82f6"; // Mantenemos tu estética minimalista y moderna
    // --- ESTADOS DE NAVEGACIÓN ---
    const [vista, setVista] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('inicio');
    // --- ESTADOS DE RASTREO (TRACKING) ---
    const [trackingBusqueda, setTrackingBusqueda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [telBusqueda, setTelBusqueda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [paquete, setPaquete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargandoTracking, setCargandoTracking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorBusqueda, setErrorBusqueda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // --- ESTADOS DE LA CALCULADORA DE ENVÍOS ---
    const [pesoEstimado, setPesoEstimado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [tipoProducto, setTipoProducto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('general');
    const [mostrarResumen, setMostrarResumen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notificacion, setNotificacion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- COTIZADOR EN TIEMPO REAL ---
    const costoEstimado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WebAndesBox.useMemo[costoEstimado]": ()=>{
            // Tarifas de ejemplo por KG según categoría
            const tarifaBasePorKg = 15; // USD por ejemplo
            let multiplicador = 1;
            if (tipoProducto === 'tecnologia') multiplicador = 1.3; // Más recargo por aduana
            if (tipoProducto === 'indumentaria') multiplicador = 1.1;
            return pesoEstimado * tarifaBasePorKg * multiplicador;
        }
    }["WebAndesBox.useMemo[costoEstimado]"], [
        pesoEstimado,
        tipoProducto
    ]);
    // --- BUSCAR PAQUETE EN SUPABASE ---
    const buscarTracking = async ()=>{
        if (!trackingBusqueda || !telBusqueda) {
            return setErrorBusqueda('Por favor, ingresá Nro. de Tracking y Teléfono registrado.');
        }
        setCargandoTracking(true);
        setErrorBusqueda('');
        setPaquete(null);
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('paquetes').select('tracking_id, descripcion, estado_envio, peso_kg, fecha_actualizacion').eq('telefono_cliente', telBusqueda.trim()).eq('tracking_id', trackingBusqueda.trim()).maybeSingle();
            if (error || !data) {
                setErrorBusqueda('No encontramos ningún paquete con esos datos de envío.');
            } else {
                setPaquete(data);
                setNotificacion("Paquete localizado con éxito");
            }
        } catch (err) {
            setErrorBusqueda('Error de conexión con el servidor de AndesBox.');
        }
        setCargandoTracking(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebAndesBox.useEffect": ()=>{
            if (notificacion) {
                const timer = setTimeout({
                    "WebAndesBox.useEffect.timer": ()=>setNotificacion(null)
                }["WebAndesBox.useEffect.timer"], 2500);
                return ({
                    "WebAndesBox.useEffect": ()=>clearTimeout(timer)
                })["WebAndesBox.useEffect"];
            }
        }
    }["WebAndesBox.useEffect"], [
        notificacion
    ]);
    // --- ENVIAR PREALERTA / CONSULTA POR WHATSAPP ---
    const iniciarConsultaWhatsApp = ()=>{
        let mensaje = `Hola AndesBox! Quiero cotizar/prealertar un envío:\n\n`;
        mensaje += `- *Tipo de producto:* ${tipoProducto.toUpperCase()}\n`;
        mensaje += `- *Peso estimado:* ${pesoEstimado} kg\n`;
        mensaje += `- *Costo aproximado del flete:* USD ${costoEstimado.toFixed(2)}\n\n`;
        mensaje += `¿Me podrían indicar los pasos para enviarlo a su depósito en el exterior?`;
        window.open(`https://wa.me/5492614603074?text=${encodeURIComponent(mensaje)}`, '_blank');
    };
    const estiloTab = (idTab)=>{
        const esActivo = tipoProducto === idTab;
        return {
            padding: '10px 24px',
            borderRadius: '30px',
            border: `1px solid ${esActivo ? azulModerno : 'rgba(255,255,255,0.1)'}`,
            backgroundColor: esActivo ? azulModerno : 'rgba(0,0,0,0.4)',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: esActivo ? 'scale(1.05)' : 'scale(1)',
            boxShadow: esActivo ? `0 0 15px ${azulModerno}60` : 'none'
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            minHeight: '100vh',
            backgroundColor: '#000',
            color: '#fff',
            fontFamily: 'sans-serif',
            overflowX: 'hidden',
            /* --- ESTILOS DEL FONDO FIJO (PARALLAX) --- */ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url('/fondo-logistica.jpg')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setVista: setVista,
                        azulModerno: azulModerno
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    vista === 'inicio' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrackingView, {
                        trackingBusqueda: trackingBusqueda,
                        setTrackingBusqueda: setTrackingBusqueda,
                        telBusqueda: telBusqueda,
                        setTelBusqueda: setTelBusqueda,
                        buscarTracking: buscarTracking,
                        cargando: cargandoTracking,
                        errorBusqueda: errorBusqueda,
                        paquete: paquete,
                        azulModerno: azulModerno
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CalculadoraView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        pesoEstimado: pesoEstimado,
                        setPesoEstimado: setPesoEstimado,
                        tipoProducto: tipoProducto,
                        setTipoProducto: setTipoProducto,
                        costoEstimado: costoEstimado,
                        iniciarConsultaWhatsApp: iniciarConsultaWhatsApp,
                        azulModerno: azulModerno,
                        estiloTab: estiloTab
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhatsAppChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        style: {
                            textAlign: 'center',
                            padding: '40px 5%',
                            opacity: 0.4,
                            fontSize: '0.8rem'
                        },
                        children: "© 2026 AndesBox - Envíos Internacionales"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            mostrarResumen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InfoSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                setMostrarResumen: setMostrarResumen,
                azulModerno: azulModerno,
                costoEstimado: costoEstimado,
                iniciarConsultaWhatsApp: iniciarConsultaWhatsApp
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this),
            notificacion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: '95px',
                    right: '25px',
                    backgroundColor: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(15px)',
                    border: `1px solid ${azulModerno}`,
                    borderRadius: '16px',
                    padding: '12px 24px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    zIndex: 5000,
                    boxShadow: `0 10px 25px rgba(59, 130, 246, 0.25)`,
                    fontWeight: '600',
                    fontSize: '0.9rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                        color: "#10b981",
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this),
                    " ",
                    notificacion
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_s(WebAndesBox, "qe3HtV43uPDIO7MY320T8uAOfxc=");
_c = WebAndesBox;
var _c;
__turbopack_context__.k.register(_c, "WebAndesBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0pj0xdn._.js.map