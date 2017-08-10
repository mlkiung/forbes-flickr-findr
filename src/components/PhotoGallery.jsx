import React, { Component } from 'react';
import { api_key } from '../config';
import fetchJsonp from 'fetch-jsonp'
import formatNewData from '../utils'


class PhotoGallery extends Component {
  constructor() {
    super()

    this.state = {
      photos: [],
      searchterm: 'cows'
    }
  }

  componentDidMount() {
    const queryString = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&text=${this.state.searchterm}&format=json`

    return new Promise((resolve, reject) => {
      fetchJsonp(queryString, { jsonpCallbackFunction: 'jsonFlickrApi' })
       .then((response) =>
        response.json())
        .then((json) => {
          // console.log('parsed json', json.photos.photo)
          const photos = json.photos.photo
          const formattedData = formatNewData(photos)
          console.log('formattedData', formattedData)
          this.setState({ photos: formattedData })
          resolve(formattedData)
        })
        .catch((ex) =>
          new Error('parsing failed', ex))
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.photos && this.state.photos.map((photo, i) => {
            return (
              <div className="five columns" key={i}>
                <img src={photo} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default PhotoGallery
