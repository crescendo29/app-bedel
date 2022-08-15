/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero.webp')",
        
      },
      colors: {
        maiia: "rgba(87, 187, 197, 100%)",
        navBg: "#ecf0f3",
        link: "#1f2937"
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      circle: 'circle',
    },
  },
  plugins: [],
}
