const getUser = ({ db }, { userId }) => {
  console.log('USER ID: ', userId)

  return userId
}

module.exports = getUser
