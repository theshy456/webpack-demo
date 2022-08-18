const path = require('path');
module.exports = {
    mode:'development',//给自己看的。production发布，
    entry: './src/index.js',
    output: {

        filename: '[name].[contenthash].js',//文件名和内容一一对应，http缓存更新
    },
};