import store from './redux/store'

/*
Uses data returned from api and formats the information into a RESTful endpoint
*/
const formatNewData = data => {
  return data.map(photo => {
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`
  })
}

export { formatNewData }
