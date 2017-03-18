import React, { Component } from 'react';
import '../styles/Image.css';

var style = {}
export default class Picture extends Component {
  constructor() {
    super()

    this.state = {
      className: 'img-landscape'
    }
  }

  componentWillMount() {
    const img = document.createElement('img');
    img.src = this.props.imageUrl
    img.onload = () => {
      if(this.isPortrait(img)) {
        //this.setState({style: {width: 236, height: 353}})
        this.setState({className: 'img-portrait'})
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
    //if(this.props.username && this.props.userToken) {
      var button = <a className='deleteImage' onClick={this.handleDelete.bind(this)}>X</a>
    //}

    return (
      <div className="img-div">
        <img ref={(img) => this.img = img}
          className={this.state.className} src={this.props.imageUrl}
          role='presentation'
          onClick={this.handleClick.bind(this)}
        />
        {button}
      </div>
    )
  }
}
