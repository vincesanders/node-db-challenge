const express = require('express');

const server = express().use(express.json());

module.exports = server;