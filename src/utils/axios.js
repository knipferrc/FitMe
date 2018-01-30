import axios from 'axios'

const getConfig = (method, urlSegment, data) => {
  const headers = {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('accessToken')
  }

  const httpUri =
    process.env.NODE_ENV === 'production'
      ? 'TODO - production url'
      : 'http://localhost:5000/'

  const url = httpUri + urlSegment

  return { method, url, headers, data }
}

export default {
  post(urlSegment, data) {
    const config = getConfig('post', urlSegment, data)
    return axios.request(config)
  },

  get(urlSegment, data = {}) {
    const config = getConfig('get', urlSegment, data)
    return axios.request(config)
  }
}
