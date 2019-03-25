const webpack = require('webpack');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.base');

module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  module: {
    rules: [
      ...baseConfig.module.rules,
    ]
  },
  
  plugins:[
    ...baseConfig.plugins,
    new BundleAnalyzerPlugin()
  ]
})