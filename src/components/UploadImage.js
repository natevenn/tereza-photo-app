import React, { Component } from 'react';
import fb from '../firebase';
import '../styles/admin.css';

const storageRef = fb.storage().ref();
const database = fb.database();

export default class ImageUploader extends Component {

  handleSubmit(e) {
    e.preventDefault()
    var file = this.imageUpload.files[0]
    var group = this.groupName.value
    var imageRef = storageRef.child(file.name)
    var dbRef = database.ref('pictures/' + group )
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
    this.groupName.value = "Select a picture group"
  }

  handleSelect() {
    var name = this.groupName.value
    console.log('name', name)
  }

  render() {
    return (
      <div>
        <input ref={(ref) => this.imageUpload = ref} type='file' name='image-file' />
        <input onClick={this.handleSubmit} type='submit' />
      </div>
    )
  }
}

ImageUploader.contextTypes = {
  router: React.PropTypes.object
}
