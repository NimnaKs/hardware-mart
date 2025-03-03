const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");
const {
  createBrand,
  getBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
} = require("../controllers/brandController");

router.post("/", protect, adminOnly, createBrand);
router.get("/", getBrands);
router.get("/:id", getBrandById);
router.put("/:id", protect, adminOnly, updateBrand);
router.delete("/:id", protect, adminOnly, deleteBrand);

module.exports = router;
