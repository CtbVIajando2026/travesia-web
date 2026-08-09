import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, className = '', light = false }: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      {subtitle && (
        <span className={`block font-cormorant text-xl md:text-2xl italic mb-4 ${light ? 'text-beige' : 'text-forest-mid'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-playfair text-4xl md:text-5xl ${light ? 'text-cream' : 'text-forest-dark'}`}>
        {title}
      </h2>
    </div>
  );
}
