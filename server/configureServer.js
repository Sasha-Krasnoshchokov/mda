const express = require('express');
require('dotenv').config();

const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();

const allowOrigin =
  process.env.NODE_ENV === 'development' ? '*' : 'https://md-client.onrender.com/';

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());

module.exports = { server };
