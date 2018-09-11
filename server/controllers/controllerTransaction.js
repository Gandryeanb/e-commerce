const Transaction = require('../models/modelTransaction')

class ControllerTransaction {

    static createTransaction(req, res) {
        
        let newTransaction = {
            userId : req.body.userId,
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
            userId : req.params.id
        })
        .populate('itemsId')
        .then(datas => {
            res.status(200).json({
                data : datas
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