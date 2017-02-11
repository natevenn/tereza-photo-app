import React, { Component } from 'react';
import {Link} from 'react-router';
import '../styles/header.css';
import watermark from '../styles/images/t-watermark3.jpg'

const collections = ["People", "Places", "Life", "Art", "Crested Butte", "About"]

export default class Header extends Component {


  renderList() {
    return collections.map((name) => {
      return <li className="collection">
        <Link
          activeClassName="highlight" to={`${name}`}>
          {name}
        </Link>
      </li>
    })
  }

  render() {
    var className = this.props.activeHeader ? 'activeHeader' : 'hiddenHeader'
    return (
      <div className={className}>
        <img src={watermark} className="header-logo" />
        <div className="navbar">
          <ul>
            {this.renderList()}
          </ul>
        </div>
      </div>
    )
  }
}
