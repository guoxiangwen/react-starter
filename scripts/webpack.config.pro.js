"use strict";
let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let ManifestPlugin = require('webpack-manifest-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');



const vendors = ['react', 'react-dom'];
module.exports = {
    devServer: {
        hot: true,
        contentBase: "./build",
        proxy: {
            '/sms-web/*': {
                target: 'http://172.17.122.124:9099',
                changeOrigin: true,
                secure: false
            }
        }
    },
    devtool: "source-map", //生成sourcemap,便于开发调试
    //入口文件
    entry: {
        app: "./src/main.js",
        vendors: vendors //第三方库
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
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: true
                    }
                }],
                publicPath: "/build"
            })
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                        loader: 'css-loader',
                        options: { sourceMap: true, minimize: true }
                    },
                    {
                        loader: 'less-loader',
                        options: { sourceMap: 'compressed' }
                    }
                ]
            })
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: "url-loader",
            query: {
                limit: 10000,
                name: 'static/imgs/[name].[hash:8].[ext]'
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false,
            exclude: ['']
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        // This helps ensure the builds are consistent if source hasn't changed:
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // Try to dedupe duplicated modules, if any:

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            },
            except: ['$super', '$', 'exports', 'require'] //排除关键字
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
            // title: 'fuck',
            chunks: ['app', 'vendors'],
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
            }
        }),
        // new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        // Minify the code.
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true, // React doesn't support IE8
                warnings: false
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        }),
        // Generate a manifest file which contains a mapping of all asset filenames
        // to their corresponding output file so that tools can pick it up without
        // having to parse `index.html`.
        new ManifestPlugin({
            fileName: 'asset-manifest.json'
        })
    ]
};