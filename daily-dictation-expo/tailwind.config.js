/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,tsx,ts}", "./components/**/*.{js,tsx,ts}"],
  presets: [require("nativewind/preset")],
  theme: { extend: {} },
  plugins: [],
};
