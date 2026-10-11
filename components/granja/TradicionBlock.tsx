import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { granjaBlocks } from '@/data/granja-content';

export default function TradicionBlock() {
  const t = useTranslations('Granja');
  const block = granjaBlocks.find(b => b.id === 'tradicion');

  if (!block) return null;

  return (
    <section className="py-24 md:py-32 bg-forest-dark">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <Image
            src={block.image}
            alt={t(block.titleKey)}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-cover rounded-sm border-l-4 border-gold"
            loading="lazy"
          />
        </div>
        <div className="order-1 md:order-2 md:pl-12">
          <h2 className="font-playfair text-4xl md:text-5xl text-gold mb-6">
            {t(block.titleKey)}
          </h2>
          <div className="w-12 h-px bg-gold mb-8"></div>
          <p className="font-cormorant text-xl md:text-2xl text-cream-warm leading-relaxed font-medium">
            {t(block.textKey)}
          </p>
        </div>
      </div>
    </section>
  );
}
