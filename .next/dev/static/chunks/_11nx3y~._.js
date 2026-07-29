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
            label: "🔬 Consultar presupuesto",
            msg: "Hola! Quisiera solicitar un presupuesto para mi equipo."
        },
        {
            label: "📱 Estado de mi reparación",
            msg: "Hola! Quisiera saber el estado de mi orden de servicio."
        },
        {
            label: "📦 Venta de repuestos/equipos",
            msg: "Hola! Estoy interesado en comprar repuestos o equipos."
        }
    ];
    const irAWhatsApp = (mensaje)=>{
        const nro = "5492614603074";
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
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem',
                                    color: '#fff'
                                },
                                className: "jsx-6bb75a40eee28242",
                                children: "ControlCel Mendoza"
                            }, void 0, false, {
                                fileName: "[project]/components/WhatsAppChat.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.85rem',
                                    color: '#e0e0e0',
                                    marginTop: '4px'
                                },
                                className: "jsx-6bb75a40eee28242",
                                children: "Técnicos siempre online 🟢"
                            }, void 0, false, {
                                fileName: "[project]/components/WhatsAppChat.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WhatsAppChat.tsx",
                        lineNumber: 34,
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
                                lineNumber: 42,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/WhatsAppChat.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhatsAppChat.tsx",
                lineNumber: 33,
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
                    lineNumber: 51,
                    columnNumber: 19
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconoWhatsApp, {}, void 0, false, {
                    fileName: "[project]/components/WhatsAppChat.tsx",
                    lineNumber: 51,
                    columnNumber: 80
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/WhatsAppChat.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "6bb75a40eee28242",
                children: '@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.pulse-button.jsx-6bb75a40eee28242:before{content:"";opacity:.7;z-index:-1;background-color:#25d366;border-radius:50%;width:100%;height:100%;animation:2s infinite pulse;position:absolute}@keyframes pulse{0%{opacity:.7;transform:scale(1)}to{opacity:0;transform:scale(1.6)}}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WhatsAppChat.tsx",
        lineNumber: 30,
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
"[project]/components/GoogleReviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoogleReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function GoogleReviews({ azulModerno }) {
    // Datos estáticos reales simulando tus mejores reviews de Google Maps
    const reseñas = [
        {
            autor: "Lucas Pereyra",
            texto: "Excelente atención. Llevé mi celular que no cargaba y me lo solucionaron en un par de horas. Muy profesionales.",
            estrellas: 5,
            fecha: "Hace 2 semanas"
        },
        {
            autor: "Micaela Fernandez",
            texto: "El mejor servicio técnico de Mendoza. Cambié el módulo de mi teléfono, quedó impecable y me dieron garantía escrita.",
            estrellas: 5,
            fecha: "Hace 1 mes"
        },
        {
            autor: "Martín Gómez",
            texto: "Súper recomendados. Muy honestos con el presupuesto de micro-soldadura y revivieron una placa que daban por muerta.",
            estrellas: 5,
            fecha: "Hace 3 días"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            padding: '40px 5%',
            maxWidth: '1200px',
            margin: '0 auto 40px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .contenedor-reseñas {
          display: flex;
          gap: 20px;
          overflow-x: auto; /* Permite scroll horizontal (tipo carrusel) con el dedo en el celu */
          padding: 10px 5px 25px;
          scrollbar-width: none; /* Oculta la barra en Firefox */
        }
        .contenedor-reseñas::-webkit-scrollbar {
          display: none; /* Oculta la barra en Chrome/Safari */
        }
        .card-reseña {
          flex: 0 0 280px; /* Ancho fijo para el efecto carrusel móvil */
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
        }
        @media (min-width: 768px) {
          .contenedor-reseñas {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* Grilla fija en computadoras */
            overflow-x: visible;
          }
          .card-reseña {
            flex: unset;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/GoogleReviews.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
                    fontWeight: '900',
                    marginBottom: '10px',
                    textAlign: 'center'
                },
                children: [
                    "Lo que dicen nuestros ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: azulModerno
                        },
                        children: "Clientes"
                    }, void 0, false, {
                        fileName: "[project]/components/GoogleReviews.tsx",
                        lineNumber: 54,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GoogleReviews.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    textAlign: 'center',
                    opacity: 0.6,
                    fontSize: '0.9rem',
                    marginBottom: '30px'
                },
                children: " ⭐ Calificación 4.9/5 en Google Maps"
            }, void 0, false, {
                fileName: "[project]/components/GoogleReviews.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contenedor-reseñas",
                children: reseñas.map((r, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-reseña",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '4px',
                                            marginBottom: '8px'
                                        },
                                        children: Array.from({
                                            length: r.estrellas
                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {
                                                color: "#eab308",
                                                size: 14
                                            }, i, false, {
                                                fileName: "[project]/components/GoogleReviews.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/GoogleReviews.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: 0,
                                            fontSize: '0.88rem',
                                            color: 'rgba(255,255,255,0.85)',
                                            lineHeight: '1.4',
                                            fontStyle: 'italic'
                                        },
                                        children: [
                                            '"',
                                            r.texto,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GoogleReviews.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GoogleReviews.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderTop: '1px solid rgba(255,255,255,0.05)',
                                    paddingTop: '10px',
                                    marginTop: '5px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '0.85rem',
                                            fontWeight: '700',
                                            color: '#fff'
                                        },
                                        children: r.autor
                                    }, void 0, false, {
                                        fileName: "[project]/components/GoogleReviews.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '0.75rem',
                                            opacity: 0.4
                                        },
                                        children: r.fecha
                                    }, void 0, false, {
                                        fileName: "[project]/components/GoogleReviews.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GoogleReviews.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/GoogleReviews.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/GoogleReviews.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    marginTop: '10px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://share.google/47Jvygn3oINEB1cYw",
                    target: "_blank",
                    rel: "noreferrer",
                    style: {
                        display: 'inline-block',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        color: '#fff',
                        border: '1px solid rgba(255,255,255,0.15)',
                        padding: '10px 20px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        transition: 'all 0.3s'
                    },
                    onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)',
                    onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)',
                    children: "🚀 VER TODAS LAS OPINIONES EN GOOGLE"
                }, void 0, false, {
                    fileName: "[project]/components/GoogleReviews.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/GoogleReviews.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/GoogleReviews.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = GoogleReviews;
var _c;
__turbopack_context__.k.register(_c, "GoogleReviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TrueFocus.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const TrueFocus = ({ sentence = 'True Focus', separator = ' ', manualMode = false, blurAmount = 5, borderColor = 'green', glowColor = 'rgba(0, 255, 0, 0.6)', animationDuration = 0.5, pauseBetweenAnimations = 1 })=>{
    _s();
    const words = sentence.split(separator);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastActiveIndex, setLastActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [focusRect, setFocusRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrueFocus.useEffect": ()=>{
            if (!manualMode) {
                const interval = setInterval({
                    "TrueFocus.useEffect.interval": ()=>{
                        setCurrentIndex({
                            "TrueFocus.useEffect.interval": (prev)=>(prev + 1) % words.length
                        }["TrueFocus.useEffect.interval"]);
                    }
                }["TrueFocus.useEffect.interval"], (animationDuration + pauseBetweenAnimations) * 1000);
                return ({
                    "TrueFocus.useEffect": ()=>clearInterval(interval)
                })["TrueFocus.useEffect"];
            }
        }
    }["TrueFocus.useEffect"], [
        manualMode,
        animationDuration,
        pauseBetweenAnimations,
        words.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrueFocus.useEffect": ()=>{
            if (currentIndex === null || currentIndex === -1) return;
            if (!wordRefs.current[currentIndex] || !containerRef.current) return;
            const parentRect = containerRef.current.getBoundingClientRect();
            const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();
            setFocusRect({
                x: activeRect.left - parentRect.left,
                y: activeRect.top - parentRect.top,
                width: activeRect.width,
                height: activeRect.height
            });
        }
    }["TrueFocus.useEffect"], [
        currentIndex,
        words.length
    ]);
    const handleMouseEnter = (index)=>{
        if (manualMode) {
            setLastActiveIndex(index);
            setCurrentIndex(index);
        }
    };
    const handleMouseLeave = ()=>{
        if (manualMode) {
            setCurrentIndex(lastActiveIndex);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "focus-container",
        ref: containerRef,
        children: [
            words.map((word, index)=>{
                const isActive = index === currentIndex;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    ref: (el)=>wordRefs.current[index] = el,
                    className: `focus-word ${manualMode ? 'manual' : ''} ${isActive && !manualMode ? 'active' : ''}`,
                    style: {
                        filter: manualMode ? isActive ? `blur(0px)` : `blur(${blurAmount}px)` : isActive ? `blur(0px)` : `blur(${blurAmount}px)`,
                        '--border-color': borderColor,
                        '--glow-color': glowColor,
                        transition: `filter ${animationDuration}s ease`
                    },
                    onMouseEnter: ()=>handleMouseEnter(index),
                    onMouseLeave: handleMouseLeave,
                    children: word
                }, index, false, {
                    fileName: "[project]/components/TrueFocus.jsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "focus-frame",
                animate: {
                    x: focusRect.x,
                    y: focusRect.y,
                    width: focusRect.width,
                    height: focusRect.height,
                    opacity: currentIndex >= 0 ? 1 : 0
                },
                transition: {
                    duration: animationDuration
                },
                style: {
                    '--border-color': borderColor,
                    '--glow-color': glowColor
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "corner top-left"
                    }, void 0, false, {
                        fileName: "[project]/components/TrueFocus.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "corner top-right"
                    }, void 0, false, {
                        fileName: "[project]/components/TrueFocus.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "corner bottom-left"
                    }, void 0, false, {
                        fileName: "[project]/components/TrueFocus.jsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "corner bottom-right"
                    }, void 0, false, {
                        fileName: "[project]/components/TrueFocus.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/TrueFocus.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/TrueFocus.jsx",
        lineNumber: 65,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TrueFocus, "pBTTAUAXuvS9jVYuokE75NhEZgk=");
_c = TrueFocus;
const __TURBOPACK__default__export__ = TrueFocus;
var _c;
__turbopack_context__.k.register(_c, "TrueFocus");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TrueFocus$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TrueFocus.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function Navbar({ vista, setVista, setMostrarResumen, azulModerno }) {
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
          
          /* --- Fijo flotante sobre toda la web --- */
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
        }

        .logo-nav-left span, 
        .logo-nav-left div {
          font-size: 1.35rem !important; 
          font-weight: 900 !important;
        }
        
        .nav-right-container { 
          display: flex; 
          align-items: center; 
          justify-content: flex-end;
          gap: 12px;
        }
        
        .btn-nav-publica { background-color: rgba(255,255,255,0.05); color: #fff; border: 1px solid rgba(255,255,255,0.15); padding: 8px 18px; border-radius: 12px; font-weight: 800; font-size: 0.8rem; cursor: pointer; letter-spacing: 1.5px; text-transform: uppercase; transition: all 0.3s ease; display: flex; align-items: center; gap: 8px; }
        .btn-nav-publica:hover { background-color: rgba(255,255,255,0.12); border-color: ${azulModerno}; }
        
        .btn-prealerta-publica { background-color: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 8px 18px; border-radius: 12px; display: flex; align-items: center; gap: 10px; cursor: pointer; font-weight: 800; font-size: 0.8rem; letter-spacing: 1.5px; text-transform: uppercase; transition: all 0.3s; }
        .btn-prealerta-publica:hover { background-color: rgba(255,255,255,0.2); border-color: ${azulModerno}; }
        
        @media (max-width: 480px) {
          .public-nav { height: 70px !important; padding: 0 4% !important; }
          .logo-nav-left span, 
          .logo-nav-left div { 
            font-size: 1.05rem !important; 
          }
          .btn-nav-publica { padding: 7px 12px !important; font-size: 0.75rem !important; letter-spacing: 0.8px !important; }
          .btn-prealerta-publica { padding: 7px 12px !important; font-size: 0.75rem !important; gap: 6px !important; letter-spacing: 0.8px !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "public-nav",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo-nav-left",
                        onClick: ()=>setVista('inicio'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TrueFocus$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sentence: "ANDES BOX",
                            blurAmount: 5,
                            borderColor: azulModerno,
                            glowColor: "rgba(59, 130, 246, 0.4)",
                            animationDuration: 0.5,
                            pauseBetweenAnimations: 1
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-right-container",
                        children: [
                            vista === 'inicio' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-nav-publica",
                                onClick: ()=>setVista('calculadora'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCalculator"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    " COTIZAR ENVÍO"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-nav-publica",
                                onClick: ()=>setVista('inicio'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBoxOpen"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    " SEGUIMIENTO"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-prealerta-publica",
                                onClick: ()=>setMostrarResumen(true),
                                children: "📢 DIRECCIÓN MIAMI"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FloatingSocials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingSocials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function FloatingSocials() {
    const handleMouseEnter = (e)=>{
        e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
    };
    const handleMouseLeave = (e)=>{
        e.currentTarget.style.transform = 'scale(1) translateY(0)';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            bottom: '30px',
            left: '30px',
            zIndex: 3000,
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://instagram.com/control_cell_",
                target: "_blank",
                rel: "noreferrer",
                style: {
                    width: '55px',
                    height: '55px',
                    borderRadius: '50%',
                    backgroundColor: '#E1306C',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
                    transition: '0.3s'
                },
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {}, void 0, false, {
                    fileName: "[project]/components/FloatingSocials.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/FloatingSocials.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://tiktok.com/@control.cell",
                target: "_blank",
                rel: "noreferrer",
                style: {
                    width: '55px',
                    height: '55px',
                    borderRadius: '50%',
                    backgroundColor: '#000',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
                    transition: '0.3s'
                },
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTiktok"], {}, void 0, false, {
                    fileName: "[project]/components/FloatingSocials.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/FloatingSocials.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FloatingSocials.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = FloatingSocials;
var _c;
__turbopack_context__.k.register(_c, "FloatingSocials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CalculadoraView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CatalogoView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CatalogoView({ productosFiltrados, productosPaginados, busquedaTermino, setBusquedaTermino, categoriaActiva, setCategoriaActiva, paginaActual, setPaginaActual, totalPaginas, agregarAlCarrito, cantidadTotal, setMostrarCarrito, azulModerno, estiloTab }) {
    _s();
    // Estado para controlar qué producto se está mirando en grande (Zoom/Modal)
    const [productoSeleccionado, setProductoSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            padding: '100px 4% 100px',
            maxWidth: '1200px',
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .grid-productos {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          gap: 25px;
        }
        .card-producto {
          background-color: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease-in-out;
        }

        /* --- MEJORA PC: Contorno iluminado azul y zoom leve a la imagen al pasar el mouse --- */
        @media (min-width: 481px) {
          .card-producto:hover {
            border-color: ${azulModerno} !important;
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.25);
            transform: translateY(-4px);
          }
          .card-producto:hover .img-catalogo {
            transform: scale(1.06);
          }
        }

        .img-contenedor-mobile {
          width: 100%; 
          height: 180px; 
          overflow: hidden;
          cursor: pointer; /* Indica que se puede clickear/tocar */
        }

        .img-catalogo {
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: transform 0.3s ease-in-out;
        }

        .btn-agregar-carrito {
          display: flex; alignItems: center; justifyContent: center; gap: 6px;
          width: 100%; padding: 12px; border-radius: 12px; border: none;
          background-color: ${azulModerno}; color: #fff; font-weight: bold;
          cursor: pointer; fontSize: 0.8rem;
        }
        .btn-agregar-carrito:active {
          transform: scale(0.95);
          background-color: #2563eb;
        }

        /* ----- MEDIA QUERY: OPTIMIZACIÓN EXCLUSIVA CELULARES ----- */
        @media (max-width: 480px) {
          .grid-productos {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .card-producto {
            border-radius: 16px !important;
          }
          .img-contenedor-mobile {
            height: 140px !important;
          }
          .card-title-mobile {
            font-size: 0.85rem !important;
            height: 36px !important;
            line-height: 1.2 !important;
          }
          .card-precio-mobile {
            font-size: 1.15rem !important;
          }
          .btn-agregar-carrito {
            padding: 10px 4px !important;
            font-size: 0.7rem !important;
            letter-spacing: -0.2px;
          }
        }

        /* Botón flotante para el pulgar */
        .btn-flotante-carrito {
          position: fixed;
          bottom: 30px;
          right: 25px;
          background-color: #25d366;
          color: white;
          border: none;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          z-index: 2900;
          animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes popIn {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/CalculadoraView.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: 'clamp(1.8rem, 6vw, 3rem)',
                    fontWeight: '900',
                    marginBottom: '25px',
                    textAlign: 'center'
                },
                children: [
                    "Catálogo de ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: azulModerno
                        },
                        children: "Artículos"
                    }, void 0, false, {
                        fileName: "[project]/components/CalculadoraView.tsx",
                        lineNumber: 150,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CalculadoraView.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '500px',
                    margin: '0 auto 25px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "🔍 Buscar...",
                    value: busquedaTermino,
                    onChange: (e)=>setBusquedaTermino(e.target.value),
                    style: {
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/CalculadoraView.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CalculadoraView.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    marginBottom: '30px',
                    flexWrap: 'wrap'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCategoriaActiva('todos'),
                        style: estiloTab('todos'),
                        children: "Todos"
                    }, void 0, false, {
                        fileName: "[project]/components/CalculadoraView.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCategoriaActiva('celulares'),
                        style: estiloTab('celulares'),
                        children: "📱 Celulares"
                    }, void 0, false, {
                        fileName: "[project]/components/CalculadoraView.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCategoriaActiva('accesorios'),
                        style: estiloTab('accesorios'),
                        children: "🔌 Accesorios"
                    }, void 0, false, {
                        fileName: "[project]/components/CalculadoraView.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CalculadoraView.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            productosFiltrados.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: '60px 20px',
                    opacity: 0.5,
                    fontSize: '0.95rem',
                    border: '1px dashed rgba(255,255,255,0.15)',
                    borderRadius: '20px'
                },
                children: "No se encontraron artículos."
            }, void 0, false, {
                fileName: "[project]/components/CalculadoraView.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-productos",
                        children: productosPaginados.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-producto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "img-contenedor-mobile",
                                        onClick: ()=>setProductoSeleccionado(p),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: p.img,
                                            alt: p.nombre,
                                            className: "img-catalogo"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CalculadoraView.tsx",
                                            lineNumber: 183,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalculadoraView.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '12px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '10px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "card-title-mobile",
                                                style: {
                                                    margin: 0,
                                                    fontSize: '0.9rem',
                                                    fontWeight: '700',
                                                    height: '38px',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    color: '#fff'
                                                },
                                                children: p.nombre
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalculadoraView.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "card-precio-mobile",
                                                        style: {
                                                            color: azulModerno,
                                                            fontWeight: '800',
                                                            fontSize: '1.25rem'
                                                        },
                                                        children: [
                                                            "$",
                                                            p.precio.toLocaleString('es-AR')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CalculadoraView.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>agregarAlCarrito(p),
                                                        className: "btn-agregar-carrito",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaShoppingCart"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CalculadoraView.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 23
                                                            }, this),
                                                            " AGREGAR AL CARRITO"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CalculadoraView.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CalculadoraView.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalculadoraView.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/components/CalculadoraView.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/CalculadoraView.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    totalPaginas > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px',
                            marginTop: '35px'
                        },
                        children: Array.from({
                            length: totalPaginas
                        }, (_, i)=>i + 1).map((num)=>{
                            const esActiva = paginaActual === num;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPaginaActual(num),
                                style: {
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    border: `1px solid ${esActiva ? azulModerno : 'rgba(255,255,255,0.1)'}`,
                                    backgroundColor: esActiva ? azulModerno : 'rgba(255,255,255,0.05)',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: '0.85rem'
                                },
                                children: num
                            }, num, false, {
                                fileName: "[project]/components/CalculadoraView.tsx",
                                lineNumber: 208,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/CalculadoraView.tsx",
                        lineNumber: 204,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true),
            productoSeleccionado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0,0,0,0.85)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 5000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    boxSizing: 'border-box'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%'
                        },
                        onClick: ()=>setProductoSeleccionado(null)
                    }, void 0, false, {
                        fileName: "[project]/components/CalculadoraView.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            width: '100%',
                            maxWidth: '440px',
                            backgroundColor: '#0f172a',
                            borderRadius: '28px',
                            border: `1px solid ${azulModerno}`,
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                            animation: 'popIn 0.25s ease-out',
                            zIndex: 5001
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setProductoSeleccionado(null),
                                style: {
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    backgroundColor: 'rgba(0,0,0,0.6)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    color: '#fff',
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    zIndex: 10
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/CalculadoraView.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CalculadoraView.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '100%',
                                    height: '300px',
                                    backgroundColor: '#000',
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: productoSeleccionado.img,
                                    alt: productoSeleccionado.nombre,
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/CalculadoraView.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CalculadoraView.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '24px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '15px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '0.75rem',
                                            textTransform: 'uppercase',
                                            color: azulModerno,
                                            fontWeight: '800',
                                            letterSpacing: '1px'
                                        },
                                        children: [
                                            "Categoría: ",
                                            productoSeleccionado.categoria
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalculadoraView.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            margin: 0,
                                            fontSize: '1.2rem',
                                            fontWeight: '800',
                                            color: '#fff',
                                            lineHeight: '1.4'
                                        },
                                        children: productoSeleccionado.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalculadoraView.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginTop: '10px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '1.8rem',
                                                    fontWeight: '900',
                                                    color: '#fff'
                                                },
                                                children: [
                                                    "$",
                                                    productoSeleccionado.precio.toLocaleString('es-AR')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CalculadoraView.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    agregarAlCarrito(productoSeleccionado);
                                                    setProductoSeleccionado(null); // Opcional: cierra al añadir
                                                },
                                                className: "btn-agregar-carrito",
                                                style: {
                                                    width: 'auto',
                                                    padding: '14px 24px',
                                                    fontSize: '0.9rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaShoppingCart"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CalculadoraView.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, this),
                                                    " AGREGAR"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CalculadoraView.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalculadoraView.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalculadoraView.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CalculadoraView.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CalculadoraView.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, this),
            cantidadTotal > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn-flotante-carrito",
                onClick: ()=>setMostrarCarrito(true),
                style: {
                    bottom: '105px',
                    backgroundColor: azulModerno,
                    position: 'fixed'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaShoppingCart"], {
                        size: 22
                    }, void 0, false, {
                        fileName: "[project]/components/CalculadoraView.tsx",
                        lineNumber: 280,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: '2px',
                            right: '2px',
                            backgroundColor: '#ef4444',
                            color: '#fff',
                            fontSize: '0.65rem',
                            fontWeight: '900',
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        },
                        children: cantidadTotal
                    }, void 0, false, {
                        fileName: "[project]/components/CalculadoraView.tsx",
                        lineNumber: 281,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CalculadoraView.tsx",
                lineNumber: 271,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CalculadoraView.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(CatalogoView, "wWlMb6tNAaSGsiy2Nfjv0ERUlwU=");
_c = CatalogoView;
var _c;
__turbopack_context__.k.register(_c, "CatalogoView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/InfoSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const WHATSAPP_NUMERO = '5492614603074';
function CartSidebar({ carrito, setMostrarCarrito, modificarCantidad, totalCarrito, finalizarCompraWhatsApp, azulModerno, metodoEnvio, setMetodoEnvio, direccion, setDireccion }) {
    _s();
    const [nombreCliente, setNombreCliente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [telefonoCliente, setTelefonoCliente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [pasoEntrega, setPasoEntrega] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cargandoPago, setCargandoPago] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // DETECCIÓN AUTOMÁTICA AL VOLVER DE MERCADO PAGO
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSidebar.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const params = new URLSearchParams(window.location.search);
                const status = params.get('status') || params.get('collection_status');
                if (status === 'approved') {
                    // Al ser aprobado, ocultamos este sidebar para dejar ver el modal de CerrarVenta
                    setMostrarCarrito(false);
                } else if (status && status !== 'approved') {
                    // Pago fallido o pendiente → volver al carrito con sidebar abierto
                    setPasoEntrega(false);
                    setMostrarCarrito(true);
                }
            }
        }
    }["CartSidebar.useEffect"], [
        setMostrarCarrito
    ]);
    const handlePagarMercadoPago = async ()=>{
        try {
            setCargandoPago(true);
            // GUARDAR EL CARRITO PARA RECUPERARLO DESPUÉS DEL PAGO
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem('carrito_respaldo', JSON.stringify(carrito));
            }
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('pedidos_web').insert([
                {
                    nombre: "Pendiente de datos",
                    telefono: "Pendiente",
                    productos: carrito,
                    total: totalCarrito,
                    metodo_envio: metodoEnvio,
                    direccion: metodoEnvio === 'envio' ? direccion : 'Retiro en local',
                    estado: 'pendiente'
                }
            ]).select().single();
            const res = await fetch('/api/pagos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    items: carrito,
                    idPedido: data?.id || 0
                })
            });
            const { init_point } = await res.json();
            if (init_point) {
                window.location.href = init_point;
            } else {
                alert("No se pudo generar el enlace de pago.");
                setCargandoPago(false);
            }
        } catch (err) {
            alert("Error al conectar con Mercado Pago.");
            setCargandoPago(false);
        }
    };
    const handleConsultarWhatsApp = ()=>{
        if (carrito.length === 0) return;
        const listaProductos = carrito.map((item)=>`• ${item.producto.nombre} (x${item.cantidad}) - $${(item.producto.precio * item.cantidad).toLocaleString('es-AR')}`).join('\n');
        const mensaje = `Hola! Quiero consultar disponibilidad de estos productos:\n\n${listaProductos}\n\n*Total estimado: $${totalCarrito.toLocaleString('es-AR')}*`;
        window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`, '_blank');
    };
    const handleEnviarWhatsAppPostPago = ()=>{
        if (nombreCliente.trim() === '' || telefonoCliente.trim() === '') {
            alert('Por favor, ingresá tu Nombre y Teléfono para la entrega.');
            return;
        }
        if (metodoEnvio === 'envio' && direccion.trim() === '') {
            alert('Por favor, ingresá tu Dirección para el envío.');
            return;
        }
        const detalleProductos = carrito.map((item)=>`${item.producto.nombre} (x${item.cantidad})`).join(', ');
        const entregaStr = metodoEnvio === 'envio' ? `Envío a domicilio: ${direccion}` : 'Retiro en local';
        const mensaje = `Hola ya pague ${detalleProductos}, coordinamos entrega?\n\n*Datos de entrega:*\n- Nombre: ${nombreCliente}\n- Teléfono: ${telefonoCliente}\n- Método: ${entregaStr}`;
        window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`, '_blank');
    };
    // ─── Estilos reutilizables ───────────────────────────────────────────────
    const inputStyle = {
        width: '100%',
        padding: '12px 14px',
        borderRadius: '12px',
        backgroundColor: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        color: '#fff',
        outline: 'none',
        boxSizing: 'border-box',
        fontSize: '0.9rem',
        transition: 'border-color 0.2s'
    };
    const deliveryBtnStyle = (active)=>({
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.85rem',
            transition: 'all 0.2s',
            border: active ? `2px solid ${azulModerno}` : '1px solid rgba(255,255,255,0.1)',
            backgroundColor: active ? 'rgba(59,130,246,0.12)' : 'rgba(255,255,255,0.02)',
            color: active ? '#fff' : '#94a3b8'
        });
    const totalItems = carrito.reduce((acc, item)=>acc + item.cantidad, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 4000,
            display: 'flex',
            justifyContent: 'flex-end'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.65)',
                    backdropFilter: 'blur(6px)',
                    cursor: 'pointer'
                },
                onClick: ()=>setMostrarCarrito(false)
            }, void 0, false, {
                fileName: "[project]/components/InfoSidebar.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    width: '100%',
                    maxWidth: '420px',
                    height: '100%',
                    backgroundColor: '#0f172a',
                    borderLeft: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '-10px 0 40px rgba(0,0,0,0.6)',
                    zIndex: 4001
                },
                children: pasoEntrega ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '30px 22px',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                        gap: '20px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                                    color: "#25d366",
                                    size: 48,
                                    style: {
                                        marginBottom: '12px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        margin: '0 0 8px',
                                        fontSize: '1.3rem',
                                        fontWeight: 800,
                                        color: '#fff'
                                    },
                                    children: "¡Pago procesado!"
                                }, void 0, false, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        fontSize: '0.88rem',
                                        color: '#94a3b8',
                                        lineHeight: 1.5
                                    },
                                    children: "Completá los datos para coordinar la entrega directamente por WhatsApp."
                                }, void 0, false, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/InfoSidebar.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '0.85rem',
                                        fontWeight: 700,
                                        color: '#cbd5e1',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    },
                                    children: "Forma de entrega"
                                }, void 0, false, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '10px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMetodoEnvio('retiro'),
                                            style: deliveryBtnStyle(metodoEnvio === 'retiro'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStore"], {
                                                    color: metodoEnvio === 'retiro' ? azulModerno : '#64748b'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this),
                                                " Retiro en local"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMetodoEnvio('envio'),
                                            style: deliveryBtnStyle(metodoEnvio === 'envio'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMotorcycle"], {
                                                    color: metodoEnvio === 'envio' ? azulModerno : '#64748b'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                " A domicilio"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/InfoSidebar.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        metodoEnvio === 'envio' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '0.85rem',
                                        fontWeight: 700,
                                        color: '#cbd5e1',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    },
                                    children: "Dirección"
                                }, void 0, false, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 192,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Calle, número, localidad",
                                    value: direccion,
                                    onChange: (e)=>setDireccion(e.target.value),
                                    style: inputStyle
                                }, void 0, false, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/InfoSidebar.tsx",
                            lineNumber: 191,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '0.85rem',
                                        fontWeight: 700,
                                        color: '#cbd5e1',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    },
                                    children: "Tus datos"
                                }, void 0, false, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Nombre y Apellido",
                                    value: nombreCliente,
                                    onChange: (e)=>setNombreCliente(e.target.value),
                                    style: inputStyle
                                }, void 0, false, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "tel",
                                    placeholder: "Número de teléfono",
                                    value: telefonoCliente,
                                    onChange: (e)=>setTelefonoCliente(e.target.value),
                                    style: inputStyle
                                }, void 0, false, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/InfoSidebar.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleEnviarWhatsAppPostPago,
                            style: {
                                width: '100%',
                                backgroundColor: '#25d366',
                                color: '#fff',
                                padding: '16px',
                                borderRadius: '14px',
                                border: 'none',
                                fontWeight: 800,
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                letterSpacing: '0.03em',
                                transition: 'opacity 0.2s'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this),
                                " Confirmar y coordinar entrega"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/InfoSidebar.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/InfoSidebar.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '18px 20px',
                                borderBottom: '1px solid rgba(255,255,255,0.08)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaShoppingCart"], {
                                            color: azulModerno,
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: 0,
                                                fontSize: '1.1rem',
                                                fontWeight: 800,
                                                color: '#fff'
                                            },
                                            children: "Mi pedido"
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this),
                                        totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                backgroundColor: azulModerno,
                                                color: '#fff',
                                                borderRadius: '20px',
                                                padding: '2px 9px',
                                                fontSize: '0.78rem',
                                                fontWeight: 700
                                            },
                                            children: [
                                                totalItems,
                                                " ",
                                                totalItems === 1 ? 'item' : 'items'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 230,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 226,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMostrarCarrito(false),
                                    style: {
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        color: '#64748b',
                                        cursor: 'pointer',
                                        transition: 'color 0.2s',
                                        lineHeight: 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoSidebar.tsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/InfoSidebar.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                overflowY: 'auto',
                                padding: '16px 20px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px'
                            },
                            children: carrito.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    marginTop: '60px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBoxOpen"], {
                                        size: 36,
                                        color: "#334155"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoSidebar.tsx",
                                        lineNumber: 246,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: 0,
                                            color: '#475569',
                                            fontSize: '0.9rem'
                                        },
                                        children: "El carrito está vacío"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoSidebar.tsx",
                                        lineNumber: 247,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoSidebar.tsx",
                                lineNumber: 245,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    carrito.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '14px',
                                                backgroundColor: 'rgba(255,255,255,0.03)',
                                                padding: '12px',
                                                borderRadius: '14px',
                                                border: '1px solid rgba(255,255,255,0.06)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.producto.img,
                                                    alt: item.producto.nombre,
                                                    style: {
                                                        width: '62px',
                                                        height: '62px',
                                                        objectFit: 'cover',
                                                        borderRadius: '10px',
                                                        flexShrink: 0
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'space-between',
                                                        minWidth: 0
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '0.88rem',
                                                                fontWeight: 600,
                                                                color: '#e2e8f0',
                                                                lineHeight: 1.3,
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap'
                                                            },
                                                            children: item.producto.nombre
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '0.78rem',
                                                                color: '#64748b'
                                                            },
                                                            children: [
                                                                "$",
                                                                item.producto.precio.toLocaleString('es-AR'),
                                                                " c/u"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                                marginTop: '8px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: azulModerno,
                                                                        fontWeight: 700,
                                                                        fontSize: '0.95rem'
                                                                    },
                                                                    children: [
                                                                        "$",
                                                                        (item.producto.precio * item.cantidad).toLocaleString('es-AR')
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '10px',
                                                                        backgroundColor: 'rgba(0,0,0,0.3)',
                                                                        borderRadius: '8px',
                                                                        padding: '5px 8px'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>modificarCantidad(item.producto.id, -1),
                                                                            style: {
                                                                                backgroundColor: 'transparent',
                                                                                border: 'none',
                                                                                color: '#94a3b8',
                                                                                cursor: 'pointer',
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                padding: 0
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMinus"], {
                                                                                size: 10
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                                lineNumber: 279,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                                            lineNumber: 278,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '0.85rem',
                                                                                minWidth: '16px',
                                                                                textAlign: 'center',
                                                                                color: '#fff',
                                                                                fontWeight: 600
                                                                            },
                                                                            children: item.cantidad
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                                            lineNumber: 281,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>modificarCantidad(item.producto.id, 1),
                                                                            style: {
                                                                                backgroundColor: 'transparent',
                                                                                border: 'none',
                                                                                color: '#94a3b8',
                                                                                cursor: 'pointer',
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                padding: 0
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {
                                                                                size: 10
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                                                lineNumber: 283,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                                            lineNumber: 282,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/InfoSidebar.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/InfoSidebar.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, item.producto.id, true, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 252,
                                            columnNumber: 21
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '4px',
                                            padding: '14px 16px',
                                            borderRadius: '14px',
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '8px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    fontSize: '0.85rem',
                                                    color: '#64748b'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Subtotal (",
                                                            totalItems,
                                                            " ",
                                                            totalItems === 1 ? 'producto' : 'productos',
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "$",
                                                            totalCarrito.toLocaleString('es-AR')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                lineNumber: 297,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: '1px',
                                                    backgroundColor: 'rgba(255,255,255,0.06)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                lineNumber: 301,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    fontSize: '1.05rem',
                                                    fontWeight: 800,
                                                    color: '#fff'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: azulModerno
                                                        },
                                                        children: [
                                                            "$",
                                                            totalCarrito.toLocaleString('es-AR')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/InfoSidebar.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/InfoSidebar.tsx",
                                                lineNumber: 302,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/InfoSidebar.tsx",
                                        lineNumber: 292,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/components/InfoSidebar.tsx",
                            lineNumber: 243,
                            columnNumber: 13
                        }, this),
                        carrito.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '16px 20px 22px',
                                borderTop: '1px solid rgba(255,255,255,0.08)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '10px',
                                        alignItems: 'flex-start',
                                        backgroundColor: 'rgba(59,130,246,0.08)',
                                        border: '1px solid rgba(59,130,246,0.2)',
                                        borderRadius: '12px',
                                        padding: '12px 14px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInfoCircle"], {
                                            color: azulModerno,
                                            size: 14,
                                            style: {
                                                marginTop: '2px',
                                                flexShrink: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 321,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: 0,
                                                fontSize: '0.8rem',
                                                color: '#94a3b8',
                                                lineHeight: 1.5
                                            },
                                            children: "Luego de completar el pago, ingresá tus datos para coordinar el envío o retiro del pedido."
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 322,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 316,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePagarMercadoPago,
                                    disabled: cargandoPago,
                                    style: {
                                        width: '100%',
                                        backgroundColor: '#f0dd0d',
                                        color: '#0a0a0a',
                                        padding: '15px',
                                        borderRadius: '13px',
                                        border: 'none',
                                        fontWeight: 800,
                                        fontSize: '0.95rem',
                                        cursor: cargandoPago ? 'not-allowed' : 'pointer',
                                        opacity: cargandoPago ? 0.6 : 1,
                                        transition: 'all 0.25s',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '10px',
                                        letterSpacing: '0.02em'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCreditCard"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 340,
                                            columnNumber: 19
                                        }, this),
                                        cargandoPago ? 'Redireccionando...' : 'Pagar con MercadoPago'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 328,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                height: '1px',
                                                backgroundColor: 'rgba(255,255,255,0.07)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 346,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '0.75rem',
                                                color: '#475569',
                                                whiteSpace: 'nowrap'
                                            },
                                            children: "o si preferís"
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 347,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                height: '1px',
                                                backgroundColor: 'rgba(255,255,255,0.07)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 348,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 345,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleConsultarWhatsApp,
                                    style: {
                                        width: '100%',
                                        backgroundColor: 'transparent',
                                        color: '#25d366',
                                        padding: '14px',
                                        borderRadius: '13px',
                                        border: '1px solid rgba(37,211,102,0.35)',
                                        fontWeight: 700,
                                        fontSize: '0.9rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '9px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoSidebar.tsx",
                                            lineNumber: 363,
                                            columnNumber: 19
                                        }, this),
                                        " Consultar disponibilidad"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/InfoSidebar.tsx",
                                    lineNumber: 352,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/InfoSidebar.tsx",
                            lineNumber: 313,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/InfoSidebar.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/InfoSidebar.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_s(CartSidebar, "YwW/6yy1tIj/pormrc3Cvq4+ddY=");
_c = CartSidebar;
var _c;
__turbopack_context__.k.register(_c, "CartSidebar");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GoogleReviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GoogleReviews.tsx [app-client] (ecmascript)");
// Componentes modulares adaptados a AndesBox
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FloatingSocials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FloatingSocials.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../components/TrackingView'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CalculadoraView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CalculadoraView.tsx [app-client] (ecmascript)"); // Reemplaza a CatalogoView (Calculadora/Cotizador)
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InfoSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/InfoSidebar.tsx [app-client] (ecmascript)"); // Reemplaza a CartSidebar (Resumen/Prealerta)
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
    // --- COTIZADOR EN TIEMPO REAL (Usa useMemo igual que tus filtros anteriores) ---
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
            // Modificá 'paquetes' por el nombre real de tu tabla en Supabase
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
            overflowX: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        vista: vista,
                        setVista: setVista,
                        setMostrarResumen: setMostrarResumen,
                        azulModerno: azulModerno
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FloatingSocials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 136,
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
                        lineNumber: 140,
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
                        lineNumber: 152,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GoogleReviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        azulModerno: azulModerno
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: '40px 5%',
                            maxWidth: '1200px',
                            margin: '0 auto',
                            marginBottom: '60px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '35px',
                                padding: 'clamp(20px, 5vw, 40px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '30px',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                                                fontWeight: '900'
                                            },
                                            children: [
                                                "Retirá en ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: azulModerno
                                                    },
                                                    children: "Mendoza"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 99
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: '10px 0'
                                            },
                                            children: "📍 Oficina Las Heras / Centro, Mendoza"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                opacity: 0.8
                                            },
                                            children: "⏰ Lun a Vie: 09:00 a 18:00"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '300px',
                                        borderRadius: '25px',
                                        overflow: 'hidden',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        src: "https://maps.google.com/maps?q=Mendoza,%20Argentina&t=&z=13&ie=UTF8&iwloc=&output=embed",
                                        width: "100%",
                                        height: "100%",
                                        style: {
                                            border: 0
                                        },
                                        allowFullScreen: true,
                                        loading: "lazy",
                                        title: "Ubicación de AndesBox"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhatsAppChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 180,
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
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            mostrarResumen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InfoSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                setMostrarResumen: setMostrarResumen,
                azulModerno: azulModerno,
                costoEstimado: costoEstimado,
                iniciarConsultaWhatsApp: iniciarConsultaWhatsApp
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 186,
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
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    " ",
                    notificacion
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 123,
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

//# sourceMappingURL=_11nx3y~._.js.map