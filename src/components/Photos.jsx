import React, { Component } from 'react'
import Image from './Image'

class Photos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showImgModal: false,
      clickedImg: '',
      currentImages: [],
    }
  }

  componentWillMount = () => {
    if (this.props.currentImages !== []) {
      this.setState({currentImages: this.props.currentImages})
    }
  }

  componentWillReceiveProps= np => {
    if (this.props.currentImages !== np.currentImages) {
      this.setState({ currentImages: np.currentImages })
    }
  }

  handleClick = e => {
    e.preventDefault()
    // e.target.id contains url and index number of clicked img
    const imgInfo = e.target.id.split('---')
    const [url] = imgInfo

    this.setState({
      clickedImg: url,
      showImgModal: true
    })
  }

  closeModal = e => {
    e.preventDefault()
    this.setState({
      showImgModal: false,
      clickedImg: ''
    })
  }

  render() {
    return (
      <ul id="content">
        {
          this.state.currentImages && this.state.currentImages.map((photo, i) => {
            const img = `img${photo}`
            const modal = `modal${i}`
            const caption = `caption${i}`
            const modalImg = `img${i}`
            const imgInfo = { img, modal, caption, modalImg, photo, i }
            return (
              <Image key={`Image${i}`} imgInfo={imgInfo} handleClick={this.handleClick} closeModal={this.closeModal} showImgModal={this.state.showImgModal} clickedImg={this.state.clickedImg} />
            )
          })
        }
      </ul>
    )
  }
}


export default Photos
