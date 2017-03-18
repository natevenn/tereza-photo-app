import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC9higEz5ixX4xa_9_mrTgkxk45t0vJBlM",
  authDomain: "tereza-photo-website.firebaseapp.com",
  databaseURL: "https://tereza-photo-website.firebaseio.com",
  storageBucket: "tereza-photo-website.appspot.com",
};

const fb = firebase.initializeApp(config)

export default fb;

