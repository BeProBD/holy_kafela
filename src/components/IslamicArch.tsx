export function IslamicArch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 280" className={className} fill="none" aria-hidden="true">
      <path
        d="M20 280 V120 C20 60 60 20 100 20 C140 20 180 60 180 120 V280"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M30 280 V120 C30 70 65 32 100 32 C135 32 170 70 170 120 V280"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.3"
      />
    </svg>
  );
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 24" className={className} fill="none" aria-hidden="true">
      <line x1="0" y1="12" x2="80" y2="12" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <line x1="120" y1="12" x2="200" y2="12" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <path
        d="M100 2 L106 12 L100 22 L94 12 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <circle cx="100" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export function StarPattern({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.5">
        <path d="M50 5 L58 35 L88 35 L64 53 L72 83 L50 65 L28 83 L36 53 L12 35 L42 35 Z" />
        <circle cx="50" cy="50" r="20" />
        <circle cx="50" cy="50" r="40" />
      </g>
    </svg>
  );
}
