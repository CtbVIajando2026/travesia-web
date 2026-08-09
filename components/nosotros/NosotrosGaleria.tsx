import React from 'react';
import Image from 'next/image';

const FOTOS = [
  { url: "/images/galeria/restaurante/5.jpg",  label: "El Restaurante", sub: "Cocina de campo con alma andina" },
  { url: "/images/galeria/restaurante/3.jpg",  label: "El Kiosco",      sub: "Ambiente único bajo techo de paja" },
  { url: "/images/galeria/restaurante/4.jpg",  label: "La Campiña",     sub: "Vista al jardín y los cerros" },
  { url: "/images/galeria/granja/3.jpg",       label: "La Granja",      sub: "Origen de cada ingrediente" },
  { url: "/images/galeria/hospedaje/9.jpg",    label: "El Hospedaje",   sub: "Suite con vista al campo" },
  { url: "/images/galeria/granja/8.jpg",       label: "Cabalgata",      sub: "Experiencias en la finca" },
];

export default function NosotrosGaleria() {
  return (
    <section className="py-24 px-6 bg-forest-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-4 block">
            En imágenes
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-cream-warm mb-6">
            La Travesía en cada rincón
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {FOTOS.map((foto, i) => (
            <div key={i} className="relative overflow-hidden rounded-sm group aspect-square">
              <Image
                src={foto.url}
                alt={foto.label}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="font-playfair text-lg text-cream-warm">{foto.label}</p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-beige/80 mt-1">{foto.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
