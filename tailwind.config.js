/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#060A12",
          darker: "#03060A",
          card: "#090E1A",
          cardHover: "#0D1424",
          surface: "#0B1120",
          border: "rgba(0, 240, 255, 0.15)",
          borderGlow: "rgba(0, 240, 255, 0.35)",
          cyan: "#00F0FF",
          cyanLight: "#5CF7FF",
          blue: "#2563EB",
          blueLight: "#38BDF8",
          amber: "#FFA439",
          orange: "#E57A00",
          muted: "#94A3B8",
          subtle: "#64748B"
        }
      },
      fontFamily: {
        royal: ['Cinzel', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-cyan': 'glowCyan 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowCyan: {
          '0%': { boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(0, 240, 255, 0.45)' },
        }
      }
    },
  },
  plugins: [],
}
