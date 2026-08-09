import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TradicionBlock from '@/components/granja/TradicionBlock';
import SistemaBlock from '@/components/granja/SistemaBlock';
import ManejoBlock from '@/components/granja/ManejoBlock';
import GranjaGaleria from '@/components/granja/GranjaGaleria';

import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Nuestra Granja Sostenible | La Travesía' : 'Our Sustainable Farm | La Travesía',
    description: isEs 
      ? 'Conoce nuestro modelo agroecológico. Crianza libre, agricultura orgánica, compostaje y un ciclo cerrado de vida sustentable en Quingeo.' 
      : 'Learn about our agroecological model. Free-range farming, organic agriculture, composting, and a closed loop of sustainable life in Quingeo.',
  };
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
            <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-gold mb-6">
              {locale === 'es' ? 'La Granja · Quingeo, Ecuador' : 'Agroecological Farm'}
            </p>
            <h1 className="font-playfair text-6xl md:text-8xl text-cream-warm drop-shadow-lg mb-6">
              {locale === 'es' ? 'El Origen' : 'The Origin'}
            </h1>
            <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
            <p className="font-cormorant text-xl md:text-2xl text-cream/90 italic font-light max-w-2xl mx-auto leading-relaxed">
              {locale === 'es'
                ? 'Aquí se cría el cuy, se siembra la papa y crece la huerta. Todo lo que llega a su plato empezó en esta tierra.'
                : 'This is where every dish begins. Organic crops, free-range breeding and a living cycle that closes at your table.'}
            </p>
          </div>
        </section>

        {/* ── Datos de la Granja ── */}
        <section className="py-20 bg-forest text-cream px-6 border-b border-gold/20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: '🐾',
                es: { title: 'Los Animales', lines: ['Cuyes · Cerdos · Gallinas', 'Sueltos, sin apretarse, comiendo bien', 'Sin hormonas ni antibióticos, de ley'] },
                en: { title: 'Livestock', lines: ['Guinea pigs · Pigs · Hens', 'Free-range, natural rearing', 'No hormones or antibiotics'] },
              },
              {
                icon: '🌱',
                es: { title: 'La Huerta', lines: ['Papas · Mote · Habas · Verduras', 'Lo que da la temporada, recién cortado', 'Sin pesticidas, como debe ser'] },
                en: { title: 'Organic Garden', lines: ['Potatoes · Hominy · Fava beans', 'Seasonal vegetables', 'Pesticide-free crops'] },
              },
              {
                icon: '♻️',
                es: { title: 'Todo en ciclo', lines: ['Sobras → Compost', 'Compost → Tierra → Cultivos', 'Cultivos → Animales → Su plato'] },
                en: { title: 'Closed Loop', lines: ['Waste → Compost', 'Compost → Soil → Crops', 'Crops → Animals → Table'] },
              },
              {
                icon: '📍',
                es: { title: '¿Dónde estamos?', lines: ['Quingeo, Cuenca · Ecuador', '2.800 m de altura', 'San Pedro de Quingeo'] },
                en: { title: 'Location', lines: ['Quingeo, Cuenca · Ecuador', '2,800 m above sea level', 'San Pedro de Quingeo'] },
              },
            ].map((block, i) => (
              <div key={i} className="flex flex-col gap-4">
                <span className="text-3xl">{block.icon}</span>
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
