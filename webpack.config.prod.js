var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'app.js'),
    path.join(__dirname, 'src', 'vendor.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.[chunkhash].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Js-rulz',
      template: 'src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new WebpackMd5Hash(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  postcss: function() {
    return [precss, autoprefixer];
  }
};
