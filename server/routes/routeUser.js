const route = require('express').Router()
const isLogin = require('../middlewares/isLogin')
const ControllerUser = require('../controllers/controllerUser')

route.post('/register',ControllerUser.regist)
route.post('/login',ControllerUser.login)
route.put('/',isLogin,ControllerUser.updateData)
route.delete('/',isLogin,ControllerUser.removeAccount)

module.exports = route