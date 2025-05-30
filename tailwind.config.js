/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f0ff',
          100: '#e6e0ff',
          200: '#cdc0ff',
          300: '#b39fff',
          400: '#9a7fff',
          500: '#7C5CFF',
          600: '#6349cc',
          700: '#4a3799',
          800: '#322566',
          900: '#191233',
        },
        secondary: {
          50: '#e7faf4',
          100: '#cff5e9',
          200: '#9fead3',
          300: '#6fdfbd',
          400: '#3fd5a7',
          500: '#20C997',
          600: '#1aa179',
          700: '#13795b',
          800: '#0d503d',
          900: '#06281e',
        },
        accent: {
          50: '#fff3e6',
          100: '#ffe7cc',
          200: '#ffcf99',
          300: '#ffb766',
          400: '#ff9f33',
          500: '#FD7E14',
          600: '#ca6510',
          700: '#984b0c',
          800: '#653208',
          900: '#331904',
        },
        success: {
          500: '#198754',
        },
        warning: {
          500: '#FFC107',
        },
        error: {
          500: '#DC3545',
        },
        neutral: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#141619',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};