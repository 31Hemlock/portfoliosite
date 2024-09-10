/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        "sidebar-grey": "#262626",
        "main-content-white": "#e6e6e6f7",
        "header-white": "#e6e6e6",
        "subheader-white": "#adadadf7",
        "sidebar-border": "#4a4a4af7",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
    },
  },
  plugins: [],
};
