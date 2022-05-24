'use strict'

const express = require('express')

const routes = express.Router()
const { db } = require('../controllers/DatabaseController')

routes.post('/', db.insert)

module.exports = routes
