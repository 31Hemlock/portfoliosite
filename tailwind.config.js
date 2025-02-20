/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
        '3xl': '1600px',
      },
      colors: {
        background: '#1f2937', // background color
        'background-two': '#8e0c11',
        textcolor: 'black',
        'sidebar-base': '#010A0D', // sidebar color
        'header-white': '#FCFDFE', // header text color
        'subheader-white': '#FCFDFE', // subheader text color
        'sidebar-border': '#FCFDFE', // sidebar dividers
        'content-tab': '#C1DCEB',
        'content-tab-two': '#BBE6F2', // content tab background color
        'hover-highlight': '#3b82f6', // color for text hover
        card: '#FCFDFE', // color for content cards
      },
      backgroundImage: {
        'base-pattern': "url('/src/assets/felt/Gcc8lM_WEAAtHqH.png')",
        'card-texture':
          "url('src/assets/felt/painted-plaster-4717-in-architextures.jpg')",
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
    },
  },
  plugins: [],
}
