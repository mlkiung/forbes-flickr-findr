import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getImages } from '../redux/actions'
import Photos from './Photos'

class PhotoGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      currentPage: 1,
      imagesPerPage: 10,
      images: [],
      imgUrl: '',
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({
      images: this.props.images,
      searchTerm: this.props.searchTerm
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

    // Logic for displaying images
    if (images && images !== []) {
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
                ? <Photos currentImages={currentImages} searchTerm={this.state.searchTerm} />
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
        {
          this.state.searchTerm && this.state.searchTerm !== '' ?
          <div className="row arrows u-full-width u-max-full-width">
            <div className="back"></div>
            <div className="next"></div>
          </div>
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    images: state.images.images || [],
    searchTerm: state.search.searchTerm
  }
}

const mapDispatchToProps = dispatch => ({ getImages })

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery)
