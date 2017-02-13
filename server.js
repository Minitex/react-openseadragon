var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.babel.js');

var app = express();
var compiler = webpack(config);

// Allow index.html to access files in docs dir (css)
// app.use(express.static(path.join(__dirname, 'docs')));

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
})
