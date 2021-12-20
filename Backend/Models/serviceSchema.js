const mongoose=require("mongoose");

const serviceSchema=new mongoose.Schema({
    name:{type:String},
    information:{type:String},
    // doctor information array
})

module.exports=mongoose.model("Services",serviceSchema);