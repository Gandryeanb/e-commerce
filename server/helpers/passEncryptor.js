const bcrypt = require('bcrypt')

const passEncryptor = (pass) => {
    const hash = bcrypt.hashSync(pass, Number(process.env.SALT_ROUNDS))

    return hash
}

module.exports = passEncryptor