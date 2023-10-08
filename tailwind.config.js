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
            'text': {
                DEFAULT: '#FFFFFF',
                50: '#c2c2c2',
                100: '#b8b8b8',
                200: '#a7a7a7',
                300: '#969696',
                400: '#858585',
                500: '#747474',
                600: '#636363',
                700: '#525252',
                800: '#414141',
                900: '#313131',
            }
        },
        fontFamily: {
            'sans': ['gg sans'],
            'sans-bold': ['gg sans Bold'],
            'sans-semibold': ['gg sans SemiBold'],
        }
    },
  },
  plugins: [],
}

