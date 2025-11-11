/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#62247c",
          dark: "#4a1b5f",
          light: "#7a2e9c",
        },
        jessamy: {
          purple: "#62247c",
          dark: "#333",
          white: "#fff",
        },
        teal: {
          500: "#14b8a6",
          600: "#0d9488",
        },
      },
    },
  },
  plugins: [],
};
