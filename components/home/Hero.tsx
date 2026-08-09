'use client';
import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

type Panel = 'restaurant' | 'farm' | 'lodging';

const PANELS: { id: Panel; img: string; titleKey: string; actionKey: string; href: string; priority: boolean }[] = [
  { id: 'restaurant', img: '/images/galeria/restaurante/4.jpg', titleKey: 'restaurantTitle', actionKey: 'restaurantAction', href: 'restaurante', priority: true },
  { id: 'farm',       img: '/images/galeria/granja/3.jpg',      titleKey: 'farmTitle',       actionKey: 'farmAction',       href: 'granja',     priority: false },
  { id: 'lodging',    img: '/images/galeria/hospedaje/9.jpg',   titleKey: 'lodgingTitle',    actionKey: 'lodgingAction',    href: 'hospedaje',  priority: false },
];

export default function Hero() {
  const t = useTranslations('Home.Hero');
  const locale = useLocale();
  const [hovered, setHovered] = useState<Panel | null>(null);

  return (
    <section className="relative h-screen min-h-[650px] w-full bg-forest-dark flex flex-col md:flex-row overflow-hidden">
      {/* Tagline central */}
      <div className="absolute top-24 md:top-32 left-0 w-full z-20 text-center px-4 pointer-events-none">
        <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl text-cream-warm drop-shadow-md">
          {t('title')}
        </h1>
        <p className="font-cormorant text-lg md:text-2xl text-beige mt-4 max-w-2xl mx-auto italic drop-shadow">
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
              'relative flex items-center justify-center cursor-pointer overflow-hidden',
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
              priority={panel.priority}
            />

            {/* Overlay */}
            <div
              className={[
                'absolute inset-0 transition-opacity duration-500',
                isHovered ? 'bg-forest-dark/40' : 'bg-forest-dark/60',
              ].join(' ')}
            />

            {/* Contenido */}
            <div className="relative z-10 text-center mt-12 md:mt-24 flex flex-col items-center px-4">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-cream-warm mb-6 font-bold tracking-wider">
                {t(panel.titleKey)}
              </h2>
              <div
                className={[
                  'transition-all duration-300',
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-2',
                ].join(' ')}
              >
                <Link
                  href={`/${locale}/${panel.href}`}
                  className="inline-block px-8 py-3 border border-cream/40 text-cream font-sans font-light uppercase tracking-[0.2em] text-[10px] md:text-xs hover:border-gold hover:text-gold transition-colors duration-300 backdrop-blur-sm bg-forest-dark/10"
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
