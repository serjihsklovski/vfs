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
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.sass$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader?indentedSyntax',
          ],
        },
        {
          test: /\.scss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          loader: 'file-loader',
        },
        {
          test: /\.(woff2?|eot|[to]tf)$/i,
          loader: 'file-loader',
        },
      ],
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
