const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  urlCode: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
},{timestramps:true});

module.exports = mongoose.model("Url", urlSchema);
