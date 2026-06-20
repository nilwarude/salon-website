/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C8A96A',
          50: '#F8F3EA',
          100: '#F0E7D5',
          200: '#E1CFAC',
          300: '#D2B782',
          400: '#C8A96A',
          500: '#BE9B52',
          600: '#A8833E',
          700: '#8B6B2F',
          800: '#6E5324',
          900: '#513C1A',
        },
        dark: {
          DEFAULT: '#111111',
          50: '#F2F2F2',
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#111111',
        },
        accent: {
          DEFAULT: '#8B5E3C',
          50: '#F5EDE7',
          100: '#EADBCF',
          200: '#D5B79F',
          300: '#C0936F',
          400: '#AB6F3F',
          500: '#8B5E3C',
          600: '#6C4A30',
          700: '#4D3624',
          800: '#2E2118',
          900: '#1A130C',
        },
        section: {
          DEFAULT: '#F8F5F0',
          alt: '#FCFAF7',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'subheading': ['2.25rem', { lineHeight: '1.2' }],
        'lead': ['1.25rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'gold-shimmer': 'goldShimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        goldShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C8A96A 0%, #D2B782 25%, #C8A96A 50%, #D2B782 75%, #C8A96A 100%)',
        'dark-gradient': 'linear-gradient(180deg, #1A1A1A 0%, #2D2D2D 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.7) 50%, rgba(26,26,26,0.4) 100%)',
        'overlay-gold': 'linear-gradient(135deg, rgba(200,169,106,0.15) 0%, rgba(200,169,106,0.05) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(200, 169, 106, 0.3)',
        'gold-lg': '0 8px 40px rgba(200, 169, 106, 0.25)',
        'premium': '0 10px 50px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 20px 80px rgba(0, 0, 0, 0.12)',
        'inner-gold': 'inset 0 2px 10px rgba(200, 169, 106, 0.1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
};