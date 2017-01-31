var webpack = require("webpack");
var path = require('path');
var merge = require('webpack-merge')
var TARGET = process.env.npm_lifecycle_event;
// e.g.: 
// npm run build
// (event == build)
// e.g. nmp run start (event -- start)
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var common = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015", "stage-0"],
          plugins: ["transform-es2015-modules-umd"]
        }
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin("[name].css")
  ]
};

if (TARGET === 'build') {
  module.exports = merge(common, {
    entry: './src/react-openseadragon.js',
    output: {
      path: './lib/',
      filename: 'react-openseadragon.js'
    }
  });
}


if (TARGET === 'start') {
  module.exports = merge(common, {
    devtool: 'source-map',
    entry: {
      bundle: ["./src/react-openseadragon.js"],
      example: "./example/example.js"
    },
    output: {
        path: "./docs/",
        filename: "[name].js"
    }
  });
}
