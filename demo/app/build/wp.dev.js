const baseConfig = require('./wp.common.js');

module.exports = {
  ...baseConfig,
  mode: 'development',
  devtool: 'eval-source-map',

  devServer: {
    client: { overlay: false },
    hot: true,
    open: true,
    historyApiFallback: true,
   
  },
  plugins: [
    ...baseConfig.plugins,
  ],
};
