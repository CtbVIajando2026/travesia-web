import {setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactSection from '@/components/home/ContactSection';

import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return pageMetadata(locale, '/contacto',
    { title: 'Contacto y reservas', description: 'Reserva tu mesa o tu habitación por WhatsApp. Ubicación, redes sociales y cómo llegar a La Travesía en Quingeo, Cuenca.' },
    { title: 'Contact & Reservations', description: 'Book a table or a room via WhatsApp. Location, social media and directions to La Travesía in Quingeo, Cuenca.' },
  );
}

export default function ContactoPage({
  params: {locale}
}: {
  params: {locale: string};
}) {
  setRequestLocale(locale);
 
  return (
    <>
      <Navbar locale={locale} forceBackground />
      <main className="min-h-screen pt-20 bg-cream">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
