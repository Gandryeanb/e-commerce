const itemsPacker = (itemsArr) => {
    
    //items Sorting by Id
    for (let i = 0; i < itemsArr.length; i++) {
        for (let j = 0; j < itemsArr.length; j++) {
            if (itemsArr[i] < itemsArr[j]) {
                let tmp = itemsArr[i]
                itemsArr[i] = itemsArr[j]
                itemsArr[j] = tmp
            }
        }
    }
    
    //filter no repeating id
    let filteredId = [itemsArr[0]]
    let counter = 0
    
    for (let i = 0; i < itemsArr.length; i++) {
        if (String(itemsArr[i]) !== String(filteredId[counter])) {
            filteredId.push(itemsArr[i])
            counter++
        }
    }
    
    //filtered by items id
    let res = []

    for (let i = 0; i < filteredId.length; i++) {
        let tmp = []
        for (let j = 0; j < itemsArr.length; j++) {
            if (String(itemsArr[j]) == String(filteredId[i])) {
                tmp.push(itemsArr[j])
            }
        }
        res.push(tmp)
    }
    
    return [itemsArr,filteredId,res]

}

module.exports = itemsPacker