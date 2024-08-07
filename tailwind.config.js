const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Your custom Tailwind CSS theme extensions go here
      // colors: {
      //   // Example: Adding a custom color
      //   customColor: '#123456',
      // },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
