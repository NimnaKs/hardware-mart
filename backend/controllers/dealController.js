const Deal = require("../models/dealModel");

// Create Deal
const createDeal = async (req, res) => {
  try {
    const newDeal = await Deal.create(req.body);
    res.status(201).json(newDeal);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get All Deals
const getDeals = async (req, res) => {
  try {
    const deals = await Deal.find().populate("item");
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Deal
const updateDeal = async (req, res) => {
  try {
    const updatedDeal = await Deal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("item");
    res.json(updatedDeal);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Deal
const deleteDeal = async (req, res) => {
  try {
    await Deal.findByIdAndRemove(req.params.id);
    res.json({ message: "Deal removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createDeal,
  getDeals,
  updateDeal,
  deleteDeal,
};
