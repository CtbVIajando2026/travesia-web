import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://latravesia.com"),
  title: "La Travesía Granja & Restaurante",
  description: "Donde la herencia ancestral se encuentra con la gastronomía sostenible. Todo lo que servimos, lo criamos nosotros.",
  openGraph: {
    title: "La Travesía Granja & Restaurante",
    description: "Donde la herencia ancestral se encuentra con la gastronomía sostenible. De nuestra tierra a tu mesa.",
    url: "https://latravesia.com",
    siteName: "La Travesía",
    images: [
      {
        url: "/images/galeria/restaurante/5.jpg",
        width: 1200,
        height: 630,
        alt: "La Travesía Granja & Restaurante",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
};

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
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
