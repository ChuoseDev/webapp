'use strict'

const { GENDER } = require('../utils/utilities')

const ctrl = {
  // POST
  signUp: async (req, res) => {
    const body = req.body
    if (!body.username) {
      return res.status(401).send({
        message: 'Username can not be empty',
      })
    }
    if (
      !body.age ||
      !Number.isInteger(body.age) ||
      !(0 <= body.age && body.age <= 99)
    ) {
      return res.status(401).send({
        message: 'Data type should be integer number',
      })
    }
    const genderLists = Object.values(GENDER)
    if (!body.gender || !genderLists.some((gender) => gender === body.gender)) {
      return res.status(401).send({
        message: 'Please select gender',
      })
    }
    try {
      // const result = await something.post(
      //   'https://cwse7ull5d.execute-api.us-east-2.amazonaws.com/chuose_sit/chuose_cust_info',
      //   body
      // )
      const result = {}

      res.send(result)
    } catch (error) {
      res.error(error)
    }
  },

  test: (req, res) => {
    console.log('test')
    return res.send({message: 'ahoy'})
  }
}

module.exports = { ctrl }
