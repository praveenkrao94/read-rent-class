const rent = require('../model/rentModel')
const User = require('../model/userModel')
const Book = require('../model/bookModel')

const rentCtrl = {

    getAll : async (req,res)=>{
        try{

        const data = await rent.find({})
            res.json({length:data.length, rents:data})
        }
        catch (err){
            return res.status(500).json({msg:err.message})
        }
    },
    getSingle : async (req,res)=>{
        try{
            let id = req.params.id
            const extRent = await rent.findById({_id:id})
            if(!extRent)
            res.json({msg : 'Rent id not found'})

            res.json({Rent :extRent})
        }
        catch (err){
            return res.status(500).json({msg:err.message})
        }
    },
    create : async (req,res)=>{
        try{
            const extrent = await rent.findOne({userId:req.body.userId}&&{bookId : req.body.bookId})
            if(extrent)
                return res.json({msg:"you already have this book rented"})

                //rad book info

                    const book = await Book.findById({_id:req.body.bookId})
                    if(!book)
                    return res.status(400).json({msg: 'Book details not found'})

                    //rad user info
                    const user = await User.findById({_id:req.body.userId})
                    if(!user)
                    return res.status(400).json({msg: 'user details not found'})

                    
                    let newRent = {
                        ...req.body,
                        user,
                        book
                    }

            const newrent = await rent.create(newRent)
            return res.json({msg: "your new rent is been added" , rent:newrent})
        }
        catch (err){
            return res.status(500).json({msg:err.message})
        }
    },
    update : async (req,res)=>{
        try{

            let id = req.params.id
            const extrent = await rent.findById({_id:id})
            if(!extrent)
            return res.json({msg:"Please enter the right Rent Id"})

            if(extrent.bookId === req.body.bookId && extrent.userId === req.body.userId)
            return res.json({msg:"You Already rented this booked"})


            const updateRent = await rent.findByIdAndUpdate({_id:id}, {
                amount:req.body.amount,
                returndate:req.body.returndate,
                paymentStatus:req.body.paymentStatus
            })

            res.json({msg:"Update Successfull" , updateRent})
        
        }
        catch (err){
            return res.status(500).json({msg:err.message})
        }
    },
    delete : async (req,res)=>{
        try{
            let id = req.params.id
            const extrent = await rent.findById({_id:id})
            if(!extrent)
            return res.json({msg:"Please enter the right Rent Id"})
            
            const deleteRent = await rent.findByIdAndDelete({_id:id})
            res.json({msg: 'You no longer have these rented' , deleteRent})
        }
        catch (err){
            return res.status(500).json({msg:err.message})
        }
    },

}

module.exports = rentCtrl