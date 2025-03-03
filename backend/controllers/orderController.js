const Order = require("../models/orderModel");
const Item = require("../models/itemModel");

// Create Order
const createOrder = async (req, res) => {
  try {
    const { items } = req.body;
    let total = 0;
    const orderItems = [];

    for (const entry of items) {
      const foundItem = await Item.findById(entry.itemId);
      if (!foundItem) {
        return res
          .status(404)
          .json({ message: `Item ${entry.itemId} not found` });
      }
      const itemTotal = foundItem.price * entry.quantity;
      total += itemTotal;
      orderItems.push({
        item: foundItem._id,
        quantity: entry.quantity,
        price: foundItem.price,
      });
    }

    const newOrder = await Order.create({
      user: req.userId,
      items: orderItems,
      total,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Orders (admin = all, customer = only their orders)
const getOrders = async (req, res) => {
  try {
    let orders;
    if (req.role === "admin") {
      // Admin sees all
      orders = await Order.find().populate("user items.item");
    } else {
      // Customer sees only their orders
      orders = await Order.find({ user: req.userId }).populate(
        "user items.item"
      );
    }
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update order status (admin only)
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const orderId = req.params.id;
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    ).populate("user items.item");
    if (!updatedOrder)
      return res.status(404).json({ message: "Order not found" });
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createOrder,
  getOrders,
  updateOrderStatus,
};
