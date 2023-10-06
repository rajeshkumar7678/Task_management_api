const express=require("express")
const { register, login } = require("../controllers/auth.controller")

const userrouter=express.Router()

userrouter.get("/",(req,res)=>{
    res.send({"msg":"user route"})
})


userrouter.post("/register",register)

userrouter.post("/login",login)



module.exports={
    userrouter
}