module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
        useBuiltIns: 'usage', // 将会按需引入babel/polyfill。
        corejs: 3,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [],
};
