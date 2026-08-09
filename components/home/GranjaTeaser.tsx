import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function GranjaTeaser({ locale }: { locale: string }) {
  const t = useTranslations('Home.GranjaTeaser');

  return (
    <section className="bg-cream-warm py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Imagen Editorial */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm order-2 lg:order-1 group">
            <div className="absolute inset-0 bg-forest/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
            <Image
              src="/images/galeria/granja/3.jpg"
              alt="Caballo blanco en La Granja La Travesía"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>

          {/* Texto Minimalista */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-6">
              El Origen
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-forest-dark mb-8 leading-tight">
              {t('title')}
            </h2>
            <div className="w-16 h-[1px] bg-gold mb-10 lg:ml-0 mx-auto"></div>
            
            <Link 
              href={`/${locale}/granja`}
              className="group relative inline-flex items-center justify-center px-10 py-4 font-sans font-light text-xs tracking-[0.2em] text-forest-dark border border-forest-mid hover:border-gold transition-colors duration-500 overflow-hidden"
            >
              <span className="relative z-10 uppercase group-hover:text-gold transition-colors duration-500">{t('cta')}</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
