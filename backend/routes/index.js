'use strict'

const express = require('express')
const app = express.Router()

const database = require('./database')

app.use('/database', database)

module.exports = app
