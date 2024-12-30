import axios from 'axios'

export const axiosPrivate = axios.create({
  baseURL: import.meta.env.RENDERER_VITE_API_URL,
  headers: { 'Content-Type': 'application/json' }
})

axiosPrivate.interceptors.request.use(
  (config) => {
    console.log('config', config)
    // const account = getItem('userAccount')
    // if (account && account.token) {
    //   config.headers.Authorization = `Bearer ${account.token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
axiosPrivate.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)
