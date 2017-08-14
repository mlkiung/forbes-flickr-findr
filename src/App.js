import React, { Component } from 'react';
import './index.css'
import PhotoGallery from './components/PhotoGallery'
import Header from './components/Header'

const App = (props) => {
   return (
    <div className="app">
      <Header />
      <PhotoGallery />
    </div>
  );
}

export default App
