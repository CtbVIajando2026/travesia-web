import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import SocialIcons from '@/components/ui/SocialIcons';

export default function Footer() {
  const t = useTranslations('Footer');
  const nav = useTranslations('Navbar');
  const locale = useLocale();

  const links = [
    { href: `/${locale}/nosotros`, label: nav('about') },
    { href: `/${locale}/restaurante`, label: nav('restaurant') },
    { href: `/${locale}/menu`, label: nav('menu') },
    { href: `/${locale}/granja`, label: nav('farm') },
    { href: `/${locale}/hospedaje`, label: nav('lodging') },
    { href: `/${locale}/galeria`, label: nav('gallery') },
    { href: `/${locale}/contacto`, label: nav('contact') },
  ];

  return (
    <footer className="bg-forest-dark text-cream pt-20 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          <div className="lg:col-span-4">
            <Image
              src="/images/logo_travesia.png"
              alt="La Travesía"
              width={88}
              height={88}
              className="h-[88px] w-[88px] object-contain brightness-0 invert opacity-90 mb-6"
            />
            <p className="font-sans text-sm text-cream/75 max-w-xs leading-loose">
              {t('description')}
            </p>
          </div>

          <nav className="lg:col-span-2" aria-label={t('linksTitle')}>
            <h2 className="font-sans font-bold text-cream/75 mb-6 uppercase text-xs tracking-[0.3em]">
              {t('linksTitle')}
            </h2>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans text-sm text-cream/80 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-sans font-bold text-cream/75 mb-6 uppercase text-xs tracking-[0.3em]">
              {t('locationTitle')}
            </h2>
            <p className="font-cormorant text-[1.35rem] md:text-2xl text-cream-warm mb-6 italic font-medium">
              {t('locationText')}
            </p>
            <h2 className="font-sans font-bold text-cream/75 mb-3 uppercase text-xs tracking-[0.3em]">
              {t('hoursTitle')}
            </h2>
            <p className="font-sans text-sm text-cream/80 mb-6">{t('hours')}</p>
            <h2 className="font-sans font-bold text-cream/75 mb-3 uppercase text-xs tracking-[0.3em]">
              {t('contactTitle')}
            </h2>
            <a
              href="https://wa.me/593990136060"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-lg text-cream hover:text-gold transition-colors"
            >
              WhatsApp · 099 013 6060
            </a>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-sans font-bold text-cream/75 mb-6 uppercase text-xs tracking-[0.3em]">
              {t('followTitle')}
            </h2>
            <SocialIcons size="lg" color="light" includeWhatsApp={true} className="gap-5" />
            <div className="mt-6 flex flex-col gap-2 font-sans text-xs tracking-widest text-cream/75">
              <span>@la_travesia.cue</span>
              <span>latravesiacampina.cue</span>
              <span>@vivelatravesia_ec</span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-forest-mid/40">
          <p className="font-sans text-[11px] uppercase tracking-widest text-cream/70 text-center md:text-left">
            © {new Date().getFullYear()} La Travesía Campiña · Restaurante, Granja & Hospedaje · Quingeo, Cuenca. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
