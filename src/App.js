import React, { Component } from 'react';
import './css/normalize.css'
import './css/skeleton.css'
import PhotoGallery from './components/PhotoGallery'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Images</h2>
        <PhotoGallery />
      </div>
    );
  }
}

export default App;
