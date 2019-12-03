const express = require('express')
const db = require('../db')
const utils =require('../utils')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select id, title, description, prize from products`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResults(error, data))
    })
})

router.post('/', (request, response) => {
    const {title, description, prize} = request.body
    const connection = db.connect()
    const statement = `insert into products (title, description, prize) values ('${title}','${description}',${prize})`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResults(error, data))
    })
})

module.exports = router