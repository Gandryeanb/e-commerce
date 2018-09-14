const route = require('express').Router()
const ControllerItem = require('../controllers/controllerItem')

route.get('/',ControllerItem.findAll)
route.get('/category', ControllerItem.findAllGroupItem)
route.post('/', ControllerItem.addItem)
route.put('/:id', ControllerItem.updateItem)
route.delete('/:id', ControllerItem.removeItem)
route.get('/category/:id', ControllerItem.findAllItemByCategory)
route.get('/search/:name',ControllerItem.searchKeyUp)

module.exports = route