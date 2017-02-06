import React, { Component } from 'react';
import '../styles/Image.css';

var style = {}
export default class Picture extends Component {
  constructor() {
    super()

    this.state = {
      style: {width: 400, height: 266}
    }
  }

  componentWillMount() {
    const img = document.createElement('img');
    img.src = this.props.imageUrl

    if(this.isPortrait(img)) {
      this.state.style = {width: 342, height: 500}
      console.log('is portrait')
      console.log('state', this.state)
    }
  }
  //componentDidMount() {
    //var img = this.img
    //if(this.isPortrait(img)) this.imgWidth.style.width = "300px"
    //}

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
      <div ref={(width) => this.imgWidth = width} style={this.state.style} className="img-div">
        <img ref={(img) => this.img = img}
          className='img' src={this.props.imageUrl}
          role='presentation'
          onClick={this.handleClick.bind(this)}
        />
        {button}
      </div>
    )
  }
}
