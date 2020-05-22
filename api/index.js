const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send([
    {
      content: '米を買う',
      done: false
    },
    {
      content: '卵も買う',
      done: true
    },
    {
      content: '肉も買う',
      done: false
    }
  ])
})

module.exports = {
  path: '/api/todos',
  handler: app
}
