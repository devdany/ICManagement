const Vacation = require('../models/Vacation');
const {dateToSave} = require('../libs/DataFormat');

module.exports = {
    findAll: () => Vacation.findAll(),
    findVacationByUser: (no) => Vacation.findAll({
        where: {
            user_id: no
        }
    }),
    createVacation: (vacation) => {
        Vacation.create({
            ...vacation,
            isDelete: false,
            create_dt: dateToSave(new Date())
        })
    }
}
