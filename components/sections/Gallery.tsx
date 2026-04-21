"use client";

import Image from "next/image";

// Fotos hier eintragen: Datei in public/images/ ablegen, dann Pfad + Alt-Text hier ergänzen.
const photos: { src: string; alt: string; span?: "wide" }[] = [
  // Beispiel: { src: "/siboney-bar/images/tarta.jpg", alt: "Tarta casera con chocolate" },
  // Beispiel: { src: "/siboney-bar/images/fachada.jpg", alt: "Fachada del bar" },
];

// Platzhalter-Karten wenn noch keine echten Fotos vorhanden
const placeholders = [
  { emoji: "🍰", label: "Postres caseros" },
  { emoji: "🥖", label: "Bocadillos" },
  { emoji: "🫒", label: "Tapas" },
  { emoji: "🍺", label: "Cervezas Damm" },
];

export default function Gallery() {
  const hasPhotos = photos.length > 0;

  return (
    <section
      id="galeria"
      aria-labelledby="gallery-heading"
      className="bg-sand-50 py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-5">
        <div className="mb-10">
          <p className="text-terra-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            El local
          </p>
          <h2
            id="gallery-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-olive-700 leading-tight"
          >
            Así somos
          </h2>
        </div>

        {hasPhotos ? (
          /* Grid de fotos reales */
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden bg-sand-200 aspect-square ${
                  photo.span === "wide" ? "col-span-2" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        ) : (
          /* Platzhalter-Grid mit Illustrationen bis echte Fotos da sind */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {placeholders.map((p) => (
              <div
                key={p.label}
                className="aspect-square rounded-2xl bg-gradient-to-br from-sand-200 to-sand-300 flex flex-col items-center justify-center gap-2 border border-sand-200"
              >
                <span className="text-4xl">{p.emoji}</span>
                <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Hinweis für den Betreiber — im Browser nicht sichtbar */}
        {/*
          FOTOS HINZUFÜGEN:
          1. Foto in public/images/ ablegen (z.B. tarta.jpg)
          2. In dieser Datei oben im photos-Array eintragen:
             { src: "/siboney-bar/images/tarta.jpg", alt: "Beschreibung" }
          3. Speichern → automatisch deployed
        */}
      </div>
    </section>
  );
}
