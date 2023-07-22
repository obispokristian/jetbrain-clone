/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial-bottom":
          "radial-gradient(circle at 26% 100%, rgba(156, 74, 255, 1) 0%, rgba(107, 87, 255, 1) 100%);",
        "gradient-radial-top":
          "radial-gradient(circle at 78% 0%, rgba(156, 74, 255, 1) 0%, rgba(107, 87, 255, 1) 100%);",
        "gradient-radial-blue":
          "radial-gradient(circle at 0% 100%, rgba(6, 18, 67, 1) 0%, rgba(21, 96, 209, 1) 100%);",
        "gradient-purple":
          "radial-gradient(ellipse at 30% 0%, rgba(255, 255, 255, 1) 0%, rgba(173, 1, 255, 1) 0%, rgba(64, 11, 89, 1) 62%);",
      },
    },
  },
  plugins: [],
};
