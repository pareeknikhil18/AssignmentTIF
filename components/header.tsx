import { User } from "lucide-react"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-3 border-b border-border bg-background">
      <MammothzyBrand size="sm" />
      <div className="flex items-center gap-2 text-foreground">
        <User className="h-5 w-5" />
        <span className="text-sm font-medium">Profile</span>
      </div>
    </header>
  )
}

function MammothzyLogoSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left ear - large, wide, angled outward */}
      <path d="M50 58 C20 30, 5 50, 15 80 C20 95, 35 100, 50 90" fill="#1a1a2e" />
      {/* Right ear - large, wide, angled outward */}
      <path d="M150 58 C180 30, 195 50, 185 80 C180 95, 165 100, 150 90" fill="#1a1a2e" />

      {/* Head - wide */}
      <ellipse cx="100" cy="75" rx="52" ry="42" fill="#1a1a2e" />

      {/* Brow ridge bump on top center */}
      <ellipse cx="100" cy="38" rx="14" ry="8" fill="#1a1a2e" />

      {/* Eyes - angry, angular, white */}
      <path d="M72 62 L82 56 L88 65 Z" fill="#c8cad0" />
      <path d="M128 62 L118 56 L112 65 Z" fill="#c8cad0" />

      {/* Left tusk - big white C-shape curving inward */}
      <path
        d="M68 90 C50 100, 35 125, 42 148 C48 165, 68 168, 80 155 C88 146, 86 130, 82 118"
        stroke="#c8cad0"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />
      {/* Right tusk - big white C-shape curving inward */}
      <path
        d="M132 90 C150 100, 165 125, 158 148 C152 165, 132 168, 120 155 C112 146, 114 130, 118 118"
        stroke="#c8cad0"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />

      {/* Trunk - segmented/ribbed, hanging down center */}
      <path d="M90 95 L88 155 L100 168 L112 155 L110 95" fill="#1a1a2e" />
      {/* Trunk ribs */}
      <line x1="89" y1="108" x2="111" y2="108" stroke="#c8cad0" strokeWidth="1.5" opacity="0.4" />
      <line x1="89" y1="118" x2="111" y2="118" stroke="#c8cad0" strokeWidth="1.5" opacity="0.4" />
      <line x1="89" y1="128" x2="111" y2="128" stroke="#c8cad0" strokeWidth="1.5" opacity="0.4" />
      <line x1="89" y1="138" x2="111" y2="138" stroke="#c8cad0" strokeWidth="1.5" opacity="0.4" />
      <line x1="90" y1="148" x2="110" y2="148" stroke="#c8cad0" strokeWidth="1.5" opacity="0.4" />

      {/* Feet - small at bottom */}
      <rect x="78" y="165" width="10" height="8" rx="3" fill="#1a1a2e" />
      <rect x="112" y="165" width="10" height="8" rx="3" fill="#1a1a2e" />
    </svg>
  )
}

export function MammothzyBrand({ size = "sm" }: { size?: "sm" | "lg" }) {
  const svgClass = size === "lg" ? "h-16 w-auto" : "h-12 w-auto"
  const textClass =
    size === "lg"
      ? "text-3xl font-bold text-foreground font-brand italic"
      : "text-xl font-bold text-foreground font-brand italic"
  return (
    <div className="flex items-center gap-0.5">
      <MammothzyLogoSVG className={svgClass} />
      <span className={textClass}>mammothzy</span>
    </div>
  )
}
