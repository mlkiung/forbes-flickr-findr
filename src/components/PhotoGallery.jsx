import React, { Component } from 'react'
import { api_key } from '../config'
import fetchJsonp from 'fetch-jsonp'
import formatNewData from '../utils'


class PhotoGallery extends Component {
  constructor() {
    super()

    this.state = {
      photos: [],
      searchterm: 'ice cream',
      currentPage: 1,
      photosPerPage: 10
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const queryString = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&text=${this.state.searchterm}&format=json`

    return new Promise((resolve, reject) => {
      fetchJsonp(queryString, {jsonpCallbackFunction: 'jsonFlickrApi'}).then((response) => response.json()).then((json) => {
        const photos = json.photos.photo
        const formattedData = formatNewData(photos)
        this.setState({photos: formattedData})
        console.log('parsed json', json.photos.photo)
        console.log('formattedData', formattedData)
        resolve(this.state.photos)
      }).catch((ex) => new Error('parsing failed', ex))
    })
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  render() {
    const { photos, currentPage, photosPerPage } = this.state

    // Logic for displaying photos
    const indexOfLastPhoto = currentPage * photosPerPage
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto)


    // Logic for displaying page numbers
    const pageNumbers = []
    const numberOfPages = Math.ceil(photos.length / photosPerPage)
    for (let i = 1; i <= numberOfPages; i++) {
      pageNumbers.push(i)
    }

    return (
      <div id="main"   className="u-full-width u-max-full-width" >
        <div className="photo-gallery">
          <div id="container" className="section">
            <ul id="content">
            {
              currentPhotos.map((photo, i) => {
                return (
                  <li className="img-container" key={i}>
                    <img src={photo} />
                  </li>
                )
              })
              }
            </ul>
          </div>
        </div>
        <div id="page-numbers" className="row u-full-width u-max-full-width">
          {
            pageNumbers.map(number => {
              return (
                <div
                  className="page-number button"
                  key={number}
                  id={number}
                  onClick={this.handleClick}>
                  {number}
                </div>
              )
            })
          }
        </div>
        <div className="row arrows u-full-width u-max-full-width">
          <div className="back"></div>
          <div className="next"></div>
        </div>
      </div>
    )
  }
}

export default PhotoGallery
