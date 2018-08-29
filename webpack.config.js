const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = process.argv.indexOf('-d') !== -1;
const jsSourcePath = path.join(__dirname, 'example');
const buildPath = path.join(__dirname, 'build/demo');
const sourcePath = path.join(__dirname, 'example');

// Common plugins
const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor-[hash].js',
        minChunks(module) {
            const context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        },
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
        template: path.join(sourcePath, 'index.html'),
        path: buildPath,
        filename: 'index.html',
    })
];


if (!isProduction) {
    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
} else {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true
            }
        })
    );
}

module.exports = {
    devtool: isProduction ? false : 'source-map',
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
            jsSourcePath,
        ],
    },
    plugins,
    devServer: {
        contentBase: isProduction ? buildPath : sourcePath,
        historyApiFallback: true,
        port: 3000,
        compress: isProduction,
        inline: !isProduction,
        hot: !isProduction,
        host: '0.0.0.0',
        disableHostCheck: true
    },
};
