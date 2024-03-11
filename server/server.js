// require('dotenv').config();
const IP = require('ip');
const os = require('os');

const { server } = require('./configureServer.js');

const { ROUTES } = require('./src/routes/routes.constants.js');

const PORT = 3029;
const HOST = os.hostname();
const ipAddress = IP.address();

server.use(ROUTES.STORES.uri, ROUTES.STORES.router);
server.use(ROUTES.MEDICAMENTS.uri, ROUTES.MEDICAMENTS.router);
server.use(ROUTES.ORDERS.uri, ROUTES.ORDERS.router);

server.listen(PORT, () => {
  console.log(`server started on host ${HOST}`);
  console.log(`server started on port ${PORT}`);
  console.log(`server started on IP address ${ipAddress}`);
});
