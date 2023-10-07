

const logger=(req,res,next)=>{

    const currentTime = new Date().toLocaleString();
    const logMessage = `${currentTime} - ${req.method} ${req.url}`;

    console.log(logMessage);
    next();
}

module.exports={logger}