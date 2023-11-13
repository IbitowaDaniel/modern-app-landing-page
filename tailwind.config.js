/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F3E76",
        secondary: "#25CB9E",
        heading: "#244886",
        headingSecondary: "#0F2137",
        text: "#343D48",
        textSecondary: "#02073E",
        muted: "#7B8188",
        yellow: "#F6C416",
      },
      fontFamily: {
        'DM': ['"DM Sans"', "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
