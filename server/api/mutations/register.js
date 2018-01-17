const register = (root, { email, password }, { db }) => {
  console.log('EMAIL: ', email)
  console.log('PASSWORD: ', password)
  return email
}

module.exports = register
