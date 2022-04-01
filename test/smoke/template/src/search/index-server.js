const React = require('react')
const largeNumberNyy = require('large-number-nyy')
const address = require('./assets/address.png').default
require('./serach.less')
require('../../common')
// const isImport = false
// async function getComponent() {
//   const { default: _ } = await import('lodash')
//   console.log('lodash:', _.join(['Hello', 'webpack'], ' '))
// }
console.log(address)
// getComponent()
// document.write('search page')

class Search extends React.Component {
  render() {
    // debugger
    const result = largeNumberNyy('999', '1')
    return (
      <div>
        <h1>{result}</h1>
        <p className="search-text">search text 124</p>
        <img src={address}></img>
      </div>
    )
  }
}

module.exports = <Search />
