# La Travesía Campiña — sitio web

Restaurante, granja y hospedaje en Quingeo, Cuenca (Ecuador). Next.js 14 (App Router) + Tailwind + next-intl (es/en).

## Arrancar en local

```bash
npm install
npm run dev        # http://localhost:3000  (redirige a /es)
```

En Mac también puedes hacer doble clic en `iniciar.command`.

## Variables de entorno (opcionales)

| Variable | Para qué | Valor por defecto |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Dominio real: canonical, Open Graph, sitemap y robots | `https://latravesiacuenca.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número del botón flotante y formulario | `593990136060` |

Configúralas en Vercel → Settings → Environment Variables.

## Estructura

- `app/[locale]/…` — páginas (inicio, nosotros, restaurante, menu, granja, hospedaje, galeria, contacto)
- `components/` — secciones por página + `layout/` (Navbar, Footer) + `ui/`
- `messages/es.json`, `messages/en.json` — textos traducidos
- `data/` — menú completo, galería y bloques de la granja
- `lib/seo.ts` — metadatos por página con hreflang es/en
- `app/sitemap.ts`, `app/robots.ts` — SEO

## Tipografías

Playfair Display (títulos), Cormorant Garamond (citas/itálicas) y DM Sans (texto), cargadas con `next/font` y registradas en `tailwind.config.ts` como `font-playfair`, `font-cormorant` y `font-sans`.
