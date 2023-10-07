const express=require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { userrouter } = require("./routes/user.route")
const { taskroute } = require("./routes/task.route")
const { logger } = require("./middlewares/logger")
const { apiLimiter } = require("./config/rate-limit")





require("dotenv").config()
const port=process.env.port || 9000
const app=express()


app.use(cors())
app.use(logger)
app.use(apiLimiter)
app.use(express.json())


app.use("/user",userrouter)

app.use("/tasks",taskroute)




app.get("/",(req,res)=>{
    res.send("home page")
})





app.listen(port,async()=>{
    try {
        await connection
        console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
    console.log(`server is running at ${port}`)
})

