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
            {
                test: /\.js|jsx$/,
                loaders: ['babel'],
            },
        ]
    }
};

// var webpack = require('webpack');
// var path = require('path');
// require("babel-polyfill");
//
// module.exports = {
//     entry: [
//         'babel-polyfill',
//         'webpack-hot-middleware/client?reload=true',
//         './public/js/index.js',
//     ],
//     output: {
//         path: path.join(__dirname, 'dist'),
//         filename: 'bundle.js',
//         publicPath: '/static/',
//     },
//     plugins: [
//         new webpack.optimize.OccurenceOrderPlugin(),
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.NoErrorsPlugin(),
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: JSON.stringify('development'),
//             }
//         }),
//     ],
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 loader: 'babel',
//                 exclude: /node_modules/,
//             },
//             {
//                 test: /\.css$/,
//             },
//             {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
//             {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
//             {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
//             {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
//         ]
//     }
// };