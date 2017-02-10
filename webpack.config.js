"use strict";
let webpack = require('webpack');
let path = require('path');
// let HtmlWebpackPlugin = require('html-webpack-plugin');
// let ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackBrowserPlugin = require('webpack-browser-plugin');

const vendors = ['react', 'react-dom'];
module.exports = {
    devtool: 'cheap-eval-source-map',
    devServer: {
        hot: true,
        inline: true,
        contentBase: "./src",
        proxy: {
            '/sms-web/*': {
                target: 'http://localhost:9099',
                changeOrigin: true,
                secure: false
            }

        }
    },
    // devtool: "source-map",    //生成sourcemap,便于开发调试
    entry: {
        app: "./src/main.js", //
        vendors: vendors //第三方库
    }, //入口文件
    output: {
        path: path.join(__dirname, "src"),
        publicPath: "",
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"] //resolve.extensions 用于指明程序自动补全识别哪些后缀,
    },
    module: {
        //各种加载器，即让各种文件格式可用require引用
        rules: [{
            test: /\.js|jsx$/,
            loader: "babel-loader",
            exclude: "/node_modules/",
            options: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            exclude: "/node_modules/",
            // loader: ExtractTextPlugin.extract("css-loader")
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]

        }, {
            test: /\.scss$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "sass-loader" },
            ]
        }, {
            test: /\.(png|jpg|woff|woff2|eot|ttf|svg)/,
            use: [
                { loader: "url-loader?limit=40000" }
            ]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackBrowserPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendors'],
            filename: "vendors.bundle.js",
            minChunks: Infinity
        }),
    ]
};