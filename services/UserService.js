const User = require('../models/User');


module.exports = {
    findAll: () => User.findAll(),
    findUser:(no) => {
        return User.findOne({
            where: {
                no: no
            }
        })
    },
    findByPasswordAndEmail: (email, password) => User.findOne({
        where: {
            email: email,
            password: password
        }
    })
}
