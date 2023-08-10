import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cuz: 'Cuz',
      },
      keyframes: {
        loading: {
          '0%': { left: '-100%', width: '100%' },
          '100%': { left: '100%', width: '100%' },
        },
      },
      animation: {
        loading: 'loading 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
