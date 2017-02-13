var webpack = require("webpack");
var path = require('path');
var merge = require('webpack-merge')

var TARGET = process.env.npm_lifecycle_event;
var minimize = (process.argv.indexOf('--minimize') > 0) ? true : false;
var example =  (process.argv.indexOf('--example') > 0) ? true : false;
var build =    (process.argv.indexOf('--build') > 0) ? true : false;
 
var common = {
  module: {
    loaders: [
      { 
        test: /\.js?$/,
        loader: 'react-hot-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015", "stage-0"]
        }
      },
      {
          test: /\.css$/,
          loaders: ["style-loader", "css-loader"]
      },
      {
          test: /\.less$/,
          loaders: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ]
};

if (build) {
  if (minimize) {
    common.plugins.push(new webpack.optimize.UglifyJsPlugin());    
    var config = 
    {
      entry: './src/react-openseadragon.js',
      output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react-openseadragon-min.js',
        library: "react-openseadragon",
        libraryTarget: 'umd',
        umdNamedDefine: true
      }
    }
  } else {
    var config = 
    {
      devtool: 'source-map',
      entry: './src/react-openseadragon.js',
      output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react-openseadragon.js',
        library: "react-openseadragon",
        libraryTarget: 'umd',
        umdNamedDefine: true
      }
    }
  }
  module.exports = merge(common, config);
}

if (example || TARGET === 'start') {
  module.exports = merge(common, {
    devtool: 'source-map',
    entry: './example/example.js',
    output: {
        path: path.join(__dirname, 'docs'),
        filename: "example.js"
    }
  });
}