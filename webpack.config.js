let webpack = require('webpack');
let HtmlPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let rules = require('./webpack.config.rules')();
let path = require('path');

rules.push({
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
        use: [{
            loader: 'css-loader'
        }, {
            loader: 'sass-loader'
        }],
        fallback: 'style-loader'
    })
});

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve('dist')
    },
    devtool: 'source-map',
    module: { rules },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                drop_debugger: false,
                warnings: false
            }
        }),
        new ExtractTextPlugin('styles.css'),
        new HtmlPlugin({
            title: 'Другофильтр',
            template: './src/template/index.hbs'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};
