module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#111111',
                secondary: '#464545',
                accent: '#6A706E',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
