const express = require("express");
const router = express.Router();
const {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// Admin create item
router.post("/", protect, adminOnly, createItem);

// Public get items
router.get("/", getItems);
router.get("/:id", getItemById);

// Admin update/delete
router.put("/:id", protect, adminOnly, updateItem);
router.delete("/:id", protect, adminOnly, deleteItem);

module.exports = router;
