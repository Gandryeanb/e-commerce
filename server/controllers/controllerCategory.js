const Category = require('../models/modelCategory')

class ControllerCategory {

    static createCategory(req,res) {

        let newCategory = {
            name : req.body.name
        }

        let category = new Category(newCategory)

        category.save()
        .then(data => {
            res.status(201).json({
                message : `creating new category is complete`
            })
        })
        .catch(err => {
            res.status(500).json({
                message : `error when creating new category`,
                err : err.message
            })
        })
    }

    static removeCategory(req,res) {
        
        Category.deleteOne({ name : req.body.name }, function (err) {
            if (!err) {
                res.status(200).json({
                    message : `deleting user account with name ${req.body.name} success`
                })
            } else {
                res.status(500).json({
                    message : `failed when deleting account`
                })
            }
        });
    }

}

module.exports = ControllerCategory