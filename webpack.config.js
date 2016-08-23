'use strict'
const webpack           = require('webpack');
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR         = path.resolve(__dirname, 'dist');
const APP_DIR           = path.resolve(__dirname, 'src/client/app');

webpack({
    // configuration
}, function(err, stats) {
    if(err)
        return handleFatalError(err);
    var jsonStats = stats.toJson();
    if(jsonStats.errors.length > 0)
        return handleSoftErrors(jsonStats.errors);
    if(jsonStats.warnings.length > 0)
        handleWarnings(jsonStats.warnings);
    successfullyCompiled();
});

const config = {
  entry: `${APP_DIR}/main.js`,
  output: {
    path: BUILD_DIR,
    filename: '/js/[name].js',
  },

  cache: true,
  debug: true,
  devtool: 'eval-source-map',
  stats: {
    colors: true,
    reasons: true
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new ExtractTextPlugin('/css/[name].css', {
      allChunks: false
    })
  ],
  module : {
    loaders: [
      { test: /\.css$/,  loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.(png|gif|jpg)$/,  loader: 'file-loader?name=/images/[name].[ext]' },
      { test: /\.ico$/,  loader: 'file-loader?name=/[name].[ext]' },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100&mimetype=application/font-woff&name=/fonts/[name].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100&mimetype=application/octet-stream&name=/fonts/[name].[ext]'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100&mimetype=image/svg+xml&name=/images/[name].[ext]'
      }
    ]
  },
};


 module.exports = config;
