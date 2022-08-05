/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'intro-pattern': "url('/intro.png')",
        'home-pattern': "url('/background.jpg')",
        'home-2': "url('/bg-image-1.jpg')"
      },
      fontFamily: {
        Inter: ["Inter", "cursive"],
        Prompt: ["Prompt", "cursive"],
        'space': ['Space Mono', "monospace"],
      }
  },
  plugins: [],
}
}