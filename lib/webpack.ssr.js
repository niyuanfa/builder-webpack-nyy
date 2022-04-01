const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

// 代码压缩 文件指纹    tree shaking   scope hoisting 速度优化 体积优化
const ssrConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['ignore-loader'],
      },
      {
        test: /\.less$/,
        use: ['ignore-loader'],
      },
    ],
  },
}

module.exports = merge(baseConfig, ssrConfig)
