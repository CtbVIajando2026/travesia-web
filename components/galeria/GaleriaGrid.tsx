'use client';
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { galleryImages } from '@/data/galeria';

type Category = 'all' | 'restaurante' | 'granja' | 'hospedaje';

const FILTERS: { key: Category; labelKey: string }[] = [
  { key: 'all',         labelKey: 'filterAll' },
  { key: 'restaurante', labelKey: 'filterRestaurante' },
  { key: 'granja',      labelKey: 'filterGranja' },
  { key: 'hospedaje',   labelKey: 'filterHospedaje' },
];

export default function GaleriaGrid() {
  const t = useTranslations('Galeria');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [visible, setVisible] = useState(true);

  const filtered = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  // Fade-out → filter → fade-in cuando cambia el filtro
  function changeFilter(key: Category) {
    if (key === activeFilter) return;
    setVisible(false);
    setTimeout(() => {
      setActiveFilter(key);
      setVisible(true);
    }, 180);
  }

  // Cerrar lightbox con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedImage(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="pb-24 bg-cream">

      {/* Filter Bar */}
      <div className="sticky top-20 z-30 bg-cream border-b border-forest-mid/10 shadow-sm mb-12">
        <div className="max-w-7xl mx-auto px-6 flex justify-start md:justify-center gap-2 md:gap-6 h-14 items-center overflow-x-auto scrollbar-none whitespace-nowrap">
          {FILTERS.map(({ key, labelKey }) => (
            <button
              key={key}
              onClick={() => changeFilter(key)}
              className={[
                'relative px-4 py-3 font-sans text-xs uppercase tracking-widest font-semibold transition-colors duration-200',
                activeFilter === key ? 'text-forest-dark' : 'text-forest-mid/80 hover:text-forest-mid',
              ].join(' ')}
            >
              {t(labelKey)}
              {/* Underline activo — CSS puro */}
              <span
                className={[
                  'absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full transition-opacity duration-200',
                  activeFilter === key ? 'opacity-100' : 'opacity-0',
                ].join(' ')}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-opacity duration-200"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {filtered.map((img, i) => (
            <div
              key={img.id}
              className="aspect-square cursor-pointer overflow-hidden group bg-beige relative rounded-sm"
              onClick={() => setSelectedImage(img.url)}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <Image
                src={img.url}
                alt={t(`alts.${img.altKey}`)}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading={i < 4 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/30 transition-colors duration-300 flex items-end p-4">
                <span className="text-cream font-sans text-[11px] uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {t(`alts.${img.altKey}`)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox — CSS puro */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-forest-dark/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream hover:text-gold transition-colors text-4xl font-light leading-none"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            aria-label="Cerrar"
          >
            &times;
          </button>
          <div
            className="relative max-w-full max-h-[90vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Galería La Travesía"
              width={1200}
              height={900}
              className="object-contain shadow-2xl rounded-sm max-h-[90vh] w-auto"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
