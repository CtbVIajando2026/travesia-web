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
    enName: 'Traditional Roasted Cuy',
    esDesc: 'El plato estrella de la casa: cuy criado en nuestra granja y asado con receta de familia. Con papas doradas, arroz, mote y ají de la huerta.',
    enDesc: 'Our signature dish: cuy raised on our farm and roasted with a family recipe. With golden potatoes, rice, hominy and garden chili sauce.',
    price: '$24.50',
    tag: 'Plato estrella',
  },
  {
    id: 'mix',
    emoji: '🍖',
    esName: 'Mix Tres Carnes La Travesía',
    enName: 'Three Meat Mix La Travesía',
    esDesc: 'Lomo fino, filete de pollo y cerdo a la parrilla, con un moro de lenteja cremoso. Para compartir… o no.',
    enDesc: 'Grilled tenderloin, chicken fillet and pork, with creamy lentil rice. For sharing… or not.',
    price: '$13.99',
    tag: 'Para compartir',
  },
  {
    id: 'filet',
    emoji: '🥩',
    esName: 'Filet Mignon',
    enName: 'Filet Mignon',
    esDesc: 'Jugoso y en su punto, en salsa de champiñones al vino tinto, con puré de la casa y vegetales de la huerta.',
    enDesc: 'Juicy and cooked to order, in a mushroom and red wine sauce, with house mashed potatoes and garden vegetables.',
    price: '$17.50',
    tag: 'Gourmet',
  },
  {
    id: 'cordon',
    emoji: '🍗',
    esName: 'Cordon Bleu La Campiña',
    enName: 'Cordon Bleu La Campiña',
    esDesc: 'Pechuga rellena de jamón y mozzarella que se derrite, en una suave salsa de mostaza de la casa.',
    enDesc: 'Chicken breast filled with ham and melting mozzarella, in a mild house mustard sauce.',
    price: '$14.50',
    tag: 'De la casa',
  },
];

const TAG_EN: Record<string, string> = { 'Plato estrella': 'Signature dish', 'Para compartir': 'To share', 'Gourmet': 'Gourmet', 'De la casa': 'House classic' };

const GALERIA_FOTOS = [
  { url: '/images/galeria/restaurante/5.jpg',  alt: 'Comedor interior de La Travesía', altEn: 'Indoor dining room', wide: true },
  { url: '/images/galeria/restaurante/3.jpg',  alt: 'Kiosco con techo de paja', altEn: 'Thatched kiosk' },
  { url: '/images/galeria/restaurante/4.jpg',  alt: 'Hamacas en el jardín', altEn: 'Hammocks in the garden' },
  { url: '/images/galeria/restaurante/2.jpg',  alt: 'Comedor rústico', altEn: 'Rustic dining room' },
  { url: '/images/galeria/restaurante/7.jpg',  alt: 'Camarones con arroz', altEn: 'Shrimp with rice' },
  { url: '/images/galeria/restaurante/13.jpg', alt: 'Seco de chivo', altEn: 'Goat stew' },
  { url: '/images/galeria/restaurante/14.jpg', alt: 'Trucha frita', altEn: 'Fried trout' },
  { url: '/images/galeria/restaurante/15.jpg', alt: 'Caldo de gallina criolla', altEn: 'Free-range hen broth' },
  { url: '/images/galeria/restaurante/1.jpg',  alt: 'Juegos para niños', altEn: "Kids' play area" },
];

const DATA_BLOCKS = [
  {
    icon: '📍',
    esTitle: 'Ubicación',
    enTitle: 'Location',
    esText: 'Quingeo, Cuenca, Ecuador\nA 22 km del centro de la ciudad\nGoogle Maps: X3C9+R5W, Quingeo',
    enText: 'Quingeo, Cuenca, Ecuador\n22 km from the city center\nGoogle Maps: X3C9+R5W, Quingeo',
  },
  {
    icon: '🕐',
    esTitle: 'Horario',
    enTitle: 'Hours',
    esText: 'Jueves a domingo: 9:00 – 18:00\nLunes a miércoles: cerrado\nComer aquí o para llevar',
    enText: 'Thursday to Sunday: 9 am – 6 pm\nMonday to Wednesday: closed\nDine in or take away',
  },
  {
    icon: '📞',
    esTitle: 'Reservas',
    enTitle: 'Reservations',
    esText: 'WhatsApp: 099 013 6060\nInstagram: @la_travesia.cue\nFacebook: latravesiacampina.cue',
    enText: 'WhatsApp: 099 013 6060\nInstagram: @la_travesia.cue\nFacebook: latravesiacampina.cue',
  },
  {
    icon: '🍽️',
    esTitle: 'Precios',
    enTitle: 'Price Range',
    esText: 'Promedio: $5 – $15 por persona\nEntradas: $1 – $3\nPlatos fuertes: $6 – $24.50\nPostres: $2.50 – $4.75',
    enText: 'Average: $5 – $15 per person\nStarters: $1 – $3\nMain courses: $6 – $24.50\nDesserts: $2.50 – $4.75',
  },
];

/* ─── Component ─────────────────────────────────────────── */

export default function RestauranteClient({ locale }: { locale: string }) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const isEs = locale === 'es';

  const whatsappUrl = 'https://wa.me/593990136060?text=' + encodeURIComponent(
    isEs
      ? '¡Hola! Quisiera reservar una mesa en La Travesía Campiña. ¿Tienen disponibilidad?'
      : 'Hi! I would like to book a table at La Travesía Campiña. Do you have availability?'
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
          <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] text-gold-pale font-semibold [text-shadow:0_1px_10px_rgba(0,0,0,0.75)] mb-6 animate-fade-in">
            {isEs ? 'Cocina de campo · Quingeo, Cuenca' : 'Country cooking · Quingeo, Cuenca'}
          </p>
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-cream-warm drop-shadow-lg mb-6">
            {isEs ? 'Restaurante' : 'Restaurant'}
          </h1>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
          <p className="font-cormorant text-xl md:text-2xl text-cream/90 italic max-w-2xl mx-auto leading-relaxed font-medium">
            {isEs
              ? 'Sabores de campo, recetas de familia y una mesa con vista a los Andes. Ven con hambre y sin apuro.'
              : 'Country flavors, family recipes and a table with a view of the Andes. Come hungry and stay a while.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gold hover:bg-gold-light text-forest-dark font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300"
            >
              {isEs ? 'Reservar mesa' : 'Book a table'}
            </a>
            <Link
              href={`/${locale}/menu`}
              className="px-8 py-3 border border-cream/70 text-cream hover:border-gold hover:text-gold font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300"
            >
              {isEs ? 'Ver el menú' : 'See the menu'}
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
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16 items-start [&>*]:min-w-0">

            {/* Filosofía */}
            <div>
              <span className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-4 block">
                {isEs ? 'Nuestra cocina' : 'Our kitchen'}
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl text-forest-dark mb-8 leading-tight">
                {isEs
                  ? 'Aquí la comida sabe a campo. Y tiene una razón.'
                  : 'Food that tastes of the countryside — for a reason.'}
              </h2>
              <div className="w-16 h-[1px] bg-gold mb-8" />
              <p className="font-cormorant text-2xl md:text-3xl text-forest leading-relaxed italic mb-8 font-medium">
                {isEs
                  ? 'Lo esencial de nuestra cocina nace en la granja: lo criamos, lo sembramos y lo cosechamos nosotros mismos.'
                  : 'The heart of our cooking comes from the farm: we raise it, plant it and harvest it ourselves.'}
              </p>
              <p className="font-sans text-sm text-forest-mid leading-loose">
                {isEs
                  ? 'El cuy crece en nuestra granja con pasto fresco. El caldo se hace con gallina criolla de casa. Las papas, el mote y las verduras vienen de nuestra huerta, a 2.800 metros de altura. Por eso los platos típicos saben como los de la abuela.'
                  : 'Our cuy is raised on the farm with fresh grass. The broth is made with our own free-range hens. Potatoes, hominy and vegetables come from our garden, 2,800 meters up. That is why our traditional dishes taste just like grandma used to make.'}
              </p>
              <p className="font-sans text-sm text-forest-mid leading-loose mt-4">
                {isEs
                  ? '¿Te provoca algo distinto? También tenemos Filet Mignon, Cordon Bleu, mariscos, pastas y un menú para los más pequeños. En La Travesía hay algo rico para cada gusto.'
                  : 'In the mood for something different? We also serve Filet Mignon, Cordon Bleu, seafood, pasta and a kids menu. At La Travesía there is something delicious for everyone.'}
              </p>
            </div>

            {/* Data Blocks */}
            <div className="flex flex-col gap-6">
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
            { n: isEs ? '4,8 ★' : '4.8 ★', label: isEs ? 'en Google Maps' : 'on Google Maps' },
            { n: '35 min', label: isEs ? 'desde el centro de Cuenca' : "from downtown Cuenca" },
            { n: 'Km 0', label: isEs ? 'cuy, gallina y huerta de casa' : 'our own cuy, hens and garden' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <span className="font-playfair text-4xl text-gold font-bold">{s.n}</span>
              <div className="w-6 h-[1px] bg-gold/40" />
              <span className="font-sans text-[11px] uppercase tracking-widest text-cream/75">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Platos Destacados ───────────────────────── */}
      <section className="py-24 bg-cream-warm px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-4 block">
              {isEs ? 'Si es tu primera vez' : 'First time here?'}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-forest-dark mb-6">
              {isEs ? 'Los más pedidos' : 'Our most-loved dishes'}
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_DISHES.map((dish) => (
              <div
                key={dish.id}
                className="group bg-cream border border-gold/15 hover:border-gold/50 rounded-sm p-7 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg"
              >
                {/* Badge (se quitaron los emojis: la huella 🐾 junto al cuy no ayudaba al plato) */}
                <div className="flex items-start">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-gold-dark border border-gold-dark/40 px-2 py-0.5">
                    {isEs ? dish.tag : (TAG_EN[dish.tag] ?? dish.tag)}
                  </span>
                </div>

                <div className="w-8 h-[1px] bg-gold/40 group-hover:w-14 transition-all duration-500" />

                <h3 className="font-playfair text-xl text-forest-dark leading-snug group-hover:text-gold-dark transition-colors duration-300">
                  {isEs ? dish.esName : dish.enName}
                </h3>

                <p className="font-sans text-sm text-forest-mid leading-relaxed flex-1">
                  {isEs ? dish.esDesc : dish.enDesc}
                </p>

                {dish.price && (
                  <div className="flex items-center justify-between pt-2 border-t border-forest-mid/10">
                    <span className="font-playfair text-2xl text-forest-dark font-semibold">{dish.price}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href={`/${locale}/menu`}
              className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] text-forest-dark font-semibold border border-forest-mid hover:border-gold-dark hover:text-gold-dark px-10 py-4 transition-all duration-500"
            >
              {isEs ? 'Ver la carta completa' : 'See the full menu'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Galería ─────────────────────────────────── */}
      <section className="py-24 bg-cream px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-4 block">
              {isEs ? 'Así es el restaurante' : 'Inside the restaurant'}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-forest-dark mb-6">
              {isEs ? 'Platos y rincones del restaurante' : 'Dishes and corners of the restaurant'}
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto" />
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALERIA_FOTOS.map((foto, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-sm cursor-pointer group bg-beige ${foto.wide ? 'col-span-2 row-span-2' : ''} aspect-square`}
                onClick={() => setLightbox(foto.url)}
              >
                <Image
                  src={foto.url}
                  alt={isEs ? foto.alt : foto.altEn}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-forest-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-sans text-[11px] text-cream uppercase tracking-widest translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {isEs ? foto.alt : foto.altEn}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${locale}/galeria`}
              className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] text-forest-dark font-semibold border border-forest-mid hover:border-gold-dark hover:text-gold-dark px-10 py-4 transition-all duration-500"
            >
              {isEs ? 'Ver toda la galería' : 'See the full gallery'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Final ──────────────────────────────── */}
      <section className="py-28 bg-forest-dark text-cream border-t border-gold/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-6xl text-cream-warm mb-8">
            {isEs ? '¿Cuándo nos visitas?' : 'When are you coming?'}
          </h2>
          <div className="w-[1px] h-16 bg-gold mx-auto mb-10" />
          <p className="font-cormorant text-2xl md:text-3xl text-beige max-w-2xl mx-auto italic leading-relaxed mb-12 font-medium">
            {isEs
              ? 'Ven a sentarte con nosotros, aquí no hay apuro. Reserva tu mesa por WhatsApp y te esperamos con todo listo.'
              : 'Come sit with us — there is no rush here. Book your table on WhatsApp and we will have everything ready.'}
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
              className="inline-flex items-center gap-2 px-10 py-5 border border-cream/60 text-cream hover:border-gold hover:text-gold font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300"
            >
              {isEs ? 'Ver el menú' : 'See the menu'}
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
