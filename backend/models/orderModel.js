const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [
      {
        item: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
        quantity: { type: Number, default: 1 },
        price: { type: Number },
      },
    ],
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
