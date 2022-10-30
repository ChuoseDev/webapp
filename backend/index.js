const dotenv = require('dotenv')

dotenv.config()

const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')

console.log('pppp', process.env.AWS_DYNAMO_ENDPOINT)
console.log('ppp2', process.env.AWS_ACCESS_KEY_ID)
console.log('ppp3p', process.env.SECRET_ACCESS_KEY)

const corsOptions = {
  origin: process.env.ORIGIN,
  credentials: true,
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)

app.listen(4000, () => console.log('Backend server start on 4000'))
