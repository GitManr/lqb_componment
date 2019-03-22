const path = require('path');

const getPath = pathStr => path.resolve(__dirname, pathStr);

module.exports = {
  srcPath: getPath('../src'),
  distPath: getPath('../dist'),
  templatePath: getPath('../index.html'),
  nodeModulesPath: getPath('../node_modules')
};
