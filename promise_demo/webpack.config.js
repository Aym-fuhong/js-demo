var path = require('path');
require("babel-polyfill");

module.exports = {
    entry: [
        './public/js/index.js',
        'babel-polyfill'

    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.js|jsx$/, loaders: ['babel']}
        ]
    }
};