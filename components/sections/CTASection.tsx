import { businessInfo } from "@/data/businessInfo";
import t from "@/lib/translations";

export default function CTASection() {
  return (
    <section
      aria-label="Visítanos"
      className="bg-terra-500 py-20 md:py-24"
    >
      <div className="max-w-5xl mx-auto px-5 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          {t.cta.headline}
        </h2>
        <p className="text-terra-100 text-base md:text-lg max-w-md mx-auto mb-8 leading-relaxed">
          {t.cta.body}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={businessInfo.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-terra-600 hover:bg-terra-50 font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105 active:scale-100 shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M8 1C5.2 1 3 3.2 3 6c0 3.8 5 9 5 9s5-5.2 5-9c0-2.8-2.2-5-5-5zm0 6.8A1.8 1.8 0 1 1 8 4.2a1.8 1.8 0 0 1 0 3.6z" fill="currentColor" />
            </svg>
            {t.cta.ctaRoute}
          </a>
          <a
            href={businessInfo.links.digitalMenu}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-7 py-3.5 rounded-full border border-white/30 transition-all hover:scale-105 active:scale-100"
          >
            {t.cta.ctaMenu}
          </a>
        </div>
      </div>
    </section>
  );
}
