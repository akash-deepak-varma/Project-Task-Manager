

class customApiErrors extends Error{
    constructor(message ,code){
        super(message);
        this.code = code;
    }
}

const customError = (msg , code) => {
    return new customApiErrors(msg ,code);
}

module.exports = {customApiErrors ,customError};