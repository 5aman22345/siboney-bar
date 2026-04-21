import { openingHours, hoursNote } from "@/data/openingHours";
import t from "@/lib/translations";

export default function HoursSection() {
  const days = Object.values(openingHours);

  return (
    <section
      id="horario"
      aria-labelledby="hours-heading"
      className="bg-sand-100 py-20 md:py-28"
    >
      <div className="max-w-5xl mx-auto px-5">
        <div className="max-w-lg mx-auto">
          <p className="text-terra-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-center">
            {t.hours.sectionLabel}
          </p>
          <h2
            id="hours-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-olive-700 leading-tight mb-8 text-center"
          >
            {t.hours.headline}
          </h2>

          <div className="bg-white rounded-2xl border border-sand-200 overflow-hidden">
            {days.map((day, i) => {
              const isLast = i === days.length - 1;
              const isClosed = day.open === null;

              return (
                <div
                  key={day.label}
                  className={`flex items-center justify-between px-5 py-3.5 ${
                    !isLast ? "border-b border-sand-100" : ""
                  } ${isClosed ? "opacity-50" : ""}`}
                >
                  <span className="font-medium text-ink text-sm">{day.label}</span>
                  {isClosed ? (
                    <span className="text-ink-muted text-sm">{t.hours.closed}</span>
                  ) : (
                    <span className="text-olive-700 font-semibold text-sm tabular-nums">
                      {day.open} – {day.close}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Disclaimer note */}
          <p className="text-center text-xs text-ink-muted mt-4 leading-relaxed">
            {hoursNote}
          </p>
        </div>
      </div>
    </section>
  );
}
