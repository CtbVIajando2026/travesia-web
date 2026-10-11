import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RestauranteClient from '@/components/restaurante/RestauranteClient';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return pageMetadata(locale, '/restaurante',
    { title: 'Restaurante de campo', description: 'Cocina andina y gourmet con ingredientes de nuestra propia granja en Quingeo. Cuy asado, Filet Mignon, Cordon Bleu y más.' },
    { title: 'Country Restaurant', description: 'Andean and gourmet cuisine with ingredients from our own farm in Quingeo. Roasted cuy, Filet Mignon, Cordon Bleu and more.' },
  );
}

interface PageProps {
  params: { locale: string };
}

export default function RestaurantePage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return (
    <>
      <Navbar locale={locale} />
      <main className="min-h-screen bg-cream">
        <RestauranteClient locale={locale} />
      </main>
      <Footer />
    </>
  );
}
