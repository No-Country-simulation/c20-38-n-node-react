const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|image|navbar|divider).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        'custom-width': '1440px', // Puedes poner el valor que desees
        'another-width': '20rem',
      },
      height: {
        'custom-width': '1024px', // Puedes poner el valor que desees
        'another-width': '20rem',
      },
      colors: {
        'custom-gray': '#fafafa', // Nombre del color personalizado
        'Buttom-primary': '#FF6B6B',
        'background-footer': 'rgba(255, 107, 107, 0.10)',
        'background-footer-2':'rgba(36, 36, 36, 0.32)',
        'background-chat': '#4ECDC4',
        'background-enviar': '#1A535C',
      },
    },
  },
  plugins: [nextui()],
};
