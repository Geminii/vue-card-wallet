module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
      },
      fontSize: {
        xxs: '8px',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        orange: 'var(--color-orange)',
        'dark-purple': 'var(--color-purple)',
        blue: 'var(--color-blue)',
      },
      boxShadow: {
        card: '0px 4px 40px #8ca4d8',
      },
      gridTemplateColumns: {
        'recent-payment': '200px 1fr 1fr 1fr 26px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
