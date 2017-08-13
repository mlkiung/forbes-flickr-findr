import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { api_key } from '../config'
// import fetchJsonp from 'fetch-jsonp'
import { getImages } from '../redux/actions'
import Photos from './Photos'


class PhotoGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // searchTerm: this.props.searchTerm,
      currentPage: 1,
      imagesPerPage: 10,
      images: [],
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({
      images: this.props.images
    })
  }

  componentWillReceiveProps(nextProps) {
    this.props.images !== nextProps.images
      ? this.setState({ images: nextProps.images })
      : null
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  render() {
    const { images, currentPage, imagesPerPage } = this.state
    let currentImages = []

    if (images && images !== []) {
      // Logic for displaying images
      const indexOfLastImage = currentPage * imagesPerPage
      const indexOfFirstImage = indexOfLastImage - imagesPerPage
      currentImages = images.slice(indexOfFirstImage, indexOfLastImage)
    }

    // Logic for displaying page numbers
    const pageNumbers = []
    const numberOfPages = Math.ceil(images.length / imagesPerPage)
    for (let i = 1; i <= numberOfPages; i++) {
      pageNumbers.push(i)
    }

    return (
      <div id="main"   className="u-full-width u-max-full-width" >
        <div className="photo-gallery">
          <div id="container" className="section">
            {
              currentImages && currentImages !== []
                ? <Photos currentImages={currentImages} />
                : null
            }
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

const mapStateToProps = state => {
  console.log('state', state)
  return {
    images: state.images.images || []
  }
}

const mapDispatchToProps = dispatch => ({ getImages })

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery)
