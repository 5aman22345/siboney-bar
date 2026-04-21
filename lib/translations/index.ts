// Punto de entrada del sistema de traducciones.
// Para añadir un idioma:
//   1. Crear lib/translations/ca.ts (o en.ts / de.ts) con las mismas claves
//   2. Importarlo aquí y añadirlo al mapa `locales`
//   3. Cambiar DEFAULT_LOCALE si es necesario

import es, { type Translations } from "./es";

export type Locale = "es" | "ca" | "en" | "de";

const locales: Record<string, Translations> = {
  es,
  // ca: ca,   // descomenta cuando esté disponible
  // en: en,
  // de: de,
};

export const DEFAULT_LOCALE: Locale = "es";

export function getTranslations(locale: Locale = DEFAULT_LOCALE): Translations {
  return locales[locale] ?? es;
}

export { type Translations };
export default es;
