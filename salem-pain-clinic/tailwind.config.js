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
  				DEFAULT: '#0056b3', // Deep Trustworthy Blue
  				dark: '#003d80',
  				light: '#3378c2',
  				subtle: '#e6f0fa', // Very light blue for backgrounds
  				foreground: '#ffffff'
  			},
  			secondary: {
  				DEFAULT: '#e6f0fa', // Light blue for accent cards
  				foreground: '#0056b3'
  			},
  			accent: {
  				DEFAULT: '#0056b3',
  				foreground: '#ffffff'
  			},
  			text: {
  				dark: '#1a202c', // Gray-900
  				gray: '#4a5568', // Gray-700
  				muted: '#718096' // Gray-600
  			},
  			background: '#ffffff',
  			foreground: '#1a202c',
            // Keeping gold for subtle highlights if needed, but de-emphasizing
  			gold: {
  				DEFAULT: '#f59e0b',
  				light: '#fbbf24'
  			},
            cream: {
                DEFAULT: '#ffffff', // Reset cream to white for cleaner look
                dark: '#f8f9fa'
            }
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-body)',
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			heading: [
  				'var(--font-heading)',
  				'Lora',
  				'serif'
  			]
  		},
  		animation: {
  			fadeIn: 'fadeIn 0.6s ease-out forwards',
  			slideInLeft: 'slideInLeft 0.6s ease-out forwards',
  			slideInRight: 'slideInRight 0.6s ease-out forwards',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			fadeIn: {
  				from: { opacity: '0', transform: 'translateY(20px)' },
  				to: { opacity: '1', transform: 'translateY(0)' }
  			},
  			slideInLeft: {
  				from: { opacity: '0', transform: 'translateX(-50px)' },
  				to: { opacity: '1', transform: 'translateX(0)' }
  			},
  			slideInRight: {
  				from: { opacity: '0', transform: 'translateX(50px)' },
  				to: { opacity: '1', transform: 'translateX(0)' }
  			},
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
