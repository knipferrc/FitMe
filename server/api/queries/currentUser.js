const currentUser = (root, { userId }, { db }) => {
  console.log('USER ID: ', userId)
  return userId
}

module.exports = currentUser
