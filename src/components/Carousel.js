import React, {Component} from 'react';
import '../styles/carousel.css';

export default class Carousel extends Component {
  render() {
    var leftArrow = "<"
    var rightArrow = ">"
    var exitButton = "X"
    return (
      <div className="outer-carousel-div">
        <div className="carousel-div">
          <img className="carousel-img" src={this.props.imageUrl} role='presentation' />
        </div>
        <a onClick={this.props.getLastImage}>
          <div className="left-arrow">
          {leftArrow}
        </div>
        </a>
        <a onClick={this.props.getNextImage}>
          <div className="right-arrow">
            {rightArrow}
          </div>
      </a>
      <a onClick={this.props.exitCarousel}>
        <div className="exitButton">
          {exitButton}
        </div>
        </a>
      </div>
    )
  }
}
