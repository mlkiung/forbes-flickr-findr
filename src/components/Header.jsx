import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newSearch, getImages } from '../redux/actions'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      mobile: false,
      emptyPage: true,
    }
  }

  componentDidMount() {
    const mediaQuery = window.matchMedia("(min-width: 1200px)").matches
    mediaQuery ? this.setState({ mobile: false }) : this.setState({ mobile: true })
    this.state.searchTerm === '' ? this.setState({ emptyPage: true }) : this.setState({ emptyPage: false })
  }

  onSearchChange = (e) => {
    e.preventDefault()
    this.setState({
      searchTerm: e.target.value
    })
  }

  onSearchSubmit = (e) => {
    e.preventDefault()
    this.props.newSearch(this.state.searchTerm)
    this.props.getImages(this.state.searchTerm)
    this.setState({ emptyPage: false, searchTerm: '' })
  }

  // Brings the user back to the landing page
  handleReset = e => {
    e.preventDefault()
    this.setState({ searchTerm: '', emptyPage: true })
    window.location.reload()
  }

  render() {
    let searchClassName = this.state.emptyPage ? 'search-false' : 'search-true'
    return (
      <div className={`header ${searchClassName}`}>
        <div className="container u-full-width u-max-full-width">
          <div className="row">
            <div className="title six columns">
              <button onClick={this.handleReset}>
                <h1 className="logo">Flickr Findr</h1>
              </button>
            </div>
            <div className={`search six columns`}>
              <form>
              <label htmlFor="search-flickr">Search Flickr</label>
              {
                // if the user is on a desktop, this button will render
                this.state.mobile
                  ? null
                  : <button className="browser-button" type="submit" onClick={this.onSearchSubmit}>Search</button>
              }
              <input
                type="text"
                placeholder="Puppies..."
                id="search-flickr"
                value={this.state.searchTerm}
                onChange={this.onSearchChange}/>
              {
                // if the user is on a mobile device, this button will render
                this.state.mobile
                  ? <button className="mobile-button" type="submit" onClick={this.onSearchSubmit}>Search</button>
                  : null
                }
                </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mstp = (state) => ({})
const mdtp = (dispatch) => ({ newSearch, getImages })

export default connect(mstp, mdtp)(Header)
