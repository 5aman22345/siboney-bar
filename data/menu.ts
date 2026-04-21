// Fuente: carta digital oficial + screenshots proporcionados.
// Para añadir productos: copiar la estructura de un DrinkItem existente.
// Para añadir categorías: añadir un nuevo objeto al array drinkCategories.

export interface DrinkFormat {
  label: string;         // p.ej. "33 cl", "Caña", "Copa"
  price?: string;        // p.ej. "2,40 €" — omitir si el precio es desconocido
  priceOnRequest?: true; // usar en lugar de price cuando el precio no está confirmado
}

export interface DrinkItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  alcohol: string;    // p.ej. "5,40% Vol." — usar "0,00% Vol." si sin alcohol
  formats: DrinkFormat[];
  featured?: boolean;
  badge?: string;     // p.ej. "Sin alcohol", "Doble malta"
  bottleVariant?: "estrella" | "freedamm" | "freedamm-tostada" | "turia" | "volldamm" | "dammlemon";
  bottleImage?: string; // Pfad relativ zu /public, z.B. "/siboney-bar/images/estrella-damm.png"
}

export interface DrinkCategory {
  id: string;
  name: string;
  items: DrinkItem[];
}

export const drinkCategories: DrinkCategory[] = [
  {
    id: "cervezas",
    name: "Cervezas",
    items: [
      {
        id: "estrella-damm",
        name: "Estrella Damm",
        subtitle: "Cerveza mediterránea",
        description:
          "La cerveza de Barcelona por excelencia. Elaborada con cebada malteada, arroz y lúpulo. Fresca, equilibrada y con un toque mediterráneo inconfundible.",
        alcohol: "5,40% Vol.",
        featured: true,
        bottleVariant: "estrella",
        bottleImage: "/siboney-bar/images/estrella-damm.png",
        formats: [
          { label: "33 cl",  price: "2,40 €" },
          { label: "Caña",   price: "1,80 €" },
          { label: "Copa",   price: "2,40 €" },
        ],
      },
      {
        id: "free-damm",
        name: "Free Damm",
        subtitle: "Cerveza sin alcohol 0,0%",
        description:
          "Todo el sabor de una cerveza refrescante, sin el alcohol. Perfecta para cualquier momento del día.",
        alcohol: "0,00% Vol.",
        badge: "Sin alcohol",
        bottleVariant: "freedamm",
        bottleImage: "/siboney-bar/images/free-damm.png",
        formats: [
          { label: "33 cl", price: "2,50 €" },
        ],
      },
      {
        id: "free-damm-tostada",
        name: "Free Damm Tostada",
        subtitle: "Cerveza 0,0% tostada",
        description:
          "La variante tostada de Free Damm. Notas suaves de malta y caramelo, sin alcohol.",
        alcohol: "0,00% Vol.",
        badge: "Sin alcohol",
        bottleVariant: "freedamm-tostada",
        bottleImage: "/siboney-bar/images/free-damm-tostada.png",
        formats: [
          { label: "33 cl", price: "2,50 €" },
        ],
      },
      {
        id: "turia",
        name: "Turia",
        subtitle: "Cerveza tostada",
        description:
          "Una cerveza de estilo Munich, de color ámbar y aroma a malta tostada. Suave y con cuerpo.",
        alcohol: "5,40% Vol.",
        featured: true,
        bottleVariant: "turia",
        formats: [
          { label: "33 cl", price: "2,40 €" },
        ],
      },
      {
        id: "voll-damm",
        name: "Voll-Damm",
        subtitle: "Doble malta",
        description:
          "Cerveza de doble fermentación, de carácter y cuerpo intenso. Para los que buscan algo diferente.",
        alcohol: "7,20% Vol.",
        badge: "Doble malta",
        bottleVariant: "volldamm",
        bottleImage: "/siboney-bar/images/voll-damm.png",
        formats: [
          { label: "33 cl", price: "2,50 €" },
        ],
      },
      {
        id: "damm-lemon",
        name: "Damm Lemon",
        subtitle: "La auténtica clara mediterránea",
        description:
          "Combinación refrescante de cerveza y limón natural. La clara perfecta para los días de calor barcelonés.",
        alcohol: "3,20% Vol.",
        bottleVariant: "dammlemon",
        bottleImage: "/siboney-bar/images/damm-lemon.png",
        formats: [
          { label: "33 cl", priceOnRequest: true },
        ],
      },
    ],
  },
  // Aquí se pueden añadir más categorías: cafés, refrescos, tapas, bocadillos...
];
