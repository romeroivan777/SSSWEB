# Guía de Despliegue — Vercel

## 1. Subir el repo

```bash
cd speranza
git init && git add . && git commit -m "Speranza Software Solutions — v1"
gh repo create speranza-web --private --source=. --push
# o subilo a GitHub/GitLab manualmente y conectalo desde el dashboard de Vercel
```

## 2. Importar en Vercel

1. [vercel.com/new](https://vercel.com/new) → importar el repo.
2. Framework Preset: **Next.js** (autodetectado).
3. Build Command: `next build` (default). Output: `.next` (default).
4. No hace falta tocar nada más — `next.config.ts` ya define headers de
   seguridad e imágenes optimizadas.

## 3. Variables de entorno

Configurar en **Project Settings → Environment Variables** (Production y
Preview). Estas son las mínimas para que el sitio funcione:

| Variable | Obligatoria | Descripción |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sí | Dominio final, ej. `https://speranza.com.py` (usado en metadata, sitemap y JSON-LD) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Sí | Número en formato internacional sin signos: `595981000000` |
| `NEXT_PUBLIC_SITE_NAME` | No | Default ya es "Speranza Software Solutions" |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Solo si vas a verificar el dominio en Google Search Console |
| `N8N_WEBHOOK_URL` / `N8N_WEBHOOK_SECRET` | No (Fase 3) | Recién se usan cuando se conecte el backend de automatización |
| `NEXT_PUBLIC_SUPABASE_URL` / `*_ANON_KEY` / `SUPABASE_SERVICE_ROLE_KEY` | No (Fase 3) | Recién se usan cuando se conecte persistencia de leads |

## 4. Dominio propio

1. **Project Settings → Domains** → agregar `speranza.com.py` (o el dominio real).
2. Apuntar el DNS: registro `A` a `76.76.21.21` o `CNAME` a `cname.vercel-dns.com`
   según lo que indique Vercel al momento de agregarlo (puede variar).
3. Actualizar `NEXT_PUBLIC_SITE_URL` con el dominio final y redeployar — el
   sitemap, robots.txt y JSON-LD se regeneran solos a partir de esa variable.

## 5. Checklist post-deploy

- [ ] Confirmar que `/sitemap.xml` y `/robots.txt` responden con el dominio
      final (no con `speranza.com.py` si usaste otro dominio).
- [ ] Correr Lighthouse (Chrome DevTools o PageSpeed Insights) sobre la URL
      pública, no sobre `localhost`.
- [ ] Probar el Motor de Calificación de punta a punta en un celular real:
      los 3 pasos, el estado de éxito, y que el mensaje pre-rellenado llegue
      correcto a WhatsApp Business.
- [ ] Verificar en Google Search Console que el sitemap se indexe sin errores.
- [ ] Si vas a correr campañas pagas (Meta/Google Ads), confirmar que el
      Pixel/Tag correspondiente se agregue antes de lanzar tráfico — no
      viene incluido en este MVP.

## 6. Conectar la Fase 3 (Backend) más adelante

Cuando esté listo n8n + Supabase: el punto de integración es
`lib/utils.ts → buildWhatsAppUrl()`. Hoy esa función solo arma la URL de
`wa.me`. El cambio mínimo es, en `components/modal/QualificationModal.tsx →
handleFinish()`, hacer un `fetch` a `N8N_WEBHOOK_URL` con `data` antes de
redirigir a WhatsApp, para que el lead quede persistido y el Cerebro IA
pueda tomarlo por Function Calling.
