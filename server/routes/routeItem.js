const route = require('express').Router()
const ControllerItem = require('../controllers/controllerItem')

route.get('/', ControllerItem.findAllItem)
route.post('/', ControllerItem.addItem)
route.put('/:id', ControllerItem.updateItem)
route.delete('/:id', ControllerItem.removeItem)

module.exports = route