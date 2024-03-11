const { Response } = require('../model/response.model.js');
const {
  getMedicaments,
} = require('../model/medicaments.model.js');

const getAllMedicaments = async (req, res) => {
  const medicaments = await getMedicaments();
  res.status(200).send(new Response(200, medicaments));
};
const getMedicamentsByStoreId = async (req, res) => {
  const storeId = req.url.split('/?')[0].slice(1);
  if (!storeId) {
    res.status(404).send(new Response(404));
    return;
  }
  const medicaments = await getMedicaments();
  if (!medicaments[storeId]) {
    console.error('********************');
    console.error('*  WRONG STORE ID  *');
    console.error('____________________');
    res.status(404).send(new Response(404));
    return;
  }
  res.status(200).send(new Response(200, medicaments[storeId]));
};

module.exports = {
  getAllMedicaments,
  getMedicamentsByStoreId
};
