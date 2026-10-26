import React from 'react';

/**
 * CyberStepCircuitFrame
 * Calibrated SVG Cyber HUD Circuit Frame for 5-column grid cards (How We Work steps).
 * Dimensions: 240 x 340 viewBox, non-scaling stroke.
 */
export default function CyberStepCircuitFrame({ isHovered = false }) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
      <svg
        viewBox="0 0 240 340"
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible transition-all duration-300"
      >
        <defs>
          <filter id="stepCyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="stepPlateFill" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#040813" stopOpacity="0.98" />
            <stop offset="65%" stopColor="#050C1B" stopOpacity="0.96" />
            <stop offset="88%" stopColor="#081E33" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#004D66" stopOpacity="0.45" />
          </radialGradient>
        </defs>

        {/* 1. Main Chamfered HUD Plate */}
        <path
          d="M 24 14 L 80 14 L 90 8 L 150 8 L 160 14 L 216 14 L 228 26 L 228 314 L 216 326 L 160 326 L 150 332 L 90 332 L 80 326 L 24 326 L 12 314 L 12 26 Z"
          fill="url(#stepPlateFill)"
          stroke="#00F0FF"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          className="transition-all duration-300"
          style={{
            strokeOpacity: isHovered ? 0.95 : 0.45,
            filter: isHovered ? 'drop-shadow(0 0 10px rgba(0,240,255,0.45))' : 'none'
          }}
        />

        {/* 2. Traveling Perimeter Laser Pulse */}
        <path
          d="M 24 14 L 80 14 L 90 8 L 150 8 L 160 14 L 216 14 L 228 26 L 228 314 L 216 326 L 160 326 L 150 332 L 90 332 L 80 326 L 24 326 L 12 314 L 12 26 Z"
          fill="none"
          stroke="#5CF7FF"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
          pathLength="100"
          strokeDasharray="20 80"
          strokeDashoffset={isHovered ? '0' : '50'}
          className={`transition-opacity duration-300 ${isHovered ? 'opacity-100 animate-hud-perimeter-trace' : 'opacity-0'}`}
          filter="url(#stepCyanGlow)"
        />

        {/* 3. Corner Accent Ticks */}
        <path
          d="M 30 20 L 18 32"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          style={{ strokeOpacity: isHovered ? 0.8 : 0.3 }}
        />
        <path
          d="M 210 20 L 222 32"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          style={{ strokeOpacity: isHovered ? 0.8 : 0.3 }}
        />
        <path
          d="M 30 320 L 18 308"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          style={{ strokeOpacity: isHovered ? 0.8 : 0.3 }}
        />
        <path
          d="M 210 320 L 222 308"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          style={{ strokeOpacity: isHovered ? 0.8 : 0.3 }}
        />

        {/* 4. Top Chevrons & Dots */}
        <g fill="#00F0FF" style={{ opacity: isHovered ? 0.95 : 0.45 }}>
          <polygon points="100,5 104,7 100,9" />
          <polygon points="108,5 112,7 108,9" />
          <polygon points="116,5 120,7 116,9" />
          <polygon points="124,5 128,7 124,9" />
          <polygon points="132,5 136,7 132,9" />
        </g>

        {/* 5. Bottom Dots */}
        <g fill="#00F0FF" style={{ opacity: isHovered ? 0.9 : 0.35 }}>
          <circle cx="105" cy="334" r="1.2" />
          <circle cx="115" cy="334" r="1.2" />
          <circle cx="125" cy="334" r="1.2" />
          <circle cx="135" cy="334" r="1.2" />
        </g>
      </svg>
    </div>
  );
}
