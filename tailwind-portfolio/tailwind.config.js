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
        'xs': '0.667rem',
        'sm': '0.778rem',
        'base': '1.000rem',
        'lg': '1.278rem',
        'xl': '1.556rem',
        '2xl': '1.944rem',
        '3xl': '2.444rem',
        '4xl': '3.056rem',
        '5xl': '3.833rem',
      },
  },
  plugins: [],
}

