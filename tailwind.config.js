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
        "slate-light": "#DEE2E6",
        "gray-text": "#495057",
        "blue-light": "#0956AF",
        "blue-chart": "#0E9CFF",
        "green-light": "#28A264",
        "white-slate": "#F5F5F5",
        // Dark mode colors
        "dark-gray-light": "#343a40",
        "dark-slate-light": "#adb5bd",
        "dark-gray-text": "#e9ecef",
        "dark-blue-light": "#0d6efd",
        "dark-blue-chart": "#74c0fc",
        "dark-green-light": "#20c997",
        "dark-white-slate": "#212529",
      },
    },
    
  },
  plugins: [],
};
