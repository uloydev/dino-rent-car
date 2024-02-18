/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.svelte",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"]
      }
    },
  },
  daisyui: {
    themes: ["light"]
  },
  plugins: [require('daisyui')],
}

