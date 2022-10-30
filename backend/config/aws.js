const AWS = require('aws-sdk')

AWS.config.update({
  region: 'us-east-2',
  endpoint: process.env.AWS_DYNAMO_ENDPOINT,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
})

const docClient = new AWS.DynamoDB.DocumentClient()

module.exports = {
  docClient,
}
