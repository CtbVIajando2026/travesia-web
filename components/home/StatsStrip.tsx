import React from 'react';

const STATS = [
  { number: "35 min", label: "desde el centro de Cuenca", es: "desde el centro de Cuenca", en: "from Cuenca's city center" },
  { number: "4,8 ★", numberEn: "4.8 ★", label: "en Google Maps", es: "valoración en Google Maps", en: "rating on Google Maps" },
  { number: "3 en 1", numberEn: "3 in 1", label: "Restaurante · Granja · Hospedaje", es: "Restaurante · Granja · Hospedaje", en: "Restaurant · Farm · Lodging" },
  { number: "Km 0", label: "cuy, gallina y huerta de casa", es: "cuy, gallina y huerta de casa", en: "our own cuy, hens and garden" },
];

export default function StatsStrip({ locale }: { locale: string }) {
  const isEs = locale === 'es';
  return (
    <section className="bg-forest text-cream py-16 px-6 border-t border-b border-gold/20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
        {STATS.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <span className="font-playfair text-3xl md:text-4xl text-gold font-bold">{isEs ? stat.number : (stat.numberEn ?? stat.number)}</span>
            <div className="w-6 h-[1px] bg-gold/40 mx-auto"></div>
            <span className="font-sans text-[11px] md:text-[11px] uppercase tracking-widest text-cream/75 leading-tight max-w-[120px]">
              {isEs ? stat.es : stat.en}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
