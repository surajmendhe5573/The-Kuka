/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{js,jsx}','./src/**/*.{js,jsx}'],
  theme: {
    extend: {fontFamily: {
      'poppins': ["Poppins", 'sans-serif'],
      'bangla': ["Bangla MN", 'sans-serif'],
      'workSans': ["Work Sans", 'sans-serif'],
      'nunito': ["Nunito", "sans-serif"],
      'euclid': ["Euclid Circular", "sans-serif"],
      'inter': ["Inter", "sans-serif"]
    },
    transitionDuration: {
      '1000': '1000ms',
    },
  },
    
  },
  plugins: [],
}

