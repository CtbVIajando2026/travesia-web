import Image from 'next/image';
import {setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NosotrosGaleria from '@/components/nosotros/NosotrosGaleria';

import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return pageMetadata(locale, '/nosotros',
    { title: 'Nuestra historia', description: 'Un proyecto familiar en Quingeo: restaurante, granja y hospedaje en un mismo lugar, a 35 minutos de Cuenca. Conoce nuestra historia.' },
    { title: 'Our Story', description: 'A family project born in Quingeo. Restaurant, farm and lodging in one place, 35 minutes from Cuenca, Ecuador.' },
  );
}

const COPY = {
  es: {
    heroTitle: 'Quiénes somos',
    heroSub: 'Un proyecto familiar · Quingeo, Cuenca · Ecuador',
    eyebrow: 'Cómo empezó todo',
    heading: 'Un sueño de familia que hoy compartimos contigo.',
    lead: 'La Travesía Campiña nació de algo muy sencillo: cuidar la tierra, sembrar con cariño y compartir en la mesa lo mejor del campo. Empezó en Quingeo como un proyecto familiar, y así seguimos.',
    p1: 'Somos un equipo pequeño y cercano, donde todos hacemos un poco de todo: cuidamos la granja, preparamos cada plato y te recibimos como si llegaras a nuestra propia casa. El cuy, la gallina criolla, las papas y el mote salen de nuestra tierra, y eso se siente en cada bocado.',
    p2: 'Hoy La Travesía es restaurante, granja y hospedaje en un mismo lugar. Siempre soñamos con que quien venga a almorzar pueda también quedarse, descansar y vivir un rato la vida del campo, sin prisa.',
    stats: [
      { number: '35', unit: 'min', label: 'Desde el centro de Cuenca' },
      { number: '3', unit: 'en 1', label: 'Restaurante, granja y hospedaje' },
      { number: 'Km 0', unit: '', label: 'Cuy, gallina y huerta de casa' },
      { number: '2.800', unit: 'm', label: 'De altura, con aire puro y vista a los Andes' },
    ],
    pillarsEyebrow: 'Lo que nos mueve',
    pillarsTitle: 'Tres cosas que cuidamos siempre',
    pillars: [
      { title: 'Cuidamos la tierra', desc: 'Cultivamos de forma natural, con abono orgánico preparado aquí mismo y sin químicos. Respetamos los tiempos de cada temporada, porque una tierra bien cuidada da lo mejor de sí, y se nota en el sabor.' },
      { title: 'Sabores de casa', desc: 'Cuy asado, locro de papas, caldo de gallina criolla… recetas de la cocina azuaya preparadas como en casa, con paciencia y buenos ingredientes. Y si se te antoja algo distinto, también tenemos cocina gourmet.' },
      { title: 'Ven sin apuro', desc: 'Puedes venir a almorzar y seguir tu camino, o quedarte a dormir, recorrer la granja y desayunar mirando los Andes. Aquí tú decides cuánto tiempo te quedas.' },
    ],
  },
  en: {
    heroTitle: 'Who we are',
    heroSub: 'A family project · Quingeo, Cuenca · Ecuador',
    eyebrow: 'How it all began',
    heading: 'A family dream we now share with you.',
    lead: 'La Travesía Campiña was born from something simple: caring for the land, planting with love and sharing the best of the countryside around the table. It began in Quingeo as a family project, and it still is.',
    p1: 'We are a small, close-knit team where everyone does a bit of everything: we look after the farm, cook every dish and welcome you as if you were coming to our own home. The cuy, the free-range hens, the potatoes and the hominy come from our land, and you can taste it in every bite.',
    p2: 'Today La Travesía is a restaurant, a farm and a place to stay, all in one. We always dreamed that whoever came for lunch could also stay, rest and enjoy country life for a while, with no rush.',
    stats: [
      { number: '35', unit: 'min', label: "From downtown Cuenca" },
      { number: '3', unit: 'in 1', label: 'Restaurant, farm and lodging' },
      { number: 'Km 0', unit: '', label: 'Our own cuy, hens and garden' },
      { number: '2,800', unit: 'm', label: 'Above sea level, with fresh air and Andean views' },
    ],
    pillarsEyebrow: 'What drives us',
    pillarsTitle: 'Three things we always care for',
    pillars: [
      { title: 'We care for the land', desc: 'We farm naturally, with organic compost made right here and no chemicals. We follow the rhythm of each season, because well-cared-for land gives its best — and you can taste it.' },
      { title: 'Homestyle flavors', desc: 'Roasted cuy, potato locro, free-range hen broth… Azuay recipes made the homestyle way, with patience and good ingredients. And if you fancy something different, we have gourmet dishes too.' },
      { title: 'Come with no rush', desc: 'Stop by for lunch and carry on with your trip, or spend the night, walk around the farm and have breakfast facing the Andes. Here, you decide how long you stay.' },
    ],
  },
};

export default function NosotrosPage({
  params: {locale}
}: {
  params: {locale: string};
}) {
  setRequestLocale(locale);
  const c = locale === 'en' ? COPY.en : COPY.es;

  return (
    <>
      <Navbar locale={locale} forceBackground />
      <main className="min-h-screen bg-cream">

        {/* Editorial Hero */}
        <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
          <Image
            src="/images/galeria/restaurante/4.jpg"
            alt="La Travesía Campiña — Quingeo, Cuenca"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/60 via-forest-dark/45 to-forest-dark/70 z-10"></div>
          <div className="relative z-20 text-center px-6 mt-16">
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-cream drop-shadow-lg mb-6">
              {c.heroTitle}
            </h1>
            <p className="font-sans text-xs md:text-sm text-cream uppercase tracking-[0.25em] md:tracking-[0.4em] drop-shadow-md">
              {c.heroSub}
            </p>
          </div>
        </section>

        {/* Editorial Content */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-10 md:gap-12 lg:gap-24 items-start [&>*]:min-w-0">

              <div className="md:pt-12">
                <h2 className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-6">
                  {c.eyebrow}
                </h2>
                <p className="font-playfair text-4xl md:text-5xl text-forest-dark leading-tight">
                  {c.heading}
                </p>
              </div>

              <div className="flex flex-col gap-8">
                <div className="w-16 h-[1px] bg-gold mb-4"></div>
                <p className="font-cormorant text-2xl md:text-3xl text-forest leading-relaxed font-medium">
                  {c.lead}
                </p>
                <p className="font-sans text-base text-forest-mid leading-loose">
                  {c.p1}
                </p>
                <p className="font-sans text-base text-forest-mid leading-loose">
                  {c.p2}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-forest text-cream py-20 md:py-24 px-6 border-t border-gold/20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {c.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="font-playfair text-5xl md:text-6xl text-gold font-bold">
                    {stat.number}<span className="text-2xl font-normal ml-1">{stat.unit}</span>
                  </div>
                  <div className="w-8 h-[1px] bg-gold/40 mx-auto"></div>
                  <p className="font-sans text-[11px] uppercase tracking-widest text-cream/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section className="py-24 md:py-32 px-6 bg-cream-warm border-t border-forest-mid/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <span className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-4 block">{c.pillarsEyebrow}</span>
              <h2 className="font-playfair text-4xl md:text-5xl text-forest-dark">{c.pillarsTitle}</h2>
              <div className="w-16 h-[1px] bg-gold mx-auto mt-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {c.pillars.map((pilar, i) => (
                <div key={i} className="flex flex-col gap-6 p-8 bg-cream border border-gold/20 rounded-sm hover:border-gold/50 transition-colors duration-300">
                  <span className="font-playfair italic text-4xl text-gold-dark">0{i + 1}</span>
                  <h3 className="font-playfair text-2xl text-forest-dark">{pilar.title}</h3>
                  <div className="w-8 h-[1px] bg-gold"></div>
                  <p className="font-sans text-sm text-forest-mid leading-loose">{pilar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galería de Nosotros */}
        <NosotrosGaleria locale={locale} />

      </main>
      <Footer />
    </>
  );
}
