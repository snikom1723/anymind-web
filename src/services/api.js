import axios from 'axios'

export default token => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      authorization: `${token ? `Bearer ${token}` : ''}`
    },
    timeout: 10000 // 10sec
  })

  api.interceptors.request.use(request => {
    const { url, method, data } = request
    console.log('req', { url, method, data })
    return request
  })

  api.interceptors.response.use(response => {
    const { status, statusText, data } = response
    console.log('res', { status, statusText, data })
    return response
  })

  return api
}
