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

    this.onSearchChange = this.onSearchChange.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  componentDidMount() {
    const mediaQuery = window.matchMedia("(min-width: 1200px)").matches
    console.log('media', mediaQuery)
    mediaQuery ? this.setState({ mobile: false }) : this.setState({ mobile: true })
    this.state.searchTerm === '' ? this.setState({ emptyPage: true }) : this.setState({ emptyPage: false })
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
    this.setState({ emptyPage: false, searchTerm: '' })
    console.log(this.state, this.props)
  }

  render() {
    let searchClassName = this.state.emptyPage ? 'search-false' : 'search-true'
    console.log(searchClassName)
    return (
      <div className={`header ${searchClassName}`}>
        <div className="container u-full-width u-max-full-width">
          <div className="row">
            <div className="title six columns">
              <h1 className="logo">Flickr Findr</h1>
            </div>
            <div className={`search six columns`}>
              <form>
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
                onChange={this.onSearchChange}/>
              {
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
