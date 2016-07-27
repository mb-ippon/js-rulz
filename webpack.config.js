var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'app.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
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
  postcss: function() {
    return [precss, autoprefixer];
  },
  devtool: 'inline-source-map'
};
