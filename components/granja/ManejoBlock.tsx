import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { granjaBlocks } from '@/data/granja-content';

export default function ManejoBlock() {
  const t = useTranslations('Granja');
  const block = granjaBlocks.find(b => b.id === 'manejo');

  if (!block) return null;

  return (
    <section className="py-24 md:py-32 bg-forest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1">
          <Image
            src={block.image}
            alt={t(block.titleKey)}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-cover rounded-sm grayscale-[30%]"
            loading="lazy"
          />
        </div>
        <div className="order-1 md:order-2 md:pl-12">
          <h2 className="font-sans font-bold text-sm tracking-widest uppercase text-gold mb-4">
            {t(block.titleKey)}
          </h2>
          <p className="font-sans text-lg md:text-xl text-beige leading-relaxed max-w-lg">
            {t(block.textKey)}
          </p>
        </div>
      </div>
    </section>
  );
}
