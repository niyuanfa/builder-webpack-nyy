const path = require('path')
const webpack = require('webpack')
const rimraf = require('rimraf')
const Mocha = require('mocha')

const mocha = new Mocha({
  timeout: '10000ms',
})
process.chdir(path.join(__dirname, 'template'))
rimraf('./dist', () => {
  // eslint-disable-next-line global-require
  const prodConfig = require('../../lib/webpack.prod')
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.error(err)
      process.exit(2)
    }
    // console.log(
    //   stats.toString({ color: true, modules: false, children: false }),
    // )
    mocha.addFile(path.join(__dirname, './html-test.js'))
    mocha.addFile(path.join(__dirname, './css-js-test.js'))
    mocha.run()
  })
})
