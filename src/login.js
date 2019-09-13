import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebaseInit from './firebase';



class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
  //  this.userId = this.userId.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

handleChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}



login(e) {
  e.preventDefault();
  firebaseInit.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
  }).catch((error) => {
    console.log(error);
  });
  }

  signup(e){
    e.preventDefault();
   firebaseInit.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
   }).then((u)=>{console.log(u)})
   .catch((error) => {
       console.log(error);
     })
  }

  render() {
    return (
      <main>
       <div className="split right splitHalf">
        <div className="signForm centered">
          <form>
            <div className="form-group">
               <p>Email</p>
               <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>

            <div className="form-group">
              <p>Password</p>
              <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <br />

            <div className="form-group">
              <button type="submit" onClick={this.login} className="btn btn-primary form-control">Login</button>
              <button onClick={this.signup} className="btn btn-success form-control">Signup</button>
            </div>
        </form>
      </div>
      </div>

      <div className="split left splitHalf">
        <div className="logo centered">
          <h1>Oh, <br /> my notes!!!</h1>
          <p>Rope's end stern deadlights gabion belay cable yardarm Cat o'nine tails. </p>
          <p>Six pounders cutlass deadlights Cat o'nine tails pink hardtack crack Jennys tea cup trysail. Cat o'nine tails blow the man down pressgang wherry. </p>
        </div>
      </div>
    </main>
    );
  }
}

export default Login;
