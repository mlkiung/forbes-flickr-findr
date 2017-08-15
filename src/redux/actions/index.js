import store from '../store'
import { formatNewData } from '../../utils'
import { api_key } from '../../config'
import fetchJsonp from 'fetch-jsonp'


/*//////////////////////////////
            SEARCH
//////////////////////////////*/

// middleware
const newSearch = searchTerm => {
  store.dispatch(performSearch(searchTerm))
}

// action creator
const performSearch = searchTerm => {
  return {type: 'NEW_SEARCH', searchTerm}
}

/*//////////////////////////////
            IMAGES
//////////////////////////////*/

// middleware getting images from Flickr API
const getImages = urls => {
  const searchTerm = store.getState().search.searchTerm
  const queryString = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&text=${searchTerm}&format=json`

  return new Promise((resolve, reject) => {
    fetchJsonp(queryString, { jsonpCallbackFunction: 'jsonFlickrApi' })
      .then((response) =>
        response.json()
      )
      .then((json) => {
        const urls = formatNewData(json.photos.photo)
        store.dispatch(loadImages(urls))
        resolve(urls)
      })
      .catch((ex) => new Error('parsing failed', ex))
  })
}

// action creator
const loadImages = imgUrls => {
  return {
    type: 'LOAD_IMAGES',
    imgUrls
  }
}

export { newSearch, getImages }
