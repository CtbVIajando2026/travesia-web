import { setRequestLocale } from 'next-intl/server';
import HospedajeClient from '@/components/hospedaje/HospedajeClient';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return pageMetadata(locale, '/hospedaje',
    { title: 'Hospedaje en Quingeo', description: 'Habitaciones con baño privado, desayuno incluido y vista a los Andes, a 35 minutos de Cuenca. Consulta disponibilidad por WhatsApp.' },
    { title: 'Lodging in Quingeo', description: 'Rooms with private bathroom, breakfast included and Andean views, 35 minutes from Cuenca. Check availability via WhatsApp.' },
  );
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
