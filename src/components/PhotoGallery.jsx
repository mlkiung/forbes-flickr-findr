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
  }

  componentWillMount= () => {
    if (this.props.images !== []) this.setState({images: this.props.images})
  }

  componentWillReceiveProps = nextProps =>  {
    if (this.props.images !== nextProps.images) {
      this.setState({ images: nextProps.images })
    }

    if (this.props.searchTerm !== nextProps.searchTerm) {
      this.setState({ searchTerm: nextProps.searchTerm })
    }
  }

  handleClick = e => {
    this.setState({
      currentPage: Number(e.target.id)
    })
  }

  // logic for arrow functionality
  // arrows are displaying in lieu of pg numbers on mobile devices and small screens
  handleClickArrow = e => {
    let newCurrentPage = this.state.currentPage
    let numberOfPages = Math.ceil(this.state.images.length / this.state.imagesPerPage)

    if (e.target.id === 'back') {
      if (newCurrentPage === 1) {
        newCurrentPage = numberOfPages
      }
      else {
        newCurrentPage--
      }
      this.setState({ currentPage: newCurrentPage})
    }
    else {
      if (newCurrentPage === numberOfPages) {
        newCurrentPage = 1
      }
      else {
        newCurrentPage++
      }
      this.setState({ currentPage: newCurrentPage })
    }
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
        {
          // only display page numbers/arrows if a search has happened
          this.state.searchTerm && this.state.searchTerm !== '' ?
            <div className="pagination-container">
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
                <button onClick={this.handleClickArrow}><div id="back" className="back"></div></button>
                <button onClick={this.handleClickArrow}><div id="next" className="next"></div></button>
              </div>
            </div>
          : null
        }
      </div>
    )
  }
}

const mstp = state => {
  return {
    images: state.images.images || [],
    searchTerm: state.search.searchTerm
  }
}

const mdtp = dispatch => ({ getImages })

export default connect(mstp, mdtp)(PhotoGallery)
