const Item = require('../models/modelItem')

const priceCalculator = (itemsId, disticntId,cb) => {
    
    Item.find({
        _id : disticntId
    })
    .then(datas => {
;
        let totalPrice = 0

        for (let i = 0; i < itemsId.length; i ++) {
            for (let j = 0; j < datas.length; j++) {
                if (String(itemsId[i]) == String(datas[j]._id)) {
                    totalPrice += Number(datas[j].price)
                }
            }
        }
        
        cb(null,[totalPrice])
    })
    .catch(err => {
        cb(err,null)
    })
}

module.exports = priceCalculator