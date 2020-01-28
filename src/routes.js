const express = require('express');
const routes = express.Router();

const qualityController = require('./app/controllers/qualityController');
const setController = require('./app/controllers/setController');

routes.post('/quality', qualityController.index);
routes.post('/set', setController.store);

module.exports = routes;