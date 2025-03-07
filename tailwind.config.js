/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F35034",
        "orange-accent": "#E63E21",
        gray: "#262626",
        lightGray: "#3F3E3E",
        accentGray: "#C0C0C0",
        dark: "#1B1B1B",
        "bold-dark": "#161616",
        accentDark: "#161616",
        whiteF: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
