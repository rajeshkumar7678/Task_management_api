const express=require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { userrouter } = require("./routes/user.route")



require("dotenv").config()
const port=process.env.port || 9000
const app=express()


app.use(cors())

app.use(express.json())


app.use("/user",userrouter)




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

