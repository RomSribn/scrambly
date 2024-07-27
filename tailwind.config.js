/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-gradient': 'linear-gradient(90deg, #182061 2.68%, rgba(25, 42, 136, 0.9) 100%)',
      },
      colors: {
        'custom-gray': '#252F3D',
      }
    },
  },
  plugins: [],
}

