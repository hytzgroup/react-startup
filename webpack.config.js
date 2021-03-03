const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.js",
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                    },
                },
            },
            // {
            //   test: /\.css$/,
            //   use: ["style-loader", "css-loader"],
            // },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/i,
                use: ['style-loader', "css-loader", "less-loader"],
            },
            {
                test: /\.scss|sass$/i,
                use: ['style-loader', "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new WebpackManifestPlugin({}),
        new HtmlWebpackPlugin({
            title: "React基本配置",
            template: "./public/index.html",
            filename: "./index.html",
            //favicon: "./public/favicon.ico",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
