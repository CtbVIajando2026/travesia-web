'use client';
import React from 'react';

export default function ComoLlegar({ locale }: { locale: string }) {
  const isEs = locale === 'es';

  return (
    <section className="py-20 bg-forest-dark text-cream px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-gold mb-4">
            {isEs ? 'Ubicación' : 'Getting Here'}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-cream-warm mb-4">
            {isEs ? '¿Cómo llegar a Quingeo?' : 'How to Get to Quingeo?'}
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
        </div>

        <div className="bg-forest/60 border border-gold/20 rounded-sm p-8 md:p-12">
          <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-bold mb-6">
            {isEs ? 'Desde Cuenca' : 'From Cuenca'}
          </h3>

          <p className="font-cormorant text-xl md:text-2xl text-cream-warm leading-relaxed mb-8 font-light">
            {isEs
              ? 'Sal desde Gapal y continúa por El Valle → Santa Ana → Dizhá → Cochapamba → Quingeo. Sigue la vía principal y las señalizaciones hasta llegar al centro parroquial de San Pedro de Quingeo.'
              : 'Leave from Gapal and continue through El Valle → Santa Ana → Dizhá → Cochapamba → Quingeo. Follow the main road and signs to the parish center of San Pedro de Quingeo.'}
          </p>

          <div className="flex items-center gap-4 border-t border-gold/20 pt-6">
            <span className="text-xl">🚗</span>
            <p className="font-sans text-sm text-cream/80">
              {isEs
                ? 'Tiempo estimado: 35–40 minutos, según el punto de partida.'
                : 'Estimated time: 35–40 minutes, depending on your starting point.'}
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="font-playfair text-2xl text-gold italic">
              {isEs ? '¡Te esperamos en Quingeo!' : 'We look forward to seeing you in Quingeo!'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
