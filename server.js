'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000
const bears = [
  { id: 1, name: 'Pooh', weight: 100 },
  { id: 2, name: 'Winnie', weight: 200 }
]

app
  .get('/api/bears', (req, res) => {
    res.send(bears)
  })
  .post('/api/bears', (res, res) => {
    const bear = {}
    bear.id = 3
    bear.name = 'FooBear'
    bear.weight = 88
    bear.push(bear)
  })

app
  .listen(PORT, () => {
    console.log('listen on', PORT)
  })
