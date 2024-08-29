/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./node_modules/flowbite/**/*.{js,ts}"
  // ],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],

  theme: {
    extend: {
      colors: {
        dark: {
          "primary": "#070C29"
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  variants: {
    display: ['responsive'],
  },

}

