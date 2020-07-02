const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); // Already installed default webpackplugin

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "bundle.[contentHash].js",
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HTMLWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css into files
          "css-loader", // 1. Turns css into commonjs
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CopyPlugin([
      {
        from: "*.ico",
        to: "img",
        context: __dirname + "/src/assets/",
      },
    ]),
    new CleanWebpackPlugin(),
  ],
});
