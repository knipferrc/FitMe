import axios from 'axios'

const getConfig = (method, urlSegment, data) => {
  const headers = {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('accesstoken')
  }

  const httpUri =
    process.env.NODE_ENV === 'production'
      ? 'TODO - production url'
      : 'http://localhost:5000/'

  const url = httpUri + urlSegment

  return { url, headers, data }
}

export const Axios = {
  post(urlSegment, data) {
    const config = getConfig('post', urlSegment, data)
    return axios.request(config)
  },

  get(urlSegment, data) {
    const config = getConfig('get', urlSegment, data)
    return axios.request('get', urlSegment, data)
  }
}
