import React from 'react';
import './App.css';
import firebaseInit from './firebase';
import Home from './home';
import Login from './login.js';
import 'firebase/database';


class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

componentDidMount() {
  this.authListener();
}

authListener() {
  firebaseInit.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      this.setState({ user });
      localStorage.setItem('user', user.uid);
    } else {
      this.setState({ user: null });
      localStorage.removeItem( 'user' );
    }
  });
}
  render() {
  return (
    <div>{this.state.user ? (<Home/>) : (<Login/>)}</div>
  );
}
}

export default App;
