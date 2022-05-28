const mysql = require('mysql')

const con = mysql.createConnection({
  host: process.env.AWS_DYNAMO_ENDPOINT,
  user: 'sa',
  password: 'Passw0rd!',
  database: 'cust_info',
})

con.connect((err) => {
  if (err) throw err
  console.log('Initial Connected!')
})

const today = new Date()
const date =
  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

const mock = {
  AS_AT_DT: date,
  CUST_USR_NM: 'Test',
  CUST_AGE: '20',
  CUST_GENDER: 'Male',
  TEXT_Q1: 'สบาย',
  TEXT_Q2: 'ez',
}

const db = {
  //POST
  insert: async (req, res) => {
    const { body } = req
    console.log(process.env.ORIGIN)
    const sql =
      'INSERT INTO USER_INFO (AS_AT_DT, CUST_USR_NM, CUST_AGE, CUST_GENDER, TEXT_Q1, TEXT_Q2) VALUES (?)'
    const values = [
      mock.AS_AT_DT,
      body.CUST_USR_NM,
      body.CUST_AGE,
      body.CUST_GENDER,
      body.TEXT_Q1,
      body.TEXT_Q2,
    ]
    con.query(sql, [values], (err, result) => {
      if (err) throw err
      console.log('Successfull insert')
      return res.status[201]
    })
  },
}

module.exports = { db }
