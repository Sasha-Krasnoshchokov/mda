const express = require('express');

const {
  getAllMedicaments,
  getMedicamentsByStoreId
} = require('../controller/medicaments.controller.js');

const router = express.Router();

//** returns a list of stores */
router.get("/", getAllMedicaments);
router.get("/:id", getMedicamentsByStoreId);

module.exports = { medicamentsRouting: router };
