var path = require('path')
var webpack = require('webpack');

module.exports = {
  entry: ['./src/index','./src/style.css', './src/demo.png', './src/index.html'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss'] // style-loader/ css-loader / postcss-loader
    }, {
    test: /\.(png|jpg)$/,
    loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        // 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
    ]}, {
    test: /\.html$/,
    loaders: ['html']
    }]
  }
}
