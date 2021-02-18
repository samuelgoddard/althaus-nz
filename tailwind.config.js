module.exports = {
  purge: {
    content: ['./src/**/*.js',],
    options: {
      whitelist: ['is-active', 'w-40', 'md:w-64', 'w-4', 'md:w-8', 'w-8'],
    }
  },
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4.5rem',
      '7xl': '5.65rem',
      '8xl': '7.5rem',
      '9xl': '10rem',
      '10xl': '15rem',
    },     
    extend: {
      colors: {
        purple: {
          light: '#2C3583',
          default: '#131739',
          dark: '#2D3557'
        },
        pink: {
          default: '#EF4362',
          dark: '#BB4262'
        }
      },
      spacing: {
        '22': '5.25rem',
        '30': '7rem',
        '128': '24rem'
      },
      height: {
        half: '50%',
        almostFull: '90%',
      },
      lineHeight: {
        'extra-tight': '1.15',
        'extra-relaxed': '1.8'
      },
      fontFamily: {
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
    }
  },
  variants: {
    margin: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  corePlugins: {
    container: false
  }
}