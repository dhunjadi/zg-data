/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primaryDark: "var(--color-primary-dark)",
        primaryLight: "var(--color-primary-light)",

        screenBgDark: "var(--color-screen-bg-dark)",
        elementBgDark: "var(--color-element-bg-dark)",
        textDarkPimary: "var(--color-text-dark-primary)",
        highlight: "var(--color-highlight)",
      },
    },
  },
  plugins: [],
};
