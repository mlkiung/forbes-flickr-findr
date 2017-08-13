import React, { Component } from 'react'

class Lightbox extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Lightbox
        images={[{ src: 'http://example.com/img1.jpg' }, { src: 'http://example.com/img2.jpg' }]}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    )
  }
}

export default Lightbox
