module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1280px",
        xl: "1280px"
      },
      padding: {
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        DEFAULT: "1rem"
      }
    },
    colors: {
      green: "#00ccbc",
      gray: {
        dark: "#2e3333",
        default: "#808484",
        light: "#868a8a",
        lightest: "#f3f5f5",
        border: "#d1d7d7"
      },
      white: "#ffffff",
      orange: "#ff8000"
    },
    minHeight: {
      "10": "10em"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
