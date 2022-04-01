/* eslint-disable no-undef */
const glob = require('glob-all')

console.log('glob:', glob.sync("['./dist/index.html', './dist/search.html']"))
describe('Checking genertated html files', () => {
  it('should genertate html file', (done) => {
    const files = glob.sync(['./dist/index.html', './dist/search.html'])
    if (files.length > 0) {
      return done()
    }
    throw new Error('no HTML file genertate')
  })
})
