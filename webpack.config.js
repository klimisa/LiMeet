var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8000',
            'webpack/hot/only-dev-server',
            './app/index'
        ],
        // vendor: ['vendor.js']
    },
    devtool: 'eval',
    output: {
        path: path.join(__dirname, '/public/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery",
            'window.jQuery': "jquery",
            'window.$': 'jquery'

        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: 'vendor.js',
            minChunks: Infinity
        }),
        new webpack.DefinePlugin({
            "require.specified": "require.resolve"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [ 'css-loader' ]
                })
                //use: ExtractTextPlugin.extract('style-loader', 'css-loader')

            },
            {
                test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=100000'
            },
            {
                test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }
};


module.exports = config;
