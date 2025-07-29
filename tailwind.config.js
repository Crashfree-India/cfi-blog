// tailwind.config.js
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'cfi-lighter-blue': 'rgb(214 212 255)',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '700',
              fontSize: '2.25rem', // ~text-4xl
              marginBottom: '1rem',
              color: '#111827', // Tailwind gray-900
            },
            h2: {
              fontWeight: '600',
              fontSize: '1.875rem', // ~text-3xl
              marginTop: '2rem',
              marginBottom: '1rem',
              color: '#1f2937', // Tailwind gray-800
            },
            blockquote: {
              fontStyle: 'normal',
              color: '#4b5563', // Tailwind gray-700
              borderLeftWidth: '4px',
              borderLeftColor: '#6366f1', // indigo-500
              paddingLeft: '1rem',
              quotes: 'none',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [typography],
}
