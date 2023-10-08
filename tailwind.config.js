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
        BaseGray600: "#DDDEDF",
        BaseGray700: "#DDDEDF",
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
      }
    },
  },
  plugins: [],
}
