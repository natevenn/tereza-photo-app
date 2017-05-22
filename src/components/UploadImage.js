import React, { Component } from 'react';
import fb from '../firebase';
import '../styles/admin.css';

const storageRef = fb.storage().ref();
const database = fb.database();

export default class ImageUploader extends Component {
  constructor() {
    super()
    this.state = {
      route: window.location.pathname
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    var params;
    var file = this.imageUpload.files[0]
    if(this.state.route === '/') {
      params = '/home'
    }else if(this.state.route === 'prints') {
      params = 'crested-butte'
    }else{
      params = this.state.route
    }
    //var params = this.state.route === '/' ? '/home' : this.state.route
    var imageRef = storageRef.child(file.name)
    var dbRef = database.ref('pictures' + params )
    imageRef.put(file).then((snapshot) => {
      var url = snapshot.a.downloadURLs[0]
      var newImageRef = dbRef.push()
      var newImageRefKey = dbRef.push().key
      newImageRef.set({
        imageUrl: url
      })
      this.props.addImage(newImageRefKey, url)
    })

    this.imageUpload.value = ""
  }

  render() {
    return (
      <div>
        <input ref={(ref) => this.imageUpload = ref} type='file' name='image-file' />
        <input onClick={this.handleSubmit.bind(this)} type='submit' />
      </div>
    )
  }
}

ImageUploader.contextTypes = {
  router: React.PropTypes.object.isRequired
}
