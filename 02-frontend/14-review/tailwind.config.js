/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "red-hat-text": ["Red Hat Text", "sans-serif"],
      },
      colors: {
        red: "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)",
        "our-rose-50": "hsl(20, 50%, 98%)",
        "our-rose-100": "hsl(13, 31%, 94%)",
        "our-rose-300": "hsl(14, 25%, 72%)",
        "our-rose-400": "hsl(7, 20%, 60%)",
        "our-rose-500": "hsl(12, 20%, 44%)",
        "our-rose-900": "hsl(14, 65%, 9%)",
      },
    },
  },
  plugins: [],
};
