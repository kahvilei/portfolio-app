import React, { Component } from 'react';
import { Container, NavBar } from './components';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return ( 
      <div className="App">   
          <Container style={{display:'block'}}/>
          <NavBar/>
      </div>
    );
  }
}


export default App;
