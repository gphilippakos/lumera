/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory:      '#F5F0EB',
        gold:       '#C9A96E',
        'gold-light': '#E8D5B0',
        blush:      '#E8DDD4',
        charcoal:   '#2C2C2C',
        'warm-grey': '#8C7E72',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.4em',
      },
    },
  },
  plugins: [],
}
