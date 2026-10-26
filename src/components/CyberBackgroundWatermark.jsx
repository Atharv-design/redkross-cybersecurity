import React from 'react';

/**
 * CyberBackgroundWatermark
 * Persistent, ambient cybersecurity watermark layer centered in the viewport.
 * Features the RedKross crest in electric cyan/cobalt, faint concentric radar rings,
 * and delicate telemetry hairlines with soft edge vignettes.
 * Strictly non-interactive (pointer-events-none) and calibrated for WCAG contrast.
 */
export default function CyberBackgroundWatermark() {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center select-none"
    >
      {/* 1. Subtle Center Ambient Glow */}
      <div className="absolute w-[520px] h-[520px] bg-[#00F0FF]/[0.02] rounded-full blur-[140px]" />
      <div className="absolute w-[380px] h-[380px] bg-[#2563EB]/[0.025] rounded-full blur-[120px]" />

      {/* 2. Cyber Hairline Crosshair Axes */}
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/[0.035] to-transparent" />
      <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-500/[0.035] to-transparent" />

      {/* 3. Outer Concentric Cyber Reticle Ring (Ultra-Slow Ambient Drift) */}
      <div className="absolute w-[680px] h-[680px] rounded-full border border-cyan-500/[0.035] animate-[spin_240s_linear_infinite]">
        {/* Cardinal Axis Markers */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-[2px] bg-cyan-400/20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-[2px] bg-cyan-400/20" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-[2px] bg-cyan-400/20" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-[2px] bg-cyan-400/20" />
      </div>

      {/* 4. Middle Concentric Ring (Faint Dashed Guide) */}
      <div className="absolute w-[520px] h-[520px] rounded-full border border-cyan-500/[0.03] border-dashed" />

      {/* 5. Inner Orbit Ring */}
      <div className="absolute w-[380px] h-[380px] rounded-full border border-cyan-500/[0.04]" />

      {/* 6. Centered RedKross Cyber Crest Watermark */}
      <div className="relative flex items-center justify-center">
        <img 
          src="/assets/logo-cyber-watermark.png" 
          alt=""
          className="w-[280px] sm:w-[420px] md:w-[500px] lg:w-[580px] h-auto object-contain opacity-[0.045] transition-opacity duration-1000"
          style={{
            filter: 'drop-shadow(0 0 50px rgba(0, 240, 255, 0.28))',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 78%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 78%)'
          }}
        />
        
        {/* Faint Center Optical Reticle */}
        <div className="absolute w-2 h-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 pointer-events-none" />
      </div>

      {/* 7. Subtle Viewport Corner Reticles */}
      <div className="absolute top-16 left-6 text-[10px] font-mono text-cyan-500/[0.08] hidden sm:block">
        [ SYS.SEC.32 ]
      </div>
      <div className="absolute top-16 right-6 text-[10px] font-mono text-cyan-500/[0.08] hidden sm:block">
        [ NODE.RKR.01 ]
      </div>
      <div className="absolute bottom-12 left-6 text-[10px] font-mono text-cyan-500/[0.08] hidden sm:block">
        [ AUTH.SYNTH.LAB ]
      </div>
      <div className="absolute bottom-12 right-6 text-[10px] font-mono text-cyan-500/[0.08] hidden sm:block">
        [ 26.OCT.2026 ]
      </div>
    </div>
  );
}
