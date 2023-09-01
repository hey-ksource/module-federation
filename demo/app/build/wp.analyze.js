const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('./wp.prod.js');

module.exports = {
  ...config,
  plugins: [...config.plugins, new BundleAnalyzerPlugin()],
};
