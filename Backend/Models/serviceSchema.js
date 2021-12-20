const mongoose=require("mongoose");

const serviceSchema=new mongoose.Schema({
    name:{type:String},
    information:{type:String},
    //Doctor ID array
})

module.exports=mongoose.model("Service",serviceSchema);