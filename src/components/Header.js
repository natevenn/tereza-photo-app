import React, { Component } from 'react';
import {Link} from 'react-router';
import '../styles/header.css';
import watermark from '../styles/images/t-watermark3.jpg'

const collections = ["People", "Places", "Life", "Art", "Prints", "About"]

export default class Header extends Component {


  renderList() {
    return collections.map((name) => {
      //let urlName = name === 'Prints' ? 'crested-butte' : name.toLowerCase()
      let urlName = name.toLowerCase()
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
            <li className='collection'>
              <button className='online-store-button'>
                <a
                  className='online-store-link'
                  href="https://www.mijnwebwinkel.nl/winkel/t-photography/c-4028478/products/"
                  target="_blank"
                >
                  Online Store
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
