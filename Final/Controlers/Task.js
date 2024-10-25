const asyncWrapper = require('../Middle-Ware/async')
const Task = require('../Models/Task')
const {customError} = require('../errors/Custom-errors')



const getAllTasks = asyncWrapper(
    async (req ,res)=>  {
            const tasks = await Task.find({})
            res.status(200).json({tasks})
    }
)

const createTask = asyncWrapper(
    async (req ,res)=>{
        const tasks = await Task.create(req.body)
        res.status(201).json({tasks})
    }
)

const getTask = asyncWrapper(
    async (req, res ,next) => {
       
            const {id:taskID} = req.params
            const task = await Task.findOne({ _id:taskID });
            
            if (!task) {
                return next(customError( `No task found with the ID: ${taskID}` , 404))
            }
            
            res.status(200).json({ task });
        
    }
)


const updateTask = asyncWrapper(
    async (req ,res ,next)=>{
        
           const {id:taskID} = req.params
           const task = await Task.findOneAndUpdate({_id:taskID} ,req.body ,{
               new:true,
               runValidators:true,
       
           })
           if (!task) {
                return next(customError( `No task found with the ID: ${taskID}` , 404))
             }
           
             res.status(200).json({ task })
        } 
)

const deleteTask = asyncWrapper(
    async (req ,res ,next)=>{
        
            const {id:taskID} = req.params
            const task = await Task.findOneAndDelete({ _id:taskID });
    
            if (!task) {
                return next(customError( `No task found with the ID: ${taskID}` , 404))
                
            }
             res.status(200).json({ task })
        
    }
)




module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}