import React from 'react'

class Image extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
    }
  }

  // handleImgLoad tests whether or not the preloaded img has finished
  handleImgLoad = () => {
    this.setState({ loaded: true })
  }

  render() {
    const img = this.props.imgInfo
    const styles = {
      modalStyle: {
        background: `url(${this.props.clickedImg}) center center / contain no-repeat`
      },
      imgStyle: {
        display: 'none'
      }
    }

    return (
      <li className="img-container" key={img.photo}>
        <button onClick={this.props.handleClick}>
          <img
            className="my-img"
            src={img.photo}
            name={img.photo}
            alt={img.photo}
            id={`${img.photo}---${img.i}`} />
        </button>
        {
          this.props.showImgModal ? (
            <div className="modal imgModal" id={img.modal}>
              <span
                className="close"
                onClick={this.props.closeModal}>&times;</span>
              {
                this.state.loaded ?
                <div id={img.modalImg} className="modal-content" style={styles.modalStyle}></div> : null
              }
              {/*preloading img; when it's loaded, display the modal img */}
              <img src={this.props.clickedImg} style={styles.imgStyle} alt="" onLoad={this.handleImgLoad} />
            </div>
          ) : null
        }
      </li>
    )
  }
}

export default Image
