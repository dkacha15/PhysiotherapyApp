const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  image_url: { type: String },
  information: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
