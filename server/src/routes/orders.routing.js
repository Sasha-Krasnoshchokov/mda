const express = require('express');

const {
  getAllOrders,
  getOrderById,
  addNewOrder
} = require('../controller/orders.controller.js');

const router = express.Router();

//** returns a list of stores */
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.post("/", addNewOrder);

module.exports = { ordersRouting: router };
