import { businessInfo } from "@/data/businessInfo";
import t from "@/lib/translations";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-olive-900 text-sand-100">
      <div className="max-w-5xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-bold text-sand-50 mb-2">
              {businessInfo.name}
            </p>
            <p className="text-sm text-sand-200 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-terra-400 font-semibold mb-3">
              Contacto
            </p>
            <address className="not-italic text-sm text-sand-200 leading-relaxed space-y-1">
              <p>{businessInfo.address.street}</p>
              <p>
                {businessInfo.address.postalCode} {businessInfo.address.city}
              </p>
              <a
                href={businessInfo.phone.href}
                className="block mt-2 hover:text-terra-400 transition-colors"
              >
                {businessInfo.phone.display}
              </a>
            </address>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-terra-400 font-semibold mb-3">
              Más info
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={businessInfo.links.digitalMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-200 hover:text-terra-400 transition-colors"
                >
                  {t.footer.menuLink}
                </a>
              </li>
              <li>
                <a
                  href={businessInfo.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-200 hover:text-terra-400 transition-colors"
                >
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-olive-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-olive-500">
          <p>
            © {year} {businessInfo.name} · Sarrià-Sant Gervasi, Barcelona
          </p>
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
