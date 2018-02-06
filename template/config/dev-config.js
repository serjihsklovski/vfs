const Webpack = require('webpack');

module.exports = env => {
  return {
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
    },
    plugins: [
      new Webpack.NamedModulesPlugin(),
      new Webpack.HotModuleReplacementPlugin(),
    ]
  };
};
