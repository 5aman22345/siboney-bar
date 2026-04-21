import t from "@/lib/translations";
import BarSketch from "@/components/ui/BarSketch";

export default function About() {
  return (
    <section id="el-local" aria-labelledby="about-heading" className="bg-sand-50 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-terra-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              {t.about.sectionLabel}
            </p>
            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-olive-700 leading-tight mb-6"
            >
              {t.about.headline}
            </h2>
            <div className="space-y-4">
              {t.about.body.map((paragraph, i) => (
                <p key={i} className="text-ink-light leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-6 text-terra-500 font-semibold text-sm">
              {t.about.tagline}
            </p>
          </div>

          {/* Bar illustration */}
          <div className="relative">
            <BarSketch className="w-full rounded-2xl shadow-lg" />
            {/* Decorative accent card */}
            <div className="absolute -bottom-4 -left-4 bg-terra-500 rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-white text-xs font-semibold uppercase tracking-wider mb-0.5">
                Sarrià-Sant Gervasi
              </p>
              <p className="text-terra-100 text-xs">Barcelona · 08023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
