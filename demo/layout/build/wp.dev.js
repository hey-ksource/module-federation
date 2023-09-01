const { resolvePath } = require('./utils');
const webpack = require('webpack');
const config = require('./wp.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'eval-source-map',
  entry: resolvePath('dev/index.jsx'),
  devServer: {
    client: { overlay: false },
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: resolvePath('dev/index.html'),
    }),
  ],
};
