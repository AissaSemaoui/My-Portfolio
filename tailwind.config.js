/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        light: "#FFFBEB",
        dark: "#212529",
        red: "#D90429",
        "blue-light": "#495579",
        blue: "#263159",
        "blue-dark": "#181D31",
        "gray-900": "#343A40",
        "gray-800": "#6C757D",
        "gray-300": "#CED4DA",
        "gray-200": "#E9ECEF",
        "gray-100": "#F8F9FA",
      },
    },
    fontFamily: { sans: ["satochi", "sans-serif"] },
  },
  plugins: [],
};
