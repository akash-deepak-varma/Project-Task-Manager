const {customApiErrors} = require('../errors/Custom-errors')
const handleError = (err ,req ,res ,next) => {
    if(err instanceof customApiErrors){
        console.log(err)
        return res.status(err.code).json({msg:err.message})
    }
    return res.status(500).json({msg:"Smething went wrong"})
}

module.exports = handleError;