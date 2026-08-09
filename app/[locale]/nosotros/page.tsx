import Image from 'next/image';
import {setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NosotrosGaleria from '@/components/nosotros/NosotrosGaleria';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nuestra Historia | La Travesía',
  description: 'Un proyecto familiar nacido en Quingeo. Restaurante, granja y hospedaje en un mismo lugar, a 22 km de Cuenca.',
};

export default function NosotrosPage({
  params: {locale}
}: {
  params: {locale: string};
}) {
  setRequestLocale(locale);
 
  return (
    <>
      <Navbar locale={locale} forceBackground />
      <main className="min-h-screen bg-cream">
        
        {/* Editorial Hero */}
        <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-forest-dark/20 z-10"></div>
          <Image 
            src="/images/galeria/restaurante/4.jpg"
            alt="La Travesía Campiña — Quingeo, Cuenca"
            fill
            priority
            className="absolute inset-0 object-cover"
          />
          <div className="relative z-20 text-center px-6">
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-cream drop-shadow-lg mb-6">
              Quiénes Somos
            </h1>
            <p className="font-sans text-xs md:text-sm text-cream uppercase tracking-[0.4em] drop-shadow-md">
              Un proyecto familiar · Quingeo, Cuenca · Ecuador
            </p>
          </div>
        </section>

        {/* Editorial Content */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start">

              <div className="md:col-span-5 md:pt-12">
                <h2 className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-6">
                  Cómo empezó todo
                </h2>
                <h3 className="font-playfair text-4xl md:text-5xl text-forest-dark leading-tight">
                  Un sueño de familia, hecho realidad en Quingeo.
                </h3>
              </div>

              <div className="md:col-span-7 flex flex-col gap-8">
                <div className="w-16 h-[1px] bg-gold mb-4"></div>
                <p className="font-cormorant text-2xl md:text-3xl text-forest leading-relaxed font-light">
                  <span className="font-playfair text-5xl text-forest-dark float-left mr-3 -mt-2">L</span>a Travesía Campiña empezó con una idea sencilla: criar bien los animales, sembrar con cuidado y servir lo que la tierra da, sin más vuelta. Nació en Quingeo como proyecto familiar y así sigue siendo.
                </p>
                <p className="font-sans text-sm text-forest-mid leading-loose tracking-wide">
                  Aquí no hay intermediarios ni ingredientes traídos de lejos. Lo que se pone en la mesa salió de nuestra granja esa mañana o esa semana. El cuy, la gallina criolla, las papas, el mote: todo de la propia tierra. Eso se nota en el sabor, y es lo que nos diferencia.
                </p>
                <p className="font-sans text-sm text-forest-mid leading-loose tracking-wide">
                  Hoy La Travesía es restaurante, granja y hospedaje en un solo lugar. Porque la idea siempre fue que quien llegue a visitar pueda también quedarse, descansar y vivir un rato la vida del campo. Sin apuros.
                </p>

                <div className="mt-12 flex items-center gap-6">
                  <div className="w-12 h-12 bg-forest-dark rounded-full flex items-center justify-center text-cream font-playfair italic text-xl">
                    LT
                  </div>
                  <span className="font-sans text-xs uppercase tracking-widest text-forest-dark font-bold">
                    La Travesía
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-forest text-cream py-24 px-6 border-t border-gold/20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { number: "35", unit: "min", label: "Desde el centro de Cuenca" },
                { number: "3", unit: "en 1", label: "Restaurante, granja y hospedaje" },
                { number: "100%", unit: "", label: "Ingredientes de nuestra propia tierra" },
                { number: "2.800", unit: "m", label: "Metros de altura — aire y sabor distintos" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="font-playfair text-5xl md:text-6xl text-gold font-bold">
                    {stat.number}<span className="text-2xl font-light ml-1">{stat.unit}</span>
                  </div>
                  <div className="w-8 h-[1px] bg-gold/40 mx-auto"></div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-cream/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section className="py-32 px-6 bg-cream-warm border-t border-forest-mid/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-4 block">Por qué hacemos esto así</span>
              <h2 className="font-playfair text-4xl md:text-5xl text-forest-dark">Tres cosas en las que no cedemos</h2>
              <div className="w-16 h-[1px] bg-gold mx-auto mt-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: "🌿",
                  title: "Nada se bota, todo se usa",
                  desc: "Lo que sobra en la cocina va al compost. El compost abona la tierra. La tierra produce los cultivos. Los cultivos alimentan a los animales. Y los animales vuelven a la mesa. Eso no es marketing, así trabajamos de verdad."
                },
                {
                  icon: "🫱",
                  title: "Sabor de aquí, de siempre",
                  desc: "El cuy asado, el locro de papas, la fritada, el caldo de gallina criolla: recetas de la cocina azuaya, hechas como se han hecho siempre. Sin reinventarlas, sin ponerles nombre raro. Solo bien preparadas."
                },
                {
                  icon: "🏔️",
                  title: "Venga a quedarse un rato",
                  desc: "Puede venir a almorzar y salir en una hora. O puede quedarse a dormir, recorrer la granja y desayunar con vista a los Andes. En La Travesía hay restaurante, granja y hospedaje. Usted decide cuánto tiempo se queda."
                }
              ].map((pilar, i) => (
                <div key={i} className="flex flex-col gap-6 p-8 bg-cream border border-gold/20 rounded-sm hover:border-gold/50 transition-colors duration-300">
                  <span className="text-4xl">{pilar.icon}</span>
                  <h3 className="font-playfair text-2xl text-forest-dark">{pilar.title}</h3>
                  <div className="w-8 h-[1px] bg-gold"></div>
                  <p className="font-sans text-sm text-forest-mid leading-loose">{pilar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galería de Nosotros */}
        <NosotrosGaleria />

      </main>
      <Footer />
    </>
  );
}
