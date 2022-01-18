require("dotenv").config();
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')

const server = express();
server.use(cors({ origin: "*" }))
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

module.exports = server
