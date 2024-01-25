/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        silkscreen: ["Silkscreen", "sans-serif"],
      },
      backgroundImage: {
        "main-image": "url('/src/assets/glass-background.png')",
      },
    },
  },
  plugins: [],
};
