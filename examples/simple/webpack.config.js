var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'build');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var initial = require('postcss-initial');
var autoreset = require('postcss-autoreset');

var config = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8000/build/'
  },
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
        exclude: [nodeModulesPath]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ]
  },
  resolve: {
    modulesDirectories: [path.join(__dirname, 'node_modules')],
    extensions: ['', '.js', '.jsx', '.scss']
  },
  devServer: {
    host: 'localhost',
    port: '8000',
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new ExtractTextPlugin('example.css', {allChunks: true})
  ],
  postcss: function () {
     return [
       precss,
       initial,
       autoreset,
       autoprefixer({ browsers: ['last 2 versions'] }),
     ];
  }
};

module.exports = config;
