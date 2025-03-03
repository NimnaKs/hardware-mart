const Brand = require("../models/brandModel");

// Create a new brand
const createBrand = async (req, res) => {
  try {
    const { name, image } = req.body;
    const brand = await Brand.create({ name, image });
    res.status(201).json(brand);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get all brands
const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get a single brand by ID
const getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) return res.status(404).json({ message: "Brand not found" });

    res.json(brand);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Update a brand
const updateBrand = async (req, res) => {
  try {
    const { name, image } = req.body; // Updated name and image URL

    const updatedBrand = await Brand.findByIdAndUpdate(
      req.params.id,
      { name, image },
      { new: true }
    );

    if (!updatedBrand)
      return res.status(404).json({ message: "Brand not found" });

    res.json(updatedBrand);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Delete a brand
const deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id);
    if (!brand) return res.status(404).json({ message: "Brand not found" });

    res.json({ message: "Brand deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = {
  createBrand,
  getBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
};
