const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './app/**/*.{html,js}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Circe', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'main': '#4188C8',
        'alt': '#3D3D3D',
        'gray-100': '#F8F9FB',
        'gray-200': '#F1F2F4',
        'green': '#41C877',
        'red': '#C84141'
      },
    },
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },
    container: {
      padding: {
        xs: '1rem'
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    plugin(function({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)')
    }),
  ],
}
