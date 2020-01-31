const express = require('express');
const routes = express.Router();

const QualityController = require('./app/controllers/QualityController');
const SetController = require('./app/controllers/SetController');
const UserController = require('./app/controllers/UserController');

routes.post('/quality', QualityController.index);
routes.post('/set', SetController.store);

routes.post('/users', UserController.store);

module.exports = routes;