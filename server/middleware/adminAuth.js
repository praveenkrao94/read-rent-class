const User = require('../model/userModel')

const adminAuth = async (req,res,next)=>{

    try{
        const id = req.user.id
    
        const extuser = await User({_id:id})
    
        if(!extuser)
    
        return res.json({msg : 'User id not found'})
        
        if(extuser.role !== "superadmin")
            return res.json({msg:"Access denied for non-admin users"})

        next()

    }
    catch (err) {
            return res.json({msg: err.message})
    }
}

module.exports = adminAuth