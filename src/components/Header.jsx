import React, { Component } from 'react'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  onSearchChange(event) {
    event.preventDefault()
    this.setState({
      searchTerm: event.target.value
    })
  }

  onSearchSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="header">
        <div className="container u-full-width u-max-full-width">
          <div className="row">
            <div className="title six columns">
              <h1 className="logo">Flickr Findr</h1>
            </div>
            <div className="search six columns">
              <label htmlFor="search-flickr">Search Flickr</label>
              <input
                className="u-full-width"
                type="text"
                placeholder="Puppies?"
                id="search-flickr"
                value={this.state.searchTerm}
                onChange={this.onSearchChange}
                onSubmit={this.onSearchSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
