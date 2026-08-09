# La Travesía — Carta de Diseño (Web Granja & Restaurante)
> Basada en la paleta real ya en uso en el menú digital de La Travesía. Referencia de tono visual: restaurantdekas.com (fotografía grande, texto mínimo, secciones que respiran).

---

## 1. Logo

Ubicación en el proyecto: `assets/images/logo/`
- Usar el isotipo (marca circular con la casa y el paisaje) en fondo oscuro (forest) para navbar y footer — así se lee como en el menú digital actual.
- Versión wordmark completa ("Hostería-Campiña La Travesía · Sumag Kiti") solo en el hero de Inicio, una vez. No repetir el wordmark completo en cada sección — con el isotipo alcanza para mantener presencia de marca sin saturar.

---

## 2. Paleta de colores

Extraída directamente del código del menú digital existente (no es una paleta nueva — es continuidad de marca):

| Nombre | Hex | Rol en el sitio de la granja |
|---|---|---|
| `--forest-dark` | `#0a1a0a` | Fondo de secciones full-bleed más oscuras (hero, cierre de página) |
| `--forest` | `#1a2f1a` | Color base de marca — fondos oscuros, navbar, footer |
| `--forest-mid` | `#2D4A2D` | Punto medio en degradados de fondo (transiciones entre secciones) |
| `--moss` | `#5a8a5a` | Acento secundario — íconos, detalles pequeños, nunca como color dominante |
| `--gold` | `#C5993A` | Acento principal — CTA (botón WhatsApp), líneas divisorias, detalles destacados |
| `--gold-light` | `#d4ad5a` | Degradado hacia el dorado (bordes, hover) |
| `--gold-pale` | `#e8c96e` | Variante clara del dorado, uso muy puntual |
| `--cream` | `#F5EFE0` | Fondo de secciones claras, texto principal sobre fondo oscuro |
| `--cream-warm` | `#fdf0da` | Logo/isotipo sobre fondo oscuro |
| `--beige` | `#E8DCC8` | Texto secundario/descripciones sobre fondo oscuro |
| `--cream-pale` | `#faf7f0` | Fondo alterno muy claro, para respirar entre bloques de foto |

**Regla de uso**: forest y cream son los únicos fondos permitidos (alternados por sección, nunca mezclados dentro de un mismo bloque). Gold es exclusivamente para jerarquía — CTA, precios/destacados, detalles — nunca como color de fondo grande. Moss se usa con moderación, solo en íconos o acentos pequeños relacionados a la granja/naturaleza.

---

## 3. Tipografía

Mismas familias que el menú digital, para que ambos sitios se sientan de la misma marca:

- **Playfair Display** (700/900) — títulos de sección y nombres destacados ("La Granja", "Nuestra Tierra"). Tono editorial, con presencia.
- **Cormorant Garamond** (400/600/700, itálica disponible) — subtítulos y textos cortos de acompañamiento ("Criado con respeto, servido con gratitud"). Da el tono cálido/ancestral.
- **DM Sans** (400–700) — cuerpo de texto general, navegación, botones. Es la que aporta legibilidad moderna frente a las dos serifs.

Regla: nunca más de dos familias visibles en una misma sección (una serif de título + DM Sans de apoyo). Cormorant se reserva para frases cortas tipo cita, no para párrafos largos.

---

## 4. Cómo se traduce esto al ángulo narrativo (tradición + sistema + transparencia)

- **Tradición**: Playfair Display + fondo forest oscuro + dorado en los detalles — mismo lenguaje visual que ya usa el menú para "Platos Fuertes / Nuestra Tierra". Continuidad total.
- **Sistema agroecológico**: fondo cream/cream-pale, dejando que la fotografía de la huerta y la granja sea protagonista sobre un fondo claro y limpio — el moss aparece aquí como acento natural.
- **Manejo/transparencia**: mismo patrón que el menú digital para las descripciones — beige sobre forest, tono directo, sin adornos.

---

## 5. Referencia de tono (no de paleta)

restaurantdekas.com sigue siendo la referencia de *composición*: fotografía grande primero, texto breve después, mucho espacio entre secciones. La diferencia es que en vez de su paleta neutra, todo ese mismo esqueleto visual se llena con los colores de La Travesía (forest/gold/cream) para que el sitio de la granja se sienta como una extensión natural del menú digital ya existente, no como una marca nueva.
