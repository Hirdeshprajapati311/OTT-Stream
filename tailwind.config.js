/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1E293B",
        "primary-dark/50": "#334155",
        

        bg: 'var(--color-bg)',
        text:"var(--color-text)",


        background: {
          light: "#ffffff",
          dark:"#1a202c"
        },
        text: {
          light: '#000000',
          dark:'#ffffff'
        }
      },
    },
  },
  plugins: [],
};

