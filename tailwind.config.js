/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e8590c",
          dark: "#a8420a",
          light: "#ff7a2e",
        },
        ink: {
          DEFAULT: "#141414",
          soft: "#1c1c1c",
        },
        cream: "#f6f5f3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-oswald)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0,0,0,.15)",
      },
    },
  },
  plugins: [],
};
