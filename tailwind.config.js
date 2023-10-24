
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '500px'},
      },
      colors: {
        white: "#ffffff",
        BaseGray100: "#1B1D1E",
        BaseGray200: "#333638",
        BaseGray300: "#5C6265",
        BaseGray400: "#B9BBBC",
        BaseGray500: "#DDDEDF",
        BaseGray600: "#EFF0F0",
        BaseGray700: "#FAFAFA",
        BrandGreenDark: "#639339",
        BrandGreenLight: "#E5F0DB",
        BrandGreenMid: "#CBE4B4",
        BrandRedDark: "#BF3B44",
        BrandRedLight: "#F4E6E7",
        BrandRedMid: "#F3BABD",
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        titleG: ['2rem', {
          lineHeight: '130%',
          fontWeight: '700'
        }],
        titleM: ['1.5rem', {
          lineHeight: '130%',
          fontWeight: '700'
        }],
        titleS: ['1.125rem', {
          lineHeight: '130%',
          fontWeight: '700'
        }],
        titleXS: ['0.875rem', {
          lineHeight: '130%',
          fontWeight: '700'
        }],
        bodyM: ['1rem', {
          lineHeight: '130%',
          fontWeight: '400'
        }],
        bodyS: ['0.875rem', {
          lineHeight: '130%',
          fontWeight: '400'
        }],
        bodyXS: ['0.75rem', {
          lineHeight: '130%',
          fontWeight: '700'
        }],
      },
      animation: {
        'modal-slow': 'pulse 2s linear',
      }

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.calc-main-height': {
          'min-height': 'calc(100vh - 132px)',
        },
        '.calc-manege-height': {
          'min-height': 'calc(100vh - 72px)',
        }
      }, ['responsive', 'hover'])
    },
    function ({addComponents }){
      addComponents({
        '.active-solid-button': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.5rem',
          borderRadius: '0.375rem',
          backgroundColor: '#333638',
          color: '#FFF',
          fontSize: '0.875rem',
          fontWeight: 700,
          lineHeight: '130%',
          transition: '0.7s',
          '&:hover': {
            backgroundColor: '#1B1D1E',
            transition: '0.7s',
          }
        },
        '.active-outline-button': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.5rem',
          borderRadius: '0.375rem',
          backgroundColor: 'none',
          border: 'solid 1px #1B1D1E',
          color: '#1B1D1E',
          fontSize: '0.875rem',
          fontWeight: 700,
          lineHeight: '130%',
          transition: '0.5s',
          '&:hover': {
            backgroundColor: '#DDDEDF',
            transition: '0.5s',
          }
        },
        '.button-select-green': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem',
          borderRadius: '0.375rem',
          backgroundColor: '#EFF0F0',
          border: 'solid 1px #EFF0F0',
          color: '#1B1D1E',
          fontSize: '0.875rem',
          fontWeight: 700,
          lineHeight: '130%',
          transition: '0.5s',
          '&.active': {
            backgroundColor: '#E5F0DB',
            border: 'solid 1px #639339',
            transition: '0.5s',
          }
        },
        '.button-select-red': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem',
          borderRadius: '0.375rem',
          backgroundColor: '#EFF0F0',
          border: 'solid 1px #EFF0F0',
          color: '#1B1D1E',
          fontSize: '0.875rem',
          fontWeight: 700,
          lineHeight: '130%',
          transition: '0.5s',
          '&.active': {
            backgroundColor: '#F4E6E7',
            border: 'solid 1px #BF3B44',
            transition: '0.5s',
          }
        },

      })
    }
  ],
}
