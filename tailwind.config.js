/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-sighnup-button-color': 'rgba(89, 50, 234, 1)',
        'custom-navbar': 'rgba(233, 234, 236, 1)',
        'custom-body-background': 'rgba(246, 246, 246, 1)',
        'custom-header-text': 'background: rgba(124, 130, 139, 1)',
        'customer-border-line': 'border: 1px solid rgba(185, 185, 185, 1)'
      }
    },
  },
  plugins: [],
}

