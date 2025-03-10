/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: 'Quicksand, monospace',
    },
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
