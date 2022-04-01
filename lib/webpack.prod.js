const { merge } = require('webpack-merge')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const baseConfig = require('./webpack.base')
// 代码压缩 文件指纹    tree shaking   scope hoisting 速度优化 体积优化
const prodConfig = {
  mode: 'development',
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 0,
      minRemainingSize: 0,
      minChunks: 2,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        common: {
          // test: /(react|react-dom)/,
          // name: 'vendors',
          // chunks: 'all',
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          minSize: 0,
        },
      },
    },
  },
}

module.exports = merge(baseConfig, prodConfig)
