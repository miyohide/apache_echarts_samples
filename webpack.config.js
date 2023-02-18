const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        racebar: './src/racebar.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};
