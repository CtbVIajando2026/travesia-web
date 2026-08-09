import { setRequestLocale } from 'next-intl/server';
import MenuClient from '@/components/menu/MenuClient';
import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Nuestro Menú | La Travesía' : 'Our Menu | La Travesía',
    description: isEs 
      ? 'Descubre nuestra propuesta gastronómica. Platos andinos tradicionales, mariscos y especialidades gourmet elaboradas con ingredientes frescos de nuestra granja.' 
      : 'Discover our culinary proposal. Traditional Andean dishes, seafood and gourmet specialties crafted with fresh ingredients from our farm.',
  };
}

interface PageProps {
  params: {
    locale: string;
  };
}

export default function MenuPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  return <MenuClient locale={locale} />;
}
