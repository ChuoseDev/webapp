require('dotenv').config()

const mysql = require('mysql')

// const con = mysql.createConnection({
//   host: '',
//   user: '',
//   password: '',
// })

// con.connect(function (err) {
//   if (err) throw err
//   console.log('Connected!')
// })

const db = {
  //POST
  insert: async (req, res) => {
    console.log(process.env.ORIGIN)
  },
}

module.exports = { db }
