module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			bluebright: 'var(--bluebright)',
  			bluedark: 'var(--bluedark)',
  			bluelight: 'var(--bluelight)',
  			'bwbw-6': 'var(--bwbw-6)',
  			dark: 'var(--dark)',
  			gray: 'var(--gray)',
  			graybluedarkerbg: 'var(--graybluedarkerbg)',
  			graybluelightbg: 'var(--graybluelightbg)',
  			'kfu-style212121': 'var(--kfu-style212121)',
  			'kfu-styleblue-11f5cb8': 'var(--kfu-styleblue-11f5cb8)',
  			'kfu-stylebluebuttondefault': 'var(--kfu-stylebluebuttondefault)',
  			'kfu-stylebluebuttonhover': 'var(--kfu-stylebluebuttonhover)',
  			'kfu-stylefffff': 'var(--kfu-stylefffff)',
  			white: 'var(--white)',
  			'x-3': 'var(--x-3)',
  			'x-6': 'var(--x-6)',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			h1: 'var(--h1-font-family)',
  			h2: 'var(--h2-font-family)',
  			h3: 'var(--h3-font-family)',
  			h4: 'var(--h4-font-family)',
  			h5: 'var(--h5-font-family)',
  			t2: 'var(--t2-font-family)',
  			t3: 'var(--t3-font-family)',
  			't3-bold': 'var(--t3-bold-font-family)',
  			sans: [
  				'ui-sans-serif',
  				'system-ui',
  				'sans-serif',
  				'Apple Color Emoji"',
  				'Segoe UI Emoji"',
  				'Segoe UI Symbol"',
  				'Noto Color Emoji"',
				'PT Sans Caption Bold'
  			]
  		},
  		boxShadow: {
  			'light-shadow': 'var(--light-shadow)',
  			'shadow-soft': 'var(--shadow-soft)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	},
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	}
  },
 
  darkMode: ["class"],
};
