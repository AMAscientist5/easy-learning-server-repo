const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const allTopics = require('./data/all-topics.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })