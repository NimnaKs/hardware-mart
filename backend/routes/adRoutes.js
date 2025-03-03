const express = require("express");
const router = express.Router();
const {
  createAd,
  getAds,
  updateAd,
  deleteAd,
} = require("../controllers/adController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// Create ad (admin)
router.post("/", protect, adminOnly, createAd);

// Public: get ads
router.get("/", getAds);

// Admin update/delete
router.put("/:id", protect, adminOnly, updateAd);
router.delete("/:id", protect, adminOnly, deleteAd);

module.exports = router;
