const category = require('../model/catrgory')

const categoryCtrl = {

    getall : async (req,res)=>{
        try{
            const data = await category.find({})
            res.json({length: data.length , Categories : data})
            // res.json({msg:'Getall called'})
        }
        catch (err){
            return res.status(500).json({msg: err.message})
        }
    },
    getSingle : async (req,res)=>{
        try{
            let id = req.params.id
            const extcat = await category.findById({_id:id})

            if(!extcat)
            return res.json({msg:"id not foound"})

            res.json({extcat})
            
        }
        catch (err){
            return res.status(500).json({msg: err.message})
        }
    },
    create : async (req,res)=>{
        try{

            const {title , desc } = req.body

            let extcat = await category.findOne({title})

            if(extcat)
                res.json({msg:`${extcat.title} already exist`})
            
                let newcat = await category.create({
                    title,desc
                })

                res.json({msg:"created Successfully" ,Category: newcat})

            // res.json({msg:'create called'})
            
        }
        catch (err){
            return res.status(500).json({msg: err.message})
        }
    },
    update : async (req,res)=>{
        try{
            let id = req.params.id
            
            let extuser = await category.findById({_id:id})

            if(!extuser)
            return res.json({msg:"user not found"})

            let updated = await category.findByIdAndUpdate({_id:id} ,req.body)

            res.json({msg:"updated Successfully" , updated})

        }
        catch (err){
            return res.status(500).json({msg: err.message})
        }
    },
    delete : (req,res)=>{
        try{
            let id 

            res.json({msg:'delete called'})

        }
        catch (err){
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = categoryCtrl