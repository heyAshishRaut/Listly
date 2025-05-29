/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                gambarino: ['"Gambarino"', 'serif'],
                amulya: ['"Amulya"', 'sans-serif'],
                satoshi: ['"Satoshi"', 'sans-serif'],
                supreme: ['"Supreme"', 'sans-serif'],
              },
        },
    },
    plugins: [],
  }