const webpack = require('webpack');
const Config = require('./config');
const baseConfig = require('./webpack.base');

module.exports = Object.assign({}, baseConfig, {
  mode: 'development',
  module: {
    rules: [
      ...baseConfig.module.rules,
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: Config.distPath,
    compress: true,
    port: 9000,
    hot:true
  }
})