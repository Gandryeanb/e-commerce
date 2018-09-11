const route = require('express').Router()
const ControllerCategory = require('../controllers/controllerCategory')

route.post('/',ControllerCategory.createCategory)
route.delete('/',ControllerCategory.removeCategory)

module.exports = route