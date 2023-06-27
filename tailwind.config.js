const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/config/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
      colors: {
        vani: {
          purple: '#5818c6',
        },
      },
      screens: {
        mobile: {
          max: '460px',
        },
      },
      keyframes: {
        'slide-down-bottom': {
          to: { transform: 'translate3d(0,100%,0)' },
        },
        'slide-up-bottom': {
          from: { transform: 'translate3d(0,100%,0)' },
        },
        'slide-up-top': {
          to: { transform: 'translate3d(0,-100%,0)' },
        },
        'slide-down-top': {
          from: { transform: 'translate3d(0,-100%,0)' },
        },
      },
      animation: {
        'slide-down-bottom': 'slide-down-bottom 200ms ease-in-out forwards',
        'slide-up-bottom': 'slide-up-bottom 200ms ease-in-out forwards',
        'slide-up-top': 'slide-up-top 200ms ease-in-out forwards',
        'slide-down-top': 'slide-down-top 200ms ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
