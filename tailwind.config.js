const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        0: '0',
        auto: 'auto',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2.15rem',
        10: '2.75rem',
        12: '3rem',
        13: '3.5rem',
        16: '4rem',
        19: '4.75rem',
        20: '5rem',
        21: '5.5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14.5rem',
        64: '16rem',
        80: '30rem',
      },
      colors: {
        light: {
          bg: colors.white,
          primary: colors.trueGray[900],
          secondary: colors.black,
        },
        dark: {
          bg: '#000',
          primary: colors.trueGray[50],
          secondary: colors.trueGray[50],
        },
      },
      minHeight: {
        12: '12.5rem',
      },
    },
    fontFamily: {
      body: ['Montserrat', 'Roboto', 'Arial', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '2.85rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    screens: {
      sm: '640px',
      md: '696px',
      lg: '1024px',
      xl: '1280px',
      xxl: '2304px',
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      19: '4.75rem',
      20: '5rem',
      21: '5.5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '13rem',
      56: '14rem',
      64: '16rem',
      80: '30rem',
    },

    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '56.333333%',
      '8/12': '66.666667%',
      '9/12': '71%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      min: 'min-content',
      screen: '100vw',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
