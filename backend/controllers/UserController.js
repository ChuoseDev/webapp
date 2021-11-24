'use strict'

const { GENDER } = require('../utils/utilities')
const { docClient } = require('../config/aws')

const ctrl = {
  // POST
  signUp: async (req, res) => {
    const { body } = req
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
    const params = {
      TableName: 'CHUOSE_CUST_INFO',
      Item: {
        cust_id: '007TiewSoodTae',
        '1_nm': '1stNM_JSTest',
        '2_nm': '2ndNM_JSTest',
        age: '24',
        cust_cm: 'ไม่ไหวแล้วโว้ยไอสัส อยากมีแฟนโว้ยยย',
        gender: 'Male',
        timeStamp: '2021-11-23',
      },
    }
    docClient.put(params, (err, data) => {
      if (err) {
        console.error('Unable to add item', JSON.stringify(err, null, 2))
      } else {
        console.log('Item added', JSON.stringify(data, null, 2))
        res.json(data)
      }
    })
  },
}

module.exports = { ctrl }
