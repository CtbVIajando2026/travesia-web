import {setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactSection from '@/components/home/ContactSection';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto & Reservas | La Travesía',
  description: 'Contáctanos para reservaciones, eventos o consultas. Encuentra nuestra ubicación en Quingeo y visítanos.',
};

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
