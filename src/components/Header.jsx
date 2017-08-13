import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newSearch, getImages } from '../redux/actions'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  onSearchChange(event) {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({
      searchTerm: event.target.value
    })
  }

  onSearchSubmit(event) {
    event.preventDefault()
    this.props.newSearch(this.state.searchTerm)
    this.props.getImages(this.state.searchTerm)
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
                type="text"
                placeholder="Puppies?"
                id="search-flickr"
                value={this.state.searchTerm}
                onChange={this.onSearchChange}
                // onClick={this.onSearchSubmit}
                // onKeyDown={this.onSearchKeydown}
              />
              <button type="submit" onClick={this.onSearchSubmit}>Search</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({ newSearch, getImages })

export default connect(mapStateToProps, mapDispatchToProps)(Header)
