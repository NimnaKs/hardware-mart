const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    /* Array of sub-categories */
    subCategories: [subCategorySchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
