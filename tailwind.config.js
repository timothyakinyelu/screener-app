module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundColor: theme=>({
            'primary': '#0db1bd',
            'secondary': '#6236ff'
        })
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
