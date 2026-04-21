// Especialidades del local. Editar descripción o añadir nuevas entradas según la oferta real.

export interface Especialidad {
  id: string;
  icon: string;       // emoji utilizado como icono decorativo
  title: string;
  description: string;
}

export const especialidades: Especialidad[] = [
  {
    id: "comida-casera",
    icon: "🫕",
    title: "Comida casera",
    description:
      "Platos de siempre, bien hechos. Sin artificios ni modas: lo que de verdad apetece comer.",
  },
  {
    id: "bocadillos",
    icon: "🥖",
    title: "Bocadillos",
    description:
      "Pan de barra, relleno generoso y punto justo. El bocata como lo conocemos en el barrio.",
  },
  {
    id: "tapas",
    icon: "🫒",
    title: "Tapas",
    description:
      "Pequeñas raciones para picar, compartir o acompañar la caña. Clásicas y sin pretensiones.",
  },
  {
    id: "platos-combinados",
    icon: "🍳",
    title: "Platos combinados",
    description:
      "Huevos, carne, ensalada, patatas... todo en un plato. Para quien viene con hambre de verdad.",
  },
  {
    id: "cafe-desayunos",
    icon: "☕",
    title: "Café y desayunos",
    description:
      "Abrimos temprano con el café recién hecho. Tostadas, zumo y un buen principio de día.",
  },
];
