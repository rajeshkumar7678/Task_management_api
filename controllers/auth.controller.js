const { usermodel } = require("../models/user.model");
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")


const register=async(req,res)=>{
    try {
        console.log(req.body)
        const { name,email,password }=req.body

        let user=await usermodel.findOne({email})
        console.log(user)
        if(user){
            return res.status(401).send({message:"user already present please login !!"})
        }

        let hashpass=bcrypt.hashSync(password,7)

        let newuser=new usermodel({name,email,password:hashpass})
        await newuser.save()

        res.status(200).send({message:"user registration sucessfull !!"})

    } catch (error) {
        
        res.status(500).send({ error: error.message });

    }
}


const login=async(req,res)=>{
    try {
        const {email,password} = req.body

        let user =await usermodel.findOne({email})

        if(!user){
            return res.status(401).send({message:"register first !!"})
        }

        let heshpass=bcrypt.compareSync(password,user.password)

        if(!heshpass){
            return res.status(401).send({message:"password incorrect"})
        }

        let token=jwt.sign({id:user._id,name:user.name},"rajesh",{expiresIn:"1hr"})

        res.status(200).send({message:"login successfull","token":token})

    } catch (error) {
        
        res.status(500).send({ error: error.message });

    }
}



module.exports={
    register,
    login
}