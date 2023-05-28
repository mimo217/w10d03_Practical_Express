
const express = require('express')
const app = express()

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello, stranger</h1>')
})

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hola ${name}! It's so good to see you!`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tipAmount = (total * tipPercentage) / 100
    res.send(`Your total tip amount is $${tipAmount}`)
})


app.listen(3000, () => {
    console.log('Yes, I am listening on port 3000')
})