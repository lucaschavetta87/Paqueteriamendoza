(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Aurora.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Aurora
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/math/Color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                   \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;
function Aurora(props) {
    _s();
    const { colorStops = [
        '#5227FF',
        '#7cff67',
        '#5227FF'
    ], amplitude = 1.0, blend = 0.5 } = props;
    const propsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props);
    propsRef.current = props;
    const ctnDom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Aurora.useEffect": ()=>{
            const ctn = ctnDom.current;
            if (!ctn) return;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                alpha: true,
                premultipliedAlpha: true,
                antialias: true
            });
            const gl = renderer.gl;
            gl.clearColor(0, 0, 0, 0);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.canvas.style.backgroundColor = 'transparent';
            let program;
            function resize() {
                if (!ctn) return;
                const width = ctn.offsetWidth;
                const height = ctn.offsetHeight;
                renderer.setSize(width, height);
                if (program) {
                    program.uniforms.uResolution.value = [
                        width,
                        height
                    ];
                }
            }
            window.addEventListener('resize', resize);
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            if (geometry.attributes.uv) {
                delete geometry.attributes.uv;
            }
            const colorStopsArray = colorStops.map({
                "Aurora.useEffect.colorStopsArray": (hex)=>{
                    const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](hex);
                    return [
                        c.r,
                        c.g,
                        c.b
                    ];
                }
            }["Aurora.useEffect.colorStopsArray"]);
            program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex: VERT,
                fragment: FRAG,
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uAmplitude: {
                        value: amplitude
                    },
                    uColorStops: {
                        value: colorStopsArray
                    },
                    uResolution: {
                        value: [
                            ctn.offsetWidth,
                            ctn.offsetHeight
                        ]
                    },
                    uBlend: {
                        value: blend
                    }
                }
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            ctn.appendChild(gl.canvas);
            let animateId = 0;
            const update = {
                "Aurora.useEffect.update": (t)=>{
                    animateId = requestAnimationFrame(update);
                    const { time = t * 0.01, speed = 1.0 } = propsRef.current;
                    program.uniforms.uTime.value = time * speed * 0.1;
                    program.uniforms.uAmplitude.value = propsRef.current.amplitude ?? 1.0;
                    program.uniforms.uBlend.value = propsRef.current.blend ?? blend;
                    const stops = propsRef.current.colorStops ?? colorStops;
                    program.uniforms.uColorStops.value = stops.map({
                        "Aurora.useEffect.update": (hex)=>{
                            const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](hex);
                            return [
                                c.r,
                                c.g,
                                c.b
                            ];
                        }
                    }["Aurora.useEffect.update"]);
                    renderer.render({
                        scene: mesh
                    });
                }
            }["Aurora.useEffect.update"];
            animateId = requestAnimationFrame(update);
            resize();
            return ({
                "Aurora.useEffect": ()=>{
                    cancelAnimationFrame(animateId);
                    window.removeEventListener('resize', resize);
                    if (ctn && gl.canvas.parentNode === ctn) {
                        ctn.removeChild(gl.canvas);
                    }
                    gl.getExtension('WEBGL_lose_context')?.loseContext();
                }
            })["Aurora.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Aurora.useEffect"], [
        amplitude
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ctnDom,
        className: "aurora-container"
    }, void 0, false, {
        fileName: "[project]/components/Aurora.jsx",
        lineNumber: 201,
        columnNumber: 10
    }, this);
}
_s(Aurora, "H3hEXxgRK/TFJBuH98B1fA30BZI=");
_c = Aurora;
var _c;
__turbopack_context__.k.register(_c, "Aurora");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
function Navbar({ vista, setVista, cantidadTotal, setMostrarCarrito, azulModerno }) {
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
          
          /* --- CAMBIO CLAVE: Volverlo fijo flotante sobre toda la web --- */
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
        }
        
        .btn-nav-publica { background-color: rgba(255,255,255,0.05); color: #fff; border: 1px solid rgba(255,255,255,0.15); padding: 8px 18px; border-radius: 12px; font-weight: 800; font-size: 0.8rem; cursor: pointer; letter-spacing: 1.5px; text-transform: uppercase; transition: all 0.3s ease; }
        .btn-nav-publica:hover { background-color: rgba(255,255,255,0.12); }
        
        .btn-carrito-publico { background-color: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 10px 20px; border-radius: 12px; display: flex; align-items: center; gap: 10px; cursor: pointer; transition: all 0.3s; position: relative; }
        .btn-carrito-publico:hover { background-color: rgba(255,255,255,0.2); }
        
        @media (max-width: 480px) {
          .public-nav { height: 70px !important; padding: 0 4% !important; }
          .logo-nav-left span, 
          .logo-nav-left div { 
            font-size: 1.05rem !important; 
          }
          .btn-nav-publica { padding: 7px 12px !important; font-size: 0.75rem !important; letter-spacing: 0.8px !important; }
          .btn-carrito-publico { padding: 7px 12px !important; font-size: 0.75rem !important; gap: 6px !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "public-nav",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo-nav-left",
                        onClick: ()=>setVista('inicio'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TrueFocus$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sentence: "CONTROL CEL",
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
                        children: vista === 'inicio' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-nav-publica",
                            onClick: ()=>setVista('catalogo'),
                            children: "📱 CATÁLOGO"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-carrito-publico",
                            onClick: ()=>setMostrarCarrito(true),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaShoppingCart"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontWeight: 'bold'
                                    },
                                    children: "Carrito"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                cantidadTotal > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        backgroundColor: '#ef4444',
                                        color: '#fff',
                                        fontSize: '0.7rem',
                                        fontWeight: 'bold',
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.5)'
                                    },
                                    children: cantidadTotal
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
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
"[project]/components/BlurText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const buildKeyframes = (from, steps)=>{
    const keys = new Set([
        ...Object.keys(from),
        ...steps.flatMap((s)=>Object.keys(s))
    ]);
    const keyframes = {};
    keys.forEach((k)=>{
        keyframes[k] = [
            from[k],
            ...steps.map((s)=>s[k])
        ];
    });
    return keyframes;
};
const BlurText = ({ text = '', delay = 200, className = '', animateBy = 'words', direction = 'top', threshold = 0.1, rootMargin = '0px', animationFrom, animationTo, easing = (t)=>t, onAnimationComplete, stepDuration = 0.35 })=>{
    _s();
    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [trigger, setTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // <--- NUEVO: Gatillo para repetir
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlurText.useEffect": ()=>{
            if (!ref.current) return;
            const observer = new IntersectionObserver({
                "BlurText.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                    }
                }
            }["BlurText.useEffect"], {
                threshold,
                rootMargin
            });
            observer.observe(ref.current);
            return ({
                "BlurText.useEffect": ()=>observer.disconnect()
            })["BlurText.useEffect"];
        }
    }["BlurText.useEffect"], [
        threshold,
        rootMargin
    ]);
    // --- LÓGICA PARA REPETIR CADA 5 SEGUNDOS ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlurText.useEffect": ()=>{
            if (inView) {
                const interval = setInterval({
                    "BlurText.useEffect.interval": ()=>{
                        setInView(false); // Apagamos
                        setTimeout({
                            "BlurText.useEffect.interval": ()=>{
                                setInView(true); // Prendemos al instante para que reinicie
                                setTrigger({
                                    "BlurText.useEffect.interval": (prev)=>prev + 1
                                }["BlurText.useEffect.interval"]); // Forzamos el render
                            }
                        }["BlurText.useEffect.interval"], 50);
                    }
                }["BlurText.useEffect.interval"], 5000); // 5 segundos
                return ({
                    "BlurText.useEffect": ()=>clearInterval(interval)
                })["BlurText.useEffect"];
            }
        }
    }["BlurText.useEffect"], [
        inView
    ]);
    const defaultFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BlurText.useMemo[defaultFrom]": ()=>direction === 'top' ? {
                filter: 'blur(10px)',
                opacity: 0,
                y: -50
            } : {
                filter: 'blur(10px)',
                opacity: 0,
                y: 50
            }
    }["BlurText.useMemo[defaultFrom]"], [
        direction
    ]);
    const defaultTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BlurText.useMemo[defaultTo]": ()=>[
                {
                    filter: 'blur(5px)',
                    opacity: 0.5,
                    y: direction === 'top' ? 5 : -5
                },
                {
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0
                }
            ]
    }["BlurText.useMemo[defaultTo]"], [
        direction
    ]);
    const fromSnapshot = animationFrom ?? defaultFrom;
    const toSnapshots = animationTo ?? defaultTo;
    const stepCount = toSnapshots.length + 1;
    const totalDuration = stepDuration * (stepCount - 1);
    const times = Array.from({
        length: stepCount
    }, (_, i)=>stepCount === 1 ? 0 : i / (stepCount - 1));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        style: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        children: elements.map((segment, index)=>{
            const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: fromSnapshot,
                animate: inView ? animateKeyframes : fromSnapshot,
                transition: {
                    duration: totalDuration,
                    times,
                    delay: index * delay / 1000,
                    ease: easing
                },
                style: {
                    display: 'inline-block',
                    willChange: 'transform, filter, opacity'
                },
                children: [
                    segment === ' ' ? '\u00A0' : segment,
                    animateBy === 'words' && index < elements.length - 1 && '\u00A0'
                ]
            }, `${trigger}-${index}`, true, {
                fileName: "[project]/components/BlurText.tsx",
                lineNumber: 105,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/components/BlurText.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BlurText, "zNMQFvZHOglSOkHBA3aeOJqec74=");
_c = BlurText;
const __TURBOPACK__default__export__ = BlurText;
var _c;
__turbopack_context__.k.register(_c, "BlurText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ElectricBorder.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const ElectricBorder = ({ children, color = '#5227FF', speed = 1, chaos = 0.12, borderRadius = 24, className, style })=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastFrameTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Noise functions
    const random = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ElectricBorder.useCallback[random]": (x)=>{
            return Math.sin(x * 12.9898) * 43758.5453 % 1;
        }
    }["ElectricBorder.useCallback[random]"], []);
    const noise2D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ElectricBorder.useCallback[noise2D]": (x, y)=>{
            const i = Math.floor(x);
            const j = Math.floor(y);
            const fx = x - i;
            const fy = y - j;
            const a = random(i + j * 57);
            const b = random(i + 1 + j * 57);
            const c = random(i + (j + 1) * 57);
            const d = random(i + 1 + (j + 1) * 57);
            const ux = fx * fx * (3.0 - 2.0 * fx);
            const uy = fy * fy * (3.0 - 2.0 * fy);
            return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
        }
    }["ElectricBorder.useCallback[noise2D]"], [
        random
    ]);
    const octavedNoise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ElectricBorder.useCallback[octavedNoise]": (x, octaves, lacunarity, gain, baseAmplitude, baseFrequency, time, seed, baseFlatness)=>{
            let y = 0;
            let amplitude = baseAmplitude;
            let frequency = baseFrequency;
            for(let i = 0; i < octaves; i++){
                let octaveAmplitude = amplitude;
                if (i === 0) {
                    octaveAmplitude *= baseFlatness;
                }
                y += octaveAmplitude * noise2D(frequency * x + seed * 100, time * frequency * 0.3);
                frequency *= lacunarity;
                amplitude *= gain;
            }
            return y;
        }
    }["ElectricBorder.useCallback[octavedNoise]"], [
        noise2D
    ]);
    const getCornerPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ElectricBorder.useCallback[getCornerPoint]": (centerX, centerY, radius, startAngle, arcLength, progress)=>{
            const angle = startAngle + progress * arcLength;
            return {
                x: centerX + radius * Math.cos(angle),
                y: centerY + radius * Math.sin(angle)
            };
        }
    }["ElectricBorder.useCallback[getCornerPoint]"], []);
    const getRoundedRectPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ElectricBorder.useCallback[getRoundedRectPoint]": (t, left, top, width, height, radius)=>{
            const straightWidth = width - 2 * radius;
            const straightHeight = height - 2 * radius;
            const cornerArc = Math.PI * radius / 2;
            const totalPerimeter = 2 * straightWidth + 2 * straightHeight + 4 * cornerArc;
            const distance = t * totalPerimeter;
            let accumulated = 0;
            // Top edge
            if (distance <= accumulated + straightWidth) {
                const progress = (distance - accumulated) / straightWidth;
                return {
                    x: left + radius + progress * straightWidth,
                    y: top
                };
            }
            accumulated += straightWidth;
            // Top-right corner
            if (distance <= accumulated + cornerArc) {
                const progress = (distance - accumulated) / cornerArc;
                return getCornerPoint(left + width - radius, top + radius, radius, -Math.PI / 2, Math.PI / 2, progress);
            }
            accumulated += cornerArc;
            // Right edge
            if (distance <= accumulated + straightHeight) {
                const progress = (distance - accumulated) / straightHeight;
                return {
                    x: left + width,
                    y: top + radius + progress * straightHeight
                };
            }
            accumulated += straightHeight;
            // Bottom-right corner
            if (distance <= accumulated + cornerArc) {
                const progress = (distance - accumulated) / cornerArc;
                return getCornerPoint(left + width - radius, top + height - radius, radius, 0, Math.PI / 2, progress);
            }
            accumulated += cornerArc;
            // Bottom edge
            if (distance <= accumulated + straightWidth) {
                const progress = (distance - accumulated) / straightWidth;
                return {
                    x: left + width - radius - progress * straightWidth,
                    y: top + height
                };
            }
            accumulated += straightWidth;
            // Bottom-left corner
            if (distance <= accumulated + cornerArc) {
                const progress = (distance - accumulated) / cornerArc;
                return getCornerPoint(left + radius, top + height - radius, radius, Math.PI / 2, Math.PI / 2, progress);
            }
            accumulated += cornerArc;
            // Left edge
            if (distance <= accumulated + straightHeight) {
                const progress = (distance - accumulated) / straightHeight;
                return {
                    x: left,
                    y: top + height - radius - progress * straightHeight
                };
            }
            accumulated += straightHeight;
            // Top-left corner
            const progress = (distance - accumulated) / cornerArc;
            return getCornerPoint(left + radius, top + radius, radius, Math.PI, Math.PI / 2, progress);
        }
    }["ElectricBorder.useCallback[getRoundedRectPoint]"], [
        getCornerPoint
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ElectricBorder.useEffect": ()=>{
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Configuration
            const octaves = 10;
            const lacunarity = 1.6;
            const gain = 0.7;
            const amplitude = chaos;
            const frequency = 10;
            const baseFlatness = 0;
            const displacement = 60;
            const borderOffset = 60;
            const updateSize = {
                "ElectricBorder.useEffect.updateSize": ()=>{
                    const rect = container.getBoundingClientRect();
                    const width = rect.width + borderOffset * 2;
                    const height = rect.height + borderOffset * 2;
                    // Use device pixel ratio for sharp rendering
                    const dpr = Math.min(window.devicePixelRatio || 1, 2);
                    canvas.width = width * dpr;
                    canvas.height = height * dpr;
                    canvas.style.width = `${width}px`;
                    canvas.style.height = `${height}px`;
                    ctx.scale(dpr, dpr);
                    return {
                        width,
                        height
                    };
                }
            }["ElectricBorder.useEffect.updateSize"];
            let { width, height } = updateSize();
            const drawElectricBorder = {
                "ElectricBorder.useEffect.drawElectricBorder": (currentTime)=>{
                    if (!canvas || !ctx) return;
                    const deltaTime = (currentTime - lastFrameTimeRef.current) / 1000;
                    timeRef.current += deltaTime * speed;
                    lastFrameTimeRef.current = currentTime;
                    // Clear canvas
                    const dpr = Math.min(window.devicePixelRatio || 1, 2);
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.scale(dpr, dpr);
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 1;
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    const scale = displacement;
                    const left = borderOffset;
                    const top = borderOffset;
                    const borderWidth = width - 2 * borderOffset;
                    const borderHeight = height - 2 * borderOffset;
                    const maxRadius = Math.min(borderWidth, borderHeight) / 2;
                    const radius = Math.min(borderRadius, maxRadius);
                    const approximatePerimeter = 2 * (borderWidth + borderHeight) + 2 * Math.PI * radius;
                    const sampleCount = Math.floor(approximatePerimeter / 2);
                    ctx.beginPath();
                    for(let i = 0; i <= sampleCount; i++){
                        const progress = i / sampleCount;
                        const point = getRoundedRectPoint(progress, left, top, borderWidth, borderHeight, radius);
                        const xNoise = octavedNoise(progress * 8, octaves, lacunarity, gain, amplitude, frequency, timeRef.current, 0, baseFlatness);
                        const yNoise = octavedNoise(progress * 8, octaves, lacunarity, gain, amplitude, frequency, timeRef.current, 1, baseFlatness);
                        const displacedX = point.x + xNoise * scale;
                        const displacedY = point.y + yNoise * scale;
                        if (i === 0) {
                            ctx.moveTo(displacedX, displacedY);
                        } else {
                            ctx.lineTo(displacedX, displacedY);
                        }
                    }
                    ctx.closePath();
                    ctx.stroke();
                    animationRef.current = requestAnimationFrame(drawElectricBorder);
                }
            }["ElectricBorder.useEffect.drawElectricBorder"];
            // Handle resize
            const resizeObserver = new ResizeObserver({
                "ElectricBorder.useEffect": ()=>{
                    const newSize = updateSize();
                    width = newSize.width;
                    height = newSize.height;
                }
            }["ElectricBorder.useEffect"]);
            resizeObserver.observe(container);
            // Start animation
            animationRef.current = requestAnimationFrame(drawElectricBorder);
            return ({
                "ElectricBorder.useEffect": ()=>{
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                    resizeObserver.disconnect();
                }
            })["ElectricBorder.useEffect"];
        }
    }["ElectricBorder.useEffect"], [
        color,
        speed,
        chaos,
        borderRadius,
        octavedNoise,
        getRoundedRectPoint
    ]);
    const vars = {
        '--electric-border-color': color,
        borderRadius: borderRadius
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `electric-border ${className ?? ''}`,
        style: {
            ...vars,
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "eb-canvas-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "eb-canvas"
                }, void 0, false, {
                    fileName: "[project]/components/ElectricBorder.jsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ElectricBorder.jsx",
                lineNumber: 277,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "eb-layers",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eb-glow-1"
                    }, void 0, false, {
                        fileName: "[project]/components/ElectricBorder.jsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eb-glow-2"
                    }, void 0, false, {
                        fileName: "[project]/components/ElectricBorder.jsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eb-background-glow"
                    }, void 0, false, {
                        fileName: "[project]/components/ElectricBorder.jsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ElectricBorder.jsx",
                lineNumber: 280,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "eb-content",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ElectricBorder.jsx",
                lineNumber: 285,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ElectricBorder.jsx",
        lineNumber: 276,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ElectricBorder, "ml2LwaogvCYxmsNx6KRbh6+BVSE=");
_c = ElectricBorder;
const __TURBOPACK__default__export__ = ElectricBorder;
var _c;
__turbopack_context__.k.register(_c, "ElectricBorder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ServiceItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ElectricBorder$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ElectricBorder.jsx [app-client] (ecmascript)"); // Ajustá la ruta según dónde esté tu componente original
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ServiceItem({ title, icon, desc }) {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        style: {
            transform: isHovered ? 'scale(1.03) translateY(-5px)' : 'scale(1) translateY(0)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            height: '100%'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ElectricBorder$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            color: "#3b82f6",
            speed: 1,
            chaos: 0.12,
            style: {
                borderRadius: '32px'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.03)',
                    padding: '30px',
                    borderRadius: '30px',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    boxShadow: isHovered ? '0 20px 40px rgba(59, 130, 246, 0.15)' : 'none',
                    transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '2.5rem',
                            backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.25)' : 'rgba(59, 130, 246, 0.15)',
                            width: '70px',
                            height: '70px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '18px',
                            margin: '0 auto 10px',
                            transform: isHovered ? 'rotate(5deg) scale(1.05)' : 'none',
                            transition: 'all 0.3s ease'
                        },
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/components/ServiceItem.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontWeight: '800',
                            fontSize: '1.2rem',
                            margin: 0,
                            color: '#fff'
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ServiceItem.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '0.9rem',
                            opacity: isHovered ? 0.9 : 0.7,
                            lineHeight: '1.5',
                            margin: 0,
                            transition: 'opacity 0.3s'
                        },
                        children: desc
                    }, void 0, false, {
                        fileName: "[project]/components/ServiceItem.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ServiceItem.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ServiceItem.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ServiceItem.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(ServiceItem, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = ServiceItem;
var _c;
__turbopack_context__.k.register(_c, "ServiceItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/InicioView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InicioView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlurText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BlurText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServiceItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ServiceItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function InicioView({ ordenBusqueda, setOrdenBusqueda, telBusqueda, setTelBusqueda, buscarEstado, cargando, errorBusqueda, equipo, azulModerno }) {
    _s();
    // Estado para las FAQs (guarda el índice de la pregunta abierta, o null)
    const [faqAbierta, setFaqAbierta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Estado para el selector de fallas comunes
    const [fallaSeleccionada, setFallaSeleccionada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const toggleFaq = (index)=>{
        setFaqAbierta(faqAbierta === index ? null : index);
    };
    const listaFaqs = [
        {
            q: "¿Cuánto demoran en reparar mi equipo?",
            a: "La mayoría de los cambios de pantalla, baterías y pines de carga se realizan en el día (de 2 a 4 horas) según disponibilidad de stock. Las reparaciones de micro-soldadura en placa base pueden demorar entre 24 y 72 horas."
        },
        {
            q: "¿Las reparaciones tienen garantía?",
            a: "Sí, absolutamente. Todos nuestros trabajos técnicos y componentes instalados cuentan con garantía escrita oficial de ControlCel. La misma cubre cualquier defecto de fabricación del repuesto."
        },
        {
            q: "¿Qué métodos de pago reciben en el local?",
            a: "Aceptamos efectivo, transferencias bancarias, Mercado Pago y tarjetas de crédito o débito. Consultanos por WhatsApp por promociones vigentes o cuotas."
        },
        {
            q: "¿Tengo que sacar turno previo para llevarlo?",
            a: "No es necesario. Atendemos por orden de llegada en nuestro local de Salta 1161, Mendoza, de Lunes a Viernes en horario corrido de 08:30 a 19:00 hs."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '100px 5% 40px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 'clamp(2.2rem, 8vw, 4.5rem)',
                            fontWeight: '900',
                            letterSpacing: '-2px',
                            lineHeight: '1.1',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlurText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                text: "Servicio Técnico",
                                delay: 150,
                                animateBy: "words",
                                direction: "top"
                            }, void 0, false, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlurText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    text: "Especializado",
                                    delay: 400,
                                    direction: "bottom",
                                    animationFrom: {
                                        filter: 'blur(10px)',
                                        opacity: 0,
                                        y: 50,
                                        color: "#ffffff"
                                    },
                                    animationTo: [
                                        {
                                            filter: 'blur(5px)',
                                            opacity: 0.5,
                                            y: -5
                                        },
                                        {
                                            filter: 'blur(0px)',
                                            opacity: 1,
                                            y: 0,
                                            color: azulModerno
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/InicioView.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InicioView.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '1.1rem',
                            fontWeight: '800',
                            letterSpacing: '4px',
                            marginTop: '60px',
                            marginBottom: '40px',
                            opacity: 0.8,
                            color: '#fff',
                            textTransform: 'uppercase'
                        },
                        children: "NUESTROS SERVICIOS"
                    }, void 0, false, {
                        fileName: "[project]/components/InicioView.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '30px',
                            width: '100%',
                            maxWidth: '1300px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServiceItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "Micro-soldadura",
                                icon: "🔬",
                                desc: "Reparaciones de alta complejidad en placa base bajo microscopio."
                            }, void 0, false, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServiceItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "Cambiamos tu Pantalla",
                                icon: "📱",
                                desc: "Pantallas originales con sellado de estanqueidad y garantía."
                            }, void 0, false, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServiceItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "Centros de Carga",
                                icon: "🔌",
                                desc: "Reemplazo de puertos con soldadura industrial de precisión."
                            }, void 0, false, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServiceItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "Baterías",
                                icon: "🔋",
                                desc: "Cambios certificados para recuperar la autonomía real de tu equipo."
                            }, void 0, false, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServiceItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "Software",
                                icon: "⚙️",
                                desc: "Flasheos, optimización de sistema y recuperación de datos."
                            }, void 0, false, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServiceItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "PC Service",
                                icon: "💻",
                                desc: "Mantenimiento de notebooks y PCs de escritorio, instalación de programas y optimización."
                            }, void 0, false, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InicioView.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InicioView.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '40px',
                    padding: '40px 5%',
                    maxWidth: '1200px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            maxWidth: '700px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '35px',
                            padding: 'clamp(20px, 5vw, 40px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxSizing: 'border-box'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                                    fontWeight: '900',
                                    marginBottom: '20px',
                                    textAlign: 'center'
                                },
                                children: [
                                    "Presupuesto ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: azulModerno
                                        },
                                        children: "Online"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InicioView.tsx",
                                        lineNumber: 79,
                                        columnNumber: 140
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                action: "https://formspree.io/f/xdayokaj",
                                method: "POST",
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '15px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                            gap: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "nombre",
                                                placeholder: "Tu Nombre",
                                                required: true,
                                                style: {
                                                    padding: '15px',
                                                    borderRadius: '15px',
                                                    border: 'none',
                                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                                    color: '#fff',
                                                    outline: 'none',
                                                    width: '100%',
                                                    boxSizing: 'border-box'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/InicioView.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "telefono",
                                                inputMode: "tel",
                                                placeholder: "WhatsApp",
                                                required: true,
                                                style: {
                                                    padding: '15px',
                                                    borderRadius: '15px',
                                                    border: 'none',
                                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                                    color: '#fff',
                                                    outline: 'none',
                                                    width: '100%',
                                                    boxSizing: 'border-box'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/InicioView.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/InicioView.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "tipo_falla",
                                        value: fallaSeleccionada,
                                        onChange: (e)=>setFallaSeleccionada(e.target.value),
                                        required: true,
                                        style: {
                                            padding: '15px',
                                            borderRadius: '15px',
                                            border: 'none',
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            color: '#fff',
                                            outline: 'none',
                                            width: '100%',
                                            boxSizing: 'border-box',
                                            cursor: 'pointer'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                style: {
                                                    background: '#0f172a'
                                                },
                                                children: "¿Qué le pasa a tu equipo? (Seleccioná una opción)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InicioView.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Pantalla rota / sin imagen",
                                                style: {
                                                    background: '#0f172a'
                                                },
                                                children: "📱 Pantalla rota / No da imagen"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InicioView.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "No carga / Pin roto",
                                                style: {
                                                    background: '#0f172a'
                                                },
                                                children: "🔌 No carga / Pin de carga roto"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InicioView.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Batería dura poco / hinchada",
                                                style: {
                                                    background: '#0f172a'
                                                },
                                                children: "🔋 La batería dura poco o se apaga solo"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InicioView.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Se mojó / No prende",
                                                style: {
                                                    background: '#0f172a'
                                                },
                                                children: "💧 Se mojó / No enciende"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InicioView.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Falla de Software o cuenta",
                                                style: {
                                                    background: '#0f172a'
                                                },
                                                children: "⚙️ Falla de sistema / Limpieza de Software"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InicioView.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Mantenimiento de PC/Notebook",
                                                style: {
                                                    background: '#0f172a'
                                                },
                                                children: "💻 Service / Optimización de PC o Notebook"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InicioView.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "otra",
                                                style: {
                                                    background: '#0f172a'
                                                },
                                                children: "✏️ Otra falla (Describir abajo)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InicioView.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/InicioView.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    (fallaSeleccionada === 'otra' || fallaSeleccionada !== '') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "falla_detalle",
                                        placeholder: fallaSeleccionada === 'otra' ? "Describí detalladamente la falla acá..." : "Algún detalle extra? (Modelo del equipo, marca, etc. Opcional)",
                                        required: fallaSeleccionada === 'otra',
                                        rows: 3,
                                        style: {
                                            padding: '15px',
                                            borderRadius: '15px',
                                            border: 'none',
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            color: '#fff',
                                            resize: 'none',
                                            outline: 'none',
                                            width: '100%',
                                            boxSizing: 'border-box',
                                            animation: 'fadeIn 0.2s ease-out'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/InicioView.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        style: {
                                            width: '100%',
                                            backgroundColor: azulModerno,
                                            color: '#fff',
                                            padding: '18px',
                                            borderRadius: '15px',
                                            fontWeight: '900',
                                            cursor: 'pointer',
                                            border: 'none',
                                            fontSize: '1rem',
                                            transition: 'all 0.3s'
                                        },
                                        children: "SOLICITAR PRESUPUESTO"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InicioView.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InicioView.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            maxWidth: '700px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '35px',
                            padding: 'clamp(20px, 5vw, 40px)',
                            border: `1px solid rgba(255, 255, 255, 0.1)`,
                            boxSizing: 'border-box'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                                    fontWeight: '900',
                                    marginBottom: '20px',
                                    textAlign: 'center'
                                },
                                children: [
                                    "Seguí tu ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: azulModerno
                                        },
                                        children: "Reparación"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InicioView.tsx",
                                        lineNumber: 121,
                                        columnNumber: 137
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '15px',
                                    marginBottom: '15px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        inputMode: "numeric",
                                        pattern: "[0-9]*",
                                        placeholder: "Nro de Orden",
                                        value: ordenBusqueda,
                                        onChange: (e)=>setOrdenBusqueda(e.target.value),
                                        style: {
                                            padding: '15px',
                                            borderRadius: '15px',
                                            border: 'none',
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            color: '#fff',
                                            outline: 'none',
                                            width: '100%',
                                            boxSizing: 'border-box'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/InicioView.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        inputMode: "tel",
                                        placeholder: "Teléfono",
                                        value: telBusqueda,
                                        onChange: (e)=>setTelBusqueda(e.target.value),
                                        style: {
                                            padding: '15px',
                                            borderRadius: '15px',
                                            border: 'none',
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            color: '#fff',
                                            outline: 'none',
                                            width: '100%',
                                            boxSizing: 'border-box'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/InicioView.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: buscarEstado,
                                style: {
                                    width: '100%',
                                    backgroundColor: azulModerno,
                                    color: '#fff',
                                    padding: '18px',
                                    borderRadius: '15px',
                                    fontWeight: '900',
                                    cursor: 'pointer',
                                    border: 'none',
                                    fontSize: '1rem',
                                    transition: 'all 0.3s'
                                },
                                children: cargando ? 'BUSCANDO...' : 'CONSULTAR ESTADO'
                            }, void 0, false, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            errorBusqueda && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#ff4b4b',
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    fontSize: '0.9rem'
                                },
                                children: errorBusqueda
                            }, void 0, false, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 128,
                                columnNumber: 29
                            }, this),
                            equipo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '25px',
                                    padding: '20px',
                                    backgroundColor: 'rgba(0,0,0,0.4)',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: 'center',
                                            padding: '15px',
                                            borderRadius: '15px',
                                            backgroundColor: equipo.estado_orden === 'Listo' ? '#10b981' : azulModerno,
                                            marginBottom: '15px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '1.2rem',
                                                fontWeight: '900'
                                            },
                                            children: equipo.estado_orden.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/components/InicioView.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/InicioView.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            textAlign: 'center',
                                            opacity: 0.8,
                                            fontSize: '0.9rem'
                                        },
                                        children: [
                                            equipo.equipo.toUpperCase(),
                                            " - ",
                                            equipo.falla
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/InicioView.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InicioView.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            maxWidth: '700px',
                            marginTop: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
                                    fontWeight: '900',
                                    marginBottom: '25px',
                                    textAlign: 'center'
                                },
                                children: [
                                    "Preguntas ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: azulModerno
                                        },
                                        children: "Frecuentes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InicioView.tsx",
                                        lineNumber: 142,
                                        columnNumber: 138
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px'
                                },
                                children: listaFaqs.map((faq, idx)=>{
                                    const isOpen = faqAbierta === idx;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>toggleFaq(idx),
                                                style: {
                                                    width: '100%',
                                                    backgroundColor: 'transparent',
                                                    border: 'none',
                                                    padding: '18px 20px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    cursor: 'pointer',
                                                    textAlign: 'left',
                                                    color: '#fff',
                                                    fontSize: '0.95rem',
                                                    fontWeight: '700'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: faq.q
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InicioView.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this),
                                                    isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronUp"], {
                                                        color: azulModerno
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InicioView.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 31
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                        opacity: 0.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InicioView.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 69
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/InicioView.tsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this),
                                            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '0 20px 20px 20px',
                                                    color: 'rgba(255,255,255,0.7)',
                                                    fontSize: '0.9rem',
                                                    lineHeight: '1.5',
                                                    animation: 'fadeIn 0.2s ease-out'
                                                },
                                                children: faq.a
                                            }, void 0, false, {
                                                fileName: "[project]/components/InicioView.tsx",
                                                lineNumber: 160,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/components/InicioView.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/InicioView.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InicioView.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InicioView.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(InicioView, "rf1Mr4a5eRnHU2F5nVVUjiZGu/w=");
_c = InicioView;
var _c;
__turbopack_context__.k.register(_c, "InicioView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CatalogoView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
                fileName: "[project]/components/CatalogoView.tsx",
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
                        fileName: "[project]/components/CatalogoView.tsx",
                        lineNumber: 150,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CatalogoView.tsx",
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
                    fileName: "[project]/components/CatalogoView.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CatalogoView.tsx",
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
                        fileName: "[project]/components/CatalogoView.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCategoriaActiva('celulares'),
                        style: estiloTab('celulares'),
                        children: "📱 Celulares"
                    }, void 0, false, {
                        fileName: "[project]/components/CatalogoView.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCategoriaActiva('accesorios'),
                        style: estiloTab('accesorios'),
                        children: "🔌 Accesorios"
                    }, void 0, false, {
                        fileName: "[project]/components/CatalogoView.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CatalogoView.tsx",
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
                fileName: "[project]/components/CatalogoView.tsx",
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
                                            fileName: "[project]/components/CatalogoView.tsx",
                                            lineNumber: 183,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CatalogoView.tsx",
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
                                                fileName: "[project]/components/CatalogoView.tsx",
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
                                                        fileName: "[project]/components/CatalogoView.tsx",
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
                                                                fileName: "[project]/components/CatalogoView.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 23
                                                            }, this),
                                                            " AGREGAR AL CARRITO"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CatalogoView.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CatalogoView.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CatalogoView.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/components/CatalogoView.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/CatalogoView.tsx",
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
                                fileName: "[project]/components/CatalogoView.tsx",
                                lineNumber: 208,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/CatalogoView.tsx",
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
                        fileName: "[project]/components/CatalogoView.tsx",
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
                                    fileName: "[project]/components/CatalogoView.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CatalogoView.tsx",
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
                                    fileName: "[project]/components/CatalogoView.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CatalogoView.tsx",
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
                                        fileName: "[project]/components/CatalogoView.tsx",
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
                                        fileName: "[project]/components/CatalogoView.tsx",
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
                                                fileName: "[project]/components/CatalogoView.tsx",
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
                                                        fileName: "[project]/components/CatalogoView.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, this),
                                                    " AGREGAR"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CatalogoView.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CatalogoView.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CatalogoView.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CatalogoView.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CatalogoView.tsx",
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
                        fileName: "[project]/components/CatalogoView.tsx",
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
                        fileName: "[project]/components/CatalogoView.tsx",
                        lineNumber: 281,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CatalogoView.tsx",
                lineNumber: 271,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CatalogoView.tsx",
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
"[project]/components/CartSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
                fileName: "[project]/components/CartSidebar.tsx",
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
                                    fileName: "[project]/components/CartSidebar.tsx",
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
                                    fileName: "[project]/components/CartSidebar.tsx",
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
                                    fileName: "[project]/components/CartSidebar.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CartSidebar.tsx",
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
                                    fileName: "[project]/components/CartSidebar.tsx",
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
                                                    fileName: "[project]/components/CartSidebar.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this),
                                                " Retiro en local"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CartSidebar.tsx",
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
                                                    fileName: "[project]/components/CartSidebar.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                " A domicilio"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CartSidebar.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CartSidebar.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CartSidebar.tsx",
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
                                    fileName: "[project]/components/CartSidebar.tsx",
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
                                    fileName: "[project]/components/CartSidebar.tsx",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CartSidebar.tsx",
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
                                    fileName: "[project]/components/CartSidebar.tsx",
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
                                    fileName: "[project]/components/CartSidebar.tsx",
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
                                    fileName: "[project]/components/CartSidebar.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CartSidebar.tsx",
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
                                    fileName: "[project]/components/CartSidebar.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this),
                                " Confirmar y coordinar entrega"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CartSidebar.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CartSidebar.tsx",
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
                                            fileName: "[project]/components/CartSidebar.tsx",
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
                                            fileName: "[project]/components/CartSidebar.tsx",
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
                                            fileName: "[project]/components/CartSidebar.tsx",
                                            lineNumber: 230,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CartSidebar.tsx",
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
                                        fileName: "[project]/components/CartSidebar.tsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CartSidebar.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CartSidebar.tsx",
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
                                        fileName: "[project]/components/CartSidebar.tsx",
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
                                        fileName: "[project]/components/CartSidebar.tsx",
                                        lineNumber: 247,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CartSidebar.tsx",
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
                                                    fileName: "[project]/components/CartSidebar.tsx",
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
                                                            fileName: "[project]/components/CartSidebar.tsx",
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
                                                            fileName: "[project]/components/CartSidebar.tsx",
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
                                                                    fileName: "[project]/components/CartSidebar.tsx",
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
                                                                                fileName: "[project]/components/CartSidebar.tsx",
                                                                                lineNumber: 279,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CartSidebar.tsx",
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
                                                                            fileName: "[project]/components/CartSidebar.tsx",
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
                                                                                fileName: "[project]/components/CartSidebar.tsx",
                                                                                lineNumber: 283,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CartSidebar.tsx",
                                                                            lineNumber: 282,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CartSidebar.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CartSidebar.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CartSidebar.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, item.producto.id, true, {
                                            fileName: "[project]/components/CartSidebar.tsx",
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
                                                        fileName: "[project]/components/CartSidebar.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "$",
                                                            totalCarrito.toLocaleString('es-AR')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CartSidebar.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CartSidebar.tsx",
                                                lineNumber: 297,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: '1px',
                                                    backgroundColor: 'rgba(255,255,255,0.06)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/CartSidebar.tsx",
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
                                                        fileName: "[project]/components/CartSidebar.tsx",
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
                                                        fileName: "[project]/components/CartSidebar.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CartSidebar.tsx",
                                                lineNumber: 302,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CartSidebar.tsx",
                                        lineNumber: 292,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/components/CartSidebar.tsx",
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
                                            fileName: "[project]/components/CartSidebar.tsx",
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
                                            fileName: "[project]/components/CartSidebar.tsx",
                                            lineNumber: 322,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CartSidebar.tsx",
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
                                            fileName: "[project]/components/CartSidebar.tsx",
                                            lineNumber: 340,
                                            columnNumber: 19
                                        }, this),
                                        cargandoPago ? 'Redireccionando...' : 'Pagar con MercadoPago'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CartSidebar.tsx",
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
                                            fileName: "[project]/components/CartSidebar.tsx",
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
                                            fileName: "[project]/components/CartSidebar.tsx",
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
                                            fileName: "[project]/components/CartSidebar.tsx",
                                            lineNumber: 348,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CartSidebar.tsx",
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
                                            fileName: "[project]/components/CartSidebar.tsx",
                                            lineNumber: 363,
                                            columnNumber: 19
                                        }, this),
                                        " Consultar disponibilidad"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CartSidebar.tsx",
                                    lineNumber: 352,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CartSidebar.tsx",
                            lineNumber: 313,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/CartSidebar.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CartSidebar.tsx",
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
"[project]/components/cerrarventa.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CerrarVenta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const WHATSAPP_NUMERO = '5492614603074';
function CerrarVenta({ carrito, azulModerno, metodoEnvio, setMetodoEnvio, direccion, setDireccion }) {
    _s();
    const [mostrarModal, setMostrarModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nombreCliente, setNombreCliente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [telefonoCliente, setTelefonoCliente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Se activa solo cuando MercadoPago redirige de vuelta con ?status=approved
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CerrarVenta.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const params = new URLSearchParams(window.location.search);
                const status = params.get('status') || params.get('collection_status');
                if (status === 'approved') {
                    setMostrarModal(true);
                }
            }
        }
    }["CerrarVenta.useEffect"], []);
    const handleEnviarWhatsApp = ()=>{
        if (nombreCliente.trim() === '' || telefonoCliente.trim() === '') {
            alert('Por favor, ingresá tu Nombre y Teléfono.');
            return;
        }
        if (metodoEnvio === 'envio' && direccion.trim() === '') {
            alert('Por favor, ingresá tu Dirección para el envío.');
            return;
        }
        const detalleProductos = carrito.length > 0 ? carrito.map((item)=>`• ${item.producto.nombre} (x${item.cantidad})`).join('\n') : 'el producto';
        const entregaStr = metodoEnvio === 'envio' ? `Envío a domicilio: ${direccion}` : 'Retiro en local';
        const mensaje = `Hola, ya pagué y quiero coordinar la entrega 🎉\n\n` + `*Productos:*\n${detalleProductos}\n\n` + `*Datos de entrega:*\n` + `- Nombre: ${nombreCliente}\n` + `- Teléfono: ${telefonoCliente}\n` + `- Método: ${entregaStr}`;
        window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`, '_blank');
    };
    const inputStyle = {
        width: '100%',
        padding: '12px 14px',
        borderRadius: '12px',
        backgroundColor: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        color: '#fff',
        outline: 'none',
        boxSizing: 'border-box',
        fontSize: '0.9rem'
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
            fontSize: '0.88rem',
            transition: 'all 0.2s',
            border: active ? `2px solid ${azulModerno}` : '1px solid rgba(255,255,255,0.1)',
            backgroundColor: active ? 'rgba(59,130,246,0.12)' : 'rgba(255,255,255,0.02)',
            color: active ? '#fff' : '#94a3b8'
        });
    if (!mostrarModal) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
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
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    backdropFilter: 'blur(8px)'
                }
            }, void 0, false, {
                fileName: "[project]/components/cerrarventa.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    width: '100%',
                    maxWidth: '460px',
                    backgroundColor: '#0f172a',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '24px',
                    padding: '28px 24px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
                    zIndex: 5001,
                    boxSizing: 'border-box',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMostrarModal(false),
                        title: "Cerrar (podés volver más tarde desde el carrito)",
                        style: {
                            position: 'absolute',
                            top: '18px',
                            right: '18px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#475569',
                            cursor: 'pointer',
                            lineHeight: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/cerrarventa.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cerrarventa.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            paddingTop: '4px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                                color: "#25d366",
                                size: 48,
                                style: {
                                    marginBottom: '12px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/cerrarventa.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: '0 0 6px',
                                    fontSize: '1.35rem',
                                    fontWeight: 800
                                },
                                children: "¡Tu pago fue aprobado!"
                            }, void 0, false, {
                                fileName: "[project]/components/cerrarventa.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    fontSize: '0.88rem',
                                    color: '#94a3b8',
                                    lineHeight: 1.5
                                },
                                children: "Completá los datos de entrega para que el local pueda coordinar con vos."
                            }, void 0, false, {
                                fileName: "[project]/components/cerrarventa.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cerrarventa.tsx",
                        lineNumber: 130,
                        columnNumber: 9
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
                                    fontSize: '0.82rem',
                                    fontWeight: 700,
                                    color: '#cbd5e1',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                },
                                children: "Forma de entrega"
                            }, void 0, false, {
                                fileName: "[project]/components/cerrarventa.tsx",
                                lineNumber: 142,
                                columnNumber: 11
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
                                                fileName: "[project]/components/cerrarventa.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this),
                                            " Retiro en local"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cerrarventa.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMetodoEnvio('envio'),
                                        style: deliveryBtnStyle(metodoEnvio === 'envio'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMotorcycle"], {
                                                color: metodoEnvio === 'envio' ? azulModerno : '#64748b'
                                            }, void 0, false, {
                                                fileName: "[project]/components/cerrarventa.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            " A domicilio"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cerrarventa.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cerrarventa.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cerrarventa.tsx",
                        lineNumber: 141,
                        columnNumber: 9
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
                                    fontSize: '0.82rem',
                                    fontWeight: 700,
                                    color: '#cbd5e1',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                },
                                children: "Dirección"
                            }, void 0, false, {
                                fileName: "[project]/components/cerrarventa.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Calle, número, localidad",
                                value: direccion,
                                onChange: (e)=>setDireccion(e.target.value),
                                style: inputStyle
                            }, void 0, false, {
                                fileName: "[project]/components/cerrarventa.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cerrarventa.tsx",
                        lineNumber: 157,
                        columnNumber: 11
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
                                    fontSize: '0.82rem',
                                    fontWeight: 700,
                                    color: '#cbd5e1',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                },
                                children: "Tus datos"
                            }, void 0, false, {
                                fileName: "[project]/components/cerrarventa.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Nombre y Apellido",
                                value: nombreCliente,
                                onChange: (e)=>setNombreCliente(e.target.value),
                                style: inputStyle
                            }, void 0, false, {
                                fileName: "[project]/components/cerrarventa.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "tel",
                                placeholder: "Número de teléfono",
                                value: telefonoCliente,
                                onChange: (e)=>setTelefonoCliente(e.target.value),
                                style: inputStyle
                            }, void 0, false, {
                                fileName: "[project]/components/cerrarventa.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cerrarventa.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleEnviarWhatsApp,
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
                            transition: 'opacity 0.2s',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/cerrarventa.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            " Confirmar y coordinar entrega"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cerrarventa.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cerrarventa.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cerrarventa.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(CerrarVenta, "WD3Ec9QQYq3gAEnUaN1iOYEaCxk=");
_c = CerrarVenta;
var _c;
__turbopack_context__.k.register(_c, "CerrarVenta");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WebControlCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Aurora$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Aurora.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhatsAppChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WhatsAppChat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GoogleReviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GoogleReviews.tsx [app-client] (ecmascript)");
// Importación de los nuevos componentes modulares
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FloatingSocials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FloatingSocials.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InicioView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/InicioView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CatalogoView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CatalogoView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CartSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CartSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cerrarventa$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cerrarventa.tsx [app-client] (ecmascript)");
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
;
;
function WebControlCell() {
    _s();
    const azulModerno = "#3b82f6";
    // --- ESTADOS DE ENVÍO ---
    const [metodoEnvio, setMetodoEnvio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('retiro');
    const [direccion, setDireccion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // --- ESTADOS DE REPARACIÓN Y NAVEGACIÓN ---
    const [ordenBusqueda, setOrdenBusqueda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [telBusqueda, setTelBusqueda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [equipo, setEquipo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorBusqueda, setErrorBusqueda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [vista, setVista] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('inicio');
    // --- ESTADOS DE PRODUCTOS Y CARRITO ---
    const [productosBase, setProductosBase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categoriaActiva, setCategoriaActiva] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('todos');
    const [busquedaTermino, setBusquedaTermino] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [carrito, setCarrito] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mostrarCarrito, setMostrarCarrito] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notificacion, setNotificacion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paginaActual, setPaginaActual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const productosPorPagina = 8;
    // RECUPERAR RESPALDO DEL CARRITO SI VOLVEMOS DE MERCADO PAGO APROBADO
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebControlCell.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const params = new URLSearchParams(window.location.search);
                const status = params.get('status') || params.get('collection_status');
                if (status === 'approved') {
                    const respaldo = localStorage.getItem('carrito_respaldo');
                    if (respaldo) {
                        setCarrito(JSON.parse(respaldo));
                        // Opcional: limpiar una vez restaurado para no ensuciar la memoria
                        localStorage.removeItem('carrito_respaldo');
                    }
                }
            }
        }
    }["WebControlCell.useEffect"], []);
    // --- TRAER STOCK DE SUPABASE ---
    const cargarProductosNube = async ()=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock').select('*').gt('cantidad', 0).order('nombre', {
                ascending: true
            });
            if (error) throw error;
            if (data) {
                const mapeados = data.map((item)=>({
                        id: item.id,
                        nombre: item.nombre,
                        precio: Number(item.precio_venta || item.precio || 0),
                        img: item.imagen_url || `https://picsum.photos/seed/${item.id}/300/300`,
                        categoria: String(item.categoria || 'celulares').toLowerCase().trim()
                    }));
                setProductosBase(mapeados);
            }
        } catch (err) {
            console.error("Error cargando stock:", err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebControlCell.useEffect": ()=>{
            cargarProductosNube();
        }
    }["WebControlCell.useEffect"], []);
    // --- FILTRADO Y PAGINACIÓN ---
    const productosFiltrados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WebControlCell.useMemo[productosFiltrados]": ()=>{
            return productosBase.filter({
                "WebControlCell.useMemo[productosFiltrados]": (p)=>{
                    const pasaCategoria = categoriaActiva === 'todos' || p.categoria === categoriaActiva;
                    return pasaCategoria && p.nombre.toLowerCase().includes(busquedaTermino.toLowerCase().trim());
                }
            }["WebControlCell.useMemo[productosFiltrados]"]);
        }
    }["WebControlCell.useMemo[productosFiltrados]"], [
        productosBase,
        categoriaActiva,
        busquedaTermino
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebControlCell.useEffect": ()=>{
            setPaginaActual(1);
        }
    }["WebControlCell.useEffect"], [
        categoriaActiva,
        busquedaTermino
    ]);
    const productosPaginados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WebControlCell.useMemo[productosPaginados]": ()=>{
            const inicio = (paginaActual - 1) * productosPorPagina;
            return productosFiltrados.slice(inicio, inicio + productosPorPagina);
        }
    }["WebControlCell.useMemo[productosPaginados]"], [
        productosFiltrados,
        paginaActual
    ]);
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
    // --- REPARACIONES ---
    const buscarEstado = async ()=>{
        if (!ordenBusqueda || !telBusqueda) return setErrorBusqueda('Por favor, ingresá Nro de Orden y Teléfono.');
        setCargando(true);
        setErrorBusqueda('');
        setEquipo(null);
        try {
            const idNumerico = Number(ordenBusqueda.trim());
            if (isNaN(idNumerico)) {
                setErrorBusqueda('El número de orden debe ser válido.');
                setCargando(false);
                return;
            }
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('ordenes').select('nombre, equipo, estado_orden, falla, fecha').eq('telefono', telBusqueda.trim()).eq('id', idNumerico).maybeSingle();
            if (error || !data) setErrorBusqueda('No encontramos ninguna orden con esos datos.');
            else setEquipo(data);
        } catch (err) {
            setErrorBusqueda('Error de conexión con el servidor.');
        }
        setCargando(false);
    };
    // --- MANEJO DEL CARRITO ---
    const agregarAlCarrito = (producto)=>{
        setCarrito((prev)=>{
            const existe = prev.find((item)=>item.producto.id === producto.id);
            return existe ? prev.map((item)=>item.producto.id === producto.id ? {
                    ...item,
                    cantidad: item.cantidad + 1
                } : item) : [
                ...prev,
                {
                    producto,
                    cantidad: 1
                }
            ];
        });
        setNotificacion("Producto añadido al carrito correctamente");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebControlCell.useEffect": ()=>{
            if (notificacion) {
                const timer = setTimeout({
                    "WebControlCell.useEffect.timer": ()=>setNotificacion(null)
                }["WebControlCell.useEffect.timer"], 2500);
                return ({
                    "WebControlCell.useEffect": ()=>clearTimeout(timer)
                })["WebControlCell.useEffect"];
            }
        }
    }["WebControlCell.useEffect"], [
        notificacion
    ]);
    const modificarCantidad = (id, delta)=>{
        setCarrito((prev)=>prev.map((item)=>item.producto.id === id ? {
                    ...item,
                    cantidad: item.cantidad + delta
                } : item).filter((item)=>item.cantidad > 0));
    };
    const totalCarrito = carrito.reduce((acc, item)=>acc + item.producto.precio * item.cantidad, 0);
    const cantidadTotal = carrito.reduce((acc, item)=>acc + item.cantidad, 0);
    const finalizarCompraWhatsApp = ()=>{
        if (carrito.length === 0) return;
        let mensaje = `Hola ControlCel! Te paso mi pedido:\n\n`;
        carrito.forEach((item)=>{
            mensaje += `- ${item.cantidad}x ${item.producto.nombre} ($${(item.producto.precio * item.cantidad).toLocaleString('es-AR')})\n`;
        });
        mensaje += `\n*Total: $${totalCarrito.toLocaleString('es-AR')}*\n\n`;
        if (metodoEnvio === 'envio') {
            mensaje += `*Método:* Envío a domicilio\n`;
            mensaje += `*Dirección:* ${direccion || 'No especificada'}\n\n`;
        } else {
            mensaje += `*Método:* Retiro en el local\n\n`;
        }
        mensaje += `¿Tienen disponibilidad para armar el pedido?`;
        window.open(`https://wa.me/5492614603074?text=${encodeURIComponent(mensaje)}`, '_blank');
    };
    const estiloTab = (idTab)=>{
        const esActivo = categoriaActiva === idTab;
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
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Aurora$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    colorStops: [
                        "#3b82f6",
                        "#7cff67",
                        "#5227FF"
                    ],
                    amplitude: 1
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        vista: vista,
                        setVista: setVista,
                        cantidadTotal: cantidadTotal,
                        setMostrarCarrito: setMostrarCarrito,
                        azulModerno: azulModerno
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FloatingSocials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    vista === 'inicio' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InicioView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ordenBusqueda: ordenBusqueda,
                        setOrdenBusqueda: setOrdenBusqueda,
                        telBusqueda: telBusqueda,
                        setTelBusqueda: setTelBusqueda,
                        buscarEstado: buscarEstado,
                        cargando: cargando,
                        errorBusqueda: errorBusqueda,
                        equipo: equipo,
                        azulModerno: azulModerno
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CatalogoView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        cantidadTotal: cantidadTotal,
                        setMostrarCarrito: setMostrarCarrito,
                        productosFiltrados: productosFiltrados,
                        productosPaginados: productosPaginados,
                        busquedaTermino: busquedaTermino,
                        setBusquedaTermino: setBusquedaTermino,
                        categoriaActiva: categoriaActiva,
                        setCategoriaActiva: setCategoriaActiva,
                        paginaActual: paginaActual,
                        setPaginaActual: setPaginaActual,
                        totalPaginas: totalPaginas,
                        agregarAlCarrito: agregarAlCarrito,
                        azulModerno: azulModerno,
                        estiloTab: estiloTab
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GoogleReviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        azulModerno: azulModerno
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 187,
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
                                                "¿Dónde ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: azulModerno
                                                    },
                                                    children: "estamos?"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 96
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: '10px 0'
                                            },
                                            children: "📍 Salta 1161, Mendoza"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                opacity: 0.8
                                            },
                                            children: "⏰ Lun a Vie: 08:30 a 18:00 (Corrido)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 191,
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
                                        src: "https://maps.google.com/maps?q=Salta%201161,%20Mendoza&t=&z=15&ie=UTF8&iwloc=&output=embed",
                                        width: "100%",
                                        height: "100%",
                                        style: {
                                            border: 0
                                        },
                                        allowFullScreen: true,
                                        loading: "lazy",
                                        title: "Ubicación de ControlCel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhatsAppChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        style: {
                            textAlign: 'center',
                            padding: '40px 5%',
                            opacity: 0.4,
                            fontSize: '0.8rem'
                        },
                        children: "© 2026 ControlCel - Mendoza"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            mostrarCarrito && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CartSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                carrito: carrito,
                setMostrarCarrito: setMostrarCarrito,
                modificarCantidad: modificarCantidad,
                totalCarrito: totalCarrito,
                finalizarCompraWhatsApp: finalizarCompraWhatsApp,
                azulModerno: azulModerno,
                metodoEnvio: metodoEnvio,
                setMetodoEnvio: setMetodoEnvio,
                direccion: direccion,
                setDireccion: setDireccion
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cerrarventa$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                carrito: carrito,
                azulModerno: azulModerno,
                metodoEnvio: metodoEnvio,
                setMetodoEnvio: setMetodoEnvio,
                direccion: direccion,
                setDireccion: setDireccion
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 222,
                columnNumber: 7
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
                        lineNumber: 233,
                        columnNumber: 11
                    }, this),
                    " ",
                    notificacion
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_s(WebControlCell, "sclXuQfaO9p3IQZsWQ/cRzBkong=");
_c = WebControlCell;
var _c;
__turbopack_context__.k.register(_c, "WebControlCell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0ywmqg6._.js.map