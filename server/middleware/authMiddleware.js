const jwt = require('jsonwebtoken')
// const secret = "R3@7yP*9!q0^L2b@6&1tS8m5!dF4nC+2"

const authMiddleware = async (req,res,next)=>{
    try{

        const token = req.header('Authorization')
        // res.json({ token })

        jwt.verify(token,process.env.SECRET_TOKEN,(err,user)=>{
            if(err)
            return res.status(400).json({msg:'un authroized token'})

            //  res.json({user})

           req.user = user // assign to req var
           next() // send the data 
        })
            // res.json({msg:"auth middleware called" , token})
    }
    catch (err){
        return res.status(500).json({msg:err.message})
    }
}

module.exports = authMiddleware