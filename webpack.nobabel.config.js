module.exports = {
    entry: {
        app: './src/app.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle-without-babel.js'
    }
};