const { Response } = require('../model/response.model.js');
const {
  getOrders,
  setOrder,
  getOneOrderById,
} = require('../model/orders.model.js');

const getAllOrders = async (req, res) => {
  const orders = await getOrders();
  res.status(200).send(new Response(200, orders));
};

const getOrderById = async (req, res) => {
  const orderId = req.url.split('/?')[0].slice(1);
  if (!orderId) {
    res.status(404).send(new Response(404));
    return;
  }
  const order = await getOneOrderById(orderId);
  if (!order) {
    console.error('********************');
    console.error('*  WRONG ORDER ID  *');
    console.error('____________________');
    res.status(404).send(new Response(404));
    return;
  }
  res.status(200).send(new Response(200, order));
};

const addNewOrder = async (req, res) => {
  const {user, products, totalPrice} = req.body;
  if (!user || !products || products.length === 0 || !totalPrice) {
    console.error('********************');
    console.error('*  INCORRECT BODY  *');
    console.error('____________________');
    res.status(400).send(new Response(400));
    return;
  }
  const order = await setOrder({user, products, totalPrice});
  if (!order) {
    console.error('********************');
    console.error('*    DID NOT ADD   *');
    console.error('____________________');
    res.status(501).send(new Response(501));
    return;
  }
  res.status(200).send(new Response(200, { orderId: order.id, orderTimeStamp: order.timeStamp}));
};

module.exports = {
  getAllOrders,
  getOrderById,
  addNewOrder
};
