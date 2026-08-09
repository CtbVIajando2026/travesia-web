'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ─── Data ───────────────────────────────────────────────── */

// Featured dishes shown as elegant text cards (no images — photos pendientes)
const FEATURED_DISHES = [
  {
    id: 'cuy',
    emoji: '🐾',
    esName: 'Cuy Asado Tradicional',
    enName: 'Traditional Roasted Guinea Pig',
    esDesc: 'Criado en nuestra propia granja, preparado con receta ancestral. Papas doradas, arroz, mote y ají.',
    enDesc: 'Raised on our farm, prepared with an ancestral recipe. Golden potatoes, rice, hominy and hot sauce.',
    price: null,
    tag: 'Ícono',
  },
  {
    id: 'mix',
    emoji: '🍖',
    esName: 'Mix Tres Carnes La Travesía',
    enName: 'Three Meat Mix La Travesía',
    esDesc: 'Moro cremoso de lenteja, lomo fino, filete de pollo y cerdo a la parrilla. La experiencia completa.',
    enDesc: 'Creamy lentil rice, tenderloin, chicken fillet and grilled pork fillet. The complete experience.',
    price: '$13.99',
    tag: 'Especialidad',
  },
  {
    id: 'filet',
    emoji: '🥩',
    esName: 'Filet Mignon',
    enName: 'Filet Mignon',
    esDesc: 'En salsa de champiñones y vino tinto, puré de papas artesanal y vegetales de nuestra huerta.',
    enDesc: 'In mushroom and red wine sauce, artisanal mashed potatoes and garden vegetables.',
    price: '$17.50',
    tag: 'Premium',
  },
  {
    id: 'cordon',
    emoji: '🍗',
    esName: 'Cordon Bleu La Campiña',
    enName: 'Cordon Bleu La Campiña',
    esDesc: 'Pechuga rellena de queso mozzarella y jamón, en suave salsa de mostaza artesanal.',
    enDesc: 'Chicken breast stuffed with mozzarella and ham, covered in mild artisanal mustard sauce.',
    price: '$14.50',
    tag: 'Clásico',
  },
];

const GALERIA_FOTOS = [
  { url: '/images/galeria/restaurante/5.jpg',  alt: 'El Restaurante La Travesía', wide: true },
  { url: '/images/galeria/restaurante/4.jpg',  alt: 'La Campiña — Vista Interior' },
  { url: '/images/galeria/restaurante/3.jpg',  alt: 'El Kiosco — Techo de Paja' },
  { url: '/images/galeria/restaurante/6.jpg',  alt: 'Ambiente de La Travesía' },
  { url: '/images/galeria/restaurante/7.jpg',  alt: 'Rincón del Restaurante' },
  { url: '/images/galeria/restaurante/8.jpg',  alt: 'Detalles del Lugar' },
  { url: '/images/galeria/restaurante/2.jpg',  alt: 'La Travesía Campiña' },
];

const DATA_BLOCKS = [
  {
    icon: '📍',
    esTitle: 'Ubicación',
    enTitle: 'Location',
    esText: 'Quingeo, Cuenca, Ecuador\nA 22 km del centro de la ciudad\n2.800 msnm — Camino a Gualaceo',
    enText: 'Quingeo, Cuenca, Ecuador\n22 km from the city center\n2,800 m above sea level — Road to Gualaceo',
  },
  {
    icon: '🕐',
    esTitle: 'Horario',
    enTitle: 'Hours',
    esText: 'Lunes a Viernes: 8:00 am – 6:00 pm\nSábados y Domingos: 8:00 am – 7:00 pm\nFeriados: horario especial',
    enText: 'Monday to Friday: 8:00 am – 6:00 pm\nSaturdays & Sundays: 8:00 am – 7:00 pm\nHolidays: special hours',
  },
  {
    icon: '📞',
    esTitle: 'Reservas',
    enTitle: 'Reservations',
    esText: 'WhatsApp: +593 990 136 060\nInstagram: @la_travesia.cue\nFacebook: latravesiacampina.cue',
    enText: 'WhatsApp: +593 990 136 060\nInstagram: @la_travesia.cue\nFacebook: latravesiacampina.cue',
  },
  {
    icon: '🍽️',
    esTitle: 'Rango de Precios',
    enTitle: 'Price Range',
    esText: 'Entradas: $1 – $3\nPlatos fuertes: $6 – $17.50\nPostres: $2.50 – $4.75\nBebidas: $0.75 – $10',
    enText: 'Starters: $1 – $3\nMain courses: $6 – $17.50\nDesserts: $2.50 – $4.75\nDrinks: $0.75 – $10',
  },
];

/* ─── Component ─────────────────────────────────────────── */

export default function RestauranteClient({ locale }: { locale: string }) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const isEs = locale === 'es';

  const whatsappUrl = 'https://wa.me/593990136060?text=' + encodeURIComponent(
    isEs
      ? 'Hola, quiero reservar una mesa en La Travesía Campiña. ¿Hay disponibilidad?'
      : 'Hello, I would like to reserve a table at La Travesía Campiña restaurant.'
  );

  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative h-[80vh] min-h-[550px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-forest-dark/45 z-10" />
        <Image
          src="/images/galeria/restaurante/5.jpg"
          alt="Restaurante La Travesía — interior"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-6 mt-16 max-w-4xl mx-auto">
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-gold mb-6 animate-fade-in">
            {isEs ? 'Quingeo · 2.800 msnm · Cuenca, Ecuador' : 'Country Restaurant'}
          </p>
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl text-cream-warm drop-shadow-lg mb-6">
            La Mesa
          </h1>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
          <p className="font-cormorant text-xl md:text-2xl text-cream/90 italic font-light max-w-2xl mx-auto leading-relaxed">
            {isEs
              ? 'Todo lo que come aquí se crió o creció en nuestra propia tierra, en Quingeo. Nada de intermediarios. Solo sabor de verdad.'
              : 'Everything you eat here was raised or grown on our own land in Quingeo. No middlemen. Just real flavor.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gold hover:bg-gold-light text-forest-dark font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300"
            >
              {isEs ? 'Reservar Mesa' : 'Book a Table'}
            </a>
            <Link
              href={`/${locale}/menu`}
              className="px-8 py-3 border border-cream/50 text-cream hover:border-gold hover:text-gold font-sans text-xs uppercase tracking-widest font-light transition-all duration-300"
            >
              {isEs ? 'Ver Menú Completo' : 'Full Menu'}
            </Link>
          </div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-gold/50 animate-pulse" />
        </div>
      </section>

      {/* ── Intro & Data ─────────────────────────────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Filosofía */}
            <div className="lg:col-span-7">
              <span className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-4 block">
                {isEs ? 'Por qué somos diferentes' : 'Our Philosophy'}
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl text-forest-dark mb-8 leading-tight">
                {isEs
                  ? 'Aquí la comida sabe diferente. Y hay una razón.'
                  : 'A kitchen born from the earth'}
              </h2>
              <div className="w-16 h-[1px] bg-gold mb-8" />
              <p className="font-cormorant text-2xl md:text-3xl text-forest leading-relaxed font-light italic mb-8">
                {isEs
                  ? 'En La Travesía la carta cambia con lo que da la tierra. Esa mañana, esa semana. Sin congelados, sin traer de lejos.'
                  : 'At La Travesía, what matters is not what the menu says — it is what the land said that morning.'}
              </p>
              <p className="font-sans text-sm text-forest-mid leading-loose">
                {isEs
                  ? 'El cuy que asamos se crió aquí, libre, comiendo pasto fresco. El caldo de gallina viene de la misma gallina criolla que anduvo suelta por el potrero. Las papas, el mote, los vegetales: todos de Quingeo, a 2.800 metros. Esa altura hace la diferencia, y usted lo va a notar.'
                  : 'Every dish that reaches your table first passed through our farm. The guinea pig we roast was raised on fresh grass without overcrowding. The hen broth comes from the same free-range hen that walked freely through our pastures. The potatoes, hominy, vegetables — all harvested in Quingeo, at 2,800 meters, where flavor has another depth.'}
              </p>
              <p className="font-sans text-sm text-forest-mid leading-loose mt-4">
                {isEs
                  ? 'Y para quien quiera algo más especial, también tenemos Filet Mignon, Cordon Bleu y pastas artesanales. Porque en La Travesía hay para todos los gustos, y todo sale bien hecho.'
                  : 'We also offer fine dining — Filet Mignon, Cordon Bleu, artisanal pastas — because we believe that the countryside and elegance are not opposites. They are the same landscape seen from different angles.'}
              </p>
            </div>

            {/* Data Blocks */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {DATA_BLOCKS.map((block, i) => (
                <div key={i} className="border border-gold/20 bg-cream-warm p-6 rounded-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{block.icon}</span>
                    <h3 className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-forest-dark">
                      {isEs ? block.esTitle : block.enTitle}
                    </h3>
                  </div>
                  <div className="w-8 h-[1px] bg-gold mb-3" />
                  {(isEs ? block.esText : block.enText).split('\n').map((line, j) => (
                    <p key={j} className="font-sans text-sm text-forest-mid leading-relaxed">{line}</p>
                  ))}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────── */}
      <section className="bg-forest text-cream py-14 px-6 border-t border-b border-gold/20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: '+40', label: isEs ? 'platos en carta' : 'dishes on menu' },
            { n: '8', label: isEs ? 'tipos de comida' : 'culinary categories' },
            { n: '35 min', label: isEs ? 'desde el centro de Cuenca' : 'from Cuenca center' },
            { n: '100%', label: isEs ? 'ingredientes de la propia granja' : 'own-farm ingredients' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <span className="font-playfair text-4xl text-gold font-bold">{s.n}</span>
              <div className="w-6 h-[1px] bg-gold/40" />
              <span className="font-sans text-[9px] uppercase tracking-widest text-cream/60">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Platos Destacados ───────────────────────── */}
      <section className="py-24 bg-cream-warm px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-4 block">
              {isEs ? 'Para que sepa qué pedir' : 'Must-try dishes'}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-forest-dark mb-6">
              {isEs ? 'Los más pedidos' : 'La Mesa Specialties'}
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_DISHES.map((dish, idx) => (
              <div
                key={dish.id}
                className="group bg-cream border border-gold/15 hover:border-gold/50 rounded-sm p-7 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg"
              >
                {/* Emoji + badge */}
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{dish.emoji}</span>
                  <span className="font-sans text-[8px] uppercase tracking-widest text-gold border border-gold/40 px-2 py-0.5 mt-1">
                    {dish.tag}
                  </span>
                </div>

                <div className="w-8 h-[1px] bg-gold/40 group-hover:w-14 transition-all duration-500" />

                <h3 className="font-playfair text-xl text-forest-dark leading-snug group-hover:text-gold transition-colors duration-300">
                  {isEs ? dish.esName : dish.enName}
                </h3>

                <p className="font-sans text-xs text-forest-mid leading-relaxed flex-1">
                  {isEs ? dish.esDesc : dish.enDesc}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-forest-mid/10">
                  {dish.price ? (
                    <span className="font-playfair text-2xl text-forest-dark font-semibold">{dish.price}</span>
                  ) : (
                    <span className="font-sans text-[10px] uppercase tracking-widest text-forest-mid/60">
                      {isEs ? 'Precio según tamaño' : 'Price by size'}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href={`/${locale}/menu`}
              className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] text-forest-dark border border-forest-mid hover:border-gold hover:text-gold px-10 py-4 transition-all duration-500"
            >
              {isEs ? 'Ver Carta Completa' : 'View Full Menu'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Galería ─────────────────────────────────── */}
      <section className="py-24 bg-cream px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-4 block">
              {isEs ? 'Así se ve La Mesa' : 'Restaurant Gallery'}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-forest-dark mb-6">
              {isEs ? 'Platos y rincones del restaurante' : 'Every dish, a story'}
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto" />
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALERIA_FOTOS.map((foto, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-sm cursor-pointer group ${foto.wide ? 'col-span-2 row-span-2' : ''} aspect-square`}
                onClick={() => setLightbox(foto.url)}
              >
                <Image
                  src={foto.url}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-forest-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-sans text-[10px] text-cream uppercase tracking-widest translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {foto.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${locale}/galeria`}
              className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] text-forest-dark border border-forest-mid hover:border-gold hover:text-gold px-10 py-4 transition-all duration-500"
            >
              {isEs ? 'Ver Galería Completa' : 'View Full Gallery'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Final ──────────────────────────────── */}
      <section className="py-28 bg-forest-dark text-cream border-t border-gold/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-6xl text-cream-warm mb-8">
            {isEs ? '¿Cuándo nos visita?' : 'When will you visit us?'}
          </h2>
          <div className="w-[1px] h-16 bg-gold mx-auto mb-10" />
          <p className="font-cormorant text-2xl md:text-3xl text-beige max-w-2xl mx-auto italic leading-relaxed mb-12 font-light">
            {isEs
              ? 'Venga y siéntese con nosotros. Aquí no hay apuro. Reserve su mesa por WhatsApp y le esperamos con el plato listo.'
              : 'Come and sit with us. No rush here. Book your table on WhatsApp and we will be waiting.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gold hover:bg-gold-light text-forest-dark font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.579 2.006 14.105.98 11.477.978c-5.438 0-9.863 4.372-9.867 9.8.001 1.94.512 3.826 1.482 5.512l-.979 3.573 3.73-.974.204.119zM18.8 15.35c-.328-.164-1.94-.957-2.24-1.066-.3-.11-.52-.164-.74.164-.22.329-.85 1.066-1.04 1.284-.19.219-.38.246-.71.082-.33-.164-1.39-.512-2.646-1.633-.977-.872-1.637-1.95-1.83-2.278-.19-.328-.02-.506.143-.67.149-.147.33-.383.49-.575.163-.19.22-.328.328-.548.11-.219.055-.41-.03-.574-.085-.164-.74-1.78-.979-2.357-.24-.574-.48-.492-.66-.5-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.295-1.04 1.016-1.04 2.479 0 1.462 1.06 2.875 1.21 3.07.15.19 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.57-.085 1.94-.793 2.21-1.52.28-.727.28-1.353.19-1.482-.09-.129-.33-.203-.66-.367z" />
              </svg>
              {isEs ? 'Reservar por WhatsApp' : 'Book via WhatsApp'}
            </a>
            <Link
              href={`/${locale}/menu`}
              className="inline-flex items-center gap-2 px-10 py-5 border border-cream/30 text-cream hover:border-gold hover:text-gold font-sans text-xs uppercase tracking-widest font-light transition-all duration-300"
            >
              {isEs ? 'Explorar el Menú' : 'Explore the Menu'}
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-forest-dark/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream hover:text-gold text-4xl font-light"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
          >
            &times;
          </button>
          <div className="relative max-w-full max-h-[90vh] cursor-default" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Restaurante La Travesía"
              width={1200}
              height={900}
              className="object-contain shadow-2xl max-h-[90vh] w-auto"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
