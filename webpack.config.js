const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.argv.indexOf('-d') !== -1;
const jsSourcePath = path.join(__dirname, 'example');
const buildPath = path.join(__dirname, 'demo');
const sourcePath = path.join(__dirname, 'example');

module.exports = {
    mode: "development",
    devtool:'cheap-eval-source-map',
    context: jsSourcePath,
    entry: {
        vendor: ['react', 'react-dom'],
        app: [path.resolve(sourcePath, 'app.js')]
    },
    output: {
        path: buildPath,
        publicPath: "/",
        filename: "[name].[hash].js",
        chunkFilename: "[name].[chunkhash].js"
    },
    module: {
        rules: [{
            test: /\.js|jsx$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
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
            jsSourcePath,
        ],
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(sourcePath, 'index.html'),
            path: buildPath,
            filename: 'index.html',
        })
    ],
    devServer: {
        contentBase: isProduction ? buildPath : sourcePath,
        historyApiFallback: true,
        port: 3000,
        compress: isProduction,
        inline: !isProduction,
        hot: !isProduction,
        host: '0.0.0.0',
        disableHostCheck: true
    }
};
