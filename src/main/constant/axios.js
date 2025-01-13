import axios from 'axios'
import https from 'https'

const agent = new https.Agent({ rejectUnauthorized: false })

export const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
  httpsAgent: agent
})
