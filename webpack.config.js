const path = require('path');

module.exports = {
  mode: 'development',//build mode
  entry: './source/js/main.js',//entry point
  devtool: 'source-map',//additionally create source-map file
  output: {
    filename: 'main.bundle.js',//name of bundle that webpack needs to create
    path: path.resolve(__dirname, 'build/js'),//path to bundle package. path helps solving problems with different OS's path structures
  },
  module: {
    rules: [
      {
        test: /\.css$/i,//check that module ands with .css
        use: ["style-loader", "css-loader"],//if test is true, use css-loader, than use style-loader
      },
    ],
  }
};