const { storesRouting } = require('./stores.routing.js');
const { medicamentsRouting } = require('./medicaments.routing.js');
const { ordersRouting } = require('./orders.routing.js');

module.exports = {
  ROUTES: {
    STORES: { uri: '/stores', router: storesRouting },
    MEDICAMENTS: { uri: '/medicaments', router: medicamentsRouting },
    ORDERS: { uri: '/orders', router: ordersRouting },
  }
}
