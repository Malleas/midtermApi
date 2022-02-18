const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 8084;

app.get('/', (_req, res) => res.send("Midterm Express API"))
app.listen(port)
app.use(bodyParser.json())

app.post('/calc', (_req, res) => {
    let num1 = _req.body.num1
    let num2 = _req.body.num2
    let operand = _req.body.operand
    let results = 0
    switch (operand) {
        case '+' :
            results = num1 + num2
            res.status(200).json({Results: results})
            break;
        case '-' :
            results = num1 - num2
            res.status(200).json({Results: results})
            break;
        case '*' :
            results = num1 * num2
            res.status(200).json({Results: results})
            break;
        case '/' :
            if(num1 || num2 === 0){
                res.status(200).json({error: "Can not divide by 0"})
            }else {
                results = num1 / num2
                res.status(200).json({Results: results})
            }
            break;
        default:
            break;
    }
})

app.get('/about', (_req, res) =>{
    res.status(200).json({About: "Welcome to my Calculator app for CST 391 Midterm", Date: new Date() })
})

