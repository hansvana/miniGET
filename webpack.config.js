var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './src/script.es6',
  output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'miniGET.min.js',
  },
  module: {
     loaders: [
         {
             test: /\.es6$/,
             loader: 'babel-loader',
             query: {
                 presets: ['es2015']
             }
         }
     ]
  },
  stats: {
     colors: true
  }
};
