'use strict';

const express = require('express');
const app = express.Router();

const users = require('./users')

app.use('/users', users)

module.exports = app;