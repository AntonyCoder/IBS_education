const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MimiCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MimiCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/inline',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/item.html',
            filename: 'item.html',
        }),
        new MimiCssExtractPlugin(),
    ],
}
