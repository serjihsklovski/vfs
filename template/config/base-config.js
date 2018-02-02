const Path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: Path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new CleanWebpackPlugin([
      'dist',
    ], {
      root: Path.resolve(__dirname, '../'),
    }),
    new HtmlWebpackPlugin({
      title: '{{ name }}',
      template: './src/index.template.html',
    }),
  ],
};
