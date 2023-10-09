import axios from 'axios'
export const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  },
})
