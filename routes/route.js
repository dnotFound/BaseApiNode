const route = require('express').Router()
const requestLogs = require('./middlewares/requestLogs')

route.use(requestLogs)

route.get('/', (req, res) => {
    res.status(200).send({message: 'This is a GET route'})
})

route.post('/', (req, res) => {
    res.status(200).send({message: 'This is a POST route'})
})

route.put('/', (req, res) => {
    res.status(200).send({message: 'This is a PUT route'})
})

route.patch('/', (req, res) => {
    res.status(200).send({message: 'This is a PATCH route'})
})

route.delete('/', (req, res) => {
    res.status(200).send({message: 'This is a DELETE route'})
})

module.exports = route