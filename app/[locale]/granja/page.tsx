import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TradicionBlock from '@/components/granja/TradicionBlock';
import SistemaBlock from '@/components/granja/SistemaBlock';
import ManejoBlock from '@/components/granja/ManejoBlock';
import GranjaGaleria from '@/components/granja/GranjaGaleria';

import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return pageMetadata(locale, '/granja',
    { title: 'Nuestra granja', description: 'Animales con espacio y aire libre, huerta sin pesticidas y abono orgánico hecho en casa. Conoce la granja de La Travesía en Quingeo.' },
    { title: 'Our Farm', description: 'Animals with space and fresh air, a pesticide-free garden and homemade organic compost. Visit the La Travesía farm in Quingeo.' },
  );
}

interface PageProps {
  params: {
    locale: string;
  };
}

export default function GranjaPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
 
  return (
    <>
      <Navbar locale={locale} forceBackground />
      
      <main className="bg-cream">

        {/* ── Hero ── */}
        <section className="relative h-[75vh] min-h-[520px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-forest-dark/50 z-10" />
          <Image
            src="/images/galeria/granja/8.jpg"
            alt="La Granja La Travesía — cabalgata en Quingeo"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="relative z-20 text-center px-6 mt-16 max-w-4xl mx-auto">
            <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] text-gold-pale font-semibold [text-shadow:0_1px_10px_rgba(0,0,0,0.75)] mb-6">
              {locale === 'es' ? 'Granja familiar · Quingeo, Ecuador' : 'Family farm · Quingeo, Ecuador'}
            </p>
            <h1 className="font-playfair text-6xl md:text-8xl text-cream-warm drop-shadow-lg mb-6">
              {locale === 'es' ? 'La Granja' : 'The Farm'}
            </h1>
            <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
            <p className="font-cormorant text-xl md:text-2xl text-cream/90 italic max-w-2xl mx-auto leading-relaxed font-medium">
              {locale === 'es'
                ? 'Aquí crecen nuestros cuyes y gallinas, se siembra la papa y florece la huerta. Cuando vengas a almorzar, pídenos un recorrido y te presentamos a todos los animales de la granja.'
                : 'This is where our cuy and hens grow, potatoes are planted and the garden thrives. When you come for lunch, ask us for a tour and we will introduce you to all the farm animals.'}
            </p>
          </div>
        </section>

        {/* ── Datos de la Granja ── */}
        <section className="py-20 bg-forest text-cream px-6 border-b border-gold/20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                es: { title: 'Los animales', lines: ['Cuyes · Cerdos · Gallinas', 'Con espacio, aire libre y buena comida', 'Criados sin hormonas ni antibióticos'] },
                en: { title: 'The animals', lines: ['Guinea pigs · Pigs · Hens', 'Plenty of space, fresh air and good food', 'Raised without hormones or antibiotics'] },
              },
              {
                es: { title: 'La huerta', lines: ['Papas · Mote · Habas · Verduras', 'Lo que da cada temporada, recién cosechado', 'Cultivada sin pesticidas'] },
                en: { title: 'The garden', lines: ['Potatoes · Hominy · Fava beans · Vegetables', 'Whatever each season brings, freshly harvested', 'Grown without pesticides'] },
              },
              {
                es: { title: 'Cultivo natural', lines: ['Abono orgánico hecho en casa', 'Sin químicos ni pesticidas', 'Sembramos según la temporada'] },
                en: { title: 'Natural farming', lines: ['Homemade organic compost', 'No chemicals or pesticides', 'Planted by the season'] },
              },
              {
                es: { title: '¿Dónde estamos?', lines: ['Quingeo, Cuenca · Ecuador', '2.800 m de altura', 'San Pedro de Quingeo'] },
                en: { title: 'Where we are', lines: ['Quingeo, Cuenca · Ecuador', '2,800 m above sea level', 'San Pedro de Quingeo'] },
              },
            ].map((block, i) => (
              <div key={i} className="flex flex-col gap-4">
                <span className="font-playfair italic text-3xl text-gold">0{i + 1}</span>
                <h3 className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-gold">
                  {locale === 'es' ? block.es.title : block.en.title}
                </h3>
                <div className="w-8 h-[1px] bg-gold/40" />
                {(locale === 'es' ? block.es.lines : block.en.lines).map((line, j) => (
                  <p key={j} className="font-sans text-sm text-cream/80 leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <TradicionBlock />
        <SistemaBlock />
        <ManejoBlock />
        <GranjaGaleria locale={locale} />
      </main>
      
      <Footer />
    </>
  );
}
