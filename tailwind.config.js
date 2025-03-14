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
          bage:'#f4eeeaf6',
        }
        },
    },
    plugins: [],
};
