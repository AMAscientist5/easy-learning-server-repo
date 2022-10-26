const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const allTopics = require('./data/all-topics.json')
const topics = require('./data/topics.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/all-topics', (req, res) => {
    res.send(allTopics)
});

app.get('/all-topics/:id', (req, res) => {
    const id = req.params.id;
        const selectedAllTopics = topics.find( n => n.allTopics_id === id)
        res.send(selectedAllTopics)
    })

app.get('/topics', (req, res) =>{
    res.send(topics);
});

app.get('/topics/:id', (req, res) => {
    const id = req.params.id;
        const selectedTopics = topics.find( n => n._id === id)
        res.send(selectedTopics)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})