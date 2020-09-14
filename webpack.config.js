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
        port: '1122'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                //使用style-loader css-loader 从右往左生效
                use:['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'less-loader',
                    options: {
                        lessOptions: {
                            modifyVars: {
                                'primary-color': '#781dff',
                                'success-color': '#52c41a',
                                'info-color': '#3c67b8',
                                'warning-color': '#faad14',
                                'error-color': '#fd5158',
                                'body-background': '#eee',
                                'text-color': '#666',
                                'text-color-secondary': '#999',
                                'heading-color': '#333',
                                'font-size-base': '12px',
                                'border-radius-base': '2px',
                                'btn-default-color':'#333333',
                                'btn-default-bg':'#fff',
                                'btn-height-base': '30px',
                                'card-padding-base': '20px',
                                'form-item-margin-bottom': '15px',
                                'input-height-base': '30px',
                                'input-border-color': 'rgba(0,0,0,0.15)',
                                'select-border-color': 'rgba(0,0,0,0.15)',
                                'table-header-bg': '#ECEFF6',
                                'table-header-color':'#333333',
                                'table-selected-row-bg':'#F5F7FB',
                                'table-row-hover-bg':'#F5F7FB'
                            },
                            javascriptEnabled: true,
                        },
                    },
                }],
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react','@babel/env'],
                        plugins: [
                                  [ "import", { "libraryName": "antd", "libraryDirectory": "es", "style": true } ],
                                  ["@babel/plugin-proposal-decorators", {"legacy": true}],
                                  ["@babel/plugin-proposal-class-properties", { "loose": true }]
                                ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                },
                exclude: [path.resolve('src/assets/icons')]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template:'./src/index.html'}
    )]
};