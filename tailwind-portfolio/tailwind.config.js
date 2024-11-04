/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
      colors: {
        orange: {
          50: '#ffefe6',
          100: '#ffcfb0',
          200: '#ffb78a',
          300: '#ff9654',
          400: '#ff8233',
          500: '#ff6300',
          600: '#e85a00',
          700: '#b54600',
          800: '#8c3600',
          900: '#6b2a00',
        },
        black: {
          20: '#F8F8F8',
          50: '#e6e6e6',
          100: '#b0b0b0',
          200: '#8a8a8a',
          300: '#545454',
          400: '#333333',
          500: '#000000',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.667rem', //12px
        'sm': '0.778rem', //14px
        'base': '1.000rem', //18px
        'lg': '1.278rem', //23px
        'xl': '1.556rem', //28px
        '2xl': '1.944rem', //35px 
        '3xl': '2.444rem', // 44px
        '4xl': '3.056rem', // 55px
        '5xl': '3.833rem', // 69px
      },
  },
  plugins: [],
}

