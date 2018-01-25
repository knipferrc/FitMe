const actions = store => ({
  initializeUser: ({ authed, accesstoken }, token) => {
    localStorage.setItem('accesstoken', token)
    return {
      accesstoken: token,
      authed: true
    }
  },
  logout: ({ authed, accesstoken }) => {
    localStorage.removeItem('accesstoken')
    return {
      accesstoken: null,
      authed: false
    }
  },
  setCurrentUser: ({ currentUser }, role, email, firstName, lastName) => {
    return {
      currentUser: {
        role,
        email,
        firstName,
        lastName
      }
    }
  }
})

export default actions
