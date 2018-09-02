import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from 'theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './routes';
import './normalize.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Navbar />
            <Routes />
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
