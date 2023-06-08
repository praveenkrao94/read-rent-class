const mongoose = require('mongoose')

const rentSchema = new mongoose.Schema({
bookId:{
    type:mongoose.Types.ObjectId,
    ref:'Books',
    required:true
},
userId:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    required:true
},
amount:{
    type:Number,
    required:true
},
rentdate:{
    type:Date,
    default: new Date().toLocaleString
},
returndate:{
    type:Date,
    required:true
},
paymentStatus:{
    type:String,
    enum:["paid", "unpaid"]
    default:"unpaid"
}
},{
    collection :"rent",
    timestamps:true
})

module.exports = mongoose.model("Rent" , rentSchema)