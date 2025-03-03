const Ad = require("../models/adModel");

// Create Ad
const createAd = async (req, res) => {
  try {
    const newAd = await Ad.create(req.body);
    res.status(201).json(newAd);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get All Ads
const getAds = async (req, res) => {
  try {
    const ads = await Ad.find();
    res.json(ads);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Ad
const updateAd = async (req, res) => {
  try {
    const updatedAd = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedAd);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Ad
const deleteAd = async (req, res) => {
  try {
    await Ad.findByIdAndRemove(req.params.id);
    res.json({ message: "Advertisement removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createAd,
  getAds,
  updateAd,
  deleteAd,
};
