// Horario orientativo. Confirmar por teléfono o in situ.
// Para actualizar: editar los campos "open" y "close" de cada día.

export type DayKey =
  | "lunes"
  | "martes"
  | "miercoles"
  | "jueves"
  | "viernes"
  | "sabado"
  | "domingo";

export interface DaySchedule {
  label: string;
  open: string | null;  // null = cerrado
  close: string | null;
}

export const openingHours: Record<DayKey, DaySchedule> = {
  lunes:     { label: "Lunes",     open: "07:00", close: "21:00" },
  martes:    { label: "Martes",    open: "07:00", close: "21:00" },
  miercoles: { label: "Miércoles", open: "07:00", close: "21:00" },
  jueves:    { label: "Jueves",    open: "07:00", close: "21:00" },
  viernes:   { label: "Viernes",   open: "07:00", close: "21:00" },
  sabado:    { label: "Sábado",    open: "08:00", close: "15:00" },
  domingo:   { label: "Domingo",   open: null,    close: null    },
};

export const hoursNote =
  "Horario orientativo — confirmar por teléfono antes de venir.";
