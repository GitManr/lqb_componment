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
        'node_modules',
      ]
    },
    module: {},
}

webpack_base.entry = Config.srcPath;

webpack_base.output = {
    path:Config.distPath,
    publicPath: './',
    // filename: 'js/bundle.js',
    chunkFilename: 'js/[chunkhash].js'
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
    use: ['style-loader', 'css-loader', 'postcss-loader', ],
    exclude: /node_modules/,
  }
]

webpack_base.plugins = [
  new HtmlWebpackPlugin({
    template:Config.templatePath
  }),
  // require('autoprefixer'),
]


module.exports = webpack_base;