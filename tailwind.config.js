module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primaryText: '#F5F5F5',
                primary: '#111111',
                secondary: '#464545',
                accent: '#6A706E',
            },
        },
    },
    variants: {
        scrollbar: ['dark'],
        extend: {},
    },
    plugins: [require('tailwind-scrollbar')],
}
