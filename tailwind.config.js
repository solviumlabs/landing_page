/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand principal (morado Solvium)
        brand: {
          50:  '#f3e8ff',
          100: '#e4c9ff',
          200: '#cc99ff',
          300: '#aa46d2',   // Acentos, gradientes
          400: '#821eb4',   // Highlights, hover
          500: '#610f8f',   // ← Color principal CTA  rgb(97,15,143)
          600: '#4a0b6e',
          700: '#360852',
          800: '#250538',
          900: '#190524',   // ← Fondo secciones oscuras  rgb(25,5,36)
          950: '#12031a',   // ← Fondo base del body  rgb(18,3,26)
        },
        // ── Acento (violeta claro / lavanda)
        accent: {
          200: '#e0b4ff',
          300: '#c882ff',   // ← Texto gradiente acento
          400: '#b060f0',   // ← Highlights
          500: '#9040d8',
        },
        // ── Superficies (alias semánticos)
        surface: {
          50:  '#f3e8ff',
          900: '#190524',
          950: '#12031a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(97,15,143,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(97,15,143,0.7)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}