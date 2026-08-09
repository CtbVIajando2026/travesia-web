'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function HospedajeClient({ locale }: { locale: string }) {
  const t = useTranslations('Hospedaje');

  // WhatsApp link configuration
  const whatsappMsg = locale === 'es' 
    ? "Hola, me gustaría consultar disponibilidad para hospedarme en La Travesía Campiña." 
    : "Hello, I would like to check availability for lodging at La Travesía Campiña.";
  const whatsappUrl = "https://wa.me/593990136060?text=" + encodeURIComponent(whatsappMsg);

  return (
    <>
      <Navbar locale={locale} forceBackground />
      
      <main className="min-h-screen bg-cream">
        
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[550px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-forest-dark/45 z-10"></div>
          <Image
            src="/images/galeria/hospedaje/1.jpg"
            alt="Habitación panorámica — El Refugio La Travesía"
            fill
            priority
            className="object-cover"
          />
          <div className="relative z-20 text-center px-6 mt-20 max-w-4xl mx-auto">
            <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-gold mb-6">
              {locale === 'es' ? 'Hospedaje & Refugio Andino' : 'Andean Lodging & Refuge'}
            </p>
            <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl text-cream-warm drop-shadow-lg mb-6">
              {t('title')}
            </h1>
            <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
            <p className="font-sans text-xs md:text-sm text-cream-warm uppercase tracking-[0.4em] drop-shadow-md mb-10">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gold hover:bg-gold-light text-forest-dark font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300"
              >
                {locale === 'es' ? 'Consultar Disponibilidad' : 'Check Availability'}
              </a>
            </div>
          </div>
        </section>

        {/* ── Experiencias incluidas ── */}
        <section className="bg-forest text-cream py-16 px-6 border-b border-gold/20">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { icon: '🌿', es: 'Desayuno incluido', en: 'Breakfast included' },
              { icon: '🏔️', es: 'Vistas a la montaña', en: 'Mountain views' },
              { icon: '🚗', es: 'Parqueo privado gratuito', en: 'Free private parking' },
              { icon: '📶', es: 'Wi-Fi de alta velocidad', en: 'High-speed Wi-Fi' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <span className="text-3xl">{item.icon}</span>
                <div className="w-6 h-[1px] bg-gold/40" />
                <p className="font-sans text-[10px] uppercase tracking-widest text-cream/70">
                  {locale === 'es' ? item.es : item.en}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Intro & Price Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-7 flex flex-col gap-8">
              <h2 className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-2">
                {locale === 'es' ? 'La Estadía' : 'The Stay'}
              </h2>
              <div className="w-16 h-[1px] bg-gold"></div>
              <p className="font-cormorant text-3xl md:text-4xl text-forest leading-relaxed font-light italic">
                {t('description')}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-forest-dark text-cream border border-gold/40 p-8 md:p-10 rounded-lg shadow-xl flex flex-col items-center text-center">
                <span className="font-sans text-xs uppercase tracking-widest text-gold mb-3 font-semibold">
                  {locale === 'es' ? 'Reserva tu estancia' : 'Book Your Stay'}
                </span>
                <p className="font-cormorant text-xl text-cream-warm italic mb-8 max-w-xs leading-relaxed">
                  {locale === 'es' ? 'Consulta disponibilidad y tarifas por WhatsApp.' : 'Check availability and rates via WhatsApp.'}
                </p>
                <div className="w-full border-t border-forest-mid/30 my-6"></div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-3 px-8 py-4 bg-gold hover:bg-gold-light text-forest-dark font-sans text-xs uppercase tracking-widest font-bold rounded transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 fill-current mr-2" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.579 2.006 14.105.98 11.477.978c-5.438 0-9.863 4.372-9.867 9.8.001 1.94.512 3.826 1.482 5.512l-.979 3.573 3.73-.974.204.119zM18.8 15.35c-.328-.164-1.94-.957-2.24-1.066-.3-.11-.52-.164-.74.164-.22.329-.85 1.066-1.04 1.284-.19.219-.38.246-.71.082-.33-.164-1.39-.512-2.646-1.633-.977-.872-1.637-1.95-1.83-2.278-.19-.328-.02-.506.143-.67.149-.147.33-.383.49-.575.163-.19.22-.328.328-.548.11-.219.055-.41-.03-.574-.085-.164-.74-1.78-.979-2.357-.24-.574-.48-.492-.66-.5-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.295-1.04 1.016-1.04 2.479 0 1.462 1.06 2.875 1.21 3.07.15.19 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.57-.085 1.94-.793 2.21-1.52.28-.727.28-1.353.19-1.482-.09-.129-.33-.203-.66-.367z"/>
                  </svg>
                  {t('bookingBtn')}
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Room Types Grid */}
        <section className="py-24 bg-cream-warm border-t border-b border-forest-mid/10">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="font-playfair text-4xl md:text-5xl text-forest-dark mb-6">
                {t('roomsTitle')}
              </h2>
              <div className="w-[1px] h-12 bg-gold mx-auto mb-6"></div>
              <p className="font-sans text-sm text-forest-mid leading-relaxed uppercase tracking-wider">
                {t('roomsDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              {/* Double Room */}
              <div className="bg-cream border border-gold/25 p-8 flex flex-col justify-between rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                <div>
                  <div className="w-12 h-12 bg-forest/5 rounded-full flex items-center justify-center text-forest-mid mb-8 group-hover:bg-gold/10 transition-colors">
                    <svg className="w-6 h-6 fill-none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl text-forest-dark mb-4">
                    {t('roomDoubleName')}
                  </h3>
                  <p className="font-sans text-sm text-forest-mid leading-relaxed mb-6">
                    {t('roomDoubleDesc')}
                  </p>
                </div>
                <div className="pt-6 border-t border-forest-mid/10 text-xs font-semibold text-gold uppercase tracking-widest">
                  {locale === 'es' ? 'Cama Matrimonial · Vista al Jardín' : 'Double Bed · Garden View'}
                </div>
              </div>

              {/* Triple Room */}
              <div className="bg-cream border border-gold/25 p-8 flex flex-col justify-between rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                <div>
                  <div className="w-12 h-12 bg-forest/5 rounded-full flex items-center justify-center text-forest-mid mb-8 group-hover:bg-gold/10 transition-colors">
                    <svg className="w-6 h-6 fill-none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl text-forest-dark mb-4">
                    {t('roomTripleName')}
                  </h3>
                  <p className="font-sans text-sm text-forest-mid leading-relaxed mb-6">
                    {t('roomTripleDesc')}
                  </p>
                </div>
                <div className="pt-6 border-t border-forest-mid/10 text-xs font-semibold text-gold uppercase tracking-widest">
                  {locale === 'es' ? '3 Camas · Espacio Familiar' : '3 Beds · Family Space'}
                </div>
              </div>

              {/* Suite Premium */}
              <div className="bg-cream border border-gold-light p-8 flex flex-col justify-between rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gold text-forest-dark text-[9px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl">
                  Premium
                </div>
                <div>
                  <div className="w-12 h-12 bg-forest/5 rounded-full flex items-center justify-center text-forest-mid mb-8 group-hover:bg-gold/10 transition-colors">
                    <svg className="w-6 h-6 fill-none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl text-forest-dark mb-4">
                    {t('roomSuiteName')}
                  </h3>
                  <p className="font-sans text-sm text-forest-mid leading-relaxed mb-6">
                    {t('roomSuiteDesc')}
                  </p>
                </div>
                <div className="pt-6 border-t border-forest-mid/10 text-xs font-semibold text-gold uppercase tracking-widest">
                  {locale === 'es' ? 'Chimenea · Terraza Privada · Vista Panorámica' : 'Fireplace · Private Terrace · Panoramic View'}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-20">
            <h2 className="font-playfair text-4xl md:text-5xl text-forest-dark mb-6">
              {t('amenitiesTitle')}
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            
            {/* Amenity 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-forest-dark/5 rounded-full">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16a2 2 0 002 2h12a2 2 0 002-2V4M4 8h16M9 12h6" />
                </svg>
              </div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-forest-dark font-semibold text-center max-w-[150px]">
                {t('amenity1')}
              </h4>
            </div>

            {/* Amenity 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-forest-dark/5 rounded-full">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-forest-dark font-semibold text-center max-w-[150px]">
                {t('amenity2')}
              </h4>
            </div>

            {/* Amenity 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-forest-dark/5 rounded-full">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-forest-dark font-semibold text-center max-w-[150px]">
                {t('amenity3')}
              </h4>
            </div>

            {/* Amenity 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-forest-dark/5 rounded-full">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-forest-dark font-semibold text-center max-w-[150px]">
                {t('amenity4')}
              </h4>
            </div>

            {/* Amenity 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-forest-dark/5 rounded-full">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-forest-dark font-semibold text-center max-w-[150px]">
                {t('amenity5')}
              </h4>
            </div>

            {/* Amenity 6 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-forest-dark/5 rounded-full">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10.5 10.5 0 0114.14 0M1.414 8.929a15 15 0 0121.172 0" />
                </svg>
              </div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-forest-dark font-semibold text-center max-w-[150px]">
                {t('amenity6')}
              </h4>
            </div>

            {/* Amenity 7 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-forest-dark/5 rounded-full">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-forest-dark font-semibold text-center max-w-[150px]">
                {t('amenity7')}
              </h4>
            </div>

            {/* Amenity 8 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-forest-dark/5 rounded-full">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-forest-dark font-semibold text-center max-w-[150px]">
                {t('amenity8')}
              </h4>
            </div>

          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="font-sans text-xs font-bold text-forest-mid uppercase tracking-[0.3em] mb-4 block">
                {locale === 'es' ? 'El Espacio' : 'The Space'}
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl text-forest-dark mb-6">
                {locale === 'es' ? 'Vive el refugio andino' : 'Experience the Andean refuge'}
              </h2>
              <div className="w-16 h-[1px] bg-gold mx-auto mb-6"></div>
              <p className="font-cormorant text-xl text-forest italic max-w-xl mx-auto">
                {locale === 'es'
                  ? 'Rodeado de montañas, aire puro y el silencio del campo azuayo.'
                  : 'Surrounded by mountains, fresh air and the silence of the Azuay countryside.'}
              </p>
            </div>

            {/* Photo Grid — fotos reales del hospedaje */}
            {(() => {
              const fotos = [
                { src: '/images/galeria/hospedaje/9.jpg',  alt: locale === 'es' ? 'Suite con balcón y vista al campo' : 'Suite with balcony and field view', wide: true },
                { src: '/images/galeria/hospedaje/13.jpg', alt: locale === 'es' ? 'Balcón de hierro forjado con vista' : 'Wrought iron balcony with view' },
                { src: '/images/galeria/hospedaje/6.jpg',  alt: locale === 'es' ? 'Habitación familiar con litera' : 'Family room with bunk bed' },
                { src: '/images/galeria/hospedaje/4.jpg',  alt: locale === 'es' ? 'Baño privado con flores' : 'Private bathroom with flowers' },
                { src: '/images/galeria/hospedaje/15.jpg', alt: locale === 'es' ? 'Habitación con vista al campo' : 'Room with countryside view' },
              ];
              return (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {fotos.map((f, i) => (
                    <div key={i} className={`relative overflow-hidden rounded-sm group ${f.wide ? 'col-span-2' : ''}`} style={{ aspectRatio: f.wide ? '16/9' : '1/1' }}>
                      <Image src={f.src} alt={f.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                        <span className="font-sans text-[10px] text-cream uppercase tracking-widest font-semibold">{f.alt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-28 bg-forest-dark text-cream border-t border-gold/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-playfair text-4xl md:text-6xl text-cream-warm mb-8">
              {t('bookingTitle')}
            </h2>
            <div className="w-[1px] h-16 bg-gold mx-auto mb-10"></div>
            <p className="font-cormorant text-2xl md:text-3xl text-beige max-w-2xl mx-auto italic leading-relaxed mb-12 font-light">
              {t('bookingText')}
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gold hover:bg-gold-light text-forest-dark font-sans text-xs uppercase tracking-widest font-bold rounded transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 fill-current mr-2" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.579 2.006 14.105.98 11.477.978c-5.438 0-9.863 4.372-9.867 9.8.001 1.94.512 3.826 1.482 5.512l-.979 3.573 3.73-.974.204.119zM18.8 15.35c-.328-.164-1.94-.957-2.24-1.066-.3-.11-.52-.164-.74.164-.22.329-.85 1.066-1.04 1.284-.19.219-.38.246-.71.082-.33-.164-1.39-.512-2.646-1.633-.977-.872-1.637-1.95-1.83-2.278-.19-.328-.02-.506.143-.67.149-.147.33-.383.49-.575.163-.19.22-.328.328-.548.11-.219.055-.41-.03-.574-.085-.164-.74-1.78-.979-2.357-.24-.574-.48-.492-.66-.5-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.295-1.04 1.016-1.04 2.479 0 1.462 1.06 2.875 1.21 3.07.15.19 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.57-.085 1.94-.793 2.21-1.52.28-.727.28-1.353.19-1.482-.09-.129-.33-.203-.66-.367z"/>
              </svg>
              {t('bookingBtn')}
            </a>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
