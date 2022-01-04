const Service = require("../models/serviceSchema");

module.exports = {
  async createService(req, res) {
    const { name, information, doctor_id, image_url } = req.body;

    if (!name || !information || !image_url) {
      return res.json({ error: "Fill all the required fields" });
    }
    const service = new Service({
      name,
      information,
      image_url,
      doctor_id,
    });
    service.save().then(() => {
      return res.json({ message: "Service created" });
    });
  },

  async getServices(req,res){
    const services = await Service.find().populate("doctors.doctor_id", "name");
        return res.json(services);
  },

  async getServiceById(req, res) {
    const { service_id } = req.body;

    await Service.findById(service_id).populate("doctors.doctor_id", "name").then((service) => {
      return res.json(service);
    })
  },

  async addDoctor(req, res) {
    const { service_id, doctor_id } = req.body;

    await Service.findByIdAndUpdate(
      service_id,
      {
        $push: {
          doctors: {
            doctor_id: doctor_id
          },
        },
      },
      {
        new: true,
      }
    ).exec((err, result) => {
      if (err) {
        return res.json({ error: "Failed to add doctor" });
      } else {
        return res.json({result, message:"Doctor added successfully"});
      }
    })
  },

  async removeDoctor(req, res) {
    const { service_id, doctor_id } = req.body;

    await Service.findByIdAndUpdate(
      service_id,
      {
        $pull: {
          doctors: {
            doctor_id: doctor_id
          },
        },
      }
    ).exec((err, result) => {
      if (err) {
        return res.json({ error: "Failed to remove doctor" });
      } else {
        return res.json({result, message:"Doctor removed successfully"});
      }
    })
  }
};
