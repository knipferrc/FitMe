const pubsub = require('../../lib/pubsub')

const USER_REGISTERED = 'user_registered'

const userRegistered = {
  subscribe: () => pubsub.asyncIterator(USER_REGISTERED)
}

module.exports = userRegistered
