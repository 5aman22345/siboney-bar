# Bar Cafeteria Siboney — Website

Website oficial de **Bar Cafeteria Siboney**, Av. de la República Argentina, 33, Sarrià-Sant Gervasi, Barcelona.

Stack: **Next.js 14 (App Router) · TypeScript · Tailwind CSS**

---

## Inicio rápido

```bash
cd siboney-bar
npm install
npm run dev
```

Abrir en el navegador: [http://localhost:3000](http://localhost:3000)

```bash
# Build de producción
npm run build
npm run start
```

---

## Dónde actualizar los contenidos

| Qué cambiar | Archivo |
|---|---|
| Nombre, dirección, teléfono, links | `data/businessInfo.ts` |
| Horario de apertura | `data/openingHours.ts` |
| Cervezas / carta de bebidas | `data/menu.ts` |
| Especialidades (tapas, bocadillos…) | `data/especialidades.ts` |
| Textos de la web (titulares, CTAs…) | `lib/translations/es.ts` |
| SEO (title, description, JSON-LD) | `app/layout.tsx` |

---

## Añadir un nuevo idioma

1. Duplicar `lib/translations/es.ts` → `lib/translations/ca.ts` (o `en.ts` / `de.ts`)
2. Traducir todos los valores (no cambiar las claves)
3. En `lib/translations/index.ts`, importar el nuevo archivo y añadirlo al mapa `locales`
4. Implementar la detección/selección de idioma según la estrategia elegida (Next.js `i18n` routing, middleware, URL param…)

---

## Añadir fotos reales

Sustituir los bloques con fondo de gradiente y texto "Foto del local" por elementos `<Image>` de Next.js:

```tsx
import Image from "next/image";
// ...
<Image src="/images/local.jpg" alt="Interior del Siboney" fill className="object-cover" />
```

Colocar las imágenes en `public/images/`.

---

## Añadir más productos a la carta

En `data/menu.ts`, copiar la estructura de un `DrinkItem` existente y pegarlo dentro de `items[]` de la categoría correspondiente.
Para una nueva categoría (p.ej. refrescos, cafés, tapas), añadir un nuevo objeto al array `drinkCategories`.

---

## Estructura del proyecto

```
siboney-bar/
├── app/
│   ├── layout.tsx          # Metadata, JSON-LD, fonts
│   ├── page.tsx            # Página principal
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   └── StickyMobileCTA.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── DrinkMenu.tsx
│       ├── Especialidades.tsx
│       ├── InfoSection.tsx
│       ├── HoursSection.tsx
│       └── CTASection.tsx
├── data/
│   ├── businessInfo.ts
│   ├── openingHours.ts
│   ├── menu.ts
│   └── especialidades.ts
├── lib/
│   └── translations/
│       ├── index.ts
│       └── es.ts
└── public/
    └── images/             # Fotos reales del local aquí
```

---

## Notas

- **Horario**: los horarios son orientativos. Actualizar en `data/openingHours.ts`.
- **Precio Damm Lemon**: marcado como "Consultar en barra" al no disponer de precio confirmado.
- **Google Maps embed**: la sección de mapa muestra un enlace externo. Para incrustar un mapa real, añadir la clave de Google Maps API y usar `<iframe>` o una librería como `@vis.gl/react-google-maps`.
- **Dominio**: actualizar `metadataBase` en `app/layout.tsx` con el dominio real cuando esté disponible.
