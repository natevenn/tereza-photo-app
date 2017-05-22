import React, { Component } from 'react';
import {Link} from 'react-router';
import '../styles/header.css';
import watermark from '../styles/images/t-watermark3.jpg'

const collections = ["People", "Places", "Life", "Art", "Prints", "About"]

export default class Header extends Component {


  renderList() {
    return collections.map((name) => {
      let urlName = name === 'Prints' ? 'Prints' : name.toLowerCase()
      return <li className="collection">
        <Link
          activeClassName="highlight" to={`${urlName}`}>
          {name}
        </Link>
      </li>
    })
  }

  render() {
    var className = this.props.activeHeader ? 'activeHeader' : 'hiddenHeader'
    return (
      <div className={className}>
        <div className="logo-div">
        <a href='/'>
          <img src={watermark} className="header-logo" />
        </a>
      </div>
        <div className='navbar'>
          <ul>
            {this.renderList()}
          </ul>
        </div>
      </div>
    )
  }
}
