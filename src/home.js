import React, { Component } from 'react';
import firebaseInit from './firebase.js';
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    firebaseInit.auth().signOut();
  }

  render() {
    return (
      <body className="home-section">
      <p className="home-title">Oh my notes!!</p>

      </body>
    );
  }
}

export default Home;
