const Transaction = require('../models/modelTransaction')

class ControllerTransaction {

    static createTransaction(req, res) {

            let newTransaction = {
                userId : req.decoded._id,
                itemsId : req.body.itemId,
            }
            
        let transaction = new Transaction(newTransaction)
        
        transaction.save()
        .then(data => {

            res.status(200).json({
                messge : `creating transaction success`,
                data : newTransaction
            })
        })
        .catch(err => {
            res.status(500).json({
                message : `creating transaction failed`,
                err : err.message
            })
        })
    }

    static findAllTransaction(req,res) {
        
        Transaction.find({
            userId : req.decoded._id
        })
        .populate("itemsId")
        .then(datas => {

            let result = []

            for (let i = 0; i < datas.length; i++) {
                let obj = {
                    _id : datas[i]._id,
                    items : [],
                    totalPrice : 0,
                    date : {
                        year : datas[i].createdAt.getFullYear(),
                        month : datas[i].createdAt.getMonth() + 1,
                        date : datas[i].createdAt.getDate(),
                    }
                }
                let tmp = {
                    itemName : '',
                    amount : 0,
                    price : 0
                }
                for (let j = 0; j < datas[i].itemsId.length; j++) {
                    
                    if (tmp.itemName === '') {
                        tmp.itemName = datas[i].itemsId[j].name
                        tmp.amount = 1
                        tmp.price =datas[i].itemsId[j].price
                    } else if (datas[i].itemsId[j].name === datas[i].itemsId[j-1].name) {
                        tmp.amount += 1
                    } else {
                        obj.items.push(tmp)
                        tmp = {
                            itemName : '',
                            amount : 0,
                            price : 0
                        }
                        tmp.itemName = datas[i].itemsId[j].name
                        tmp.amount = 1
                        tmp.price = datas[i].itemsId[j].price
                    }
                    obj.totalPrice += Number(datas[i].itemsId[j].price)
                }                
                obj.items.push(tmp)
                result.push(obj)
            }

            res.status(200).json({
                data : result
            }) 
        })
        .catch(err => {
            res.status(500).json({
                message : `error when find transaction data`,
                err : err.message
            })
        })
    }
}

module.exports = ControllerTransaction