const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: __dirname + "/src/index.js", //已多次提及的唯一入口文件
  output: {
    path: __dirname + "/dist", //打包后的文件存放的地方
    filename: "bundle.js" //打包后输出文件的文件名
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [{
          loader: "html-loader"
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader"
        }
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
