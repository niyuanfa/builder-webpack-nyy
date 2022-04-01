import React from 'react'
import ReactDom from 'react-dom'
import './serach.less'
import largeNumberNyy from 'large-number-nyy'
import address from './assets/address.png'
import '../../common'

// const isImport = false
// async function getComponent() {
//   const { default: _ } = await import('lodash')
//   console.log('lodash:', _.join(['Hello', 'webpack'], ' '))
// }

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
ReactDom.render(<Search />, document.getElementById('root'))
