const { Response } = require('../model/response.model.js');
const {
  getStores,
} = require('../model/stores.model.js');

const getAllStores = async (req, res) => {
  const stores = await getStores();
  res.status(200).send(new Response(200, stores));
};

module.exports = {
  getAllStores
};
