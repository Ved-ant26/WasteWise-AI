import axios from 'axios'
import { env } from '@/config/env'

const api = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
)

export default api
