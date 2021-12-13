import { APIService } from '../services/api'

export default ({ app }, inject) => {
  const api = new APIService('My App')
  inject('api', api)
}
