const express = require('express');
const routes = express.Router();

const qualityController = require('./controllers/qualityController');

routes.post('/quality', qualityController.index);

module.exports = routes;