import { setRequestLocale } from 'next-intl/server';
import HospedajeClient from '@/components/hospedaje/HospedajeClient';
import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Hospedaje & Refugio | La Travesía' : 'Lodging & Refuge | La Travesía',
    description: isEs 
      ? 'Hospédate en nuestras exclusivas habitaciones y suites en Quingeo, Cuenca. Disfruta de la tranquilidad andina, baño privado, chimenea y vistas a la montaña.' 
      : 'Stay in our exclusive rooms and suites in Quingeo, Cuenca. Enjoy Andean tranquility, private bathrooms, fireplaces, and mountain views.',
  };
}

interface PageProps {
  params: {
    locale: string;
  };
}

export default function HospedajePage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return <HospedajeClient locale={locale} />;
}
