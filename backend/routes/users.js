'use strict';

const express = require('express');

const routes = express.Router();
const { ctrl } = require('../controllers/UserController');

routes.get('/', ctrl.test)
routes.post('/', ctrl.signUp)

module.exports = routes;
