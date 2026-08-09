# La Travesía — Web Granja & Restaurante — Blueprint de Arquitectura
> Versión: 1.0 | Fecha: 2026-07-12 | Stack: Next.js 14 (App Router) + Tailwind CSS + next-intl + Vercel

---

## 0. Resumen ejecutivo

- **Qué hace la web en 3 líneas**: Sitio de marca para La Travesía que presenta el restaurante y su propia granja agroecológica (donde se crían los cuyes que se sirven), bajo un ángulo narrativo que mezcla transparencia, herencia ancestral y ciclo agroecológico. Prioriza imagen sobre texto, con navegación simple de una sola intención: enamorar y llevar a reservar por WhatsApp.
- **Usuarios principales**: Visitantes públicos (clientes potenciales, turistas). No hay roles internos ni panel de administración en esta fase — el contenido es fijo y se edita directo en código.
- **Stack tecnológico seleccionado**: Next.js 14 con App Router (SSG/ISR para máxima velocidad de carga de imágenes), Tailwind CSS para el sistema visual, next-intl para español/inglés, hosting en Vercel. Sin base de datos ni autenticación en el MVP — se justifica en la sección 4.
- **Fases**: MVP (sitio completo, bilingüe, contenido fijo, botón WhatsApp) → V1 (integración con el menú digital y sistema de fidelización ya existentes) → futuro (panel de administración si el volumen de contenido lo justifica).

---

## 1. Arquitectura general

```
[ Navegador ]
      │
      ▼
[ Next.js App Router — Vercel Edge ]
      │
      ├── Páginas estáticas (SSG) por locale: /es/* y /en/*
      ├── Componentes de sección (Hero, Menú, Granja, Galería, Reservas)
      ├── Assets de imagen optimizados (next/image, formato .webp/.avif)
      └── Botón WhatsApp → deep link wa.me (sin backend)
```

No hay capa de backend ni base de datos en el MVP: todo el contenido vive como datos tipados dentro del código (arrays/objetos TS), y el único punto de "acción" del usuario es un enlace externo a WhatsApp. Esto reduce drásticamente el riesgo técnico y la velocidad de entrega, y es coherente con que el contenido "no se actualiza seguido".

**Patrón arquitectónico**: Static Site Generation (SSG) completo. Cada página se pre-renderiza en build time; no hay llamadas a API en runtime. Esto maximiza velocidad de carga (crítico para un sitio 100% visual con fotos grandes) y elimina cualquier costo/mantenimiento de servidor.

---

## 2. Stack tecnológico

| Capa | Tecnología | Versión | Justificación | Alternativa descartada |
|---|---|---|---|---|
| Framework | Next.js | 14.x (App Router) | Ya es el stack estándar de Juan/Brimarck; SSG nativo; migración futura a Supabase sin reescribir | Astro (excelente para sitios estáticos, pero rompería consistencia con el resto del stack del cliente) |
| Estilos | Tailwind CSS | 3.x | Velocidad de maquetación, consistencia de design tokens, fácil de pasarle a Antigravity | CSS Modules (más lento de iterar) |
| Internacionalización | next-intl | última estable | Soporte robusto de rutas `/es` `/en` con App Router | next-i18next (pensado para Pages Router, no App Router) |
| Imágenes | next/image | incluido en Next.js | Optimización automática, lazy loading, crítico dado el enfoque 100% visual | — |
| Animaciones (opcional) | Framer Motion | última estable | Transiciones suaves en galería y scroll, sin peso excesivo | CSS puro (más limitado para el efecto "premium" buscado) |
| Hosting | Vercel | — | Estándar del stack de Juan; deploy directo desde Antigravity/Claude Code | — |
| Base de datos | Ninguna en MVP | — | Contenido fijo, sin panel admin, sin persistencia de datos de usuario | Supabase (se añade en V1 al integrar con el menú digital y fidelización existentes) |
| Autenticación | Ninguna | — | No hay roles ni contenido privado | — |
| Formularios | Ninguno (solo link WhatsApp) | — | Decisión explícita: reservas van directo a `wa.me` | Formulario + Supabase (descartado por ahora, puede añadirse en V1) |

---

## 3. Estructura de carpetas y archivos

```
la-travesia-granja/
├── app/
│   ├── [locale]/                    # rutas con soporte es/en
│   │   ├── layout.tsx                # layout raíz: fuentes, nav, footer
│   │   ├── page.tsx                  # Home: Hero + Menú (preview) + CTA Granja
│   │   ├── granja/
│   │   │   └── page.tsx              # sección "La Granja" completa
│   │   └── galeria/
│   │       └── page.tsx              # galería de fotos
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── LanguageSwitch.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── MenuPreview.tsx           # 4-6 platos destacados, no el menú completo
│   │   └── GranjaTeaser.tsx          # franja "Todo lo que servimos, lo criamos nosotros"
│   ├── granja/
│   │   ├── TradicionBlock.tsx        # bloque herencia ancestral
│   │   ├── SistemaBlock.tsx          # bloque ciclo agroecológico
│   │   └── ManejoBlock.tsx           # bloque transparencia/trazabilidad
│   ├── galeria/
│   │   └── GaleriaGrid.tsx           # grid de fotos con lightbox
│   └── ui/
│       ├── WhatsAppButton.tsx        # CTA reutilizable
│       └── SectionHeading.tsx
├── data/
│   ├── menu.ts                       # array tipado de platos (fijo, editable en código)
│   ├── granja-content.ts             # textos ES/EN de los 3 bloques de Granja
│   └── galeria.ts                    # array de rutas de imagen + alt text
├── messages/
│   ├── es.json                       # strings de UI en español
│   └── en.json                       # strings de UI en inglés
├── public/
│   └── images/
│       ├── hero/
│       ├── menu/
│       ├── granja/
│       └── galeria/
├── lib/
│   └── whatsapp.ts                   # helper para armar el link wa.me con mensaje prellenado
├── next.config.js
├── tailwind.config.ts
└── middleware.ts                     # detección/routing de locale (next-intl)
```

**Convención**: contenido editorial (textos, rutas de imagen) vive en `/data`, nunca hardcodeado dentro de los componentes — así, aunque no haya panel admin, editar un texto o cambiar una foto es tocar un solo archivo, no buscar dentro de JSX.

---

## 4. Base de datos

**No aplica en este MVP.** Justificación: el contenido no se actualiza seguido (confirmado por el cliente), no hay formularios que persistan datos (reservas van directo a WhatsApp), y no hay usuarios ni roles. Añadir Supabase ahora sería complejidad sin beneficio real.

**Cuándo se activa en V1**: al integrar este sitio con el menú digital y el sistema de fidelización que ya existen (ambos en Supabase), este sitio pasará a consumir esas mismas tablas en vez de los datos fijos en `/data`. En ese momento se documentará el esquema real.

---

## 5. Autenticación y autorización

**No aplica.** Sitio 100% público, sin contenido restringido, sin panel de administración en el MVP.

---

## 6. Pantallas y flujo UX/UI

| Pantalla | Ruta | Propósito | Componentes principales | Navegación |
|---|---|---|---|---|
| Home | `/[locale]` | Enganchar con imagen/video del plato insignia; insinuar la granja sin explicarla aún | Hero, MenuPreview, GranjaTeaser, WhatsAppButton | → Granja, → Galería, CTA WhatsApp |
| La Granja | `/[locale]/granja` | Contar el ángulo: tradición → sistema agroecológico → manejo transparente | TradicionBlock, SistemaBlock, ManejoBlock | → Galería, ← Home |
| Galería | `/[locale]/galeria` | Recorrido visual continuo: tierra → granja → cocina → plato, en un solo hilo | GaleriaGrid (con lightbox) | ← Home, ← Granja |

**Estados**: dado que no hay datos remotos, no hay estados de "cargando" ni "error" de red — solo hay que cuidar el estado de carga progresiva de imágenes (blur placeholder de next/image) para que el sitio nunca se sienta vacío mientras carga.

**Flujo de navegación**:
```
Home ──→ La Granja ──→ Galería
  │                        ▲
  └────────────────────────┘
  (WhatsApp CTA disponible en las 3 pantallas, siempre visible en navbar/footer)
```

---

## 7. Componentes UI

**Layout components**
- `Navbar` — logo, links a Granja/Galería, selector de idioma, botón WhatsApp fijo
- `Footer` — ubicación, horarios, redes, WhatsApp
- `LanguageSwitch` — toggle ES/EN, persiste elección vía ruta de locale

**Feature components**
- `Hero` — imagen/video full-bleed + headline corto + CTA scroll
- `MenuPreview` — 4-6 tarjetas de platos destacados (foto grande, nombre, sin precio para no competir con el menú digital)
- `GranjaTeaser` — franja de una sola línea + imagen, enlaza a `/granja`
- `TradicionBlock` / `SistemaBlock` / `ManejoBlock` — cada uno: imagen grande + texto corto (máx. 60-80 palabras), nunca texto largo tipo blog
- `GaleriaGrid` — grid responsive con lightbox al click, sin categorías separadas (el punto es que se lea como un solo relato continuo)

**UI primitives**
- `WhatsAppButton` — variantes: flotante (mobile), inline (footer/hero)
- `SectionHeading` — título + subtítulo reutilizable, consistente en las 3 páginas

---

## 8. Sistema de diseño

- **Paleta de colores** (tonos tierra/orgánicos, coherentes con el ángulo agroecológico y ancestral — ajustar con fotos reales de la granja al implementar):
  - `--color-earth-900: #2B2118` (texto principal, casi negro cálido)
  - `--color-earth-700: #5C4A36` (texto secundario)
  - `--color-clay: #C97C5D` (acento cálido — CTA, detalles)
  - `--color-cream: #F7F1E8` (fondo principal, cálido no blanco puro)
  - `--color-leaf: #6B7A4F` (acento verde agroecológico, uso mínimo)
- **Tipografía**: una serif con carácter (headlines, evoca tradición/artesanía — ej. estilo "Fraunces" o "Playfair Display") + una sans limpia para cuerpo de texto (ej. "Inter" o "Work Sans"). Tamaños grandes en headlines (Hero mínimo 48px desktop) porque el peso visual lo lleva la imagen, el texto debe ser breve pero con presencia.
- **Espaciado**: secciones full-bleed con mucho aire vertical (mín. 96px entre bloques desktop) — el objetivo explícito es "sencillo, visual, se vende solo", así que el espacio en blanco/cálido es parte del diseño, no relleno.
- **Breakpoints**: mobile-first, breakpoints estándar Tailwind (sm/md/lg/xl). Prioridad total a mobile dado que el tráfico de un restaurante suele venir de Instagram/Google Maps en celular.
- **Tono visual de referencia**: restaurantdekas.com — fotografía grande protagonista, texto mínimo, secciones que respiran, storytelling de granja sin saturar de datos.

---

## 9. API y lógica de servidor

**No aplica.** No hay endpoints ni server actions en el MVP — todo el contenido es estático y el único "envío" de datos es un link externo a WhatsApp (`lib/whatsapp.ts` solo construye la URL, no hace ninguna llamada de red propia).

---

## 10. Lógica de negocio y reglas del sistema

Reglas narrativas que **siempre** deben respetarse (son de diseño/contenido, no de código, pero son invariantes del proyecto):

1. **Orden narrativo obligatorio**: en la página Granja, el bloque de Tradición siempre va antes que el de Sistema/Manejo — nunca se muestra el proceso de crianza sin haber dado primero el contexto cultural.
2. **Regla anti-doble-moral**: ningún cuy se fotografía o nombra como mascota individual (nada de "conoce a Pepito"). Las fotos de la granja muestran espacio, alimentación y manejo — nunca retratos con personalidad.
3. **Regla de secuencia en Galería**: las imágenes se ordenan para leerse como un solo recorrido (tierra → granja → cocina → plato), no agrupadas por categoría separada.
4. **Home nunca explica la granja a fondo**: solo insinúa con una frase corta + CTA; la explicación completa vive únicamente en `/granja`.

---

## 11. Integraciones externas

| Servicio | Propósito | Cuándo se activa | Variables de entorno | Manejo de errores |
|---|---|---|---|---|
| WhatsApp (wa.me) | CTA de reservas | Siempre visible (navbar, footer, hero) | `NEXT_PUBLIC_WHATSAPP_NUMBER` | Ninguno necesario (es un link estático, no una llamada de API) |
| Menú digital existente | Fase V1 — enlace cruzado | Se añade cuando el cliente confirme integración | — (se define en V1) | — |
| Sistema de fidelización (QR/ruleta) | Fase V1 — banner o link | Se añade cuando el cliente confirme integración | — (se define en V1) | — |

---

## 12. Variables de entorno

| Variable | Dónde se obtiene | Pública/Privada | Ejemplo |
|---|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp Business de La Travesía | Pública | `593999999999` |
| `NEXT_PUBLIC_SITE_URL` | Dominio final (a definir tras este boceto) | Pública | `https://latravesia.com` |

No se requieren variables privadas en el MVP (sin backend ni servicios de terceros con API key).

---

## 13. Orden de construcción — Plan de fases

### Fase 0 — Setup
- [ ] Crear repo Next.js 14 con App Router + TypeScript
- [ ] Instalar y configurar Tailwind CSS con los design tokens de la sección 8
- [ ] Instalar y configurar next-intl con rutas `/es` y `/en`
- [ ] Crear estructura de carpetas exacta de la sección 3
- [ ] Configurar `middleware.ts` para detección de locale

### Fase 1 — MVP funcional
- [ ] Construir `Navbar`, `Footer`, `LanguageSwitch`, `WhatsAppButton`
- [ ] Construir Home completo: `Hero`, `MenuPreview`, `GranjaTeaser`
- [ ] Poblar `data/menu.ts` con 4-6 platos destacados (placeholder de imágenes hasta tener fotos reales)
- [ ] Construir página `/granja` con los 3 bloques narrativos
- [ ] Poblar `data/granja-content.ts` en ES y EN
- [ ] Construir página `/galeria` con `GaleriaGrid` + lightbox
- [ ] Poblar `data/galeria.ts`
- [ ] Traducir todos los strings de UI a `messages/es.json` y `messages/en.json`
- [ ] Deploy inicial a Vercel (preview URL, sin dominio aún)

**Criterio de "MVP completo"**: las 3 páginas navegables en ambos idiomas, con imágenes placeholder, botón WhatsApp funcional, responsive mobile-first.

### Fase 2 — V1 completa
- [ ] Reemplazar imágenes placeholder por fotografía/producción real
- [ ] Integrar enlace/banner al menú digital existente
- [ ] Integrar enlace/banner al sistema de fidelización (QR/ruleta)
- [ ] Conectar dominio final en Vercel
- [ ] Optimización SEO básica (metadata, sitemap, Open Graph para compartir en redes)

### Fase 3 — Mejoras
- [ ] Evaluar si el volumen de contenido justifica un panel admin simple (Supabase + tabla de galería)
- [ ] Analytics (Vercel Analytics o similar)
- [ ] Animaciones de scroll con Framer Motion si se decide sumar polish adicional

---

## 14. Zonas de riesgo y decisiones críticas

- **Riesgo bajo en general**: al no tener backend ni base de datos, el mayor riesgo técnico desaparece. El verdadero riesgo de este proyecto es **de contenido**, no de código: si las fotos no son de alta calidad y coherentes con el ángulo narrativo (tradición + sistema + transparencia), el sitio pierde su propuesta de valor aunque el código esté perfecto.
- **Decisión que no debe cambiar a mitad de proyecto**: el orden narrativo Tradición → Sistema → Manejo en la página Granja. Cambiarlo a mitad de implementación reabre el riesgo de "doble moral" que ya se resolvió en la fase de estrategia.
- **Dependencia externa única**: el link de WhatsApp depende de que el número esté correctamente configurado como WhatsApp Business; verificar antes de lanzar.
- **Cuello de botella previsible**: la producción fotográfica real. El plan de fases asume que se puede lanzar con placeholders y reemplazar después — esto evita bloquear el desarrollo esperando fotos.

---

## 15. Convenciones de código

- **Archivos**: kebab-case para archivos que no son componentes (`granja-content.ts`), PascalCase para componentes (`GranjaTeaser.tsx`)
- **Componentes**: un componente por archivo, exportación default, props tipadas con `interface` explícita arriba del componente
- **Datos editoriales**: siempre en `/data`, tipados con TypeScript, nunca strings sueltos dentro de JSX
- **Traducciones**: siempre vía `next-intl` (`useTranslations`), nunca texto hardcodeado en componentes de UI (los textos largos de Granja pueden vivir en `data/granja-content.ts` con su propia estructura `{es: string, en: string}` si no encajan bien en el formato de `messages/*.json`)
- **Imágenes**: siempre vía `next/image`, siempre con `alt` descriptivo (importante también para SEO y accesibilidad)
- **Comentarios**: solo donde la intención no es obvia (ej. por qué el orden de los bloques en Granja es fijo) — no comentar lo evidente

---

## 16. Checklist de construcción

**Setup**
- [ ] Repo creado con Next.js 14 + TypeScript + Tailwind
- [ ] next-intl configurado con rutas es/en funcionando

**Contenido**
- [ ] `data/menu.ts` con 4-6 platos
- [ ] `data/granja-content.ts` con los 3 bloques en ambos idiomas
- [ ] `data/galeria.ts` con set inicial de imágenes
- [ ] `messages/es.json` y `messages/en.json` completos

**Páginas**
- [ ] Home completo y responsive
- [ ] Granja completo y responsive
- [ ] Galería completo con lightbox funcional

**Componentes**
- [ ] Navbar + Footer + LanguageSwitch en todas las páginas
- [ ] WhatsAppButton funcional (abre wa.me con número correcto)

**Deploy**
- [ ] Deploy preview en Vercel
- [ ] Revisión mobile real (no solo devtools)
- [ ] Validación de que las traducciones ES/EN no dejan texto sin traducir

**Lanzamiento**
- [ ] Dominio conectado (cuando esté listo)
- [ ] Open Graph / metadata para compartir en redes sociales
