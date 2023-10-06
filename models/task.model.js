const mongoose=require("mongoose")

const taskschema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    creation_date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:["pending","completed"],
        default:"pending"
    }
})

const taskmodel=mongoose.model("task",taskschema)

module.exports={
    taskmodel
}