var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var rootDir = path.dirname(__dirname);

module.exports = {
  context: rootDir,
  entry: './src/index.js',
  output: {
    path: path.join(rootDir, 'build'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(rootDir, "src", "index.html")
    })
  ]
};
