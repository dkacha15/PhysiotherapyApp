const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  imageURL: { type: String },
  information: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
