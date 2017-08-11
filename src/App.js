import React, { Component } from 'react';
import './index.css'
import PhotoGallery from './components/PhotoGallery'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <PhotoGallery />
      </div>
    );
  }
}

export default App;


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
