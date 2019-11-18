const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, './src'),
  entry: './App.jsx',
  output: {
    path: path.join(__dirname, './build/static/js'),
    filename: 'main.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, './src')
      ],
      exclude: [
        path.resolve(__dirname, '/node_modules/'),
      ],
      use: [
        { loader: 'babel-loader' },
      ],
    }],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};