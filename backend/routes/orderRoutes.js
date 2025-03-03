const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrders,
  updateOrderStatus,
} = require("../controllers/orderController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// Customers place orders
router.post("/", protect, createOrder);

// Admin sees all, customer sees only their own
router.get("/", protect, getOrders);

// Admin updates order status
router.put("/:id/status", protect, adminOnly, updateOrderStatus);

module.exports = router;
