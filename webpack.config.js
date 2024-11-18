const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Подключение CSS
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Обработка изображений
                type: 'asset/resource',
            },
            {
                test: /\.html$/, // Подключение HTML файлов
                use: ['html-loader'],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // Очистка dist при каждой сборке
        new HtmlWebpackPlugin({
          template: './src/pages/index.html', // Основной HTML
          filename: 'index.html',
        }),
      ],
}
