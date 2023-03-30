const path = require('path');

module.exports = {
  entry: './source/js/main.js',//entry point
  devtool: 'source-map',//additionally create source-map file
  output: {
    filename: 'main.bundle.js',//name of bundle that webpack needs to create
    path: path.resolve(__dirname, 'build/js'),//path to bundle
  }
};