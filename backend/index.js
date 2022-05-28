const dotenv = require('dotenv')

dotenv.config()

const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')

const corsOptions = {
  origin: '*',
  credentials: true,
}

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
//   res.setHeader('Access-Control-Allow-Credentials', true)
//   next()
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors(corsOptions))
app.use('/', routes)

app.listen(4000, () => console.log('Backend server start on 4000'))
