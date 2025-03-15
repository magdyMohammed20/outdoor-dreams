/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html"],
    safelist: [
    'lg:pt-[2.5em]',
  ],
    theme: {
        extend: {
            boxShadow: {
                "card": "-2.5em 3.125em 5.25em rgba(0,0,0,0.1)",
            },
            colors: {
              bage: '#f4eeeaf6',
              'bage-light': '#fcf9f7'
        },
            margin: {
        '60px': '60px',
        },
   fontSize: {
        'tiny': '0.85em'
        },
   fontFamily: {
        customFont: ['FS Neruda Light'],
        // Add more custom font families as needed
      },
        },
    },
    plugins: [],
};
