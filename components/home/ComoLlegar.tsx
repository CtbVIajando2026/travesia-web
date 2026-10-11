'use client';
import React from 'react';

export default function ComoLlegar({ locale }: { locale: string }) {
  const isEs = locale === 'es';

  return (
    <section className="py-20 bg-forest-dark text-cream px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-gold mb-4">
            {isEs ? 'Ubicación' : 'Getting Here'}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-cream-warm mb-4">
            {isEs ? '¿Cómo llegar a Quingeo?' : 'How to get to Quingeo'}
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
        </div>

        <div className="bg-forest/60 border border-gold/20 rounded-sm p-8 md:p-12">
          <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-bold mb-6">
            {isEs ? 'Desde Cuenca' : 'From Cuenca'}
          </h3>

          <p className="font-cormorant text-xl md:text-2xl text-cream-warm leading-relaxed mb-8 font-medium">
            {isEs
              ? 'Desde Gapal, toma la vía por El Valle → Santa Ana → Dizhá → Cochapamba → Quingeo. Sigue la carretera principal y las señales hasta el centro parroquial de San Pedro de Quingeo. ¡El paisaje del camino ya es parte del paseo!'
              : 'From Gapal, take the road through El Valle → Santa Ana → Dizhá → Cochapamba → Quingeo. Follow the main road and signs to the parish center of San Pedro de Quingeo. The scenery on the way is part of the trip!'}
          </p>

          <div className="flex items-center gap-4 border-t border-gold/20 pt-6">
            <span className="text-xl" aria-hidden="true">🚗</span>
            <p className="font-sans text-sm text-cream/80">
              {isEs
                ? 'Unos 35–40 minutos en auto, según desde dónde salgas.'
                : 'About 35–40 minutes by car, depending on where you start.'}
            </p>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <span className="text-xl" aria-hidden="true">🕗</span>
            <p className="font-sans text-sm text-cream/80">
              {isEs
                ? 'Abrimos de jueves a domingo, de 9:00 a 18:00.'
                : 'Open Thursday to Sunday, 9 am to 6 pm.'}
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://maps.app.goo.gl/68FWfLpcQDAZgxir9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold hover:bg-gold-light text-forest-dark font-sans text-xs uppercase tracking-widest font-bold transition-colors"
            >
              {isEs ? 'Abrir ruta en Google Maps' : 'Open route in Google Maps'} →
            </a>
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
