import { businessInfo } from "@/data/businessInfo";
import t from "@/lib/translations";

export default function InfoSection() {
  return (
    <section
      id="informacion"
      aria-labelledby="info-heading"
      className="bg-olive-800 text-sand-50 py-20 md:py-28"
    >
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: text */}
          <div>
            <p className="text-terra-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              {t.info.sectionLabel}
            </p>
            <h2
              id="info-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-sand-50 leading-tight mb-8"
            >
              {t.info.headline}
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-olive-700 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                    <path d="M9 1C6.2 1 4 3.2 4 6c0 4.5 5 11 5 11s5-6.5 5-11c0-2.8-2.2-5-5-5zm0 7A2 2 0 1 1 9 4a2 2 0 0 1 0 4z" fill="#E8935A" />
                  </svg>
                </div>
                <div>
                  <p className="text-sand-300 text-xs uppercase tracking-widest font-semibold mb-1">
                    {t.info.addressLabel}
                  </p>
                  <address className="not-italic text-sand-100 leading-relaxed text-sm">
                    <p>{businessInfo.address.street}</p>
                    <p>
                      {businessInfo.address.neighborhood}
                    </p>
                    <p>
                      {businessInfo.address.postalCode} {businessInfo.address.city}
                    </p>
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-olive-700 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                    <path d="M15.3 12c-.5-.5-1.2-.5-1.7 0l-1.1 1.1c-.1.1-.3.1-.4 0C10.4 11.7 8.7 10 7.3 8.2c-.1-.1-.1-.3 0-.4l1.1-1.1c.5-.5.5-1.2 0-1.7L6.8 3.4c-.5-.5-1.2-.5-1.7 0l-1 1C3 5.5 3 7.3 4.1 9.1c1.5 2.4 3.5 4.4 5.9 5.9 1.8 1.1 3.5 1.1 4.8-.2l1-1c.5-.4.5-1.2-.5-1.8z" fill="#E8935A" />
                  </svg>
                </div>
                <div>
                  <p className="text-sand-300 text-xs uppercase tracking-widest font-semibold mb-1">
                    {t.info.phoneLabel}
                  </p>
                  <a
                    href={businessInfo.phone.href}
                    className="text-sand-100 text-sm hover:text-terra-400 transition-colors font-medium"
                  >
                    {businessInfo.phone.display}
                  </a>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={businessInfo.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-terra-500 hover:bg-terra-600 text-white font-semibold text-sm px-5 py-3 rounded-full transition-all"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
                  <path d="M7.5 0C4.7 0 2.5 2.2 2.5 5c0 3.8 5 10 5 10s5-6.2 5-10C12.5 2.2 10.3 0 7.5 0zm0 6.8A1.8 1.8 0 1 1 7.5 3.2a1.8 1.8 0 0 1 0 3.6z" fill="currentColor" />
                </svg>
                {t.info.ctaMaps}
              </a>
              <a
                href={businessInfo.phone.href}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-sand-50 border border-sand-100/20 font-semibold text-sm px-5 py-3 rounded-full transition-all"
              >
                {t.info.ctaCall}
              </a>
              <a
                href={businessInfo.links.digitalMenu}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-sand-50 border border-sand-100/20 font-semibold text-sm px-5 py-3 rounded-full transition-all"
              >
                {t.info.ctaMenu}
              </a>
            </div>
          </div>

          {/* Right: map placeholder — sustituir por Google Maps embed real */}
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-olive-700 flex items-center justify-center">
            <a
              href={businessInfo.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-sand-200 hover:text-terra-400 transition-colors group"
              aria-label="Abrir en Google Maps"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden
                className="group-hover:scale-110 transition-transform"
              >
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <path d="M24 8C17.4 8 12 13.4 12 20c0 10 12 24 12 24s12-14 12-24C36 13.4 30.6 8 24 8zm0 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" fill="currentColor" opacity="0.8" />
              </svg>
              <span className="text-sm font-medium opacity-70">
                Ver en Google Maps
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
