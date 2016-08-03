'use strict';

var webpack = require('webpack');
var config = require('./webpack.config.base');

config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development')
}));

module.exports = config;
