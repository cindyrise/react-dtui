const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const jsSourcePath = path.join(__dirname, 'example');
const buildPath = path.join(__dirname, 'build/demo');
const sourcePath = path.join(__dirname, 'example');


module.exports = {
    mode: "development",
    devtool: 'source-map',
    context: jsSourcePath,
    entry: {
        js: './app.js',
    },
    output: {
        path: buildPath,
        publicPath: '',
        filename: 'app-[hash].js',
    },
    module: {
        rules: [{
            test: /\.js|jsx$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        },
        {
            test: /\.(css)$/,
            use: [
                "style-loader",
                "css-loader"
            ],
        },
        {
            test: /\.(scss|sass)$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader?sourceMap"
            ]
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?[tv]=[\d.]+)*$/,
            use: ['file-loader?name=[name].[ext]']
        }
    ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            jsSourcePath
        ],
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(sourcePath, 'index.html'),
            path: buildPath,
            filename: 'index.html',
        })
    ],
    optimization:{
         runtimeChunk: {
            name: 'manifest'
          },
          splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
              vendor: {
                name: 'vendor',
                chunks: 'initial',
                priority: -10,
                reuseExistingChunk: false,
                test: /node_modules\/(.*)\.js/
              }
            }
          }
    },
    devServer: {
        contentBase: buildPath,
        historyApiFallback: true,
        port: 3000,
        hot: true,
        host: '0.0.0.0',
        disableHostCheck: true
    },
};
