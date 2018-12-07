const express = require('express');
const router = express.Router();
const {mw_lgoin} = require('../middlewares/UserMiddleware');
const {SuccessTemplate} = require('../templates');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/login', mw_lgoin, (req, res) => {
    const user = req.user;
    req.session.loginUser = user;
    res.send(new SuccessTemplate('정상적으로 로그인되었습니다', user))
})

module.exports = router;
