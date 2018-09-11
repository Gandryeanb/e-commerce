const User = require('../models/modelUser')
const jwt = require('jsonwebtoken')
const passEncryptor = require('../helpers/passEncryptor')
const isPassMatch = require('../helpers/isPassMatch')

class ControllerUser {

    static regist(req,res) {

        let newUser = {
            fname : req.body.fname,
            lname : req.body.lname,
            email : req.body.email,
            password : passEncryptor(req.body.password)
        }

        let user = new User(newUser)

        user.save()
            .then(data => {
                res.status(201).json({
                    message : `creating User Success`,
                    createdData : newUser
                })
            })
            .catch(err => {
                res.status(500).json({
                    message : `creating User failed`,
                    err : err.message
                })
            })
    }

    static login(req,res) {

        User.find({
            email : req.body.email,
        })
        .then(data => {

            if (data.length !== 0) {
                
                if(isPassMatch(data[0].password, req.body.password)) {
    
                    const token  = jwt.sign({ 
                        _id : data[0]._id,
                        fname : data[0].fname,
                        email : data[0].email
                    }, String(process.env.JWT_SECRET));
    
                    res.status(200).json({
                        message : `login success`,
                        token : token
                    })
                } else {
                    
                    res.status(500).json({
                        message : `wrong email or password`
                    })
                }
            } else {
                
                res.status(403).json({
                    message : `user not found`
                })
            }
        })
        .catch(err => {

            res.status(500).json({
                message : `error when searching user`,
                err : err.message
            })
        })
    }

    static updateData(req, res) {

        User.updateOne({ _id : req.decoded._id }, req.body, function(err, result) {
            if (!err) {

                res.status(200).json({
                    message : `updating data success`,
                    dataUpdated : req.body
                })
            } else {
                res.status(500).json({
                    message : `updating data failed`,
                    err : err.message
                })
            }
        });
    }

    static removeAccount(req,res) {

        User.deleteOne({ _id : req.decoded._id }, function (err) {
            if (!err) {
                res.status(200).json({
                    message : `deleting user account with Id ${req.decoded._id} success`
                })
            } else {
                res.status(500).json({
                    message : `failed when deleting account`
                })
            }
        });
    }
}

module.exports = ControllerUser