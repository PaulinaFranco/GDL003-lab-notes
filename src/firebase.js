import firebase from 'firebase';

const config = {  apiKey: "AIzaSyCFJ1W1hvyz8lkgG9xiqlo0HN9eI4eJe8I",
   authDomain: "omnotes-8476a.firebaseapp.com",
   databaseURL: "https://omnotes-8476a.firebaseio.com",
   projectId: "omnotes-8476a",
   storageBucket: "omnotes-8476a.appspot.com",
   messagingSenderId: "760338025745",
   appId: "1:760338025745:web:c837756c56f9a18c9350b0"
};

const firebaseInit = firebase.initializeApp(config);
export default firebaseInit;
