import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import logo from '../../assets/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>HELLO REACT</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <p className="App-intro">
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </p>
      </div>
    );
  }
}

export default App;
