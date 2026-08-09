'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GRANJA_PHOTOS = [
  { id: 1, url: '/images/galeria/granja/3.jpg',  label: 'Caballo Blanco',      sublabel: 'Experiencia de cabalgata en la finca' },
  { id: 2, url: '/images/galeria/granja/8.jpg',  label: 'Cabalgata',            sublabel: 'Quingeo, Cuenca · Ecuador' },
  { id: 3, url: '/images/galeria/granja/1.jpg',  label: 'Cuyes',                sublabel: 'Criados en nuestra propia granja' },
  { id: 4, url: '/images/galeria/granja/4.jpg',  label: 'Cerdos de Crianza',    sublabel: 'Sin hacinamiento, en corral abierto' },
  { id: 5, url: '/images/galeria/granja/2.jpg',  label: 'Llamas',               sublabel: 'Parte de la vida en la finca' },
  { id: 6, url: '/images/galeria/granja/9.jpg',  label: 'Gansos',               sublabel: 'La biodiversidad de La Travesía' },
];

export default function GranjaGaleria({ locale }: { locale: string }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-4 block">
            {locale === 'es' ? 'La Granja en imágenes' : 'Farm Gallery'}
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-forest-dark mb-6">
            {locale === 'es' ? 'Los animales de La Travesía' : 'A living farm, a real ecosystem'}
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GRANJA_PHOTOS.map((photo, idx) => (
            <div
              key={photo.id}
              className={`relative overflow-hidden cursor-pointer group rounded-sm ${
                idx === 0 ? 'col-span-2 md:col-span-1 row-span-2 aspect-[3/4]' : 'aspect-square'
              }`}
              onClick={() => setLightbox(photo.url)}
            >
              <Image
                src={photo.url}
                alt={photo.label}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading={idx < 2 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="font-playfair text-lg text-cream-warm leading-tight">{photo.label}</p>
                <p className="font-sans text-[10px] text-beige/80 uppercase tracking-wider mt-1">{photo.sublabel}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href={`/${locale}/galeria`}
            className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] text-forest-dark border border-forest-mid hover:border-gold hover:text-gold px-10 py-4 transition-all duration-300"
          >
            {locale === 'es' ? 'Ver Galería Completa' : 'View Full Gallery'}
          </Link>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-forest-dark/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream hover:text-gold transition-colors text-4xl font-light"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            aria-label="Cerrar"
          >
            &times;
          </button>
          <div className="relative max-h-[90vh] cursor-default" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox} alt="La Granja La Travesía" width={1200} height={900} className="object-contain max-h-[90vh] w-auto shadow-2xl rounded-sm" priority />
          </div>
        </div>
      )}
    </section>
  );
}
