const Path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT_PATH = Path.resolve(__dirname, '../');

module.exports = env => {
  return {
    entry: {
      app: Path.resolve(ROOT_PATH, './src/index.js'),
    },
    output: {
      path: Path.resolve(ROOT_PATH, './dist'),
      filename: '[name].bundle.js',
    },
    plugins: [
      new CleanWebpackPlugin([
        './dist',
      ], {
        root: ROOT_PATH,
      }),
      new HtmlWebpackPlugin({
        template: Path.resolve(ROOT_PATH, './src/index.template.html'),
      }),
    ],
    devServer: {
      contentBase: './dist',
      open: true,
    },
  };
};
