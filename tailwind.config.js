/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FFF9F5',
          subtle: '#FAF2EC',
          card: '#FDFBF8',
          overlay: 'rgba(255, 249, 245, 0.92)',
        },
        sakura: {
          DEFAULT: '#E8A7B5',
          light: '#F5D7DE',
          muted: '#DFC3CB',
          deep: '#B86B7A',
          dark: '#8C4856',
        },
        lavender: {
          DEFAULT: '#C9B8D8',
          light: '#E5DCED',
          deep: '#8F7AA4',
        },
        matcha: {
          DEFAULT: '#879B72',
          light: '#E8EFE3',
          muted: '#A5B595',
          deep: '#465640',
          dark: '#2F3C2B',
        },
        ink: {
          DEFAULT: '#292725',
          muted: '#615A54',
          faint: '#9E958E',
          divider: '#EBE2DA',
          border: '#E3D7CD',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'ultra-wide': '0.22em',
        'mega-wide': '0.35em',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'drift': 'drift 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1.5deg)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.85, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.02)' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(15px, 20px) rotate(10deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}
