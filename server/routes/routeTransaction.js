const route = require('express').Router()
const ControllerTransaction = require('../controllers/controllerTransaction')
const isLogin = require('../middlewares/isLogin')

route.post('/',isLogin,ControllerTransaction.createTransaction)
route.get('/',isLogin,ControllerTransaction.findAllTransaction)

module.exports = route