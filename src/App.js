import React, { Component } from 'react';
// import { connect } from 'react-redux'
import './index.css'
import PhotoGallery from './components/PhotoGallery'
import Header from './components/Header'

const App = (props) => {
  // let hasASearchHappened = props.searchTerm !== ''
  //   ? 'search-true'
  //   : 'search-false'
  return (
    <div className="app">
      <Header />
      <PhotoGallery />
    </div>
  );
}

// const mstp = state => ({ searchTerm: state.searchTerm || '' })

// export default connect(mstp)(App)

export default App


/*

<div className="app">
  <div className="header">
    <div className="container">
      <div className="row">
        <div className="title six columns"></div>
        <div className="search six columns"></div>
      </div>
    </div>
  </div>
  <div className="main">
    <div className="photo-gallery"></div>
    <div className="pagination"></div>
  </div>
</div>

*/
