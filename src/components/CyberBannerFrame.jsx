import React from 'react';

/**
 * CyberBannerFrame
 * Calibrated SVG Cyber HUD Circuit Frame for wide banner sections:
 * - Section 2 (Division Scope & Introduction)
 * - Section 7 (College & University Partnerships Banner)
 * - Section 9 (Trust & Responsibility Banner)
 * Features non-scaling strokes, perimeter traveling laser trace on hover,
 * stepped circuit lines, chevrons, and volumetric dark blue vignette plate fill.
 */
export default function CyberBannerFrame({ isHovered = false }) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
      <svg
        viewBox="0 0 1200 320"
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible transition-all duration-300"
      >
        <defs>
          {/* Intense Laser Cyan Glow Filter */}
          <filter id="bannerCyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Volumetric Radial Vignette Gradient */}
          <radialGradient id="bannerPlateFill" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#040813" stopOpacity="0.98" />
            <stop offset="65%" stopColor="#050C1B" stopOpacity="0.96" />
            <stop offset="88%" stopColor="#081E33" stopOpacity="0.90" />
            <stop offset="100%" stopColor="#004D66" stopOpacity="0.45" />
          </radialGradient>
        </defs>

        {/* 1. MAIN CHAMFERED HUD PLATE */}
        <path
          d="M 40 18 L 320 18 L 335 10 L 620 10 L 635 18 L 1160 18 L 1182 40 L 1182 280 L 1160 302 L 860 302 L 845 310 L 520 310 L 505 302 L 40 302 L 18 280 L 18 40 Z"
          fill="url(#bannerPlateFill)"
          stroke="#00F0FF"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          className="transition-all duration-300"
          style={{
            strokeOpacity: isHovered ? 0.95 : 0.45,
            filter: isHovered ? 'drop-shadow(0 0 14px rgba(0,240,255,0.45))' : 'none'
          }}
        />

        {/* 2. TRAVELING PERIMETER LASER PULSE ALONG THE CHAMFERED BORDER */}
        <path
          d="M 40 18 L 320 18 L 335 10 L 620 10 L 635 18 L 1160 18 L 1182 40 L 1182 280 L 1160 302 L 860 302 L 845 310 L 520 310 L 505 302 L 40 302 L 18 280 L 18 40 Z"
          fill="none"
          stroke="#5CF7FF"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
          pathLength="100"
          strokeDasharray="18 82"
          strokeDashoffset={isHovered ? '0' : '50'}
          className={`transition-opacity duration-300 ${isHovered ? 'opacity-100 animate-hud-perimeter-trace' : 'opacity-0'}`}
          filter="url(#bannerCyanGlow)"
        />

        {/* 3. TIGHT CORNER ACCENT TICKS */}
        <path
          d="M 48 26 L 26 48"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          style={{ strokeOpacity: isHovered ? 0.85 : 0.35 }}
        />
        <path
          d="M 1152 26 L 1174 48"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          style={{ strokeOpacity: isHovered ? 0.85 : 0.35 }}
        />
        <path
          d="M 48 294 L 26 272"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          style={{ strokeOpacity: isHovered ? 0.85 : 0.35 }}
        />
        <path
          d="M 1152 294 L 1174 272"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          style={{ strokeOpacity: isHovered ? 0.85 : 0.35 }}
        />

        {/* 4. TOP CIRCUIT TRACES & CHEVRONS */}
        <line
          x1="120"
          y1="6"
          x2="280"
          y2="6"
          stroke="#00F0FF"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          style={{ strokeOpacity: isHovered ? 0.85 : 0.4 }}
        />
        <circle cx="280" cy="6" r="2.2" fill="#00F0FF" style={{ opacity: isHovered ? 1 : 0.6 }} />

        {/* Chevrons pointing right at top */}
        <g fill="#00F0FF" style={{ opacity: isHovered ? 0.95 : 0.5 }}>
          <polygon points="360,4 366,7 360,10" />
          <polygon points="372,4 378,7 372,10" />
          <polygon points="384,4 390,7 384,10" />
          <polygon points="396,4 402,7 396,10" />
          <polygon points="408,4 414,7 408,10" />
        </g>

        {/* Dotted data track top right */}
        <g fill="#00F0FF" style={{ opacity: isHovered ? 0.85 : 0.35 }}>
          <rect x="750" y="8" width="3" height="3" />
          <rect x="760" y="8" width="3" height="3" />
          <rect x="770" y="8" width="3" height="3" />
          <rect x="780" y="8" width="3" height="3" />
          <rect x="790" y="8" width="3" height="3" />
        </g>

        {/* Top right stepped line */}
        <path
          d="M 880 12 L 940 12 L 955 6 L 1050 6"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          style={{ strokeOpacity: isHovered ? 0.85 : 0.4 }}
        />
        <circle cx="1050" cy="6" r="2.2" fill="#00F0FF" style={{ opacity: isHovered ? 1 : 0.6 }} />

        {/* 5. RIGHT EDGE CIRCUIT TRACES */}
        <path
          d="M 1182 70 L 1192 80 L 1192 180 L 1182 190"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          style={{ strokeOpacity: isHovered ? 0.85 : 0.4 }}
        />
        <g fill="#00F0FF" style={{ opacity: isHovered ? 0.9 : 0.4 }}>
          <circle cx="1172" cy="120" r="1.5" />
          <circle cx="1172" cy="135" r="1.5" />
          <circle cx="1172" cy="150" r="1.5" />
          <circle cx="1172" cy="165" r="1.5" />
        </g>

        {/* 6. BOTTOM CIRCUIT TRACES & CHEVRONS */}
        <line
          x1="140"
          y1="314"
          x2="380"
          y2="314"
          stroke="#00F0FF"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          style={{ strokeOpacity: isHovered ? 0.85 : 0.4 }}
        />
        <circle cx="140" cy="314" r="2.2" fill="#00F0FF" style={{ opacity: isHovered ? 1 : 0.6 }} />

        {/* Chevrons pointing right at bottom */}
        <g fill="#00F0FF" style={{ opacity: isHovered ? 0.9 : 0.45 }}>
          <polygon points="400,311 406,314 400,317" />
          <polygon points="412,311 418,314 412,317" />
          <polygon points="424,311 430,314 424,317" />
          <polygon points="436,311 442,314 436,317" />
          <polygon points="448,311 454,314 448,317" />
        </g>

        {/* Dotted data track bottom right */}
        <g fill="#00F0FF" style={{ opacity: isHovered ? 0.85 : 0.35 }}>
          <rect x="920" y="312" width="3" height="3" />
          <rect x="930" y="312" width="3" height="3" />
          <rect x="940" y="312" width="3" height="3" />
          <rect x="950" y="312" width="3" height="3" />
        </g>

        {/* 7. LEFT EDGE CIRCUIT TRACES */}
        <path
          d="M 18 70 L 8 80 L 8 180 L 18 190"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          style={{ strokeOpacity: isHovered ? 0.85 : 0.4 }}
        />
        <g fill="#00F0FF" style={{ opacity: isHovered ? 0.9 : 0.4 }}>
          <circle cx="28" cy="120" r="1.5" />
          <circle cx="28" cy="135" r="1.5" />
          <circle cx="28" cy="150" r="1.5" />
          <circle cx="28" cy="165" r="1.5" />
        </g>
      </svg>
    </div>
  );
}
