const flowbitePlugin = require('flowbite/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  // Ensure all relevant file types are included
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Add Flowbite's paths
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: 'Poppins',
        titleFont: 'Nunito Sans',
      },
    },
  },
  plugins: [flowbitePlugin],  // Correct plugin usage
};
