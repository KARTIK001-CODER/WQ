import { cn } from "@/lib/cn";

export default function AetheraFallback({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full w-full items-center justify-center p-8", className)}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full max-h-[320px]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="pool-gradient" cx="50%" cy="85%" r="35%">
            <stop offset="0%" stopColor="#3D8C6F" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3D8C6F" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orb-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6BB5A1" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#6BB5A1" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="leaf-grad-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3D8C6F" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6BB5A1" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="leaf-grad-2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6BB5A1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8FBC8F" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="leaf-grad-3" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#3D8C6F" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6BB5A1" stopOpacity="0.2" />
          </linearGradient>
          <filter id="drop-shadow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            <feOffset dx="0" dy="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.24 0 0 0 0 0.55 0 0 0 0 0.43 0 0 0 0.15 0" />
          </filter>
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background orb glow */}
        <circle cx="200" cy="200" r="160" fill="url(#orb-glow)" />

        {/* Reflective pool */}
        <ellipse cx="200" cy="340" rx="140" ry="20" fill="url(#pool-gradient)" />
        <ellipse cx="200" cy="340" rx="120" ry="12" fill="none" stroke="#3D8C6F" strokeOpacity="0.08" strokeWidth="1" />
        <ellipse cx="200" cy="340" rx="90" ry="8" fill="none" stroke="#3D8C6F" strokeOpacity="0.05" strokeWidth="0.5" />

        {/* Central glass orb */}
        <circle cx="200" cy="210" r="65" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.25" strokeWidth="1" filter="url(#drop-shadow)" />
        <circle cx="200" cy="210" r="55" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.15" strokeWidth="0.5" />
        <ellipse cx="185" cy="195" rx="18" ry="10" fill="white" fillOpacity="0.12" transform="rotate(-20 185 195)" />

        {/* Inner verdant core */}
        <circle cx="200" cy="215" r="28" fill="#3D8C6F" fillOpacity="0.25" />
        <circle cx="200" cy="215" r="20" fill="#3D8C6F" fillOpacity="0.35" />
        <circle cx="197" cy="210" r="6" fill="#4CAF84" fillOpacity="0.5" />

        {/* Floating leaves */}
        {/* Leaf 1 - top right */}
        <g filter="url(#drop-shadow)" opacity="0.7">
          <path d="M265 140 Q280 130 275 145 Q270 155 260 150 Q255 145 265 140Z" fill="url(#leaf-grad-1)" />
          <path d="M265 140 Q272 137 270 145" stroke="#3D8C6F" strokeOpacity="0.3" strokeWidth="0.5" fill="none" />
        </g>
        {/* Leaf 2 - top left */}
        <g filter="url(#drop-shadow)" opacity="0.6" transform="rotate(-30 140 160)">
          <path d="M140 160 Q155 148 150 163 Q145 173 135 168 Q130 163 140 160Z" fill="url(#leaf-grad-2)" />
          <path d="M140 160 Q147 157 145 165" stroke="#6BB5A1" strokeOpacity="0.3" strokeWidth="0.5" fill="none" />
        </g>
        {/* Leaf 3 - right mid */}
        <g filter="url(#drop-shadow)" opacity="0.5" transform="rotate(20 290 230)">
          <path d="M280 230 Q298 220 293 237 Q288 247 276 242 Q271 237 280 230Z" fill="url(#leaf-grad-3)" />
          <path d="M280 230 Q288 227 286 235" stroke="#3D8C6F" strokeOpacity="0.25" strokeWidth="0.5" fill="none" />
        </g>
        {/* Leaf 4 - left mid */}
        <g filter="url(#drop-shadow)" opacity="0.55" transform="rotate(-50 110 250)">
          <path d="M115 250 Q130 240 125 255 Q120 265 110 260 Q105 255 115 250Z" fill="url(#leaf-grad-1)" />
          <path d="M115 250 Q122 247 120 255" stroke="#3D8C6F" strokeOpacity="0.3" strokeWidth="0.5" fill="none" />
        </g>
        {/* Leaf 5 - bottom */}
        <g filter="url(#drop-shadow)" opacity="0.45" transform="rotate(15 240 290)">
          <path d="M235 290 Q250 280 245 295 Q240 305 230 300 Q225 295 235 290Z" fill="url(#leaf-grad-2)" />
        </g>

        {/* Water droplets */}
        <circle cx="230" cy="170" r="4" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.35" strokeWidth="0.5" filter="url(#drop-shadow)" />
        <circle cx="160" cy="185" r="3" fill="white" fillOpacity="0.18" stroke="white" strokeOpacity="0.3" strokeWidth="0.5" />
        <circle cx="245" cy="200" r="2.5" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.25" strokeWidth="0.5" />
        <circle cx="150" cy="220" r="3.5" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.3" strokeWidth="0.5" filter="url(#drop-shadow)" />
        <circle cx="260" cy="240" r="2" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.2" strokeWidth="0.5" />
        <circle cx="175" cy="250" r="3" fill="white" fillOpacity="0.18" stroke="white" strokeOpacity="0.3" strokeWidth="0.5" />
        <circle cx="220" cy="270" r="2" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.2" strokeWidth="0.5" />
        <circle cx="195" cy="165" r="2" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.35" strokeWidth="0.5" />

        {/* Sunlight particles */}
        <g opacity="0.5">
          <circle cx="170" cy="130" r="1.5" fill="#F2C94C" />
          <circle cx="250" cy="155" r="1" fill="#F2C94C" />
          <circle cx="140" cy="195" r="1.2" fill="#F2C94C" />
          <circle cx="270" cy="185" r="0.8" fill="#F2C94C" />
          <circle cx="190" cy="145" r="1" fill="#F2C94C" />
          <circle cx="230" cy="135" r="0.7" fill="#F2C94C" />
          <circle cx="155" cy="165" r="0.9" fill="#F2C94C" />
          <circle cx="280" cy="210" r="1.1" fill="#F2C94C" />
          <circle cx="130" cy="230" r="0.8" fill="#F2C94C" />
          <circle cx="260" cy="145" r="0.6" fill="#F2C94C" />
          <circle cx="175" cy="140" r="1.3" fill="#F2C94C" />
          <circle cx="240" cy="160" r="0.7" fill="#F2C94C" />
        </g>

        {/* Gold orbiting ring hints */}
        <g opacity="0.15">
          <ellipse cx="200" cy="215" rx="85" ry="18" fill="none" stroke="#F2C94C" strokeWidth="0.8" transform="rotate(-15 200 215)" />
          <ellipse cx="200" cy="215" rx="100" ry="12" fill="none" stroke="#6BB5A1" strokeWidth="0.6" transform="rotate(25 200 215)" />
        </g>

        {/* Morning mist wisps */}
        <g opacity="0.08">
          <ellipse cx="140" cy="280" rx="60" ry="8" fill="#F6FAF8" />
          <ellipse cx="260" cy="300" rx="50" ry="6" fill="#F6FAF8" />
          <ellipse cx="200" cy="290" rx="70" ry="5" fill="#F6FAF8" />
        </g>
      </svg>
    </div>
  );
}
