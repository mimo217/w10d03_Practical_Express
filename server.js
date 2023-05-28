const express = require('express')
const app = express()
const port = 3000;

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello, stranger</h1>')
})

//dynamic route
app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hola ${name}! It's so good to see you!`)
})

app.listen(port, () => {
    console.log('Yes, I am listening on port 3000')
})