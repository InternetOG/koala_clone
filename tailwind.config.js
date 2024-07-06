/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // => @media (max-width: 500px) { ... }
        'max500': {'max': '500px'},
        // => @media (min-width: 500px) { ... }
        'min500': '500px',

        // => @media (max-width: 800px) { ... }
        'max800': {'max': '800px'},
        
        // => @media (min-width: 800px) { ... }
        'min800': '800px',
      },
      gridTemplateColumns: {
        '1c': 'minmax(150px, 40ch)',

        // Header and Footer width at max800 and min00
        '1cxlmax': '15ch',
        '1cxlmin': '20ch',

        '1csm': '16ch',
        '2c': 'repeat(2, minmax(150px, 40ch))',

        'test': 'minmax(30ch, 40ch) minmax(50ch, 70ch)'
        // 'test': 'minmax(30ch, 45ch) minmax(50ch, 70ch)'
      },
    },
  },
  plugins: [],
}