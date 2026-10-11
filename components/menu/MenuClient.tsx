'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { fullMenu, MenuItem } from '@/data/fullMenu';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Detail Modal (solo texto, sin fotos) ───────────────────────────────── */
function ItemModal({
  item,
  locale,
  onClose,
  whatsappUrl,
}: {
  item: MenuItem;
  locale: string;
  onClose: () => void;
  whatsappUrl: string;
}) {
  const isEs = locale === 'es';
  const name = isEs ? item.esName : item.enName;
  const desc = isEs ? item.esDesc : item.enDesc;

  // Cerrar con Escape y bloquear el scroll del fondo mientras está abierto
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-forest-dark/80 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={name}
    >
      <motion.div
        initial={{ scale: 0.94, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 16 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        className="relative bg-cream max-w-lg w-full rounded-t-xl sm:rounded-sm overflow-y-auto max-h-[92svh] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label={isEs ? 'Cerrar' : 'Close'}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-cream/15 text-cream text-2xl leading-none flex items-center justify-center hover:bg-forest-dark"
        >
          ×
        </button>
        {/* Header band */}
        <div className="bg-forest pl-6 sm:pl-8 pr-16 py-6 flex items-start justify-between gap-4">
          <div>
            {item.featured && (
              <span className="inline-block font-sans text-[11px] uppercase tracking-widest text-gold border border-gold/40 px-2 py-0.5 mb-3">
                {isEs ? 'Especialidad de la casa' : 'House Specialty'}
              </span>
            )}
            <h3 className="font-playfair text-2xl text-cream-warm leading-snug">{name}</h3>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="font-playfair text-3xl text-gold font-bold">${item.price.toFixed(2)}</span>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 sm:px-8 py-6">
          {desc && (
            <p className="font-sans text-sm text-forest-mid leading-relaxed">{desc}</p>
          )}
          <div className="w-12 h-[1px] bg-gold mt-6 mb-6" />
          <div className="flex gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-6 py-3 bg-gold hover:bg-gold-light text-forest-dark font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300"
            >
              {isEs ? 'Reservar mesa' : 'Book a table'}
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-forest-mid/40 text-forest-mid hover:border-forest-dark hover:text-forest-dark font-sans text-xs uppercase tracking-widest transition-all duration-300"
            >
              {isEs ? 'Cerrar' : 'Close'}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Menu Row (single item, list style) ────────────────────── */
function MenuRow({
  item,
  locale,
  onClick,
}: {
  item: MenuItem;
  locale: string;
  onClick: () => void;
}) {
  const isEs = locale === 'es';
  const name = isEs ? item.esName : item.enName;
  const desc = isEs ? item.esDesc : item.enDesc;

  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="w-full text-left group border-b border-forest-mid/10 last:border-b-0 hover:bg-cream-warm transition-colors duration-200"
    >
      <div className="flex items-start gap-4 py-4 px-4 md:px-6">
        {/* Dot indicator for featured */}
        <div className="flex-shrink-0 mt-1.5">
          {item.featured ? (
            <div className="w-2 h-2 rounded-full bg-gold" />
          ) : (
            <div className="w-2 h-2 rounded-full bg-forest-mid/20 group-hover:bg-gold/40 transition-colors" />
          )}
        </div>

        {/* Name + desc */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-playfair text-base md:text-lg text-forest-dark group-hover:text-gold-dark transition-colors duration-200 leading-snug">
              {name}
            </span>
            {item.featured && (
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-gold-dark border border-gold-dark/40 px-1.5 py-0.5 flex-shrink-0">
                {isEs ? 'Favorito' : 'Favorite'}
              </span>
            )}
          </div>
          {desc && (
            <p className="font-sans text-[13px] md:text-sm text-forest-mid mt-1 leading-relaxed line-clamp-2 pr-4">
              {desc}
            </p>
          )}
        </div>

        {/* Price + arrow */}
        <div className="flex-shrink-0 flex items-center gap-3 pt-0.5">
          <span className="font-playfair text-lg text-forest-dark font-semibold">
            ${item.price.toFixed(2)}
          </span>
          <span className="text-forest-mid/30 group-hover:text-gold transition-colors duration-200 text-sm">›</span>
        </div>
      </div>
    </motion.button>
  );
}

/* ── Main ───────────────────────────────────────────────────── */
export default function MenuClient({ locale }: { locale: string }) {
  const [activeCategory, setActiveCategory] = useState<string>(fullMenu[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [search, setSearch] = useState('');
  const isEs = locale === 'es';
  const gridRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // En móvil la barra de categorías se desliza: centrar siempre la categoría activa
  useEffect(() => {
    tabRefs.current[activeCategory]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [activeCategory]);

  const selectedCategory = fullMenu.find((cat) => cat.id === activeCategory) || fullMenu[0];

  const filteredItems = search.trim()
    ? fullMenu.flatMap((cat) =>
        cat.items.filter((item) => {
          const q = search.toLowerCase();
          return (
            item.esName.toLowerCase().includes(q) ||
            item.enName.toLowerCase().includes(q) ||
            item.esDesc?.toLowerCase().includes(q) ||
            item.enDesc?.toLowerCase().includes(q)
          );
        })
      )
    : selectedCategory.items;

  const whatsappUrl =
    'https://wa.me/593990136060?text=' +
    encodeURIComponent(
      isEs
        ? '¡Hola! Quisiera reservar una mesa en La Travesía Campiña. ¿Tienen disponibilidad?'
        : 'Hi! I would like to book a table at La Travesía Campiña. Do you have availability?'
    );

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    setSearch('');
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Navbar locale={locale} />

      <main className="min-h-screen bg-cream">

        {/* ── Hero ── */}
        <section className="relative h-[55vh] min-h-[380px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-forest-dark/60 z-10" />
          <Image
            src="/images/galeria/restaurante/5.jpg"
            alt="Carta La Travesía"
            fill
            priority
            className="object-cover scale-105"
            sizes="100vw"
          />
          <div className="relative z-20 text-center px-6 mt-20 max-w-3xl mx-auto">
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-gold-pale font-semibold [text-shadow:0_1px_10px_rgba(0,0,0,0.75)] mb-4">
              {isEs ? 'Restaurante La Travesía · Quingeo' : 'La Travesía Restaurant · Quingeo'}
            </p>
            <h1 className="font-playfair text-5xl md:text-7xl text-cream-warm drop-shadow-lg mb-5">
              {isEs ? 'Nuestro menú' : 'Our menu'}
            </h1>
            <div className="w-20 h-[1px] bg-gold mx-auto mb-5" />
            <p className="font-cormorant text-[1.35rem] md:text-2xl text-cream/95 italic max-w-xl mx-auto font-medium">
              {isEs
                ? 'Desayunos, platos típicos, cocina gourmet, mariscos y postres caseros. Elige con calma: todo se prepara al momento.'
                : 'Breakfasts, traditional dishes, gourmet plates and homemade desserts. Take your time: everything is made to order.'}
            </p>
          </div>
        </section>

        {/* ── Category Tabs ── */}
        <section className="sticky top-20 z-40 bg-forest border-b border-gold/20 shadow-md">
          {/* Degradado a la derecha: indica en móvil que hay más categorías deslizando */}
          <div className="md:hidden pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-forest to-transparent z-10" />
          <div className="max-w-6xl mx-auto px-4 overflow-x-auto scrollbar-none">
            <div className="flex items-center h-14 gap-0 whitespace-nowrap">
              {fullMenu.map((cat) => {
                const isActive = cat.id === activeCategory && !search;
                const title = isEs ? cat.esTitle : cat.enTitle;
                return (
                  <button
                    key={cat.id}
                    ref={(el) => { tabRefs.current[cat.id] = el; }}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`relative flex items-center gap-1.5 px-3 py-2 font-sans text-[11px] uppercase tracking-wider font-semibold transition-all duration-200 h-full ${
                      isActive
                        ? 'text-gold'
                        : 'text-cream/70 hover:text-cream/80'
                    }`}
                  >
                    <span>{title}</span>
                    {isActive && (
                      <motion.div
                        layoutId="menu-tab-line"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}

              {/* Search */}
              <div className="hidden md:flex ml-auto flex-shrink-0 items-center gap-2 pl-4 border-l border-gold/20">
                <svg className="w-3.5 h-3.5 text-cream/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={isEs ? 'Buscar...' : 'Search...'}
                  aria-label={isEs ? 'Buscar un plato' : 'Search a dish'}
                  className="w-40 bg-transparent font-sans text-base text-cream placeholder-cream/60 focus:outline-none py-1"
                />
                {search && (
                  <button onClick={() => setSearch('')} className="text-cream/70 hover:text-gold text-lg leading-none">×</button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Menu list ── */}
        <section ref={gridRef} className="py-8 md:py-12 px-4 max-w-4xl mx-auto scroll-mt-36">

          {/* Buscador visible en móvil (en escritorio va en la barra de categorías) */}
          <div className="md:hidden mb-6 flex items-center gap-3 bg-cream-warm border border-forest-mid/25 rounded-full px-4 h-12 focus-within:border-gold-dark">
            <svg className="w-4 h-4 text-forest-mid flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={isEs ? 'Busca un plato (ej. cuy, caldo, postre)' : 'Search a dish (e.g. cuy, soup, dessert)'}
              aria-label={isEs ? 'Buscar un plato' : 'Search a dish'}
              className="flex-1 min-w-0 bg-transparent font-sans text-base text-forest-dark placeholder:text-forest-mid/80 focus:outline-none"
            />
            {search && (
              <button onClick={() => setSearch('')} aria-label={isEs ? 'Borrar búsqueda' : 'Clear search'} className="w-8 h-8 flex items-center justify-center text-forest-mid text-xl">×</button>
            )}
          </div>

          {/* Section header */}
          {!search && (
            <div className="mb-6 flex items-center gap-3 border-b border-forest-dark/10 pb-5">
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl text-forest-dark">
                  {isEs ? selectedCategory.esTitle : selectedCategory.enTitle}
                </h2>
                <p className="font-sans text-[11px] text-forest-mid/80 uppercase tracking-widest mt-0.5">
                  {filteredItems.length} {isEs ? 'opciones' : 'options'}
                </p>
              </div>
            </div>
          )}

          {search && (
            <div className="mb-6 pb-5 border-b border-forest-dark/10">
              <h2 className="font-playfair text-2xl text-forest-dark">
                {isEs ? `Resultados para "${search}"` : `Results for "${search}"`}
              </h2>
              <p className="font-sans text-[11px] text-forest-mid/80 uppercase tracking-widest mt-1">
                {filteredItems.length} {isEs ? 'encontrados' : 'found'}
              </p>
            </div>
          )}

          {/* Item list */}
          <div className="bg-cream-warm border border-forest-mid/10 rounded-sm overflow-hidden shadow-sm">
            <AnimatePresence mode="wait">
              {filteredItems.length > 0 ? (
                <motion.div
                  key={search || activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {filteredItems.map((item) => (
                    <MenuRow
                      key={item.id}
                      item={item}
                      locale={locale}
                      onClick={() => setSelectedItem(item)}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-20 text-center"
                >
                  <p className="font-cormorant text-[1.35rem] md:text-2xl text-forest italic font-medium">
                    {isEs ? 'No encontramos ese plato. Prueba con otra palabra.' : 'No dish found. Try another word.'}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Legend */}
          <div className="mt-5 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
            <span className="font-sans text-[11px] text-forest-mid/80 uppercase tracking-widest">
              {isEs ? 'El punto dorado marca las especialidades de la casa' : 'The gold dot marks our house specialties'}
            </span>
          </div>
        </section>

        {/* ── Category Quick Nav ── */}
        <section className="py-14 bg-forest-dark border-t border-gold/20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-gold text-center mb-8">
              {isEs ? 'Saltar a otra sección' : 'Jump to another section'}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
              {fullMenu.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`flex flex-col items-center justify-center gap-2 py-3 min-h-[52px] border rounded-sm transition-all duration-200 ${
                    cat.id === activeCategory && !search
                      ? 'border-gold bg-gold/10 text-gold'
                      : 'border-gold/25 hover:border-gold/50 text-cream/80 hover:text-cream'
                  }`}
                >
                  <span className="font-sans text-[11px] uppercase tracking-wider text-center leading-tight px-1">
                    {isEs ? cat.esTitle : cat.enTitle}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-cream border-t border-forest-mid/10 py-20 px-6">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="font-playfair text-3xl md:text-4xl text-forest-dark mb-4">
              {isEs ? '¿Ya se te antojó algo?' : 'Found something you like?'}
            </h2>
            <div className="w-14 h-[1px] bg-gold mx-auto mb-6" />
            <p className="font-cormorant text-[1.35rem] md:text-2xl text-forest italic max-w-md mx-auto mb-10 font-medium">
              {isEs
                ? 'Reserva tu mesa por WhatsApp y te esperamos con todo listo en Quingeo.'
                : 'Book your table on WhatsApp and we will have everything ready in Quingeo.'}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold hover:bg-gold-light text-forest-dark font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.579 2.006 14.105.98 11.477.978c-5.438 0-9.863 4.372-9.867 9.8.001 1.94.512 3.826 1.482 5.512l-.979 3.573 3.73-.974.204.119zM18.8 15.35c-.328-.164-1.94-.957-2.24-1.066-.3-.11-.52-.164-.74.164-.22.329-.85 1.066-1.04 1.284-.19.219-.38.246-.71.082-.33-.164-1.39-.512-2.646-1.633-.977-.872-1.637-1.95-1.83-2.278-.19-.328-.02-.506.143-.67.149-.147.33-.383.49-.575.163-.19.22-.328.328-.548.11-.219.055-.41-.03-.574-.085-.164-.74-1.78-.979-2.357-.24-.574-.48-.492-.66-.5-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.295-1.04 1.016-1.04 2.479 0 1.462 1.06 2.875 1.21 3.07.15.19 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.57-.085 1.94-.793 2.21-1.52.28-.727.28-1.353.19-1.482-.09-.129-.33-.203-.66-.367z" />
              </svg>
              {isEs ? 'Reservar por WhatsApp' : 'Book via WhatsApp'}
            </a>
          </div>
        </section>

      </main>

      <Footer />

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {selectedItem && (
          <ItemModal
            item={selectedItem}
            locale={locale}
            onClose={() => setSelectedItem(null)}
            whatsappUrl={whatsappUrl}
          />
        )}
      </AnimatePresence>
    </>
  );
}
