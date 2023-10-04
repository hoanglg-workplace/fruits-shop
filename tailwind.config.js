/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fc5d35',
        background: '#f7f7f7',
      },
      lineHeight: {
        inherit: 'inherit'
      },
      maxWidth: {
        '2/3': '66.666667%' 
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
      flex: {
        "0-auto": '0 0 auto'
      }
    },
  },
  plugins: [],
}