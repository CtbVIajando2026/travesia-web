export interface MenuItem {
  id: string;
  nameKey: string;
  descKey: string;
  image: string;
}

export const featuredMenu: MenuItem[] = [
  {
    id: "cuy-asado",
    nameKey: "cuyAsado.name",
    descKey: "cuyAsado.desc",
    image: "/images/menu/cuy-asado-placeholder.jpg"
  },
  {
    id: "fritada",
    nameKey: "fritada.name",
    descKey: "fritada.desc",
    image: "/images/menu/fritada-placeholder.jpg"
  },
  {
    id: "llapingachos",
    nameKey: "llapingachos.name",
    descKey: "llapingachos.desc",
    image: "/images/menu/llapingachos-placeholder.jpg"
  },
  {
    id: "locro",
    nameKey: "locro.name",
    descKey: "locro.desc",
    image: "/images/menu/locro-placeholder.jpg"
  }
];
