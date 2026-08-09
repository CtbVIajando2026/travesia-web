import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function RestaurantIntro({ locale }: { locale?: string }) {
  const t = useTranslations('Home.RestaurantIntro');
  const loc = locale ?? 'es';

  return (
    <section className="py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-6 block">
          {loc === 'es' ? 'Restaurante de Campo' : 'Country Restaurant'}
        </span>
        <h2 className="font-playfair text-5xl md:text-6xl text-forest-dark mb-10">
          {t('title')}
        </h2>
        <div className="w-[1px] h-16 bg-gold mx-auto mb-10"></div>
        <p className="font-cormorant text-3xl md:text-4xl text-forest italic leading-relaxed font-light mb-14">
          {t('description')}
        </p>
        <Link
          href={`/${loc}/restaurante`}
          className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] text-forest-dark border border-forest-mid hover:border-gold hover:text-gold px-10 py-4 transition-all duration-500"
        >
          {loc === 'es' ? 'Conocer el Restaurante' : 'Discover the Restaurant'}
        </Link>
      </div>
    </section>
  );
}
