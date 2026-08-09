export interface GranjaBlock {
  id: string;
  titleKey: string;
  textKey: string;
  image: string;
}

export const granjaBlocks: GranjaBlock[] = [
  {
    id: "tradicion",
    titleKey: "tradicion.title",
    textKey: "tradicion.text",
    image: "/images/galeria/granja/8.jpg"   // hombre a caballo — cabalgata en la finca
  },
  {
    id: "sistema",
    titleKey: "sistema.title",
    textKey: "sistema.text",
    image: "/images/galeria/granja/1.jpg"   // cuyes en jaula — crianza propia
  },
  {
    id: "manejo",
    titleKey: "manejo.title",
    textKey: "manejo.text",
    image: "/images/galeria/granja/4.jpg"   // cerdos en corral — animales libres
  }
];
