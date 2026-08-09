import {setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import RestaurantIntro from '@/components/home/RestaurantIntro';
import StatsStrip from '@/components/home/StatsStrip';
import MenuPreview from '@/components/home/MenuPreview';
import GranjaTeaser from '@/components/home/GranjaTeaser';
import HospedajeTeaser from '@/components/home/HospedajeTeaser';
import ComoLlegar from '@/components/home/ComoLlegar';
 
export default function HomePage({
  params: {locale}
}: {
  params: {locale: string};
}) {
  setRequestLocale(locale);
 
  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Hero />
        
        {/* Restaurant preview teaser */}
        <RestaurantIntro locale={locale} />
        <StatsStrip locale={locale} />
        <MenuPreview />

        {/* Farm Teaser */}
        <GranjaTeaser locale={locale} />

        {/* Lodging Teaser */}
        <HospedajeTeaser locale={locale} />

        {/* Cómo llegar */}
        <ComoLlegar locale={locale} />

      </main>
      <Footer />
    </>
  );
}
