import React, { Component } from 'react';
import fire from './config/fire'
import Login from './Login.js';
import Register from './Register.js';
import Home from './Home.js';

class Sign extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.user ? ( <Home /> ) : ( <Login /> ) }
      </div>
    );
  }
}

export default Sign;
