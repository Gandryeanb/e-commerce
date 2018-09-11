const route = require('express').Router()
const ControllerTransaction = require('../controllers/controllerTransaction')

route.post('/',ControllerTransaction.createTransaction)
route.get('/:id',ControllerTransaction.findAllTransaction)

module.exports = route