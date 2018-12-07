const {ErrorTemplate, SuccessTemplate} = require('../templates')

module.exports = {
    //token, csrf, g-recaptch ...etc validation process
    isValidRequest: (req, res, next) => {
        next();
    },
}