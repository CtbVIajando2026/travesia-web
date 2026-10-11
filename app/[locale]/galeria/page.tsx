import {setRequestLocale} from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GaleriaGrid from '@/components/galeria/GaleriaGrid';
import SectionHeading from '@/components/ui/SectionHeading';

import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return pageMetadata(locale, '/galeria',
    { title: 'Galería de fotos', description: 'El restaurante, la granja y el hospedaje de La Travesía en imágenes. Así se ve la campiña de Quingeo.' },
    { title: 'Photo Gallery', description: 'The restaurant, farm and lodging at La Travesía in pictures. This is the Quingeo countryside.' },
  );
}

export default function GaleriaPage({
  params: {locale}
}: {
  params: {locale: string};
}) {
  setRequestLocale(locale);
 
  return (
    <>
      <Navbar locale={locale} forceBackground />
      <main className="pt-20 bg-cream min-h-screen">
        <div className="py-16">
          {/* Note: I'll fetch translation directly in a Server Component just to show the heading, 
              but since it's a simple page, I'll pass it down or just render it here. */}
          <GaleriaHeader />
        </div>
        <GaleriaGrid />
      </main>
      <Footer />
    </>
  );
}

async function GaleriaHeader() {
  const t = await getTranslations('Galeria');
  return (
    <SectionHeading 
      title={t('title')} 
      subtitle={t('subtitle')} 
      className="max-w-4xl mx-auto px-6" 
    />
  );
}
