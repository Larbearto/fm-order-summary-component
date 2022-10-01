/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        Desktop: "url('/public/pattern-background-desktop.svg')",
        Mobile: "url('/public/pattern-mobile.svg')"
      },
      screens: {
        sm: '375px',
        lg: '1440px'
      },
      fontFamily: {
        redHat: ['Red Hat Display']
      },
      colors: {
        paleblue: '#E0E8FF',
        brightblue: '#3829E0',
        verypaleblue: '#F5F7FF',
        desaturatedblue: '#7280A7',
        darkblue: '#1F2F56'
      }
    }
  },
  plugins: []
}
