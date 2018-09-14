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
        for (let i = 0; i < itemsGroupById.length; i++) {
            
            Item.find({
                _id : itemsDiscticnById[i]
            })
            .then(data => {
                
                Item.update({ _id : data[0]._id}, { amount : data[0].amount - itemsGroupById[i].length}, (err,res) => {
                    if (!err) {
                        // console.log('success',res);
                    } else {
                        console.log(err);
                    }
                })
            })
            .catch(err => {
                console.log('error');
            })
        }
        next()
    })
});
const Transaction = mongoose.model('Transaction', transactionSchema);


module.exports = Transaction