module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6FCF97',
        secondary: '#A8E6CF',
        accent: '#219653',
        background: '#F8F9FA',
        text: '#1C1C1C'
      },
      borderRadius: {
        lg: '14px',
        xl: '16px'
      },
      boxShadow: {
        soft: '0 6px 18px rgba(28,28,28,0.06)'
      }
    }
  },
  plugins: [],
}
