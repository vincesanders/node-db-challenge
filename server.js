const express = require('express');
const projectRouter = require('./projects/projectRouter');
const resourceRouter = require('./resources/resourceRouter');

const server = express().use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);

module.exports = server;