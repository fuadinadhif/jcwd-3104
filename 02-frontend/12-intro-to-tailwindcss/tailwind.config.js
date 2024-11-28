/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "hsl(148, 38%, 91%)",
        "medium-green": "hsl(169, 82%, 27%)",
        "normal-red": "hsl(0, 66%, 54%)",
        "normal-white": "hsl(0, 0%, 100%)",
        "medium-grey": "hsl(186, 15%, 59%)",
        "dark-grey": "hsl(187, 24%, 22%)",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
