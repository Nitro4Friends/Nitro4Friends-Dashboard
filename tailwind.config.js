/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'background': {
            DEFAULT: '#313338',
            50: '#CACCD1',
            100: '#BFC2C7',
            200: '#AAADB4',
            300: '#9498A1',
            400: '#7E838E',
            500: '#6A6E79',
            600: '#575B64',
            700: '#44474E',
            800: '#313338',
            900: '#2b2d31',
            950: '#0A0A0B'
          },
        },
        fontFamily: {
            'sans': ['gg sans', "gg sans SemiBold", 'gg sans Bold'],
        }
    },
  },
  plugins: [],
}

