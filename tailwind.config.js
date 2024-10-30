/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        "gray-light": "#212529",
        "gray-text": "#495057",
        "blue-light": "#0956AF",
        "blue-chart": "#0E9CFF",
        "green-light": "#28A264",
      },
    },
  },
  plugins: [],
};
