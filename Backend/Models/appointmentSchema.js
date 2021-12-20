const mongoose=require("mongoose");

const appointmentSchema=new mongoose.Schema({
    //Patient ID,
    date:{type:Date},
    time:{type:String},
    //Service ID,
    //Doctor ID
})

module.exports=mongoose.model("Appointment",appointmentSchema);