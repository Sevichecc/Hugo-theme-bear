/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./assets/css/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#374151',
        secondary: '#6B7280',
        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
      },
      fontFamily: {
        sans: ['Lato', 'LXGW Bright', 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            a: {
              color: '#CB4C48',
              '&:hover': {
                color: '#CB4C48',
              },
            },
            li: {
              fontColor: '#374151',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 