import React from 'react'

const Image = (props) => {
  const img = props.imgInfo
  // img = img.img
  console.log('img', img.img)
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
            <img
              id={img.modalImg}
              className="modal-content"
              src={props.clickedImg}
              alt={`${props.searchTerm} photo from Flickr`} />
          </div>
        ) : null
      }
    </li>
  )
}

export default Image
