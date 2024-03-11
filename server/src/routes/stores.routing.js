const express = require('express');

const {
  getAllStores,
} = require('../controller/stores.controller.js');

const router = express.Router();

//** returns a list of stores */
router.get("/", getAllStores);

module.exports = { storesRouting: router };
