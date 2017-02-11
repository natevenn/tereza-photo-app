import React, { Component } from 'react';
import '../styles/Image.css';

var style = {}
export default class Picture extends Component {
  constructor() {
    super()

    this.state = {
      style: {width: 0.83, height: 0.67}
    }
  }
      //style: {width: 353, height: 236}

  componentWillMount() {
    const img = document.createElement('img');
    img.src = this.props.imageUrl
    img.onload = () => {
      if(this.isPortrait(img)) {
        this.setState({style: {width: 236, height: 353}})
      }
    }
  }

  isPortrait(img) {
    var w = img.naturalWidth || img.width
    var h = img.naturalHeight || img.height
    return (h > w)
  }

  handleClick() {
    var key = this.props.imgKey
    this.props.handlePictureClick(key)
  }

  handleDelete() {
    this.props.deleteImage(this.props.imageId)
  }

  render() {
    if(this.props.username && this.props.userToken) {
      var button = <a className='deleteImage' onClick={this.handleDelete.bind(this)}>X</a>
    }

    return (
      <div className="img-div">
        <img ref={(img) => this.img = img}
          style={this.state.style}
          className='img' src={this.props.imageUrl}
          role='presentation'
          onClick={this.handleClick.bind(this)}
        />
        {button}
      </div>
    )
  }
}
