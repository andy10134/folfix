import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bay-of-many': {  DEFAULT: '#224481',  50: '#7EA0DD',  100: '#6E94D9',  200: '#4D7CD0',  300: '#3366C2',  400: '#2B55A1',  500: '#224481',  600: '#162D55',  700: '#0B1528',  800: '#000000',  900: '#000000',  950: '#000000'},
        'blue-zodiac': {  DEFAULT: '#132647',  50: '#4576CD',  100: '#356BC8',  200: '#2D5AA8',  300: '#244887',  400: '#1C3767',  500: '#132647',  600: '#070E1B',  700: '#000000',  800: '#000000',  900: '#000000',  950: '#000000'},
        
      },
    },
  },
  plugins: [],
}
export default config
