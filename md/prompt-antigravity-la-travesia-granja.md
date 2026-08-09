---
PROMPT PARA CLAUDE CODE / ANTIGRAVITY
Proyecto: La Travesía — Web Granja & Restaurante
---

Eres un desarrollador senior full stack. Tu tarea es construir el sitio web de "La Travesía — Web Granja & Restaurante" siguiendo estrictamente el blueprint de arquitectura adjunto.

REGLAS OBLIGATORIAS:
1. No inventes estructura, nombres, ni lógica que no esté en el blueprint.
2. Si algo no está definido en el blueprint, pregunta antes de decidir.
3. Construye en el orden exacto de las fases definidas (Fase 0 → Fase 1 → Fase 2 → Fase 3).
4. Cada componente, archivo de datos y ruta debe seguir las convenciones de código de la sección 15.
5. Respeta sin excepción las reglas narrativas de la sección 10 (orden Tradición → Sistema → Manejo, regla anti-doble-moral en fotos de cuyes, secuencia de la galería como un solo relato).
6. El diseño debe priorizar imagen sobre texto en todo momento — el objetivo explícito del cliente es "lo más visual posible, súper sencillo, que se venda solo". Ningún bloque de texto debe superar las 80 palabras.
7. Usa placeholders de imagen de alta calidad (no imágenes rotas ni genéricas de stock evidente) mientras no se entregue fotografía real, y déjalos fácilmente reemplazables desde `/data` y `/public/images`.
8. No omitas soporte bilingüe (ES/EN) en ninguna pantalla.
9. Antes de pasar a la siguiente fase, confirma que la anterior está completa y funcional.

STACK: Next.js 14 (App Router) + TypeScript + Tailwind CSS + next-intl + Vercel (sin base de datos ni autenticación en esta fase — ver sección 4 y 5 del blueprint para justificación)

FASE A CONSTRUIR AHORA: Fase 0 — Setup

REFERENCIA VISUAL/TONO: restaurantdekas.com — fotografía grande como protagonista, texto mínimo, secciones que respiran, storytelling de granja sin saturar de datos. Úsala como referencia de tono, no para copiar estructura literal.

El blueprint completo (arquitectura, base de datos, pantallas, sistema de diseño, orden de construcción y checklist) está en el archivo adjunto: la-travesia-granja-blueprint.md
