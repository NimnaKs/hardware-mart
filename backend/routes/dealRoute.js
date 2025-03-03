const express = require("express");
const router = express.Router();
const {
  createDeal,
  getDeals,
  updateDeal,
  deleteDeal,
} = require("../controllers/dealController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// Admin only: create deal
router.post("/", protect, adminOnly, createDeal);

// Public: view deals
router.get("/", getDeals);

// Admin only: update / delete
router.put("/:id", protect, adminOnly, updateDeal);
router.delete("/:id", protect, adminOnly, deleteDeal);

module.exports = router;
