const jwt = require("jsonwebtoken")

const auth=async(req,res,next)=>{
    try {
        const { token }=req.headers

        if(!token){
            return res.status(401).send({message:"please login first"})
        }

        let decoded=jwt.verify(token,"rajesh")
        
        if(!decoded){
            return res.status(401).send({message:"something went wrong plaese login again"})
        }

        req.body.id=decoded.id
        req.body.name=decoded.name
        
        next()

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports={
    auth
}