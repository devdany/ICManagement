const express = require('express');
const router = express.Router();
const {mw_admin_lgoin} = require('../middlewares/AdminMiddleware');
const {SuccessTemplate} = require('../templates');

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('admin/login', { title: 'Express' });
});

router.post('/login', mw_admin_lgoin, (req, res) => {
    const admin = req.admin;
    req.session.admin = admin;
    res.send(new SuccessTemplate('정상적으로 관리자인증에 성공했습니다.', admin))
})



module.exports = router;
