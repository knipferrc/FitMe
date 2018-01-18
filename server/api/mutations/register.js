const pubsub = require('../../lib/pubsub')

const USER_REGISTERED = 'user_registered'

const register = (root, { email, password }, { db }) => {
  console.log('EMAIL: ', email)
  console.log('PASSWORD: ', password)

  pubsub.publish(USER_REGISTERED, { userRegistered: email })

  return email
}

module.exports = register
