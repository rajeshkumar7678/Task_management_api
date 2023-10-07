const express=require("express")
const { auth } = require("../config/auth")
const { show_task, add_task, edit_task, delete_task, show_task_by_id } = require("../controllers/task.controller")

const taskroute=express.Router()

taskroute.use(auth)

taskroute.get("/",show_task)

taskroute.post("/",add_task)

taskroute.get("/:id",show_task_by_id)

taskroute.put("/:id",edit_task)

taskroute.delete("/:id",delete_task)











module.exports={
    taskroute
}