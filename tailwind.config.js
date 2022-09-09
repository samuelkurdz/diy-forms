/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      "white": "#ffffff",
      "primary-lighter": "var(--color-primary-lighter)",
      "primary-light": "var(--color-primary-light)",
      "primary-ring": "var(--color-primary-ring)",
      "primary": "var(--color-primary)",
      "primary-darker": "var(--color-primary-darker)",

      "gray-900": "var(--color-gray-900)",
      "gray-700": "var(--color-gray-700)",
      "gray-500": "var(--color-gray-500)",
      "gray-300": "var(--color-gray-300)",
      "gray-200": "var(--color-gray-200)",
      // "gray-100": "var(--color-gray-100)",

      "error": "var(--color-error)",
      "error-lighter": "var(--color-error-lighter)",
      "error-darker": "var(--color-error-darker)",
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}