import { especialidades } from "@/data/especialidades";
import t from "@/lib/translations";

export default function Especialidades() {
  return (
    <section
      id="especialidades"
      aria-labelledby="esp-heading"
      className="bg-sand-50 py-20 md:py-28"
    >
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-terra-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            {t.especialidades.sectionLabel}
          </p>
          <h2
            id="esp-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-olive-700 leading-tight mb-3"
          >
            {t.especialidades.headline}
          </h2>
          <p className="text-ink-light text-base max-w-md mx-auto">
            {t.especialidades.subline}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {especialidades.map((esp) => (
            <div
              key={esp.id}
              className="bg-white border border-sand-200 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-sm hover:border-terra-300 transition-all group"
            >
              <span
                className="text-3xl"
                role="img"
                aria-label={esp.title}
              >
                {esp.icon}
              </span>
              <h3 className="font-display font-bold text-olive-700 text-base group-hover:text-terra-500 transition-colors">
                {esp.title}
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed">
                {esp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
