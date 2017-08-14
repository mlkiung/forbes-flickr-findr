import React from 'react'

const Image = (props) => {
  const img = props.imgInfo
  const styles = {
    modalStyle: {
      background: `url(${props.clickedImg}) center center / contain no-repeat`
    },
    imgStyle: {
      display: 'none'
    }
  }

  return (
    <li className="img-container" key={img.photo}>
      <button onClick={props.handleClick}>
        <img
          className="my-img"
          src={img.photo}
          name={img.photo}
          alt={img.photo}
          id={`${img.photo}---${img.i}`}
          onLoad={() => {console.log('image loaded')}} />
      </button>
      {
        props.showImgModal ? (
          <div className="modal imgModal" id={img.modal}>
            <span
              className="close"
              onClick={props.closeModal}>&times;</span>
            <div id={img.modalImg} className="modal-content" style={styles.modalStyle}></div>
            <img src={img.modalImg} style={styles.imgStyle} alt="" />
          </div>
        ) : null
      }
    </li>
  )
}

export default Image
