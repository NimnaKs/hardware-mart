const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema(
  {
    item: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
    discountPercentage: { type: Number, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Deal", dealSchema);
