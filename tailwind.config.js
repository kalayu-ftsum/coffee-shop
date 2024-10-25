/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        butler:'Butler'
      },
      fontWeight:{
        thin:200,
        light:300,
        normal:400,
        medium:500,
        bold:700,
        extraBold:800,
        black:900
      },
      colors: {
        primary: '#E19517',
        accent:'#E19517',
        secondary: '#452012',
        background: '#1c0b04',
        gray:{
          50:'#F9FAFB',
          100:'#F3F4F6',
          200:'#E5E7EB',
          300:'#D1D5DB',
          400:'#9CA3AF',
          500:'#6B7280',
          600:'#4B5563',
          700:'#374151',
          800:'#1F2937',
          900:'#111827',
          },
         }
    },
  },
  plugins: [],
}