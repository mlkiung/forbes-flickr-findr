import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newSearch, getImages } from '../redux/actions'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      mobile: false,
    }

    this.onSearchChange = this.onSearchChange.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  componentDidMount() {
    const mediaQuery = window.matchMedia("(min-width: 760px)").matches
    console.log('media', mediaQuery)
    mediaQuery ? this.setState({ mobile: true }) : this.setState({ mobile: false })
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
              {
                this.state.mobile
                  ? null
                  : <button className="browser-button" type="submit" onClick={this.onSearchSubmit}>Search</button>
              }
              <input
                type="text"
                placeholder="Puppies?"
                id="search-flickr"
                value={this.state.searchTerm}
                onChange={this.onSearchChange}
                // onClick={this.onSearchSubmit}
                // onKeyDown={this.onSearchKeydown}
              />
              {
                this.state.mobile
                  ? <button className="mobile-button" type="submit" onClick={this.onSearchSubmit}>Search</button>
                  : null
              }
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
