const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../package.json');

const config = require('./wp.common.js');

module.exports = {
  ...config,
  mode: 'production',
  plugins: [
    ...config.plugins,
    new ModuleFederationPlugin({
      name: 'Remote',
      filename: 'remote.js',
      exposes: {
        './Layout': './src/Layout/index.jsx',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies['react'],
        },
      },
    }),
  ],
};
