/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': 'rgba(26, 115, 232, 0.11)',
        'custom-back':'#EEF5FF',
      },
      inset: {
        '44rem': '44rem',
      },
      spacing: {
        "custum":'40rem',
        "custm":'35rem'

      },
    },
  },
  plugins: [],
}
