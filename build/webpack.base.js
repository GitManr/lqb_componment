const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Config = require('./config');

const webpack_base = {
    name: 'client',
    target: 'web',
    resolve: {
      extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
      modules: [
        Config.srcPath,
        Config.nodeModulesPath
      ]
    },
    module: {},
    // mode: 'production'
}

// webpack_base.entry = ['babel-polyfill', Config.srcPath];

webpack_base.output = {
  path: path.resolve(__dirname, Config.distPath),
  filename: "[name].[hash].bundle.js",
  publicPath: '',
}

webpack_base.module.rules = [
  {
    test: /(\.jsx|\.js)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  }
]

webpack_base.plugins = [
  new HtmlWebpackPlugin({
    template:Config.templatePath
  }),
]


module.exports = webpack_base;