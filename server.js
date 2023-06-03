
const express = require('express')
const app = express()

//Greetings
app.get('/greeting', (req, res) => {
    res.send('<h1>Hello, stranger</h1>')
})

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hola ${name}! It's so good to see you!`)
})

//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tipAmount = (total * tipPercentage) / 100
    res.send(`Your total tip amount is $${tipAmount}`)
})

app.get('/magic/:magic8Question', (req, res) => {
    const magic8Question = req.params.magic8Question
    const magic8Answer = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ]
    const randomMagic8Answer = magic8Answer[Math.floor(Math.random() * magic8Answer.length)];
    res.send(`<h1>Question: ${magic8Question}</h1><br><h1>Response: ${randomMagic8Answer}</h1>`)
})

// Fibonnaci
app.get('/fibonnaci/:number', (req, res) => {
    const number = parseInt(req.params.number)
    const fibonacci = n => {
        let num1 = 0;
        let num2 = 1;

        while (num2 <= n) {
            let tempValue = num2;
            num2 = num1 + num2
            num1 = tempValue;
        }
        return num2 === n;
    };

    if (fibonacci(number)) {
        res.send('Very good. It is Fibonacci.');
    } else {
        res.send('I can tell this is not a fibonacci number')
    }
})

app.listen(3000, () => {
    console.log('Yes, I am listening on port 3000')
})
