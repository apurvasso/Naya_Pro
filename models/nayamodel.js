const mongoose = require("mongoose");

const nayamodelSchema = new mongoose.Schema({
  items: {
    type: String,
    required: true,
  },
  product_ids: {
    type: Number,
    required: true,
  },
  prices: {
    type: Number,
    required: true,
  },
  descriptions: {
    type: String,
    required: true,
  },
  dimensions: {
    type: String,
    required: false,
  },
  img_urls: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  prod_page_urls: {
    type: String,
    required: false,
  },
  chair: {
    type: Number,
    required: false,
  },
  dining_chair: {
    type: Number,
    required: false,
  },
  accent_chair: {
    type: Number,
    required: false,
  },
  outdoor_chair: {
    type: Number,
    required: false,
  },
  lounge_chair: {
    type: Number,
    required: false,
  },
  rocking_chair: {
    type: Number,
    required: false,
  },
});
module.exports = mongoose.model("NayaCollection", nayamodelSchema);
