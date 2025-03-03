const mongoose = require("mongoose");

const adSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String },
    link: { type: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ad", adSchema);
