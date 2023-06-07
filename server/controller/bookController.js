const book = require('../model/bookModel')

const Bookctrl = {

    getAll: async (req,res)=>{
        try{
            const data = await book.find({})
            res.json({length:data.length , books : data})
            }
            catch (err){
                return res.json({msg :err.message})
            }
        },
        getSingle: async (req,res)=>{
            try{
                let id = req.params.id

                const extuser = await book.findById({_id:id})
                if(!extuser)
                return res.status(404).json({msg : "Id not Found"})

                res.json({extuser})
                
            }
            catch (err){
                return res.json({msg :err.message})           
            }
        },
        create: async (req,res)=>{
            try{
                if(!req.body.isbn)
                return res.status(404),json({msg: "isbn required "})

                const extisbn = await book.findOne({isbn: req.body.isbn})
                if(extisbn)
                res.json({msg:"this is an existing ISBN , create a new one"})

                const newuser = await book.create( req.body)

                res.json({book:newuser,msg: "New Book added"})
                
            }
            catch (err){
                return res.json({msg :err.message})           
            }
        },
        update: async (req,res)=>{
            try{
                let id = req.params.id

                const extbook = await book.findById({_id:id})
                if(!extbook)
                res.json({msg:"Book not found"})

                const updatebook = await book.findByIdAndUpdate({_id:id}, req.body)

                res.json({msg: "Your Book data is been updated" , updatebook})
            
        }
        catch (err){
            return res.json({msg :err.message})           
        }
    },
    delete: async (req,res)=>{
        try{
            let id = req.params.id

                const extbook = await book.findById({_id:id})
                if(!extbook)
                res.json({msg:"Book not found"})

                const deleteeBook = await book.findByIdAndDelete({_id:id})

                res.json({msg: "Your Book data is been Deleted" , deleteeBook})
            
        }
        catch (err){
            return res.json({msg :err.message})
        }
    },


}

module.exports = Bookctrl