/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
  	extend: {
      colors: {
      primary: {
        DEFAULT: 'rgb(var(--clinic-accent-rgb) / <alpha-value>)',
        dark: 'rgb(var(--clinic-accent-strong-rgb) / <alpha-value>)',
        light: '#3376c4',
        subtle: 'rgb(var(--clinic-tint-rgb) / <alpha-value>)',
        foreground: '#fff',
      },
      secondary: {
        DEFAULT: 'rgb(var(--clinic-tint-rgb) / <alpha-value>)',
        foreground: 'rgb(var(--clinic-accent-rgb) / <alpha-value>)',
      },
      accent: {
        DEFAULT: 'rgb(var(--clinic-accent-rgb) / <alpha-value>)',
        foreground: '#fff',
      },
      text: {
        dark: 'rgb(var(--clinic-ink-rgb) / <alpha-value>)',
        gray: 'rgb(var(--clinic-muted-rgb) / <alpha-value>)',
        muted: 'rgb(var(--clinic-muted-rgb) / <alpha-value>)',
      },
      background: 'rgb(var(--clinic-paper-rgb) / <alpha-value>)',
      foreground: 'rgb(var(--clinic-ink-rgb) / <alpha-value>)',
    },
    fontFamily: {
      sans: ['var(--clinic-font)'],
      heading: ['var(--clinic-font)'],
    },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
}
