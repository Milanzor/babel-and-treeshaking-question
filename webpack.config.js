module.exports = {
    entry: {
        app: './src/app.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle-with-babel.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};