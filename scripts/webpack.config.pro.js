"use strict";
let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let ManifestPlugin = require('webpack-manifest-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

const vendors = ['react', 'react-dom']
module.exports = {
    devtool: "source-map", //生成sourcemap,便于开发调试
    //入口文件
    entry: {
        app: "./src/index.tsx"
            // vendors: vendors //第三方库
    },
    //输入文件
    output: {
        path: path.join(__dirname, "../build"),
        publicPath: "./",
        filename: "static/js/[name].[chunkhash:8].bundle.js",
        chunkFilename: "static/js/[name].[chunkhash:8].bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"] //resolve.extensions 用于指明程序自动补全识别哪些后缀,
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter",
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.(less|css)$/,
                exclude: "/node_modules/",
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: 'css-loader!less-loader',
                })
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader",
                query: {
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false,
            exclude: ['lib']
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new ExtractTextPlugin({
            filename: "static/css/[name].[contenthash:8].css",
            disable: false,
            allChunks: true
        }),
        // new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'static/js/[name].[chunkhash:8].bundle.js' }),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.template.html',
            title: 'fuck',
            chunks: ['app'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            hash: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            },
            "_VERSION_": Date.now()
        }),
        new ManifestPlugin({
            fileName: 'asset-manifest.json'
        })
    ]
};