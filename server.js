const express = require('express')
const routerProduct = require('./routes/products')
const bodyparser = require('body-parser')
const app = express()
const port = 9898


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use(bodyparser.json())
app.use('/products', routerProduct)

app.get('/', (req, res) => 
                res.send('Hello World!'))
app.listen(port, () => 
            console.log(` app listening on 9898 !`))