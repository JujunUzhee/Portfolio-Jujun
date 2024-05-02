module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeindown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeinleft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeinright: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        pulse : {
          '0%, 100%' : { opacity: '1'},
          '50%' :{ opacity: '.5'
          },
        },
       
        
      },
      animation: {
        fadeindown: 'fadeindown 1s ease-out',
        fadeinleft: 'fadeinleft 1s ease-out',
        fadeinright: 'fadeinright 1s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    
      },
    },
  },
  plugins: [],
};
