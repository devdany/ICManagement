const express = require('express');
const router = express.Router();
const {SuccessTemplate} = require('../templates');
const {isLogin} = require('../middlewares/UserMiddleware');
const vacationService = require('../services/VacationService');

router.get('/', isLogin, async (req, res, next) => {
    const loginUser = req.loginUser;
    const [vacations, myVacations] = await Promise.all(
        [
            vacationService.findAll(),
            vacationService.findVacationByUser(loginUser.no)
        ]
    )

    const myVacationStatus = {
        total: loginUser.vacations,
        used: myVacations.length,
        remaining: loginUser.vacations - myVacations.length

    }

    res.send(new SuccessTemplate('Vacation Information', {totalVacations: vacations, myVacations: myVacations, myVacationStatus: myVacationStatus}))
})

router.post('/use', isLogin, (req, res) => {
    const loginUser = req.loginUser;

    const vacation = {
        ...req.body,
        user_id: loginUser.no
    }

    vacationService.createVacation(vacation)
        .then(result => res.send(new SuccessTemplate('정상적으로 휴가신청이 등록되었습니다.', result.dataValues)))

})

module.exports = router;
