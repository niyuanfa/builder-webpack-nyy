const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const projectRoot = process.cwd()
const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugins = []
  const entryFiles = glob.sync(path.join(projectRoot, './src/*/index.js'))
  Object.keys(entryFiles).map((index) => {
    const entryFile = entryFiles[index]
    const match = entryFile.match(/src\/(.*)\/index\.js/)
    const pageName = match && match[1]
    entry[pageName] = entryFile
    return htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(projectRoot, `./src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false,
        },
      }),
    )
  })
  return { entry, htmlWebpackPlugins }
  // console.log(entryFile)
}
const { entry, htmlWebpackPlugins } = setMPA()
// 解析文件 命令行log错误处理 提取css文件 清除dist文件
module.exports = {
  entry,
  stats: 'errors-only',
  output: {
    path: path.join(projectRoot, './dist'),
    filename: '[name].[chunkhash:8].js',
  },
  module: {
    rules: [
      // { test: '/.txt$/', use: 'raw-loader' },
      { test: /.js$/, use: 'babel-loader' },
      {
        test: /.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // 选项
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75, // 1rem=75px
              remPrecision: 8,
            },
          },
        ],
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        // use: [{ loader: 'url-loader', options: { limit: 10240 } }],
        use: [
          { loader: 'file-loader', options: { name: '[name]_[hash:8].[ext]' } },
        ],
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: [
          { loader: 'file-loader', options: { name: '[name]_[hash:8].[ext]' } },
        ],
        // use: [{ loader: 'url-loader', options: { limit: 10240 } }],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name]_[contenthash:8].css' }),
    new CleanWebpackPlugin(),
    function () {
      this.hooks.done.tap('done', (stats) => {
        if (
          stats.compilation.errors &&
          stats.compilation.errors.length &&
          process.argv.indexOf('--watch') === -1
        ) {
          console.log('build error')
          process.exit(1)
        }
      })
    },
  ].concat(htmlWebpackPlugins),
}
