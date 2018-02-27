const Path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = Path.resolve(__dirname, '../');

module.exports = env => {
  const extractBulma = new ExtractTextWebpackPlugin({
    filename: 'bulma.extracted.css',
    allChunks: true,
  });

  return {
    entry: {
      app: Path.resolve(ROOT_PATH, './src/index.js'),
    },
    resolve: {
      extensions: ['*', '.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      },
    },
    output: {
      path: Path.resolve(ROOT_PATH, './dist'),
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.vue$/i,
          loader: 'vue-loader',
        },
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.sass$/i,
          exclude: /node_modules/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader?indentedSyntax',
          ],
        },
        {
          test: /\.scss$/i,
          exclude: /node_modules/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/i,
          use: [
            'vue-style-loader',
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
        // vendors
        {
          test: /src\/assets\/lib\/bulma\.scss$/i,
          use: extractBulma.extract({
            use: [
              'css-loader',
              'sass-loader',
            ],
            fallback: 'style-loader',
          }),
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
