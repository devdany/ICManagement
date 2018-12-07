const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('admin/login', { title: 'Express' });
});

router.post('/login', (req, res) => {

})



module.exports = router;
