'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  entry: {
    UISelecty: './src/index.js',
  },
  output: {
		library: 'UISelecty',
    libraryTarget: 'umd'
  },
  resolve: {
    root: path.resolve(__dirname, './src'),
    modulesDirectories: [path.join(__dirname, 'node_modules')],
    extensions: ["", ".js", ".jsx", ".css"]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('ddm.selecty.css', {allChunks: true}),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-decorators-legacy'],
          presets: ['react', 'es2015', 'stage-0']
        },
        include: path.resolve(__dirname, 'src/'),
        exclude: /(node_modules)/
      },
      {
        test: /\.png|\.gif|\.jpe?g$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.woff|\.woff2/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.wav|\.mp3|\.ttf|\.eot/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
    ]
  },
  postcss: [
    precss,
    autoprefixer({ browsers: ['last 2 versions'] }),
  ],
  externals: ['react', 'react-dom']
};
