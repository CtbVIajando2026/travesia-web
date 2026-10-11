import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Analytics } from "@vercel/analytics/react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://latravesiacuenca.com";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isEs = locale !== "en";
  const title = isEs
    ? "La Travesía Campiña · Restaurante, Granja y Hospedaje en Quingeo, Cuenca"
    : "La Travesía Campiña · Restaurant, Farm & Lodging in Quingeo, Cuenca";
  const description = isEs
    ? "Restaurante de campo, granja y hospedaje en Quingeo, a 35 minutos de Cuenca. Cuy asado, platos andinos y gourmet con ingredientes de nuestra propia granja."
    : "Country restaurant, farm and lodging in Quingeo, 35 minutes from Cuenca, Ecuador. Andean and gourmet dishes made with ingredients from our own farm.";

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: "%s | La Travesía" },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en", "x-default": "/es" },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: "La Travesía Campiña",
      images: [
        {
          url: "/images/galeria/restaurante/5.jpg",
          width: 1200,
          height: 630,
          alt: "La Travesía Campiña — Quingeo, Cuenca",
        },
      ],
      locale: isEs ? "es_EC" : "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function generateStaticParams() {
  return [{locale: 'es'}, {locale: 'en'}];
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} font-sans antialiased bg-cream text-forest-dark`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <WhatsAppButton variant="floating" />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
