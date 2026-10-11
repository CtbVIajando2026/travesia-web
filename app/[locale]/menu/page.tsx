import { setRequestLocale } from 'next-intl/server';
import MenuClient from '@/components/menu/MenuClient';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return pageMetadata(locale, '/menu',
    { title: 'Menú', description: 'La carta completa de La Travesía: desayunos, cuy asado, sopas, platos fuertes, mariscos, postres y bebidas, con precios.' },
    { title: 'Menu', description: 'The full La Travesía menu: breakfasts, roasted cuy, soups, mains, seafood, desserts and drinks, with prices.' },
  );
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
