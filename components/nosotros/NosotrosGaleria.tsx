import React from 'react';
import Image from 'next/image';

const FOTOS = [
  { url: "/images/galeria/restaurante/5.jpg", es: ["El restaurante", "Cocina de campo con sabor de casa"], en: ["The Restaurant", "Country cooking with a homestyle taste"] },
  { url: "/images/galeria/restaurante/3.jpg", es: ["El kiosco", "Bajo techo de paja"], en: ["The Kiosk", "Under a thatched roof"] },
  { url: "/images/galeria/restaurante/4.jpg", es: ["La campiña", "Jardín y cerros alrededor"], en: ["The Countryside", "Garden and hill views"] },
  { url: "/images/galeria/granja/3.jpg", es: ["La granja", "Vida de campo todos los días"], en: ["The Farm", "Country life every day"] },
  { url: "/images/galeria/hospedaje/9.jpg", es: ["El hospedaje", "Habitaciones con vista al campo"], en: ["Lodging", "Rooms with countryside views"] },
  { url: "/images/galeria/granja/8.jpg", es: ["Cabalgata", "Experiencias en la finca"], en: ["Horseback riding", "Experiences on the farm"] },
];

export default function NosotrosGaleria({ locale = 'es' }: { locale?: string }) {
  const isEs = locale !== 'en';
  return (
    <section className="py-24 px-6 bg-forest-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-sans text-xs font-bold text-gold uppercase tracking-[0.3em] mb-4 block">
            {isEs ? 'En imágenes' : 'In pictures'}
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-cream-warm mb-6">
            {isEs ? 'La Travesía en cada rincón' : 'La Travesía, corner by corner'}
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {FOTOS.map((foto, i) => {
            const [label, sub] = isEs ? foto.es : foto.en;
            return (
            <div key={i} className="relative overflow-hidden rounded-sm group aspect-square bg-forest">
              <Image
                src={foto.url}
                alt={`${label} — ${sub}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* En móvil el texto siempre visible (no hay hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
                <p className="font-playfair text-base md:text-lg text-cream-warm">{label}</p>
                <p className="hidden sm:block font-sans text-[11px] uppercase tracking-widest text-beige mt-1">{sub}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
