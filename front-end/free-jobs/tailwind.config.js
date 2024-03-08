/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-color": "#00B074",
        "blue-color": "#4baaff",
        "text-color": "#2B3940",
        "body-color": "#fff",
        "secondary-text-color": "rgb(102, 101, 101)",
        "light-blue-color":"#E1EEFF",
        "dark-blue":"#0d6efd"
      },
    },
  },
  plugins: [],
};
