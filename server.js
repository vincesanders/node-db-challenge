const express = require('express');
const projectRouter = require('./projects/projectRouter');

const server = express().use(express.json());
server.use('/api/projects', projectRouter);

module.exports = server;