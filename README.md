# Speranza Software Solutions — Sitio Web

Landing B2B High-Ticket construida sobre el Documento Ejecutivo de Arquitectura
Estratégica y el Design System "Monolito Tecnológico" (God Mode v3.0/v4.0).
Next.js 15 (App Router), TypeScript estricto, Tailwind con Design Tokens
exactos, Framer Motion, Zustand.

## Quick start

```bash
npm install
cp .env.example .env.local   # completar al menos NEXT_PUBLIC_WHATSAPP_NUMBER
npm run dev                  # http://localhost:3000
```

Build de producción (igual al que corre Vercel):

```bash
npm run build
npm run start
```

`npm run build` ya fue ejecutado y verificado en este entorno: compila sin
errores de tipos, ESLint pasa sin warnings, y las 5 rutas (`/`, `/soluciones`,
`/casos-de-exito`, `/politicas`, `/_not-found`) se pre-renderizan como HTML
estático.

## Decisiones de arquitecto (dónde se adaptó el Master Prompt)

El Master Prompt es la plantilla de **proceso y stack**. El Documento
Estratégico + Design System es la **fuente de verdad de contenido y
site-map**, tal como el propio Master Prompt indica ("no los contradigas").
Donde ambos chocaban, se priorizó la estrategia:

- **Sin shadcn/ui vía CLI.** El CLI de shadcn descarga componentes desde
  `ui.shadcn.com`, inalcanzable desde este entorno de build. Se construyeron
  los átomos a mano (`components/ui/`) siguiendo exactamente los tokens del
  Design System — mismo resultado visual, cero dependencia externa.
- **Sin Blog / Pricing / Testimonials como páginas.** La Arquitectura de
  Información (sección 6 del documento estratégico) define un funnel
  cerrado: Home, Soluciones, Casos de Éxito, Políticas, y un modal de
  calificación — explícitamente "no hay página de Contacto". Se respetó eso
  en vez de la lista genérica de archivos del Master Prompt.
- **Geist vía paquete `geist`, no WOFF2 autohospedados.** Mismo resultado
  (CLS = 0, fuente local), sin necesitar que subas archivos de fuente a mano.
- **`tieneFotoReal()` en `lib/assets.server.ts`.** Las cards de Casos de
  Éxito detectan automáticamente si la foto real ya existe en
  `/public/images/casos/`. Mientras no exista, cae a una superficie
  abstracta (nunca a un ícono roto ni a un texto "coming soon").

## Estructura

```
app/                  Rutas (App Router): home, soluciones, casos-de-exito, políticas,
                       robots.ts, sitemap.ts, manifest.ts, loading/error/not-found
components/ui/         Átomos: Button, Badge, Card, Select, Accordion, Reveal
components/layout/     Navbar (sticky, oculta en scroll-down), Footer, Logo
components/modal/      QualificationModal — "El Caballo de Troya" (3 pasos → WhatsApp)
components/sections/   Los 5 bloques lógicos de Home + el elemento de firma CerebroIA
lib/                   constants (copy/datos), utils (cn, wa.me builder), seo/jsonld
hooks/                 useQualificationModal (store Zustand del modal)
types/                 Tipos de dominio compartidos
```

## Checklist antes de publicar (pendiente de tu parte)

Estas son las piezas que **no podía completar sin información o assets
reales** — todo lo demás del Master Prompt está implementado:

- [ ] **Número de WhatsApp real** en `.env.local` (`NEXT_PUBLIC_WHATSAPP_NUMBER`).
- [ ] **Fotos reales** de Quinta Los Rubiales, Terrazas del Bosque y Castello en
      `/public/images/casos/` (nombres de archivo ya definidos en
      `lib/constants.ts` → `CASE_STUDIES[].imagen`). Aparecen solas al subirlas.
- [ ] **Métricas de los casos de éxito.** Dejé `metricaClave: "—"` a propósito:
      el documento fuente no incluye cifras auditadas, y publicar números
      inventados sobre negocios reales de terceros no es buena práctica.
      Reemplazar con datos reales una vez los confirme cada cliente.
- [ ] **Logo final** en SVG → reemplaza el wordmark provisional en
      `components/layout/Logo.tsx`.
- [ ] **Favicon e iconos PWA** (`/public/icons/favicon.ico`, `icon-192.png`,
      `icon-512.png`) y la imagen de Open Graph (`/public/icons/og-cover.jpg`).
- [ ] **Revisión legal de `/politicas`** — el texto es un borrador base, no
      asesoría legal. Recomendado: que lo revise un abogado paraguayo antes
      de publicar, especialmente por la Ley 6.534/2020 de Protección de
      Datos Personales.
- [ ] **Auditoría de Lighthouse** real en producción (Performance/SEO/A11y/Best
      Practices) — el código está optimizado para esto, pero el número final
      depende del hosting, las imágenes reales que subas y la fuente cargada.

## Fase 3 del roadmap (no incluida en este MVP frontend)

El documento estratégico define una Fase 3 de Backend: webhooks n8n +
Supabase/Prisma + Meta Cloud API para que el Motor de Calificación no solo
redirija a WhatsApp, sino que also persista el lead y dispare el Cerebro IA
real. Las variables de entorno ya están dejadas listas en `.env.example`
(`N8N_WEBHOOK_URL`, `SUPABASE_*`) para cuando se conecte esa capa — hoy el
modal solo construye la URL de `wa.me` en el cliente, sin backend propio.

Ver `DEPLOYMENT.md` para el paso a paso de despliegue en Vercel.
