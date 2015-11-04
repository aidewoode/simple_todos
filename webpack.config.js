var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');
module.exports = {
  entry: './app/frontend/main.js',
  output: {
    filename: './app/assets/javascripts/bundle.js'
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },

      { test: /\.(woff|ttf|png)$/, loader: 'url-loader' }
    ]
  },

  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
    }
  },

  plugins: [
    new ExtractTextPlugin('./app/assets/stylesheets/style.css'),
    new webpack.optimize.UglifyJsPlugin()
  ],

  postcss: function() {
    return [autoprefixer, precss, cssnano];
  }
}
