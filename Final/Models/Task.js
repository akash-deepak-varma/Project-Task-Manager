const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true ,'Provide the name'],
        trim:true,
        maxLength: [20, 'Max length is 20'],
    },
    completed :{
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model('Task' ,taskSchema)