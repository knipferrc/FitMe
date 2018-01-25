import createStore from 'unistore'
import devtools from 'unistore/devtools'

const initialState = {
  authed: localStorage.getItem('accesstoken') ? true : false,
  accesstoken: localStorage.getItem('accesstoken')
}

const store =
  process.env.NODE_ENV === 'production'
    ? createStore(initialState)
    : devtools(createStore(initialState))

export default store
