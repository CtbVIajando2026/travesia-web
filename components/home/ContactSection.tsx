'use client';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import SocialIcons from '@/components/ui/SocialIcons';
import { whatsappUrl } from '@/components/ui/WhatsAppButton';

const MAPS_DIRECTIONS = 'https://maps.app.goo.gl/68FWfLpcQDAZgxir9';

const inputClass =
  'w-full bg-transparent border-b border-forest-mid/60 py-3 px-0 text-forest-dark font-sans text-base md:text-lg focus:outline-none focus:border-gold transition-colors placeholder:text-forest-mid/70';
const labelClass = 'block font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-forest-mid mb-1';

export default function ContactSection() {
  const t = useTranslations('Home.ContactSection');
  const [form, setForm] = useState({ name: '', phone: '', reason: 'reasonTable', date: '', people: '', message: '' });

  const update = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  // Antes el formulario no enviaba nada (solo preventDefault). Ahora arma el mensaje y abre WhatsApp.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `${t('msgHello')} ${form.name.trim()}.`,
      `${t('msgReason')}: ${t(form.reason)}`,
      form.date && `${t('msgDate')}: ${form.date}`,
      form.people && `${t('msgPeople')}: ${form.people}`,
      form.phone && `${t('msgPhone')}: ${form.phone}`,
      form.message.trim() && `\n${form.message.trim()}`,
    ].filter(Boolean);
    window.open(whatsappUrl(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 md:py-24 bg-cream relative" id="contacto">
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="font-playfair text-5xl md:text-6xl text-forest-dark mb-6">
            {t('title')}
          </h1>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-8"></div>
          <p className="font-cormorant text-2xl text-forest italic max-w-2xl mx-auto font-medium">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-16 xl:gap-24 items-start [&>*]:min-w-0">

          {/* Formulario → WhatsApp */}
          <div>
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className={labelClass}>{t('formName')}</label>
                  <input id="name" type="text" required autoComplete="name" value={form.name} onChange={update('name')} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>{t('formPhone')}</label>
                  <input id="phone" type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={update('phone')} className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                <div className="sm:col-span-2 xl:col-span-1">
                  <label htmlFor="reason" className={labelClass}>{t('formReason')}</label>
                  <select id="reason" value={form.reason} onChange={update('reason')} className={`${inputClass} cursor-pointer`}>
                    <option value="reasonTable">{t('reasonTable')}</option>
                    <option value="reasonRoom">{t('reasonRoom')}</option>
                    <option value="reasonEvent">{t('reasonEvent')}</option>
                    <option value="reasonOther">{t('reasonOther')}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className={labelClass}>{t('formDate')}</label>
                  <input id="date" type="date" value={form.date} onChange={update('date')} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="people" className={labelClass}>{t('formPeople')}</label>
                  <input id="people" type="number" min={1} max={200} inputMode="numeric" value={form.people} onChange={update('people')} className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>{t('formMessage')}</label>
                <textarea id="message" rows={4} value={form.message} onChange={update('message')} className={`${inputClass} resize-none`} />
              </div>

              <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 font-sans font-bold text-sm tracking-[0.15em] uppercase text-cream bg-forest-dark transition-colors duration-300 hover:bg-gold hover:text-forest-dark"
                >
                  {t('formSubmit')}
                </button>
                <p className="font-sans text-xs text-forest-mid max-w-xs">{t('formNote')}</p>
              </div>
            </form>
          </div>

          {/* Información y mapa */}
          <div className="flex flex-col gap-12">

            <div>
              <h2 className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.2em] mb-4">
                {t('addressTitle')}
              </h2>
              <p className="font-cormorant text-3xl text-forest-dark font-medium">
                {t('address')}
              </p>
            </div>

            <div>
              <h2 className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.2em] mb-4">
                {t('hoursTitle')}
              </h2>
              <p className="font-cormorant text-2xl text-forest-dark font-medium">{t('hours')}</p>
              <p className="font-sans text-sm text-forest-mid mt-1">{t('hoursNote')}</p>
            </div>

            <div>
              <h2 className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.2em] mb-4">
                {t('phoneTitle')}
              </h2>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-block py-1 font-playfair text-3xl text-forest-dark hover:text-gold-dark transition-colors">
                099 013 6060
              </a>
            </div>

            <div>
              <h2 className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.2em] mb-6">
                {t('followUs')}
              </h2>
              <SocialIcons size="lg" color="dark" includeWhatsApp={false} className="mb-6 gap-5" />
              <div className="flex flex-col gap-3">
                {[
                  { href: 'https://instagram.com/la_travesia.cue', handle: '@la_travesia.cue', tag: 'Instagram' },
                  { href: 'https://facebook.com/latravesiacampina.cue', handle: 'latravesiacampina.cue', tag: 'Facebook' },
                  { href: 'https://tiktok.com/@vivelatravesia_ec', handle: '@vivelatravesia_ec', tag: 'TikTok' },
                ].map((s) => (
                  <a key={s.tag} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-forest-dark hover:text-gold-dark transition-colors group">
                    <span className="font-sans text-sm tracking-wide">{s.handle}</span>
                    <div className="h-[1px] flex-1 bg-forest-mid/20 group-hover:bg-gold/40 transition-colors"></div>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-forest-mid group-hover:text-gold-dark">{s.tag}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mapa */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden h-[300px] w-full relative">
                <iframe
                  title="Mapa — La Travesía, Quingeo"
                  src="https://maps.google.com/maps?q=-3.0271698,-78.931553&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-forest-mid text-forest-dark font-sans text-xs uppercase tracking-[0.2em] hover:border-gold-dark hover:text-gold-dark transition-colors"
              >
                {t('directions')} →
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
