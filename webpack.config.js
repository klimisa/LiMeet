const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        path.resolve(__dirname, 'src/index')
    ],
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("styles.css"),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                use: ['babel-loader']
            },
            {
                test: /\.(woff|woff2|ttf|eot)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
                loader: 'file-loader?name=fonts/[name]-[hash].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader?name=images/[name]-[hash].[ext]'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: { loader: 'style-loader', options: { base: 2000 } },
                    use: ['css-loader']
                })
            }
        ]
    },
    devServer: {
        contentBase: 'src',
        hot: true
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
    },
};