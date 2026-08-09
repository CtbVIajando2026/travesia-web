'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import SocialIcons from '@/components/ui/SocialIcons';

export default function ContactSection() {
  const t = useTranslations('Home.ContactSection');

  return (
    <section className="py-24 bg-cream relative" id="contacto">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-20">
          <h1 className="font-playfair text-5xl md:text-6xl text-forest-dark mb-6">
            {t('title')}
          </h1>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-8"></div>
          <p className="font-cormorant text-2xl text-forest italic max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Contenedor Principal (Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Columna Izquierda: Formulario (ocupa 7 columnas en lg) */}
          <div className="lg:col-span-7">
            <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Nombre */}
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-forest-mid py-3 px-0 text-forest-dark font-sans text-lg focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                    placeholder={t('formName')}
                  />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-forest text-sm font-sans uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-placeholder-shown:text-forest-mid peer-placeholder-shown:normal-case peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gold peer-focus:uppercase peer-focus:tracking-widest">
                    {t('formName')}
                  </label>
                </div>
                
                {/* Email */}
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-forest-mid py-3 px-0 text-forest-dark font-sans text-lg focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                    placeholder={t('formEmail')}
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-forest text-sm font-sans uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-placeholder-shown:text-forest-mid peer-placeholder-shown:normal-case peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gold peer-focus:uppercase peer-focus:tracking-widest">
                    {t('formEmail')}
                  </label>
                </div>
              </div>

              {/* Teléfono */}
              <div className="relative group">
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full bg-transparent border-b border-forest-mid py-3 px-0 text-forest-dark font-sans text-lg focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                  placeholder={t('formPhone')}
                />
                <label htmlFor="phone" className="absolute left-0 -top-3.5 text-forest text-sm font-sans uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-placeholder-shown:text-forest-mid peer-placeholder-shown:normal-case peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gold peer-focus:uppercase peer-focus:tracking-widest">
                  {t('formPhone')}
                </label>
              </div>

              {/* Mensaje */}
              <div className="relative group">
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-forest-mid py-3 px-0 text-forest-dark font-sans text-lg focus:outline-none focus:border-gold transition-colors peer placeholder-transparent resize-none"
                  placeholder={t('formMessage')}
                ></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-forest text-sm font-sans uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-placeholder-shown:text-forest-mid peer-placeholder-shown:normal-case peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gold peer-focus:uppercase peer-focus:tracking-widest">
                  {t('formMessage')}
                </label>
              </div>

              {/* Botón Enviar */}
              <div className="mt-4">
                <button type="submit" className="group relative inline-flex items-center justify-center px-10 py-4 font-sans font-bold text-sm tracking-[0.2em] text-cream bg-forest-dark overflow-hidden transition-all duration-300 hover:bg-gold hover:text-forest-dark">
                  <span className="relative z-10 uppercase">{t('formSubmit')}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Columna Derecha: Información y Mapa (ocupa 5 columnas en lg) */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            
            {/* Info Bloques */}
            <div>
              <h3 className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.2em] mb-4">
                {t('addressTitle')}
              </h3>
              <p className="font-cormorant text-3xl text-forest-dark">
                {t('address')}
              </p>
            </div>

            <div>
              <h3 className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.2em] mb-6">
                {t('followUs')}
              </h3>
              <SocialIcons size="lg" color="dark" includeWhatsApp={true} className="mb-6" />
              <div className="flex flex-col gap-3">
                <a href="https://instagram.com/la_travesia.cue" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-forest-dark hover:text-gold transition-colors group">
                  <span className="font-sans text-sm tracking-wide">la_travesia.cue</span>
                  <div className="h-[1px] flex-1 bg-forest-mid/20 group-hover:bg-gold/40 transition-colors"></div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-forest-mid/60 group-hover:text-gold">IG</span>
                </a>
                <a href="https://facebook.com/latravesiacampina.cue" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-forest-dark hover:text-gold transition-colors group">
                  <span className="font-sans text-sm tracking-wide">latravesiacampina.cue</span>
                  <div className="h-[1px] flex-1 bg-forest-mid/20 group-hover:bg-gold/40 transition-colors"></div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-forest-mid/60 group-hover:text-gold">FB</span>
                </a>
                <a href="https://tiktok.com/@vivelatravesia_ec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-forest-dark hover:text-gold transition-colors group">
                  <span className="font-sans text-sm tracking-wide">vivelatravesia_ec</span>
                  <div className="h-[1px] flex-1 bg-forest-mid/20 group-hover:bg-gold/40 transition-colors"></div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-forest-mid/60 group-hover:text-gold">TK</span>
                </a>
                <a href="https://wa.me/593990136060" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-forest-dark hover:text-gold transition-colors group mt-1">
                  <span className="font-sans font-bold text-sm tracking-wider">0990136060</span>
                  <div className="h-[1px] flex-1 bg-forest-mid/20 group-hover:bg-gold/40 transition-colors"></div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-forest-mid/60 group-hover:text-gold">WA</span>
                </a>
              </div>
            </div>

            {/* Mapa Minimalista */}
            <div className="rounded-xl overflow-hidden h-[300px] w-full relative group">
              <div className="absolute inset-0 bg-forest/10 mix-blend-multiply pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
              <iframe 
                src="https://maps.google.com/maps?q=-3.0271698,-78.931553&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
