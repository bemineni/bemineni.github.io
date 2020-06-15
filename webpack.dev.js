const path = require("path");
const common = require("./webpack.common")
const merge = require("webpack-merge")
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode:"development",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    "style-loader", //2. Inject css into DOM
                    "css-loader" //1. Turns css into commonjs
                ]
            }    
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template:"./src/template.html"
        })
    ]
});