import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './routes';
import './normalize.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
