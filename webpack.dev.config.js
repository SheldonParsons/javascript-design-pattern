const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 打包出来的bundle将会插到这个模板之中
            template: './index.html'
        })
    ],
    devServer: {
        // 简易的服务器，这个是根目录
        // 不单单可以注入到模板中，当源文件更新的时候还会自动的打包刷新
        contentBase: path.join(__dirname, './release'),
        // 执行以后自动打开浏览器
        open: true,
        // 端口
        port: 9000
    }
}
