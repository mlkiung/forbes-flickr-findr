import React, { Component } from 'react'
import { api_key } from '../config'
import fetchJsonp from 'fetch-jsonp'
import formatNewData from '../utils'


class PhotoGallery extends Component {
  constructor() {
    super()

    this.state = {
      photos: [],
      searchterm: 'cows',
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

    const renderPhotos = currentPhotos.map((photo, i) => {
      return (
        <div className="five columns img-container" key={i}>
          <img src={photo}/>
        </div>
      )
    })

    // Logic for displaying page numbers
    const pageNumbers = []
    const numberOfPages = Math.ceil(photos.length / photosPerPage)
    for (let i = 1; i <= numberOfPages; i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <div className="one column page-number" key={number} id={number} onClick={this.handleClick}>
          {number}
        </div>
      )
    })

    return (
      <div className="container">
        <div className="row">{renderPhotos}</div>
        <div id="page-numbers" className="row">{renderPageNumbers}</div>
      </div>
    )
  }
}

export default PhotoGallery
