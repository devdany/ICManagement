/***
 * Error Code Table
 * 1  Empty Value return
 * 2  Input Error
 * 3  Auth Error
 * 4  DataBase Error
 * 5  Backend Error
 */

class ErrorTemplate{
    constructor(code, text){
        this.code = code;
        this.text = text;
    }
}

class SuccessTemplate{
    constructor(text, result){
        this.code = 0;
        this.text = text;
        this.result = result;
    }
}

module.exports = {ErrorTemplate, SuccessTemplate}