const bcrypt = require('bcrypt')

const passEncryptor = (target) => {
    const hash = bcrypt.hashSync(String(target), Number(process.env.SALT_ROUNDS))

    return hash
}

module.exports = passEncryptor