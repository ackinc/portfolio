const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader'
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        publicPath: 'dist/js',
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    mode: process.env.MODE || "development"
};
