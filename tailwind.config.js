module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#FAFAFA',
        accent: '#3EA6FF'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
