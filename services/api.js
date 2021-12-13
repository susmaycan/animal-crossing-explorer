import API from './utils'

export class APIService {
  fishList () {
    return API.get('fish/')
  }

  bugList () {
    return API.get('bugs/')
  }

  fossilList () {
    return API.get('fossils/')
  }

  seaCreaturesList () {
    return API.get('sea/')
  }

  artList () {
    return API.get('art/')
  }
}
