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
    entry: './src/index.tsx',
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
        extensions: ['.js', '.json', '.svg', '.jsx', '.scss', '.tsx', '.ts',],
        alias: {
            '@svg': path.resolve(__dirname, 'src/assets/svg'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@slices': path.resolve(__dirname, 'src/slices'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@helpers': path.resolve(__dirname, 'src/helpers'),
            '@enums': path.resolve(__dirname, 'src/enums'),
            '@const': path.resolve(__dirname, 'src/constants'),
            '@header': path.resolve(__dirname, 'src/components/header'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@layouts': path.resolve(__dirname, 'src/layouts'),
            '@pages': path.resolve(__dirname, 'src/pages'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
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
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    optimization: optimization(),
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new Dotenv()
    ],
}
