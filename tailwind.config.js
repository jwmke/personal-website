/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height'
      },
      height: {
        '128': '32rem',
      },
      maxHeight: {
        '128': '32rem',
        '160': '40rem',
        '360': '90rem'
      }
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif']
    },
    colors: {
      'navy': '#05396b',
      'teal': '#5cdb94',
      'mint': '#8ee4af',
      'light-mint': '#ddf7e7',
      'white': '#edf5e1',
      'pine': '#379683',
      'dark-navy': '#00152e',
      'black': '#000f21',
      'super-white': '#ffffff'
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
