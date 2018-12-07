const {ErrorTemplate, SuccessTemplate} = require('../templates');
const userService = require('../services/UserService');

module.exports = {
    //already session, empty input field, not exist user
    mw_lgoin : (req, res, next) => {
       if(req.session.loginUser){
           res.send(new ErrorTemplate(2, '이미 로그인중입니다. 다시 로그인 하시려면, 로그아웃을 해주세요.'))
       }else{
           const {email, password} = req.body;

           if(!email || !password){
               res.send(new ErrorTemplate(2, '이메일과 패스워드 모두 입력해주세요.'))
           }else{
               userService.findByPasswordAndEmail(email, password)
                   .then(user => {
                       if(user){
                           req.user = user.dataValues;
                           next();
                       }else{
                           res.send(new ErrorTemplate(2, '아이디 또는 비밀번호가 일치하지 않습니다.'))
                       }
                   })
           }
       }
    }
}