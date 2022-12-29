/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#7F77E0',
        googleColor: '#4285F4',
        githubColor: '#333333',
        textGrey: '#9598A6',
        darkColor: '#1C1C1C',
      },
      fontFamily: {
        interBold: ['interbold', 'sans-serif'],
        interRegular: ['interregular', 'sans-serif'],
        witchRegular: ['hallowitchzregular', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%, 100%': {
            opacity: '0.5',
            transform: 'translateY(10px)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      boxShadow: {
        cardS: '0px 2px 15px -2px rgba(42, 53, 77, 0.1)',
        barSS: '-4px 9px 25px -6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
