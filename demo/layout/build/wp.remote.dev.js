const config = require('./wp.remote.js');

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    client: { overlay: false },
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type',
    },
  },
  plugins: [
    ...config.plugins,
  ],
};
