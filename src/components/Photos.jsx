import React, { Component } from 'react'
import Image from './Image'

class Photos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showImgModal: false,
      clickedImg: '',
      currentImages: this.props.currentImages,
    }
  }

  // componentWillMount() {
  //   if (this.props.currentImages !== []) {
  //     this.setState({currentImages: this.props.currentImages})
  //   }
  // }

  componentDidMount() {
    this.setState({
      // currentImages: this.props.currentImages,
      searchTerm: this.props.searchTerm
    })
  }

  componentWillReceiveProps(np) {
    this.props.currentImages !== np.currentImages
      ? this.setState({ currentImages: np.currentImages })
      : null
  }

  handleClick = event => {
    event.preventDefault()
    const imgInfo = event.target.id.split('---')
    const [url, i] = imgInfo

    this.setState({
      showImgModal: true,
      clickedImg: url
    })
  }

  closeModal = event => {
    event.preventDefault()
    this.setState({
      showImgModal: false,
      clickedImg: ''
    })
  }

  render() {
    return (
      <ul id="content">
        {
          this.props.currentImages && this.props.currentImages.map((photo, i) => {
            const img = `img${photo}`
            const modal = `modal${i}`
            const caption = `caption${i}`
            const modalImg = `img${i}`
            const imgInfo = { img, modal, caption, modalImg, photo, i }
            // console.log(imgInfo)
            return (
              <Image imgInfo={imgInfo} handleClick={this.handleClick} closeModal={this.closeModal} showImgModal={this.state.showImgModal} clickedImg={this.state.clickedImg} />
            )
          })
        }
      </ul>
    )
  }
}


export default Photos
