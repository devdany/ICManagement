const Admin = require('../models/Admin');


module.exports = {
    findAll: () => Admin.findAll(),
    findUser:(no) => {
        return Admin.findOne({
            where: {
                no: no
            }
        })
    },
    findByPasswordAndAdminId: (adminId, password) => Admin.findOne({
        where: {
            adminId: adminId,
            password: password
        }
    })
}
