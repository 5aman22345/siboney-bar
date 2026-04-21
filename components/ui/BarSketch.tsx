// SVG-Illustration der Bar — Barcelona Straßen-Stil
export default function BarSketch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ilustración de la fachada del bar"
      role="img"
    >
      {/* Sky */}
      <rect width="520" height="340" fill="#F5F0E8" rx="16" />

      {/* Sun */}
      <circle cx="440" cy="55" r="28" fill="#E8935A" opacity="0.25" />
      <circle cx="440" cy="55" r="18" fill="#E8935A" opacity="0.4" />

      {/* Building wall */}
      <rect x="60" y="60" width="400" height="250" fill="#EDE3D3" />

      {/* Awning / Toldo */}
      <path d="M55 110 L465 110 L450 140 L70 140 Z" fill="#3A5A3B" />
      <path d="M55 110 L465 110 L450 140 L70 140 Z" stroke="#2D4A2E" strokeWidth="1.5" />
      {/* Awning stripes */}
      {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
        <line
          key={i}
          x1={70 + i * 30}
          y1={110}
          x2={65 + i * 30}
          y2={140}
          stroke="#2D4A2E"
          strokeWidth="1"
          opacity="0.4"
        />
      ))}

      {/* Bar name on awning */}
      <text
        x="260"
        y="130"
        textAnchor="middle"
        fill="#FAF8F3"
        fontSize="14"
        fontWeight="bold"
        fontFamily="Georgia, serif"
        letterSpacing="2"
      >
        SIBONEY
      </text>

      {/* Main door */}
      <rect x="210" y="175" width="100" height="135" rx="4" fill="#2D4A2E" />
      <rect x="215" y="180" width="42" height="60" rx="2" fill="#FAF8F3" opacity="0.15" />
      <rect x="263" y="180" width="42" height="60" rx="2" fill="#FAF8F3" opacity="0.15" />
      {/* Door handle */}
      <circle cx="255" cy="252" r="4" fill="#E8935A" />
      <circle cx="265" cy="252" r="4" fill="#E8935A" />

      {/* Left window */}
      <rect x="85" y="155" width="100" height="90" rx="4" fill="#2D4A2E" opacity="0.8" />
      <rect x="90" y="160" width="42" height="80" rx="2" fill="#FAF8F3" opacity="0.12" />
      <rect x="138" y="160" width="42" height="80" rx="2" fill="#FAF8F3" opacity="0.12" />
      {/* Window cross */}
      <line x1="111" y1="160" x2="111" y2="240" stroke="#FAF8F3" strokeWidth="1" opacity="0.2"/>
      <line x1="90" y1="200" x2="132" y2="200" stroke="#FAF8F3" strokeWidth="1" opacity="0.2"/>

      {/* Right window */}
      <rect x="335" y="155" width="100" height="90" rx="4" fill="#2D4A2E" opacity="0.8" />
      <rect x="340" y="160" width="42" height="80" rx="2" fill="#FAF8F3" opacity="0.12" />
      <rect x="388" y="160" width="42" height="80" rx="2" fill="#FAF8F3" opacity="0.12" />
      <line x1="361" y1="160" x2="361" y2="240" stroke="#FAF8F3" strokeWidth="1" opacity="0.2"/>
      <line x1="340" y1="200" x2="382" y2="200" stroke="#FAF8F3" strokeWidth="1" opacity="0.2"/>

      {/* Flower pots on windowsills */}
      <rect x="95" y="242" width="90" height="6" rx="2" fill="#C4622D" />
      <rect x="345" y="242" width="90" height="6" rx="2" fill="#C4622D" />
      {/* Flowers */}
      {[105,120,135,150,165].map((x) => (
        <circle key={x} cx={x} cy={238} r="5" fill="#E8935A" opacity="0.8" />
      ))}
      {[355,370,385,400,415].map((x) => (
        <circle key={x} cx={x} cy={238} r="5" fill="#E8935A" opacity="0.8" />
      ))}

      {/* Sidewalk */}
      <rect x="0" y="305" width="520" height="35" fill="#DFD0BB" />
      <line x1="0" y1="305" x2="520" y2="305" stroke="#C4B89A" strokeWidth="1.5" />

      {/* Left outdoor table */}
      <ellipse cx="115" cy="300" rx="30" ry="8" fill="#C4622D" opacity="0.7" />
      <rect x="112" y="300" width="6" height="20" fill="#8B4513" opacity="0.6" />
      {/* Chairs left */}
      <ellipse cx="88" cy="312" rx="14" ry="5" fill="#3A5A3B" opacity="0.6" />
      <ellipse cx="142" cy="312" rx="14" ry="5" fill="#3A5A3B" opacity="0.6" />

      {/* Right outdoor table */}
      <ellipse cx="405" cy="300" rx="30" ry="8" fill="#C4622D" opacity="0.7" />
      <rect x="402" y="300" width="6" height="20" fill="#8B4513" opacity="0.6" />
      {/* Chairs right */}
      <ellipse cx="378" cy="312" rx="14" ry="5" fill="#3A5A3B" opacity="0.6" />
      <ellipse cx="432" cy="312" rx="14" ry="5" fill="#3A5A3B" opacity="0.6" />

      {/* Beer glass on left table */}
      <rect x="108" y="285" width="14" height="16" rx="2" fill="#E8935A" opacity="0.6" />
      <rect x="108" y="285" width="14" height="5" rx="1" fill="#FAF8F3" opacity="0.5" />

      {/* Street number */}
      <text x="260" y="165" textAnchor="middle" fill="#C4622D" fontSize="11" fontFamily="Georgia, serif" opacity="0.7">
        Av. República Argentina, 33
      </text>

      {/* Small decorative tile border */}
      {Array.from({length: 14}).map((_, i) => (
        <rect key={i} x={60 + i * 29} y={58} width={14} height={4} rx="1" fill="#C4622D" opacity="0.3" />
      ))}
    </svg>
  );
}
