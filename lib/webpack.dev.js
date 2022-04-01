const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const baseConfig = require('./webpack.base')
// 热更新与开启sourcemap
const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    stats: 'errors-only',
    hot: true,
  },
}
module.exports = merge(baseConfig, devConfig)
