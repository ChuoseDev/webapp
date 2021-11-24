'use strict'

const express = require('express')

const routes = express.Router()
const { ctrl } = require('../controllers/UserController')

routes.post('/', ctrl.signUp)

module.exports = routes
