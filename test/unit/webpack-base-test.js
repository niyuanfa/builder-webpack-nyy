/* eslint-disable global-require */
const assert = require('assert')

describe('webpack-base test', () => {
  const baseConfig = require('../../lib/webpack.base')
  it('entry', (done) => {
    assert.equal(
      baseConfig.entry.index,
      '/Users/apple/office/learning/builder-webpack/test/smoke/template/src/index/index.js',
    )
    assert.equal(
      baseConfig.entry.search,
      '/Users/apple/office/learning/builder-webpack/test/smoke/template/src/search/index.js',
    )
    done()
  })
})
