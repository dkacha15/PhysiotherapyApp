const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name:{type:String},
    mobile:{type:Number},
    schedule:[{
        day:{type:String},
        timeRange:{type:String}
    }]
})

module.exports=mongoose.model("Doctor",doctorSchema);