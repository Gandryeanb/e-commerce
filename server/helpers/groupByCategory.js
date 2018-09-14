const groupByCategory = (itemsArr) => {

    //items Sorting by Id
    for (let i = 0; i < itemsArr.length; i++) {
        for (let j = 0; j < itemsArr.length; j++) {
            if (String(itemsArr[i].categoryId._id) < String(itemsArr[j].categoryId._id)) {
                let tmp = itemsArr[i]
                itemsArr[i] = itemsArr[j]
                itemsArr[j] = tmp
            }
        }
    }
    
    //filter no repeating id
    let filteredCategory = [itemsArr[0].categoryId._id]
    let counter = 0
    
    for (let i = 0; i < itemsArr.length; i++) {
        if (String(itemsArr[i].categoryId._id) !== String(filteredCategory[counter])) {
            filteredCategory.push(itemsArr[i].categoryId._id)
            counter++
        }
    }
    
    //filtered by items id
    let res = []

    for (let i = 0; i < filteredCategory.length; i++) {
        let tmp = []
        for (let j = 0; j < itemsArr.length; j++) {
            if (String(itemsArr[j].categoryId._id) == String(filteredCategory[i])) {
                tmp.push(itemsArr[j])
            }
        }
        res.push(tmp)
    }
    return res
}

module.exports = groupByCategory