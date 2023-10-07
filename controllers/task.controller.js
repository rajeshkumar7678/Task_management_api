const { taskmodel } = require("../models/task.model");
const mongoose = require('mongoose');

const add_task=async(req,res)=>{
    try {
        const {title,description,creation_date,status} = req.body

        let new_task = new taskmodel({title,description,creation_date,status})
        await new_task.save()

        res.status(200).send({message:"task added successfull"})

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}


const show_task=async(req,res)=>{
    try {
        const tasks = await taskmodel.find()

        res.status(200).send({"tasks":tasks})

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}


const show_task_by_id = async (req, res) => {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: 'Invalid task ID' });
      }
  
      let task = await taskmodel.findById(id);
  
      if (!task) {
        return res.status(404).send({ message: "Task not found" });
      }
  
      res.status(200).send({ task: task });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message });
    }
};


const edit_task=async(req,res)=>{
    try {
        let { id }=req.params

        let updatetask = await taskmodel.findByIdAndUpdate(id,req.body)
        console.log(updatetask)
        res.status(200).send({message:"task update successfull"})

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}


const delete_task=async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}



module.exports={
    add_task,
    show_task,
    show_task_by_id,
    edit_task,
    delete_task
}