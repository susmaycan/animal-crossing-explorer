import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'

const BASE_URL = 'https://acnhapi.com/v1a'

const APIService = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json'
  }
})

APIService.defaults.transformResponse = [(data, headers) => {
  if (data) {
    return camelcaseKeys(JSON.parse(data), { deep: true })
  }
  return JSON.parse(data)
}]

export default APIService
