export interface GalleryImage {
  id: string;
  url: string;
  altKey: string;
  category?: 'restaurante' | 'granja' | 'hospedaje' | 'platos';
}

export const galleryImages: GalleryImage[] = [
  // ── Restaurante & Ambiente ─────────────────────────────
  { id: "r1",  url: "/images/galeria/restaurante/1.jpg",  altKey: "restaurante1",  category: "restaurante" },
  { id: "r2",  url: "/images/galeria/restaurante/2.jpg",  altKey: "restaurante2",  category: "restaurante" },
  { id: "r3",  url: "/images/galeria/restaurante/3.jpg",  altKey: "restaurante3",  category: "restaurante" },
  { id: "r4",  url: "/images/galeria/restaurante/4.jpg",  altKey: "restaurante4",  category: "restaurante" },
  { id: "r5",  url: "/images/galeria/restaurante/5.jpg",  altKey: "restaurante5",  category: "restaurante" },
  { id: "r6",  url: "/images/galeria/restaurante/6.jpg",  altKey: "restaurante6",  category: "restaurante" },
  { id: "r7",  url: "/images/galeria/restaurante/7.jpg",  altKey: "restaurante7",  category: "restaurante" },
  { id: "r8",  url: "/images/galeria/restaurante/8.jpg",  altKey: "restaurante8",  category: "restaurante" },
  { id: "r9",  url: "/images/galeria/restaurante/9.jpg",  altKey: "restaurante9",  category: "restaurante" },
  { id: "r10", url: "/images/galeria/restaurante/10.jpg", altKey: "restaurante10", category: "restaurante" },
  { id: "r11", url: "/images/galeria/restaurante/11.jpg", altKey: "restaurante11", category: "restaurante" },
  { id: "r12", url: "/images/galeria/restaurante/12.jpg", altKey: "restaurante12", category: "restaurante" },
  { id: "r13", url: "/images/galeria/restaurante/13.jpg", altKey: "restaurante13", category: "restaurante" },
  { id: "r14", url: "/images/galeria/restaurante/14.jpg", altKey: "restaurante14", category: "restaurante" },
  { id: "r15", url: "/images/galeria/restaurante/15.jpg", altKey: "restaurante15", category: "restaurante" },
  { id: "r16", url: "/images/galeria/restaurante/16.jpg", altKey: "restaurante16", category: "restaurante" },

  // ── Granja & Naturaleza ────────────────────────────────
  { id: "g1",  url: "/images/galeria/granja/1.jpg",       altKey: "granja1",       category: "granja" },
  { id: "g2",  url: "/images/galeria/granja/2.jpg",       altKey: "granja2",       category: "granja" },
  { id: "g3",  url: "/images/galeria/granja/3.jpg",       altKey: "granja3",       category: "granja" },
  { id: "g4",  url: "/images/galeria/granja/4.jpg",       altKey: "granja4",       category: "granja" },
  { id: "g5",  url: "/images/galeria/granja/5.jpg",       altKey: "granja5",       category: "granja" },
  { id: "g6",  url: "/images/galeria/granja/6.jpg",       altKey: "granja6",       category: "granja" },
  { id: "g7",  url: "/images/galeria/granja/7.jpg",       altKey: "granja7",       category: "granja" },
  { id: "g8",  url: "/images/galeria/granja/8.jpg",       altKey: "granja8",       category: "granja" },
  { id: "g9",  url: "/images/galeria/granja/9.jpg",       altKey: "granja9",       category: "granja" },

  // ── Hospedaje ──────────────────────────────────────────
  { id: "h1",  url: "/images/galeria/hospedaje/1.jpg",    altKey: "hospedaje1",    category: "hospedaje" },
  { id: "h2",  url: "/images/galeria/hospedaje/2.jpg",    altKey: "hospedaje2",    category: "hospedaje" },
  { id: "h3",  url: "/images/galeria/hospedaje/3.jpg",    altKey: "hospedaje3",    category: "hospedaje" },
  { id: "h4",  url: "/images/galeria/hospedaje/4.jpg",    altKey: "hospedaje4",    category: "hospedaje" },
  { id: "h5",  url: "/images/galeria/hospedaje/5.jpg",    altKey: "hospedaje5",    category: "hospedaje" },
  { id: "h6",  url: "/images/galeria/hospedaje/6.jpg",    altKey: "hospedaje6",    category: "hospedaje" },
  { id: "h7",  url: "/images/galeria/hospedaje/7.jpg",    altKey: "hospedaje7",    category: "hospedaje" },
  { id: "h8",  url: "/images/galeria/hospedaje/8.jpg",    altKey: "hospedaje8",    category: "hospedaje" },
  { id: "h9",  url: "/images/galeria/hospedaje/9.jpg",    altKey: "hospedaje9",    category: "hospedaje" },
  { id: "h10", url: "/images/galeria/hospedaje/10.jpg",   altKey: "hospedaje10",   category: "hospedaje" },
  { id: "h11", url: "/images/galeria/hospedaje/11.jpg",   altKey: "hospedaje11",   category: "hospedaje" },
  { id: "h12", url: "/images/galeria/hospedaje/12.jpg",   altKey: "hospedaje12",   category: "hospedaje" },
  { id: "h13", url: "/images/galeria/hospedaje/13.jpg",   altKey: "hospedaje13",   category: "hospedaje" },
  { id: "h14", url: "/images/galeria/hospedaje/14.jpg",   altKey: "hospedaje14",   category: "hospedaje" },
  { id: "h15", url: "/images/galeria/hospedaje/15.jpg",   altKey: "hospedaje15",   category: "hospedaje" },
];
