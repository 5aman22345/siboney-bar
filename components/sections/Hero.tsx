import { businessInfo } from "@/data/businessInfo";
import t from "@/lib/translations";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Portada"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
    >
      {/* Background gradient — sustituir por imagen real cuando esté disponible */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-olive-900 via-olive-800 to-ink"
        aria-hidden
      />

      {/* Decorative texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #C4622D 0%, transparent 50%), " +
            "radial-gradient(circle at 80% 20%, #3A5A3B 0%, transparent 50%)",
        }}
        aria-hidden
      />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
        aria-hidden
      />

      {/* Turia / beer promo badge — visual highlight */}
      <div
        className="absolute top-28 right-5 md:right-12 hidden sm:flex flex-col items-center gap-1 opacity-80"
        aria-hidden
      >
        <div className="w-16 h-16 rounded-full border-2 border-terra-400/60 flex items-center justify-center bg-olive-800/60 backdrop-blur-sm">
          <span className="text-2xl">🍺</span>
        </div>
        <span className="text-terra-300 text-[10px] uppercase tracking-widest font-semibold">
          Turia · Damm
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-5 pb-16 pt-32 md:pb-24">
        {/* Eyebrow */}
        <p className="text-terra-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5">
          {t.hero.eyebrow}
        </p>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-sand-50 leading-[1.1] mb-5 max-w-2xl">
          {t.hero.headline.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>

        {/* Subline */}
        <p className="text-sand-200 text-lg md:text-xl max-w-lg leading-relaxed mb-10">
          {t.hero.subline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#carta"
            className="inline-flex items-center gap-2 bg-terra-500 hover:bg-terra-600 text-white font-semibold px-6 py-3.5 rounded-full transition-all hover:scale-105 active:scale-100 shadow-lg shadow-terra-600/30"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <rect x="2" y="1" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <line x1="5" y1="5.5" x2="11" y2="5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="5" y1="8"   x2="11" y2="8"   stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="5" y1="10.5" x2="9" y2="10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            {t.hero.ctaMenu}
          </a>
          <a
            href={businessInfo.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-sand-50 border border-white/20 font-semibold px-6 py-3.5 rounded-full transition-all hover:scale-105 active:scale-100 backdrop-blur-sm"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M8 1C5.2 1 3 3.2 3 6c0 3.8 5 9 5 9s5-5.2 5-9c0-2.8-2.2-5-5-5zm0 6.8A1.8 1.8 0 1 1 8 4.2a1.8 1.8 0 0 1 0 3.6z" fill="currentColor" />
            </svg>
            {t.hero.ctaDirections}
          </a>
          <a
            href={businessInfo.phone.href}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-sand-50 border border-white/20 font-semibold px-6 py-3.5 rounded-full transition-all hover:scale-105 active:scale-100 backdrop-blur-sm"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M13.3 10.5c-.5-.5-1.2-.5-1.7 0l-1 1c-.1.1-.3.1-.4 0C8.8 10.4 7.4 9 6.3 7.6c-.1-.1-.1-.3 0-.4l1-1c.5-.5.5-1.2 0-1.7L5.8 3c-.5-.5-1.2-.5-1.7 0l-.8.8C2.4 4.7 2.5 6.2 3.4 7.7c1.3 2 3.1 3.8 5 5.1 1.5.9 3 1 3.9.1l.8-.8c.5-.5.5-1.2.1-1.6z" fill="currentColor" />
            </svg>
            {t.hero.ctaCall}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50" aria-hidden>
        <div className="w-px h-8 bg-sand-200 animate-pulse" />
      </div>
    </section>
  );
}
