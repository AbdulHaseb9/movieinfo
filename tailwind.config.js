/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00B9AE",
        secondary: "#16181E",
        third: "#21242D",
        fourth: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
