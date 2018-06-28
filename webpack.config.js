const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path:  path.resolve(__dirname, './dist/'),
    filename: 'ddm.selecty.js',
    libraryTarget: 'umd'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      'node_modules',
    ],
    extensions: ['.js', '.scss', '.css', '.jsx'],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: false,
        parallel: 4,
        sourceMap: false,
        extractComments: true,
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/'], {
      root: __dirname,
      verbose: true,
      dry: false,
      watch: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    }),
    new MiniCssExtractPlugin({
      filename: "ddm.selecty.css",
      allChunks: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, './src/'),
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
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
        ],
        include: [
          path.resolve(__dirname, './src'),
        ]
      },
    ],
  },
  externals: ['react', 'react-dom'],
  stats: {
    children: false,
    chunks: false,
    assets: false,
    warnings: false,
  },
};
