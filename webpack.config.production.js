'use strict';

var webpack = require('webpack');
var config = require('./webpack.config.base');

config.plugins.push(new webpack.NoErrorsPlugin());
config.plugins.push(new webpack.optimize.DedupePlugin());
config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
}));
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compressor: {
    screw_ie8: true,
    warnings: false
  }
}));

module.exports = config;
