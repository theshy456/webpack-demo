const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode:'development',//给自己看的。production发布，
    entry: './src/index.js',
    output: {

        filename: 'index.[contenthash].js',//文件名和内容一一对应，http缓存更新
    },
    plugins: [new HtmlWebpackPlugin(
        {
            title: '彭于晏',
            template: 'src/assets/index.html'//基于assets的index创建dist中的index
        }
    )],
    module: {
        rules: [
            {
                test: /\.css$/i,//$正则表达式
                use: ["style-loader", "css-loader"],//css将文件读到js里面，style将独到的css放到header种
            },
        ],
    },
};