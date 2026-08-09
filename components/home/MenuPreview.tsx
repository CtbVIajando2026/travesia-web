'use client';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const FEATURED = [
  {
    id: 'cuy',
    emoji: '🐾',
    esName: 'Cuy Asado',
    enName: 'Traditional Roasted Guinea Pig',
    esDesc: 'Papas doradas, arroz, mote y ají de la huerta.',
    enDesc: 'Golden potatoes, rice, hominy and garden hot sauce.',
    tag: 'Ícono',
  },
  {
    id: 'mix',
    emoji: '🍖',
    esName: 'Mix Tres Carnes',
    enName: 'Three Meat Mix',
    esDesc: 'Moro de lenteja, lomo fino, pollo y cerdo a la parrilla.',
    enDesc: 'Lentil rice, tenderloin, chicken and grilled pork.',
    tag: 'Especialidad',
  },
  {
    id: 'filet',
    emoji: '🥩',
    esName: 'Filet Mignon',
    enName: 'Filet Mignon',
    esDesc: 'Salsa de champiñones al vino tinto y puré artesanal.',
    enDesc: 'Mushroom red wine sauce and artisanal mashed potatoes.',
    tag: 'Premium',
  },
  {
    id: 'cordon',
    emoji: '🍗',
    esName: 'Cordon Bleu',
    enName: 'Cordon Bleu',
    esDesc: 'Pechuga rellena de queso mozzarella y jamón.',
    enDesc: 'Chicken breast stuffed with mozzarella and ham.',
    tag: 'Clásico',
  },
];

export default function MenuPreview() {
  const t = useTranslations('Home.MenuPreview');
  const locale = useLocale();

  return (
    <section id="menu" className="py-24 bg-cream scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-4">
            {t('subtitle')}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-forest-dark">
            {t('title')}
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Cards — CSS animation, sin Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED.map((item, i) => (
            <div
              key={item.id}
              className="group bg-cream-warm border border-gold/15 hover:border-gold/50 rounded-sm p-7 flex flex-col gap-4 transition-all duration-300 hover:shadow-md"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="font-sans text-[10px] tracking-widest uppercase text-gold border border-gold/40 px-2 py-1 rounded-sm">
                  {item.tag}
                </span>
              </div>
              <div className="w-8 h-[1px] bg-gold/40 group-hover:w-14 transition-all duration-500" />
              <h3 className="font-playfair text-xl text-forest-dark group-hover:text-gold transition-colors duration-300">
                {locale === 'es' ? item.esName : item.enName}
              </h3>
              <p className="font-sans text-xs text-forest-mid leading-relaxed flex-1">
                {locale === 'es' ? item.esDesc : item.enDesc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href={`/${locale}/menu`}
            className="inline-flex items-center justify-center px-10 py-4 font-sans font-light text-xs tracking-[0.2em] text-forest-dark border border-forest-mid hover:border-gold hover:text-gold transition-colors duration-300 uppercase"
          >
            {t('seeFullMenu')}
          </Link>
        </div>
      </div>
    </section>
  );
}
