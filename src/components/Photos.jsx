import React, { Component } from 'react'

class Photos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showImgModal: false,
      clickedImg: '',
    }
  }

  handleClick = event => {
    event.preventDefault()
    const imgInfo = event.target.id.split('---')
    const [url, i] = imgInfo

    this.setState({ showImgModal: true, clickedImg: url })
  }

  closeModal = event => {
    event.preventDefault()
    this.setState({ showImgModal: false, clickedImg: '' })
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
            return (
              <li className="img-container" key={photo}>
                <button onClick={this.handleClick}>
                  <img
                    className="my-img"
                    src={photo}
                    name={photo}
                    alt={photo}
                    id={`${photo}---${i}`}/>
                </button>
                {
                  this.state.showImgModal ? (
                    <div className="modal imgModal" id={modal}>
                        <span
                          className="close"
                          onClick={this.closeModal}>&times;</span>
                        <img
                          id={modalImg}
                          className="modal-content"
                          src={this.state.clickedImg}
                          alt={`${this.props.searchTerm} photo from Flickr`} />
                        <div id={caption} className="caption"></div>
                      </div>
                    ) : null
                }
              </li>
            )
          })
        }
      </ul>
    )
  }
}


export default Photos
