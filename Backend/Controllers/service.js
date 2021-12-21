const Service = require("../models/serviceSchema");

module.exports = {
  async createService(req, res) {
    const { name, information, doctor_id } = req.body;

    if (!name || !information || !doctor_id) {
      return res.json({ error: "Fill all the required fields" });
    }
    const service = new Service({
      name,
      information,
      doctor_id,
    });
    service.save().then(() => {
      return res.json({ message: "service created" });
    });
  },

  async getServices(req,res){
    const services = await Service.find();
        return res.json(services);
  }
};
