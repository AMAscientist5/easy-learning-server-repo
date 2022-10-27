const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000




app.use(cors())
const categories = require('./data/all-topics.json')
const topics = require('./data/topics.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
        const selectedcategories = topics.find( n => n.allTopics_id === id)
        res.send(selectedcategories)
    })

app.get('/topic', (req, res) =>{
    res.send(topics);
});

app.get('/topic/:id', (req, res) => {
    const id = req.params.id;
        const selectedTopics = topics.find( n => n._id === id)
        res.send(selectedTopics)
})


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })