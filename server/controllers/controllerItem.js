const Item = require('../models/modelItem')
const groupByCategory = require('../helpers/groupByCategory')
class ControllerItem {

    static findAll(req,res) {
        Item.find()
        .populate('categoryId','name')
        .exec((err,result) => {
            if (!err) {
                res.status(200).json({
                    message: `data success`,
                    data : result
                })
            }
        })
    }

    static findAllGroupItem(req,res){
        
        Item.find()
        .populate(`categoryId`,'name')
        .then(datas => {

            let sorted = groupByCategory(datas)
            
            res.status(200).json({
                data : sorted
            })
        })
        .catch(err => {
            res.status(500).json({
                message : 'error when finding item data',
                err : err.message
            })
        })
    }

    static findAllItemByCategory(req,res) {

        Item.find({
            categoryId : req.params.id
        }) 
        .then(datas => {
            res.status(200).json({
                data : datas
            })
        })
        .catch(err => {
            res.status(500).json({
                message : 'error when finding item data',
                err : err.message
            })
        })
    }

    static findAllbyName(req,res) {

        Item.find({

        })

    }

    static addItem(req,res) {
        
        let newItem = {
            name : req.body.name,
            price : req.body.price,
            amount : req.body.amount,
            description : req.body.description,
            categoryId : req.body.categoryId
        }

        let item = new Item(newItem)

        item.save()
        .then(data => {
            res.status(201).json({
                message : `creating new item is complete`
            })
        })
        .catch(err => {
            res.status(500).json({
                message : `error when creating new category`,
                err : err.message
            })
        })

    }

    static updateItem(req,res) {

        Item.updateOne({ _id : req.params.id }, req.body, function(err, result) {
            if (!err) {

                res.status(200).json({
                    message : `updating data item success`,
                    dataUpdated : req.body
                })
            } else {
                res.status(500).json({
                    message : `updating data item failed`,
                    err : err.message
                })
            }
        });
    }

    static removeItem(req,res) {

        Item.deleteOne({ _id : req.params.id }, function (err) {
            if (!err) {
                res.status(200).json({
                    message : `deleting Item with Id ${req.params.id} success`
                })
            } else {
                res.status(500).json({
                    message : `failed when deleting item`
                })
            }
        });
    }

}

module.exports = ControllerItem