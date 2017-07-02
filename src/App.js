import React, { Component } from 'react';
import Header from './components/Header';
import ImageUploader from './components/UploadImage';
import Pictures from './components/Pictures';
import fb from './firebase';
import './styles/app.css';

const database = fb.database();

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      images: [],
      activeHeader: true
    }

    this.addImage = this.addImage.bind(this);
    this.toggleHeader = this.toggleHeader.bind(this);
  }

  componentWillMount() {
    let params;
    if(this.props.pathname === '/prints') {
      params = '/crested-butte'
    }else if(this.props.pathname === '/') {
      params = '/home'
    } else {
      params = this.props.pathname
    }
    let dbRef = database.ref('pictures' + params)
    dbRef.once('value').then((snapshot) => {
      this.setState({images: snapshot.val()})
    })
  }

  addImage(key, url) {
    this.state.images[key] = { imageUrl: url }
    this.setState({images: this.state.images})
  }

  toggleHeader(condition) {
    this.setState({activeHeader: condition})
  }

  render() {
    return (
      <div className="App">
        {/* <ImageUploader addImage={this.addImage} /> */}
        <Header activeHeader={this.state.activeHeader}/>
        <Pictures images={this.state.images} toggleHeader={this.toggleHeader} />
      </div>
    );
  }
}
