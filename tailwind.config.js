/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#0066CC',
          600: '#0066CC',
          700: '#0052A3',
          800: '#003D7A',
          900: '#002952',
        },
        b2b: {
          blue: {
            DEFAULT: '#5DADE2',
            light: '#85C1E9',
            dark: '#3498DB',
          },
          green: {
            DEFAULT: '#9ACD32',
            light: '#B8E356',
            dark: '#7CB342',
          },
          orange: {
            DEFAULT: '#FF8C42',
            light: '#FFB366',
            dark: '#FF6B1F',
          },
          coral: {
            DEFAULT: '#FF6B35',
            light: '#FF8A5C',
            dark: '#FF4C1A',
          },
          magenta: {
            DEFAULT: '#E91E63',
            light: '#F06292',
            dark: '#C2185B',
          },
          yellow: {
            DEFAULT: '#FFC107',
            light: '#FFD54F',
            dark: '#FFA000',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #5DADE2 0%, #0066CC 100%)',
        'gradient-energy': 'linear-gradient(135deg, #FF8C42 0%, #FF6B35 50%, #E91E63 100%)',
        'gradient-success': 'linear-gradient(135deg, #9ACD32 0%, #5DADE2 100%)',
        'gradient-vibrant': 'linear-gradient(135deg, #5DADE2 0%, #9ACD32 25%, #FF8C42 50%, #FF6B35 75%, #E91E63 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FFC107 0%, #FF8C42 100%)',
      },
    },
  },
  plugins: [],
}

