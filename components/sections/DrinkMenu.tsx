import { drinkCategories, type DrinkItem } from "@/data/menu";
import { businessInfo } from "@/data/businessInfo";
import BottleIllustration from "@/components/ui/BottleIllustration";
import t from "@/lib/translations";

function DrinkCard({ item }: { item: DrinkItem }) {
  const isFeatured = item.featured;

  return (
    <article
      className={`relative rounded-2xl overflow-hidden flex flex-col transition-shadow hover:shadow-md ${
        isFeatured
          ? "bg-olive-700 text-sand-50 ring-2 ring-olive-500"
          : "bg-white border border-sand-200"
      }`}
    >
      {/* Bottle image strip */}
      <div
        className={`flex justify-center items-end pt-5 pb-2 h-40 ${
          isFeatured ? "bg-olive-800/40" : "bg-sand-100"
        }`}
      >
        {item.bottleImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.bottleImage}
            alt={item.name}
            className="h-36 w-auto object-contain drop-shadow-lg"
          />
        ) : item.bottleVariant ? (
          <BottleIllustration
            variant={item.bottleVariant}
            className="h-28 w-auto drop-shadow-md"
          />
        ) : (
          <span className="text-5xl pb-1">🍺</span>
        )}
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Badge */}
        {item.badge && (
          <span
            className={`self-start text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
              isFeatured ? "bg-terra-500 text-white" : "bg-terra-100 text-terra-600"
            }`}
          >
            {item.badge}
          </span>
        )}

        {/* Name & subtitle */}
        <div>
          <h3
            className={`font-display text-lg font-bold ${
              isFeatured ? "text-sand-50" : "text-olive-700"
            }`}
          >
            {item.name}
          </h3>
          <p
            className={`text-xs font-semibold uppercase tracking-wider mt-0.5 ${
              isFeatured ? "text-terra-300" : "text-terra-500"
            }`}
          >
            {item.subtitle}
          </p>
        </div>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed flex-1 ${
            isFeatured ? "text-sand-200" : "text-ink-light"
          }`}
        >
          {item.description}
        </p>

        {/* Alcohol */}
        <p className={`text-xs ${isFeatured ? "text-sand-300" : "text-ink-muted"}`}>
          {t.menu.alcoholLabel}: <span className="font-medium">{item.alcohol}</span>
        </p>

        {/* Formats & prices */}
        <div>
          <div className={`h-px mb-3 ${isFeatured ? "bg-olive-600" : "bg-sand-200"}`} />
          <ul className="flex flex-wrap gap-2">
            {item.formats.map((fmt) => (
              <li
                key={fmt.label}
                className={`flex items-center gap-1.5 text-sm rounded-lg px-3 py-1.5 ${
                  isFeatured ? "bg-olive-600 text-sand-100" : "bg-sand-100 text-ink"
                }`}
              >
                <span className="font-medium">{fmt.label}</span>
                <span
                  className={`${
                    fmt.priceOnRequest
                      ? `font-normal italic ${isFeatured ? "text-sand-300" : "text-ink-muted"}`
                      : `font-bold ${isFeatured ? "text-terra-300" : "text-terra-500"}`
                  }`}
                >
                  {fmt.priceOnRequest ? t.menu.priceOnRequest : fmt.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function DrinkMenu() {
  return (
    <section id="carta" aria-labelledby="menu-heading" className="bg-sand-100 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <div className="mb-12 md:flex md:items-end md:justify-between">
          <div>
            <p className="text-terra-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              {t.menu.sectionLabel}
            </p>
            <h2
              id="menu-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-olive-700 leading-tight mb-3"
            >
              {t.menu.headline}
            </h2>
            <p className="text-ink-light text-base max-w-md">{t.menu.subline}</p>
          </div>
          <a
            href={businessInfo.links.digitalMenu}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 mt-4 text-sm font-semibold text-olive-700 border border-olive-600 hover:bg-olive-700 hover:text-sand-50 px-5 py-2.5 rounded-full transition-all"
          >
            {t.menu.ctaFullMenu}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Cards per category */}
        {drinkCategories.map((cat) => (
          <div key={cat.id} className="mb-10">
            <h3 className="text-xs uppercase tracking-widest text-ink-muted font-semibold mb-4">
              {cat.name}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.items.map((item) => (
                <DrinkCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}

        {/* Full menu CTA — mobile */}
        <div className="mt-8 md:hidden text-center">
          <a
            href={businessInfo.links.digitalMenu}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-olive-700 border border-olive-600 hover:bg-olive-700 hover:text-sand-50 px-6 py-3 rounded-full transition-all"
          >
            {t.menu.ctaFullMenu}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
