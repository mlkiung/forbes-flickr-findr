import React from 'react'

const Image = (props) => {
  const img = props.imgInfo
  // img = img.img
  console.log('img', img.img)

  const styles = {
    background: `url(${props.clickedImg}) center center / contain no-repeat`
  }
  return (
    <li className="img-container" key={img.photo}>
      <button onClick={props.handleClick}>
        <img
          className="my-img"
          src={img.photo}
          name={img.photo}
          alt={img.photo}
          id={`${img.photo}---${img.i}`} />
      </button>
      {
        props && props.showImgModal ? (
          <div className="modal imgModal" id={img.modal}>
            <span
              className="close"
              onClick={props.closeModal}>&times;</span>
            <div id={img.modalImg} className="modal-content" style={styles}></div>
          </div>
        ) : null
      }
    </li>
  )
}

export default Image
