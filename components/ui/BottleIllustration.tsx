// Stilisierte Flaschengrafik — Farben per Prop steuerbar
export type BottleVariant =
  | "estrella"      // rot / gold
  | "freedamm"      // blau
  | "freedamm-tostada" // beige / gold
  | "turia"         // amber / braun
  | "volldamm"      // dunkelrot
  | "dammlemon"     // gelb / grün

interface Props {
  variant?: BottleVariant;
  className?: string;
}

const palette: Record<BottleVariant, {
  cap: string;
  neck: string;
  body: string;
  label: string;
  labelText: string;
  shine: string;
  accent: string;
  name: string;
}> = {
  estrella: {
    cap:       "#B71C1C",
    neck:      "#C8860A",
    body:      "#C8860A",
    label:     "#C62828",
    labelText: "#FFD54F",
    shine:     "#FFE08220",
    accent:    "#FFD54F",
    name:      "ESTRELLA\nDAMM",
  },
  freedamm: {
    cap:       "#0277BD",
    neck:      "#C8860A",
    body:      "#C8860A",
    label:     "#0288D1",
    labelText: "#FFFFFF",
    shine:     "#BBDEFB30",
    accent:    "#FFFFFF",
    name:      "FREE\nDAMM",
  },
  "freedamm-tostada": {
    cap:       "#8D6E63",
    neck:      "#C8860A",
    body:      "#B5763A",
    label:     "#A0522D",
    labelText: "#FFFFFF",
    shine:     "#FFE08220",
    accent:    "#FFD54F",
    name:      "FREE\nTOSTADA",
  },
  turia: {
    cap:       "#6D4C41",
    neck:      "#B8730A",
    body:      "#B8730A",
    label:     "#795548",
    labelText: "#FFE082",
    shine:     "#FFE08220",
    accent:    "#FFD54F",
    name:      "TURIA",
  },
  volldamm: {
    cap:       "#7B1FA2",
    neck:      "#C8860A",
    body:      "#C8860A",
    label:     "#6A1B9A",
    labelText: "#FFD54F",
    shine:     "#E1BEE720",
    accent:    "#FFD54F",
    name:      "VOLL-\nDAMM",
  },
  dammlemon: {
    cap:       "#558B2F",
    neck:      "#C8A00A",
    body:      "#C8A00A",
    label:     "#689F38",
    labelText: "#FFFFFF",
    shine:     "#F9FBE720",
    accent:    "#F9FBE7",
    name:      "DAMM\nLEMON",
  },
};

export default function BottleIllustration({ variant = "estrella", className = "" }: Props) {
  const c = palette[variant];
  const lines = c.name.split("\n");

  return (
    <svg
      viewBox="0 0 80 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Cap */}
      <rect x="32" y="4" width="16" height="10" rx="3" fill={c.cap} />
      <rect x="30" y="12" width="20" height="4" rx="1" fill={c.cap} />

      {/* Neck */}
      <path d="M34 16 Q33 30 28 44 L52 44 Q47 30 46 16 Z" fill={c.neck} />

      {/* Shoulder */}
      <path d="M28 44 Q20 56 20 68 L60 68 Q60 56 52 44 Z" fill={c.body} />

      {/* Body */}
      <rect x="20" y="68" width="40" height="110" rx="4" fill={c.body} />

      {/* Bottom cap */}
      <rect x="20" y="176" width="40" height="6" rx="3" fill={c.cap} opacity="0.5" />

      {/* Shine highlight */}
      <path d="M27 48 Q24 80 24 130 Q24 160 26 176" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.18" fill="none" />

      {/* Label background */}
      <rect x="22" y="82" width="36" height="58" rx="3" fill={c.label} />

      {/* Label shine */}
      <rect x="22" y="82" width="36" height="58" rx="3" fill={c.shine} />

      {/* Label text */}
      {lines.map((line, i) => (
        <text
          key={i}
          x="40"
          y={108 + i * 13 - (lines.length - 1) * 6}
          textAnchor="middle"
          fill={c.labelText}
          fontSize="9"
          fontWeight="bold"
          fontFamily="Georgia, serif"
          letterSpacing="0.5"
        >
          {line}
        </text>
      ))}

      {/* Star accent for Estrella */}
      {variant === "estrella" && (
        <polygon
          points="40,86 41.5,91 46,91 42.5,94 44,99 40,96 36,99 37.5,94 34,91 38.5,91"
          fill={c.accent}
        />
      )}

      {/* 0.0 badge for alcohol-free */}
      {(variant === "freedamm" || variant === "freedamm-tostada") && (
        <>
          <circle cx="40" cy="130" r="8" fill={c.accent} opacity="0.9" />
          <text x="40" y="133" textAnchor="middle" fill={c.label} fontSize="7" fontWeight="bold" fontFamily="sans-serif">0.0</text>
        </>
      )}
    </svg>
  );
}
