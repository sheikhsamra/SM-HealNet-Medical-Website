/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Agar aapki files 'src' folder mein hain
    "./index.html",         // Agar aapki main file root folder mein hai
    // ... aur koi path jahan aapne Tailwind classes use ki hain
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}