/* eslint-disable no-undef */
const glob = require('glob-all')

describe('Checking genertated css js files', () => {
  it('should genertate css js file', (done) => {
    console.log(
      '1:',
      glob.sync([
        './dist/index.*.js',
        './dist/index_*.css',
        './dist/search.*.js',
        './dist/search_*.css',
      ]),
    )
    const files = glob.sync([
      './dist/index.*.js',
      './dist/index_*.css',
      './dist/search.*.js',
      './dist/search_*.css',
    ])
    if (files.length > 0) {
      return done()
    }
    throw new Error('no css js file genertate')
  })
})
