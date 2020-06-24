/**
 *@author  liumm308
 *@data  2020/06/20 10:07
 *@mail xidian_liu@163.com
 */
let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        disableHostCheck: true,
        host: 'localhost',
        port: '8001'
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                //使用style-loader css-loader 从右往左生效
                use:['style-loader','css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    }
                },
                exclude: [path.resolve('src/icons')]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template:'./src/index.html'
        }
    )]
};