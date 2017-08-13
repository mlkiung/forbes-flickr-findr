import React from 'react'

const Photos = (props) => {
  return (
    <ul id="content">
      {
        props.currentImages && props.currentImages.map((photo, i) => {
          return (
            <li className="img-container" key={i}>
              <img src={photo} />
            </li>
          )
        })
      }
    </ul>
  )
}

export default Photos
