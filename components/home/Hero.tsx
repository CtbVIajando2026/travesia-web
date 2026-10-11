'use client';
import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

type Panel = 'restaurant' | 'farm' | 'lodging';

const PANELS: { id: Panel; img: string; titleKey: string; actionKey: string; href: string }[] = [
  { id: 'restaurant', img: '/images/galeria/restaurante/4.jpg', titleKey: 'restaurantTitle', actionKey: 'restaurantAction', href: 'restaurante', },
  { id: 'farm',       img: '/images/galeria/granja/3.jpg',      titleKey: 'farmTitle',       actionKey: 'farmAction',       href: 'granja',     },
  { id: 'lodging',    img: '/images/galeria/hospedaje/9.jpg',   titleKey: 'lodgingTitle',    actionKey: 'lodgingAction',    href: 'hospedaje',  },
];

export default function Hero() {
  const t = useTranslations('Home.Hero');
  const locale = useLocale();
  const [hovered, setHovered] = useState<Panel | null>(null);

  return (
    <section className="relative min-h-[100svh] md:h-screen md:min-h-[650px] w-full bg-forest-dark flex flex-col md:flex-row overflow-hidden">
      {/* Tagline: en móvil va en su propio bloque (antes se montaba sobre el primer panel); en desktop flota arriba */}
      <div className="relative md:absolute md:top-32 left-0 w-full z-20 text-center px-6 pt-28 pb-8 md:p-0 pointer-events-none">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-cream-warm drop-shadow-md">
          {t('title')}
        </h1>
        <p className="font-cormorant text-xl md:text-2xl text-beige mt-3 md:mt-4 max-w-2xl mx-auto italic drop-shadow font-medium">
          {t('subtitle')}
        </p>
      </div>

      {PANELS.map((panel, i) => {
        const isHovered = hovered === panel.id;
        const isOtherHovered = hovered !== null && !isHovered;

        return (
          <div
            key={panel.id}
            className={[
              'relative flex items-center justify-center overflow-hidden min-h-[26svh] md:min-h-0',
              'border-b border-forest-mid/30 md:border-b-0',
              i < PANELS.length - 1 ? 'md:border-r border-forest' : '',
              // CSS flex transition — sin Framer Motion
              'transition-[flex] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
            ].join(' ')}
            style={{ flex: isHovered ? 1.5 : isOtherHovered ? 0.75 : 1 }}
            onMouseEnter={() => setHovered(panel.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Imagen — next/image optimizada */}
            <Image
              src={panel.img}
              alt={t(panel.titleKey)}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={[
                'object-cover transition-transform duration-700 ease-out',
                isHovered ? 'scale-105' : 'scale-100',
              ].join(' ')}
              priority
            />

            {/* Overlay */}
            <div
              className={[
                'absolute inset-0 transition-opacity duration-500',
                isHovered ? 'bg-forest-dark/40' : 'bg-forest-dark/60',
              ].join(' ')}
            />

            {/* Todo el panel es clicable (antes tenía cursor de mano pero solo funcionaba el botón) */}
            <Link
              href={`/${locale}/${panel.href}`}
              aria-hidden="true"
              tabIndex={-1}
              className="absolute inset-0 z-[5]"
            />

            {/* Contenido */}
            <div className="relative z-10 text-center md:mt-24 flex flex-col items-center px-4 py-6 pointer-events-none">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-cream-warm mb-4 md:mb-6 font-semibold tracking-wide">
                {t(panel.titleKey)}
              </h2>
              <div
                className={[
                  'transition-all duration-300',
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-100 md:opacity-70 md:translate-y-2',
                ].join(' ')}
              >
                <Link
                  href={`/${locale}/${panel.href}`}
                  className="pointer-events-auto inline-block px-8 py-3 border border-cream/60 text-cream font-sans font-medium uppercase tracking-[0.2em] text-[11px] md:text-xs hover:border-gold hover:text-gold transition-colors duration-300 backdrop-blur-sm bg-forest-dark/20"
                >
                  {t(panel.actionKey)}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
