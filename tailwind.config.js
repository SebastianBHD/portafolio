/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors : {
          'primary' : '#9f86c0',
          'secondary' : '#14213D',
          'tertiary' : '#EFF6E0',
          'quaternary' : '#ffffff',
          'quinary' : '#000000'
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'old-standard': ['Old Standard TT', 'serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        ascend: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ascend" : 'ascend 1s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}