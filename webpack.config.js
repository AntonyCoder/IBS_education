const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const Dotenv = require('dotenv-webpack')


const isDev = process.env.NODE_ENV === 'dev'

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if (!isDev) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
}

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.css'],
        alias: {
          '@js': path.resolve(__dirname, 'src/js'),
          '@css': path.resolve(__dirname, 'src/css')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
    optimization: optimization(),
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new Dotenv()
    ],
}
