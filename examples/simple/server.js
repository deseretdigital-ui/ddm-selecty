var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var path = require('path');
var fs = require('fs');
var mainPath = path.resolve(__dirname, 'src/index.js');

var bundleStart = null;
var compiler = Webpack(webpackConfig);
compiler.plugin('compile', function () {
  console.log('Bundling...');
  bundleStart = Date.now();
});
compiler.plugin('done', function () {
  console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
});

var bundler = new WebpackDevServer(compiler, {

  // We need to tell Webpack to serve our bundled application
  // from the build path. When proxying:
  // http://localhost:3000/build -> http://localhost:8080/build
  publicPath: '/build/',
  hot: true,
  quiet: false,
  noInfo: true,
  stats: {
    colors: true
  }
});

// We fire up the development server and give notice in the terminal
// that we are starting the initial bundle
bundler.listen(8000, 'localhost', function () {
  console.log('Bundling project, please wait...');
});
