import React from 'react';
import { useTranslations } from 'next-intl';
import SocialIcons from '@/components/ui/SocialIcons';

export default function Footer() {
  const t = useTranslations('Footer');
  
  return (
    <footer className="bg-forest-dark text-cream pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20 text-center md:text-left">
          
          <div className="md:col-span-4">
            <h3 className="font-playfair text-3xl mb-6 text-cream-warm tracking-wide">La Travesía</h3>
            <p className="font-sans text-sm text-cream/50 max-w-xs mx-auto md:mx-0 leading-loose">
              {t('description')}
            </p>
          </div>
          
          <div className="md:col-span-4 md:col-start-6">
            <h4 className="font-sans font-bold text-cream/50 mb-6 uppercase text-xs tracking-[0.3em]">
              {t('locationTitle')}
            </h4>
            <p className="font-cormorant text-xl text-cream-warm mb-4 italic">
              {t('locationText')}
            </p>
          </div>
          
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="font-sans font-bold text-cream/50 mb-6 uppercase text-xs tracking-[0.3em]">
              Síguenos
            </h4>
            <SocialIcons size="lg" color="light" includeWhatsApp={true} className="justify-center md:justify-start" />
            <div className="mt-6 flex flex-col gap-2 font-sans text-xs tracking-widest text-cream/50">
              <span>la_travesia.cue</span>
              <span>latravesiacampina.cue</span>
              <span>vivelatravesia_ec</span>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-forest-mid/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] uppercase tracking-widest text-cream/50">
            © {new Date().getFullYear()} La Travesía Granja, Restaurante & Hospedaje. {t('rights')}
          </p>
          <div className="font-playfair font-bold text-cream/50 text-xl">
            LT
          </div>
        </div>
      </div>
    </footer>
  );
}
