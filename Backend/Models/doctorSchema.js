const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    mobile: { type: Number },
    schedule: [{
        day: { type: String },
        timeRange: { type: String }
    }],
    services: [
        {
            service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }
        }
    ]
});

module.exports=mongoose.model("Doctor",doctorSchema);