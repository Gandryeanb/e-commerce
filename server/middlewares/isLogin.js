const User = require('../models/modelUser')
const jwt = require('jsonwebtoken')

const isLogin = (req,res,next) => {

    let token = req.headers.token
    
    if (token) {

        let decoded = jwt.verify(token, String(process.env.JWT_SECRET))
        
        User.find({
            email : decoded.email    
        })
        .then(data => {
            
            if (data.length !== 0) {

                req.decoded = decoded
                next()

            } else {
                res. status(403).json({
                    message : `user not found`
                })
            }
        })
        .catch(err => {
            status(500).json({
                message : `error when find who is login`,
                err : err.message
            })
        })

    } else {
        res.status(404).json({
            message : `you need to login first`
        })
    }

}

module.exports = isLogin