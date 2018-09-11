const bcrypt = require('bcrypt')

const isPassMatch = (encriptedPass,pass) => {

    if (bcrypt.compareSync(pass, encriptedPass)) {
        return true
    }
    return false
}

module.exports = isPassMatch