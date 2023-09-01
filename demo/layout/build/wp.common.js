const { resolvePath } = require('./utils');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js','.jsx'],
    alias: {
      '@': resolvePath('src'),
    },
    fallback: {
      util: require.resolve('util/'),
      path: require.resolve('path/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: [resolvePath('node_modules')],
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
    }),
  ],
};
