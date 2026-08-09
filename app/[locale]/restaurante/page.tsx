import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RestauranteClient from '@/components/restaurante/RestauranteClient';
import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEs = locale === 'es';
  return {
    title: isEs ? 'El Restaurante · La Mesa | La Travesía' : 'The Restaurant · La Mesa | La Travesía',
    description: isEs
      ? 'Restaurante de campo en Quingeo, Cuenca. Gastronomía andina y gourmet con ingredientes 100% de nuestra granja. Cuy asado, Filet Mignon, Cordon Bleu y más.'
      : 'Country restaurant in Quingeo, Cuenca. Andean and gourmet cuisine with 100% farm-fresh ingredients. Roasted guinea pig, Filet Mignon, Cordon Bleu and more.',
  };
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
