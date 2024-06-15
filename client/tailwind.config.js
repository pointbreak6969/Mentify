/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': "1px",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
    marginTop: {
      '15': '3.75rem',
      '96': '24rem',
      '128': '32rem',
    },
    },
  },
  plugins: [],
};
