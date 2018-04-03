const express = require('express')
const app = express()
const PORT = 3000

app
  .get('/', (req, res) => {
    res.send('hello world')
  })
  .listen(PORT, () => {
    console.log('listen on', PORT)
  })
