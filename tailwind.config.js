/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme:{
    sm:'480px',
    md:'768px',
    lg:'976px',
    xl:'1440px'
  },
  theme: {
    extend: {
      fontFamily: {
        'Volkorn': [ 'Vollkorn', 'serif'] 
      },
    },
  },
  // plugins: [require("daisyui")],
}
