const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const itemsPacker = require('../helpers/itemPacker')
const priceCalculator = require('../helpers/priceCalculator')
const Item = require('../models/modelItem')

const transactionSchema = new Schema({
    userId :  { type: Schema.Types.ObjectId, ref: 'User' },
    itemsId : [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    totalPrice : Number
},{
    timestamps : true
});

transactionSchema.pre('save', function(next) {
    
    let packOfSortedItem = itemsPacker(this.itemsId)
    let itemsDiscticnById = packOfSortedItem[1]
    let itemsGroupById = packOfSortedItem[2]
    priceCalculator(this.itemsId, itemsDiscticnById, (err,totalPrice) => {
        if (!err) {
            this.totalPrice = totalPrice[0]
            
            for (let i = 0; i < itemsGroupById.length; i++) {
                
                Item.find({ _id : itemsGroupById[i][0] })
                .then(data => {
                    if (data[0].amount - itemsGroupById[i].length >= 0){
                        return Item.update({ _id : data[0]._id },{ amount : data[0].amount - itemsGroupById[i].length })
                    } else {
                        let err =  new Error('Stock Item is empty') 
                        next(err);          
                    }
                })
                .then(result => {
                    next();
                })
                .catch(err => {
                    err =  new Error('Error when updating item amount') 
                    next(err)
                })
            }

        } else {
            let err =  new Error('Error when calculate total price') 
            next(err);
        }  
    })
});
const Transaction = mongoose.model('Transaction', transactionSchema);


module.exports = Transaction