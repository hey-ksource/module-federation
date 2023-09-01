'use strict';
const tool = require('./tool');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { resolvePath, getArg } = tool;
const isIndependent = getArg('isIndependent') === 'true'

module.exports = {
  entry: {
    index: resolvePath('src/bootstrap.js'),
  },
  output: {
    publicPath: '/',
    path: resolvePath('dist'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': resolvePath('src'),
      'Remote/Layout': isIndependent ? false : 'Remote/Layout',
    },
    fallback: {
      util: require.resolve('util'),
      path: require.resolve('path-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'babel-loader',
        exclude: [resolvePath('node_modules')],
      },
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
    }),
    new HtmlWebpackPlugin({
      template: resolvePath('public/index.html'),
    }),
    new webpack.DefinePlugin({
      __isIndependent: isIndependent
    }),
    !isIndependent && new ModuleFederationPlugin({
      remotes: {
        Remote: 'Remote@http://localhost:9000/remote.js',
      },
      shared: {
        react: {
          singleton: true,
        },
        // 'react-dom': {
        //   singleton: true,
        // },
        // 'react-router-dom': {
        //   singleton: true,
        // },
        // antd: {
        //   singleton: true,
        // },
      },
    }),
  ].filter(i => i)
};
