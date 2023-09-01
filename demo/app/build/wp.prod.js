'use strict';
const baseConfig = require('./wp.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  ...baseConfig,
  mode: 'production',
  plugins: [...baseConfig.plugins, new CleanWebpackPlugin()],
};
