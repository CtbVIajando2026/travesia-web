'use client';
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitch from './LanguageSwitch';
import SocialIcons from '@/components/ui/SocialIcons';

export default function Navbar({ locale, forceBackground = false }: { locale: string; forceBackground?: boolean }) {
  const t = useTranslations('Navbar');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hasBg = forceBackground || scrolled;

  // Returns true when this link's path matches the current URL
  const isActive = (href: string) => {
    // Home: exact match only
    if (href === `/${locale}`) return pathname === `/${locale}` || pathname === `/${locale}/`;
    // Other pages: starts-with match
    return pathname.startsWith(href);
  };

  // Desktop link classes
  const linkClass = (href: string) =>
    `relative font-sans text-sm font-medium transition-colors duration-200 group
     ${isActive(href) ? 'text-gold' : 'text-cream hover:text-gold'}`;

  // Mobile link classes
  const mobileLinkClass = (href: string) =>
    `font-playfair text-3xl font-medium transition-colors duration-200
     ${isActive(href) ? 'text-gold' : 'text-cream hover:text-gold'}`;

  const NAV_LINKS = [
    { href: `/${locale}`,             label: t('home') },
    { href: `/${locale}/nosotros`,    label: t('about') },
    { href: `/${locale}/restaurante`, label: t('restaurant') },
    { href: `/${locale}/menu`,        label: t('menu') },
    { href: `/${locale}/granja`,      label: t('farm') },
    { href: `/${locale}/hospedaje`,   label: t('lodging') },
    { href: `/${locale}/galeria`,     label: t('gallery') },
    { href: `/${locale}/contacto`,    label: t('contact') },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${hasBg ? 'bg-forest/95 backdrop-blur-md border-forest-mid shadow-sm' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <Image
              src="/images/logo_travesia.png"
              alt="La Travesía"
              width={120}
              height={48}
              className="h-12 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>
        </div>

        {/* Right - Links */}
        <div className="flex items-center justify-end gap-5 md:gap-6">
          <div className="hidden xl:flex items-center gap-5">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClass(href)}>
                {label}
                {/* Gold underline indicator for active link */}
                {isActive(href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="w-px h-4 bg-forest-mid hidden sm:block ml-2"></div>
          <SocialIcons size="sm" color="light" includeWhatsApp={false} className="hidden lg:flex" />
          <div className="w-px h-4 bg-forest-mid hidden lg:block"></div>
          <LanguageSwitch />

          {/* Mobile menu trigger */}
          <button
            className="xl:hidden text-cream p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-forest/98 backdrop-blur-xl flex flex-col items-center justify-center min-h-screen"
          >
            <div className="flex flex-col items-center gap-8 mt-16">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={mobileLinkClass(href)}
                >
                  {label}
                  {isActive(href) && (
                    <span className="block h-[2px] bg-gold mt-1 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            <div className="mt-16 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gold/50"></div>
              <span className="font-sans text-xs tracking-widest text-gold uppercase">La Travesía</span>
              <div className="w-12 h-[1px] bg-gold/50"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
