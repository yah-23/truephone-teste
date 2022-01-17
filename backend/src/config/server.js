require("dotenv").config();
const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors({ origin: "*" }))


module.exports = server
