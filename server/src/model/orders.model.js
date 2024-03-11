const { v4: uuid } = require('uuid');

class Order {
  id = uuid();
  timeStamp = new Date;
  constructor({user, products, totalPrice}) {
    this.user = JSON.parse(JSON.stringify(user));
    this.products = JSON.parse(JSON.stringify(products));
    this.totalPrice = totalPrice;
  }
};

const orders = {
  orders: []
};

const setOrder = async (order) => {
  const newOrder = new Order({...order});
  if (!newOrder) return null;
  orders.orders.push(newOrder);
  return newOrder;
};

const getOneOrderById = async (orderId) => orders.orders.find((order) => order.id === orderId);

module.exports = {
  setOrder,
  getOneOrderById,
  getOrders: async () => orders.orders,
}
