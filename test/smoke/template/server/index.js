if (typeof self === 'undefined') {
  global.self = {}
}

const express = require('express')
const port = process.env.PORT || 3000
const { renderToString } = require('react-dom/server')
const SSR = require('../dist/search-server')
function server(port) {
  const app = new express()
  app.use(express.static('dist'))
  app.get('/search', (req, res) => {
    const html = renderBackUp(renderToString(SSR))
    res.status('200').send(html)
  })
  app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
  })
}
server(port)
function renderBackUp(str) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${str}</div>
  </body>
  </html>`
}
