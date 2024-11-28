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
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './',
    },
    devServer: {
        headers: { 'Content-Type': 'text/css' },
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 5500,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.json', '.css', '.svg', '.jsx', '.scss'],
        alias: {
            '@js': path.resolve(__dirname, 'src/js'),
            '@css': path.resolve(__dirname, 'src/css'),
            '@svg': path.resolve(__dirname, 'src/assets/svg'),
            '@api': path.resolve(__dirname, 'src/js/api')
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new Dotenv()
    ],
}
