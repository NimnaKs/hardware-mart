const Item = require("../models/itemModel");

// Create Item
const createItem = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get All Items
const getItems = async (req, res) => {
  try {
    const items = await Item.find().populate("category brand");
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Single Item
const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate("category brand");
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Item
const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("category brand");
    if (!updatedItem)
      return res.status(404).json({ message: "Item not found" });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Item
const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndRemove(req.params.id);
    res.json({ message: "Item removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
};
