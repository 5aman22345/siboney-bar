// Traducciones por defecto: Español
// Para añadir un nuevo idioma: duplicar este archivo con el código ISO (ca.ts, en.ts, de.ts)
// y traducir todos los valores. Las claves deben mantenerse idénticas.

const es = {
  locale: "es",
  lang: "es",

  nav: {
    menu:    "Carta",
    about:   "El local",
    info:    "Cómo llegar",
    contact: "Contacto",
    callCta: "Llamar",
  },

  hero: {
    eyebrow: "Bar Cafeteria · Sarrià-Sant Gervasi",
    headline: "El bar del barrio,\nde toda la vida.",
    subline:
      "Tapas, bocadillos y café en el corazón de Sarrià-Sant Gervasi, Barcelona.",
    ctaMenu:      "Ver carta",
    ctaDirections: "Cómo llegar",
    ctaCall:      "Llamar",
  },

  about: {
    sectionLabel: "El local",
    headline: "Un rincón de siempre en el barrio",
    body: [
      "Abrimos cada mañana con el café recién hecho y cerramos cuando el barrio lo necesita. Aquí encontrarás bocadillos de toda la vida, tapas sin pretensiones y platos combinados que siempre funcionan.",
      "Sin reservas, sin formalidades: solo buena comida, buena cerveza y trato cercano. Ven a desayunar, a comer o simplemente a tomarte algo tranquilo.",
    ],
    tagline: "De lunes a sábado, desde primera hora.",
  },

  menu: {
    sectionLabel: "Carta",
    headline: "Bebidas destacadas",
    subline: "Nuestra selección de cervezas, directamente de la carta.",
    ctaFullMenu: "Ver carta completa",
    alcoholLabel: "Alcohol",
    priceOnRequest: "Consultar en barra",
  },

  especialidades: {
    sectionLabel: "Especialidades",
    headline: "Lo que hacemos bien",
    subline: "Del desayuno a la última caña. Todo lo que necesitas, sin complicaciones.",
  },

  info: {
    sectionLabel: "Información",
    headline: "Encuéntranos",
    addressLabel:  "Dirección",
    phoneLabel:    "Teléfono",
    ctaMaps:       "Abrir en Google Maps",
    ctaCall:       "Llamar ahora",
    ctaMenu:       "Ver carta digital",
  },

  hours: {
    sectionLabel: "Horario",
    headline:     "Cuándo estamos",
    closed:       "Cerrado",
    note:         "Horario orientativo — confirmar por teléfono antes de venir.",
  },

  cta: {
    headline: "¿Te pasas por el barrio?",
    body:     "Estamos en la Av. de la República Argentina, 33. Sin reserva, sin esperas. Solo ven.",
    ctaRoute: "Cómo llegar",
    ctaMenu:  "Ver carta",
  },

  footer: {
    tagline: "Bar y cafetería en Sarrià-Sant Gervasi, Barcelona.",
    address: "Av. de la República Argentina, 33 · 08023 Barcelona",
    menuLink: "Carta digital",
    rights:   "Todos los derechos reservados.",
  },

  stickyBar: {
    call:       "Llamar",
    directions: "Cómo llegar",
    menu:       "Carta",
  },

  meta: {
    title:       "Bar Cafeteria Siboney — Tapas y bocadillos en Sarrià-Sant Gervasi, Barcelona",
    description:
      "Bar y cafetería de barrio en Sarrià-Sant Gervasi (Barcelona). Tapas, bocadillos, platos combinados, café y cervezas Damm. Ven a desayunar o a tomar algo.",
    ogTitle:
      "Bar Cafeteria Siboney · Sarrià-Sant Gervasi, Barcelona",
  },
} as const;

export type Translations = typeof es;
export default es;
