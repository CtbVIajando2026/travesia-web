import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { granjaBlocks } from '@/data/granja-content';

export default function SistemaBlock() {
  const t = useTranslations('Granja');
  const block = granjaBlocks.find(b => b.id === 'sistema');

  if (!block) return null;

  return (
    <section className="py-24 md:py-32 bg-cream-pale">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:pr-12 text-center md:text-left">
          <h2 className="font-playfair text-4xl md:text-5xl text-forest-dark mb-6">
            {t(block.titleKey)}
          </h2>
          <div className="w-12 h-1 bg-moss mb-8 mx-auto md:mx-0"></div>
          <p className="font-sans text-lg text-forest-mid leading-relaxed">
            {t(block.textKey)}
          </p>
        </div>
        <div>
          <Image
            src={block.image}
            alt={t(block.titleKey)}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-cover rounded-sm shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
