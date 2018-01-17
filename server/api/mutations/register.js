const register = ({ db }, { email, password }) => {
  console.log('EMAIL: ', email)
  console.log('PASSWORD: ', password)

  return email
}

module.exports = register
