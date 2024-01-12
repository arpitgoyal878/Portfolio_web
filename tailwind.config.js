/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    minHeight: {
      70: "70vh",
    },
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
      black: "#121212",
      gray: "#1c1c1c",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
