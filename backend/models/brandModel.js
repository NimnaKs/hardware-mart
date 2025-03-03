const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Brand", brandSchema);
