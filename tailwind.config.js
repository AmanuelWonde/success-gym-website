/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffe001",
        secondary: "#1e1e1e",
        blackSecondary: "#3a3b3f",
      },
    },
  },
  plugins: [],
};
